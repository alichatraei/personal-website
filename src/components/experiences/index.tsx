"use client";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import experiencesMock from "src/mocks/experiences";
import HtmlReactParser from "html-react-parser";
import { Tabs } from "react-daisyui";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1_fanap");

  const handleChangeTab = (e: MouseEvent<HTMLInputElement>) => {
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
    <section id="experiences" className="container w-full mx-auto px-4 lg:px-0 lg:mx-auto flex flex-col text-white min-h-screen justify-center gap-y-4">
      <span className="w-fit text-sm lg:text-lg uppercase">Experiences</span>
        <Tabs>
          {experiencesMock.map((experience, index: number) => (
            <Tabs.RadioTab
              key={index++}
              className={`text-white px-0 !w-24 lg:!w-32 rounded-t-sm text-sm lg:text-lg ${
                activeTab === experience.name
                  ? "bg-zinc-700 text-[#F0F0F0]"
                  : "text-[#C4C4C4] bg-transparent"
              }`}
              name={experience.name}
              defaultChecked={experience.name === "tab1_fanap"}
              label={experience.label}
              onClick={handleChangeTab}
              contentClassName="tab-content py-6 w-fit h-[500px]"
            >
              {experience.name === activeTab ? (
                <>
                  <div className="grid grid-cols-2 gap-y-1 lg:gap-y-0  justify-between text-white">
                    <span className="w-fit col-span-2 lg:col-span-1 text-sm lg:text-2xl font-light">
                      {experience.jobTitle}
                    </span>
                    <span className="w-fit col-span-2 lg:place-self-end lg:col-span-1 text-sm lg:text-lg font-extralight">
                      {experience.jobDuration}
                    </span>
                  </div>
                  <div className="flex text-xs lg:text-lg w-fit my-1">
                    <Link
                      href={experience.companyLink}
                      target="_blank"
                      className="text-[#6CACE4]"
                    >
                      {experience.companyName}
                    </Link>
                  </div>
                  <div className="flex flex-col text-white text-justify text-xs lg:text-sm lg:leading-8 lg:pr-0 w-full lg:w-5/6 lg:px-0 font-light">
                    {HtmlReactParser(experience.description)}
                  </div>
                </>
              ) : null}
            </Tabs.RadioTab>
          ))}
        </Tabs>
        <hr className="w-full" />
    </section>
  );
};

export default Experiences;
