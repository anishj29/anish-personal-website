import React from 'react';

export default function Intro() {
  return (
    <div className='footer flex justify-center bg-white mt-40 pb-40 w-full experience-container'>
      <div className="text-black text-center flex flex-row mt-40">
        <div className="flex text-left flex-col mr-10">
          <h1 className="">Name: Anish Jha</h1>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/5" />
          <h4 className=""> Email: <a className="text-sky-600	" target='_blank'
            rel='noopener noreferrer' href="mailto:anishj2900@gmail.com">anishj2900@gmail.com</a> </h4>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/5" />
          <h4 className="">Phone: 609-454-1784</h4>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/5" />
          <h4 className=""> LinkedIn:
            <a className="text-sky-600	" target='_blank'
              rel='noopener noreferrer' href="http://linkedin.com/in/anishjha1">linkedin.com/in/anishjha1</a>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/5" />
          </h4>
          <h4 className=""> GitHub: <a className="text-sky-600	" target='_blank'
            rel='noopener noreferrer' href="http://github.com/anishj29">github.com/anishj29</a> </h4>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/5" />
        </div>
        <div className="align-middle text-left">
          <p>I’m a Computer Science and Data Science student at Rutgers, with a minor in Business Administration, and posessing strong skills in Python, JavaScript, Vue.js, and React.js. My experience includes working as a Frontend Web Developer at Movement Labs, where I enhanced the UI for blockchain partners, and as Chief Technology Officer at Vact, leading the development of mobile app features. In addition, I’ve worked on client projects through Fiverr, creating coding prep platforms and AI-integrated book catalogs.</p>
          <p className="mt-2">Outside of my technical work, I’m actively involved in extracurriculars like Rutgers' Mobile App Development club and the Competitive Programming group, both of which help sharpen my problem-solving abilities. I’m also passionate about hackathons, and my team even won first place at the 2024 HackRU Hackathon. In my free time, I love diving into personal projects and always look for new ways to grow my technical skills.</p>
        </div>
      </div>
    </div>
  );
}