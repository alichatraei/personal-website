"use client";
import React from "react";
import { ImGithub, ImLink } from "react-icons/im";
import { Button, Card } from "react-daisyui";
import projectsMock, { IProjects } from "src/mocks/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container w-full px-4 mx-auto flex flex-col text-white min-h-screen justify-center gap-y-4">
      <span className="w-fit font-inter text-sm lg:text-lg uppercase mt-24">
        Featured projects
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {projectsMock.map((project: IProjects, index: number) => (
          <Card key={index++}>
            <Card.Image
              src={project.projectImage}
              alt={project.projectName}
              className="rounded-md w-full"
            />
            <Card.Body className="mt-8">
              <Card.Title
                tag="h2"
                className="text-lg lg:text-2xl font-extralight flex items-center justify-between"
              >
                {project.projectName}
                <div className="flex items-center gap-x-4">
                  {project.githubLink ? (
                    <Link href={project.githubLink || ""} target="_blank">
                      <ImGithub />
                    </Link>
                  ) : null}
                  {project.projectLink ? (
                    <Link href={project.projectLink}>
                      <ImLink />
                    </Link>
                  ) : null}
                </div>
              </Card.Title>
              <p className="text-sm font-extralight my-4">
                {project.projectDetail}
              </p>
              <p className="text-[#6CACE4] text-sm font-extralight">
                {project.projectToolsUsed}
              </p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
