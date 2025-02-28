import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import Head from "next/head";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const handleWorkScroll = () => {
    router.push("/#work");
  };

  const handleAboutScroll = () => {
    router.push("/#about");
  };

  const handleDownloadResume = () => {
    const pdfPath = "/resume.pdf";
    
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${name.replace(/\s+/g, '_')}_Resume.pdf`; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Sid&apos;s Resume</title>
      </Head>
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header 
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-50 text-black"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm relative`}
            >
              <button
                onClick={handleDownloadResume}
                className={`absolute top-5 right-5 px-4 py-2 rounded-md flex items-center 
                  ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} 
                  text-white transition-colors duration-300`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download Resume
              </button>

              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName1}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate1}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara1}
                  </p>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName2}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate2}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara2}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;