
export default function Education() {
  return (
    <div className="w-full p-20 text-left bg-cyan-900 text-gray-300 education-container">
      <h1 className="text-3xl mb-4 text-white">My Education</h1>
      <ol class="relative border-s border-gray-200 dark:border-white-700">
        <li class="mb-10 ms-4 education-box">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white-900 dark:bg-white-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">September 2023-Present</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Rutgers University-New Brunswick</h3>
          <div className="flex flex-row mb-4 text-sm">
            <h4 className="mr-2">BSc Degree</h4>
          </div>
          <div className="mb-2">
            <h4 className=""><b>Major:</b> Computer Science</h4>
            <h4 className=""><b>Second Major:</b> Data Science</h4>
            <h4><b>Minor:</b> Business Adminstration</h4>
          </div>
          <div className="">
            <h4 className=""><b>Relevant Coursework: </b>Calculus 1, Data Structures, Data 101, Intro to Linear Algebra, Intro to Financial Accounting</h4>
            <h4 className=""><b>Awards & Activities: </b>Dean’s List, Rutgers Mobile App Dev (RU MAD), Rutgers Business Information Technology Society (RU BITS), Rutgers Competitive Programming</h4>
          </div>
        </li>
        <li class="mb-10 ms-4 education-box">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white-900 dark:bg-white-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">September 2019 - June 2023</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">West-Windsor Plainsboro High School South</h3>
          <div className="flex flex-row mb-4 text-sm">
            <h4 className="mr-2">High School Degree</h4>
          </div>
          <div className="">
            <h4 className=""><b>Relevant Coursework: </b>AP Computer Science A, Advanced Topics Computer Science (Data Structures), AP
            Microeconomics, AP Spanish Language and Culture - Seal of Biliteracy Recipient</h4>
          </div>
        </li>
      </ol>
    </div>
  );
}