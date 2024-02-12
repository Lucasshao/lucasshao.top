"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { projectsData } from "@/data/db.json";
// const projectsData = [
//   {
//     id: 1,
//     title: "React Portfolio Website",
//     description: "Project 1 description",
//     image: "/images/projects/1.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 2,
//     title: "Potography Portfolio Website",
//     description: "Project 2 description",
//     image: "/images/projects/2.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "E-commerce Application",
//     description: "Project 3 description",
//     image: "/images/projects/3.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 4,
//     title: "Food Ordering Application",
//     description: "Project 4 description",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
// ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }; //这是一个处理项目标签切换的函数。当用户点击不同的标签时，通过调用 setTag 更新 tag 状态，从而触发重新渲染组件。

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  ); //使用 filter 方法根据当前选择的标签过滤项目数据。filteredProjects 数组将仅包含拥有当前标签的项目。

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* 
        其实这里的onClick取名字不是很好跟React的功能重复，实际上是传一个回调函数，这个回调函数的名字恰好叫onClick，可以取onTagChange 或者 selecTab好一些，然后子组件再用真正的onClick功能来调用父组件传来的回调函数，并需要name这个参数
        onClick: 这是父组键传给子ProjectTag的一个回调函数，即handleTagChange，当用户点击标签时会被调用。该函数会更新 tag 状态，触发重新渲染。

        name: 表示标签的名称，这个例子中是 "All"。这个属性用于在标签上显示相应的文本。

        isSelected: 这是一个布尔值，表示当前标签是否被选中。在这个例子中，它的值是根据 tag === "All" 的比较结果来设置的。如果当前的标签是 "All"，那么 isSelected 将为 true，否则为 false。这样可以通过样式或其他方式强调当前选中的标签。 
        */}
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Javascript"
          isSelected={tag === "Javascript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJs"
          isSelected={tag === "NextJs"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
