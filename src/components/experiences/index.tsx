"use client";
import Link from "next/link";
import React, { useState } from "react";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("tab1_fanap");

  const handleChangeTab = (e: React.MouseEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "tab1_fanap":
        setActiveTab(e.currentTarget.name);
        break;
      case "tab2_bimer":
        setActiveTab(e.currentTarget.name);
        break;
      case "tab3_shenazh":
        setActiveTab(e.currentTarget.name);
        break;
      case "tab3_graph":
        setActiveTab(e.currentTarget.name);
        break;
      default:
        break;
    }
  };
  return (
    <div className="container w-full mx-4 lg:mx-auto flex flex-col text-white min-h-screen justify-center gap-y-4">
      <span className="w-fit text-sm lg:text-lg uppercase">Experiences</span>
      <div role="tablist" className="tabs">
        <input
          type="radio"
          name="tab1_fanap"
          role="tab"
          onClick={handleChangeTab}
          className={`tab text-white px-0 !w-24 lg:!w-32 rounded-t-sm text-sm lg:text-lg ${
            activeTab === "tab1_fanap"
              ? "bg-zinc-700 text-[#F0F0F0]"
              : "text-[#C4C4C4] bg-transparent"
          }`}
          aria-label="Fanap Co"
        />
        {activeTab === "tab1_fanap" ? (
          <div role="tabpanel" className="tab-content py-6 w-fit h-[450px]">
            <div className="grid grid-cols-2 gap-y-1 lg:gap-y-0 w-full justify-between text-white">
              <span className="w-fit col-span-2 lg:col-span-1 text-sm lg:text-2xl font-light">
                Frontend Developer
              </span>
              <span className="w-fit col-span-2 lg:place-self-end lg:col-span-1 text-sm lg:text-lg font-extralight">
                Oct 2021 - Oct 2022
              </span>
            </div>
            <div className="flex text-xs lg:text-lg w-fit my-1">
              <Link
                href="https://www.fanap.ir"
                target="_blank"
                className="text-[#6CACE4]"
              >
                Fanap Co / IR - Isfahan
              </Link>
            </div>
            <div className="flex text-white text-justify text-xs lg:text-sm pr-4 lg:pr-0 w-full lg:w-5/6 lg:px-0 font-light leading-8">
              <p>
                🚀 My journey kicked off at Fanap Co, where I embarked on a
                thrilling private project. 🛠️ Developing their panel using
                JavaScript, I delved into the intricacies of Axios for seamless
                data fetching. 💻 With Material UI as our trusty UI library, I
                sculpted intuitive interfaces that captivated users. 🌟 This
                experience marked the launchpad of my career, igniting a passion
                for innovation and problem-solving.
              </p>
            </div>
          </div>
        ) : null}

        <input
          type="radio"
          name="tab2_bimer"
          role="tab"
          onClick={handleChangeTab}
          className={`tab text-[#C4C4C4] px-0 rounded-t-sm !w-24 lg:!w-32 text-sm lg:text-lg ${
            activeTab === "tab2_bimer"
              ? "bg-zinc-700 text-[#F0F0F0]"
              : "text-[#C4C4C4] bg-transparent"
          }`}
          aria-label="Bimer Co"
        />
        {activeTab === "tab2_bimer" ? (
          <div role="tabpanel" className="tab-content py-6 w-full h-[450px]">
            <div className="grid place-content-between grid-cols-2 gap-y-1 lg:gap-y-0 w-full text-white">
              <span className="w-fit col-span-2 lg:col-span-1 flex-1 text-sm lg:text-2xl font-light">
                Frontend Developer
              </span>
              <span className="w-fit col-span-2 lg:place-self-end lg:col-span-1 text-xs lg:text-lg font-extralight">
                Oct 2022 - Jun 2023
              </span>
            </div>
            <div className="flex w-fit text-xs lg:text-lg my-1">
              <Link
                href="https://www.bimer.ir"
                target="_blank"
                className="text-[#6CACE4]"
              >
                Bimer.ir / IR - Isfahan
              </Link>
            </div>
            <div className="text-white text-justify text-xs lg:text-sm font-light w-full pr-4 lg:pr-0 lg:px-0 lg:w-5/6 leading-8">
              Skills:
              <ul className="list-disc pl-4">
                <li>TypeScript development</li>
                <li>SWR for caching and data fetching</li>
                <li>Material UI for UI library</li>
                <li>Clean code principles</li>
                <li>Proficiency in Git flow</li>
              </ul>
              <p>
                🚀 At Bimer Co, I soared with TypeScript 🧩, optimizing data
                retrieval using SWR 🚀. Crafting sleek interfaces with Material
                UI 🎨, I championed clean code principles 🧹, ensuring elegance
                and efficiency. 🛠️ Mastering Git flow, I navigated seamlessly
                through projects, 🕵️‍♂️ tackling both admin and client panels with
                finesse. 🌟 Together, these skills fueled a journey of
                innovation and collaboration.
              </p>
            </div>
          </div>
        ) : null}

        <input
          type="radio"
          name="tab3_graph"
          role="tab"
          onClick={handleChangeTab}
          className={`tab text-[#C4C4C4] px-0 rounded-t-sm !w-24 lg:!w-32 text-sm lg:text-lg ${
            activeTab === "tab3_graph"
              ? "bg-zinc-700 text-[#F0F0F0]"
              : "text-[#C4C4C4] bg-transparent"
          }`}
          aria-label="Graph Inc"
        />
        {activeTab === "tab3_graph" ? (
          <div
            role="tabpanel"
            className="tab-content pt-6 pb-12 w-full h-[450px]"
          >
            <div className="grid grid-cols-2 gap-y-1 lg:gap-x-0 w-full justify-between text-white">
              <span className="w-fit col-span-2 lg:col-span-1 text-sm lg:text-2xl font-light">
                Frontend Developer
              </span>
              <span className="w-fit col-span-2 lg:place-self-end lg:col-span-1 text-xs lg:text-lg font-extralight">
                Jun 2023 - Present
              </span>
            </div>
            <div className="flex text-xs lg:text-lg w-fit my-1">
              <Link
                href="https://www.graph-inc.ir"
                target="_blank"
                className="text-[#6CACE4]"
              >
                Graph Inc / IR - Tehran
              </Link>
            </div>
            <div className="text-white text-justify text-xs lg:text-sm font-light leading-8 pr-4 lg:pr-0 lg:px-0  w-full lg:w-5/6">
              Skills:
              <ul className="list-disc pl-4">
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Axios</li>
                <li>TypeScript</li>
                <li>Clean code principles</li>
                <li>Front end security bugs</li>
              </ul>
              <p>
                🛡️ Transitioning to a role at a security company 🕵️, I delved
                into developing Extended Detection and Response (XDR) solutions
                and detecting malware 🦠. My primary focus? The front-end
                Advanced Threat Detection (ATD) panel, where I collaborated with
                security experts to craft a user-friendly interface for threat
                analysis and response. Armed with React.js ⚛️, Redux Toolkit 🧰,
                and TypeScript 🧩, I infused dynamic features to streamline
                threat detection. Embracing clean code principles 🧹 ensured
                code integrity and fortified security standards, all in pursuit
                of safeguarding digital assets against cyber threats.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Experiences;
