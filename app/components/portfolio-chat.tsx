"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";

/** Renders plain text from a UI message (AI SDK v6 uses `parts`, not `content`). */
function messageText(message: UIMessage): string {
  return message.parts
    .filter(
      (part): part is Extract<UIMessage["parts"][number], { type: "text" }> =>
        part.type === "text"
    )
    .map((part) => part.text)
    .join("");
}

function formatAssistantMessage(text: string): string {
  if (!text) return "";
  let t = text.replace(/\r\n/g, "\n");
  t = t.replace(/:\s*\*\s+/g, ":\n* ");
  t = t.replace(/"\s+\*\s+/g, '"\n* ');
  t = t.replace(/([.!?])\s+\*\s+/g, "$1\n* ");
  t = t.replace(/([.!?:\n])\s+-\s+(?=\S)/g, "$1\n- ");
  t = t.replace(/\s+(\d{1,2})\.\s+(?=["'A-Z])/g, "\n$1. ");
  t = t.replace(/\n{3,}/g, "\n\n");
  return t.trimEnd();
}

function bubbleDisplayText(message: UIMessage): string {
  const raw = messageText(message);
  if (message.role !== "assistant") return raw;
  return formatAssistantMessage(raw);
}

function isRateLimitError(error: Error | undefined | null): boolean {
  if (!error?.message) return false;
  const raw = error.message;
  if (/rate limit exceeded/i.test(raw)) return true;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "error" in parsed &&
      typeof (parsed as { error: unknown }).error === "string"
    ) {
      return /rate limit/i.test((parsed as { error: string }).error);
    }
    return false;
  } catch {
    return false;
  }
}

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
  const [input, setInput] = useState("");

  const isBusy = status === "submitted" || status === "streaming";
  const rateLimitReached = Boolean(error && isRateLimitError(error));

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) clearError();
  }, [open, clearError]);

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg transition-colors duration-200 hover:bg-[#32728e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 md:right-6"
          aria-label="Open chat with digital clone"
          aria-expanded={open}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-end p-4 md:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--hero-bg)]/40"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-chat-title"
            className="relative flex max-h-[min(85vh,560px)] w-full max-w-md flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-4 text-[var(--ink)] shadow-xl"
          >
            <div className="mb-3 flex shrink-0 items-center justify-between border-b border-[var(--border)] pb-3">
              <h2
                id="portfolio-chat-title"
                className="font-display text-lg font-medium"
              >
                Chat with my Digital Clone
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--bg)] hover:text-[var(--ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            {rateLimitReached && (
              <div
                className="mb-3 shrink-0 border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950"
                role="alert"
              >
                <p className="font-medium">
                  You&apos;ve hit the message limit for now
                </p>
                <p className="mt-1 leading-relaxed text-amber-900/90">
                  To keep this chat fast and fair for everyone, you can send a
                  handful of messages per minute. Give it a short pause—about a
                  minute—and you&apos;ll be good to go again.
                </p>
                <button
                  type="button"
                  onClick={() => clearError()}
                  className="mt-2 text-sm font-medium text-amber-900 underline decoration-amber-700/60 underline-offset-2 hover:text-amber-950"
                >
                  Dismiss
                </button>
              </div>
            )}

            <div className="min-h-0 flex-1 overflow-y-auto border-b border-[var(--border)] pb-3">
              {messages.length === 0 && (
                <p className="text-sm italic text-[var(--muted)]">
                  Ask me about my experience or projects...
                </p>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`mb-2 ${
                    m.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block max-w-[85%] break-words rounded-md p-2.5 text-left text-sm whitespace-pre-wrap leading-relaxed ${
                      m.role === "user"
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--bg)] text-[var(--ink)]"
                    }`}
                  >
                    {bubbleDisplayText(m)}
                  </span>
                </div>
              ))}
              {isBusy && (
                <div className="mt-2 text-sm text-[var(--muted)]">
                  Thinking...
                </div>
              )}
            </div>

            <form
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (!input.trim() || isBusy || rateLimitReached) return;
                sendMessage({ text: input });
                setInput("");
              }}
              className="mt-3 flex shrink-0 gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., What did you do at Wells Fargo?"
                className="min-w-0 flex-1 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] p-2.5 text-sm text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:bg-[var(--bg)] disabled:text-[var(--muted)]"
                disabled={isBusy || rateLimitReached}
              />
              <button
                type="submit"
                disabled={isBusy || rateLimitReached}
                className="shrink-0 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#32728e] disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
