"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import Close from "@mui/icons-material/Close";

/** Renders plain text from a UI message (AI SDK v6 uses `parts`, not `content`). */
function messageText(message) {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

/**
 * Makes assistant replies easier to scan: each bullet / numbered item on its own line.
 * Handles common model patterns (inline "* ..." lists, "1. ... 2. ...", dashes).
 */
function formatAssistantMessage(text) {
  if (!text) return "";
  let t = text.replace(/\r\n/g, "\n");

  // Intro line ending with colon, then first asterisk bullet
  t = t.replace(/:\s*\*\s+/g, ":\n* ");

  // Inline bullets separated by `"... " * "` or similar (quote → next asterisk item)
  t = t.replace(/"\s+\*\s+/g, '"\n* ');

  // Bullet after sentence end: "...end. * Item" or "...end? * Item"
  t = t.replace(/([.!?])\s+\*\s+/g, "$1\n* ");

  // Dash bullets: newline before " - " when it clearly starts a new phrase (after punctuation / newline)
  t = t.replace(/([.!?:\n])\s+-\s+(?=\S)/g, "$1\n- ");

  // Numbered lists: " ... 2. Next" (1–2 digit index, then word or quote)
  t = t.replace(/\s+(\d{1,2})\.\s+(?=["'A-Z])/g, "\n$1. ");

  // Collapse excessive blank lines
  t = t.replace(/\n{3,}/g, "\n\n");

  return t.trimEnd();
}

function bubbleDisplayText(message) {
  const raw = messageText(message);
  if (message.role !== "assistant") return raw;
  return formatAssistantMessage(raw);
}

/**
 * DefaultChatTransport throws Error with message = raw response body on non-OK (e.g. 429 JSON).
 */
function isRateLimitError(error) {
  if (!error?.message) return false;
  const raw = error.message;
  if (/rate limit exceeded/i.test(raw)) return true;
  try {
    const parsed = JSON.parse(raw);
    return typeof parsed?.error === "string" && /rate limit/i.test(parsed.error);
  } catch {
    return false;
  }
}

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

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
    const onKeyDown = (e) => {
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
          className="fixed bottom-6 right-4 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 md:right-6"
          aria-label="Open chat with digital clone"
          aria-expanded={open}
        >
          <ChatBubbleOutline sx={{ fontSize: 28 }} />
        </button>
      )}

      {/* Backdrop + panel */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-end p-4 md:items-end md:justify-end md:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
            aria-label="Close chat"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-chat-title"
            className="relative flex max-h-[min(85vh,560px)] w-full max-w-md flex-col rounded-xl border border-gray-200 bg-white p-4 text-black shadow-2xl transition-opacity duration-200"
          >
            <div className="mb-3 flex shrink-0 items-center justify-between border-b border-gray-100 pb-3">
              <h2 id="portfolio-chat-title" className="text-lg font-semibold">
                Chat with my Digital Clone
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close"
              >
                <Close />
              </button>
            </div>

            {rateLimitReached && (
              <div
                className="mb-3 shrink-0 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950"
                role="alert"
              >
                <p className="font-medium">You&apos;ve hit the message limit for now</p>
                <p className="mt-1 leading-relaxed text-amber-900/90">
                  To keep this chat fast and fair for everyone, you can send a handful of
                  messages per minute. Give it a short pause—about a minute—and you&apos;ll
                  be good to go again.
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

            <div className="min-h-0 flex-1 overflow-y-auto border-b border-gray-100 pb-3">
              {messages.length === 0 && (
                <p className="text-gray-500 italic">
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
                    className={`inline-block max-w-[85%] break-words rounded-lg p-2 text-left whitespace-pre-wrap leading-relaxed ${
                      m.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {bubbleDisplayText(m)}
                  </span>
                </div>
              ))}
              {isBusy && (
                <div className="text-gray-400 text-sm mt-2">Thinking...</div>
              )}
            </div>

            <form
              onSubmit={(e) => {
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
                placeholder="e.g., What did you do at PSEG?"
                className="flex-1 min-w-0 rounded border border-gray-300 p-2 text-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                disabled={isBusy || rateLimitReached}
              />
              <button
                type="submit"
                disabled={isBusy || rateLimitReached}
                className="shrink-0 rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
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
