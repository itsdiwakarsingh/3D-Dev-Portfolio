import React from "react";
import ProjectDetails from "./ProjectDetails";

const Projects = ({
  title,
  description,
  subDescription,
  herf,
  image,
  tags,
}) => {
  return (
    <>
      <div className="flex-wrap items-center justify-between space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">title</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
            <span>tag1</span>
            <span>tag2</span>
            <span>tag3</span>
          </div>
        </div>
        <button className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
        </button>
        <img src="assets/arrow-right.svg" className="w-5" alt="" />
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full " />
      <ProjectDetails
        title={title}
        description={description}
        subDescription={subDescription}
        image={image}
        tag={tags}
        herf={herf}
      />
    </>
  );
};

export default Projects;
