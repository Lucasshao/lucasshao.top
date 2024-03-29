import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover h-52 md:h-72 rounded-xl group md:bg-contain"
        //group 类是为了使用 Tailwind CSS 的 group 类型，它通常用于创建在特定条件下触发的样式变化。

        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          // backgroundPosition: "-0.5rem",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-gradient-to-r from-[#5651e5f8] to-[#709dff59] transition-all duration-500 ease-in-out">
          {/* group-hover:flex: 当包含 group 类的元素被悬停时，将 hidden 类移除，显示覆盖层。
              group-hover:bg-opacity-80: 当包含 group 类的元素被悬停时，将 bg-opacity-0 类移除，将不透明度设置为 80%。 */}

          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
