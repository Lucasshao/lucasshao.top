import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
//这个组件的作用是渲染一个包含导航链接的列表，其中每个链接由 NavLink 组件表示。这种组织方式可以方便地在应用中重复使用相同的导航链接结构。
