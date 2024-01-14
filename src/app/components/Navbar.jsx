"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // 确切地说，useState 的初始值和 setNavbarOpen 的参数值没有固定的关联关系。它们是两个独立的概念。
  // useState(false) 设置了 navbarOpen 这个状态的初始值为 false，即组件首次渲染时，navbarOpen 的值为 false
  // 所以下面对应“！”，一开始的值为false，渲染菜单而不是X号，但是给渲染的菜单按钮绑定了点击事件，一点击就会set true，渲染X号
  // 这种用法是为了在两个状态之间进行切换，通过取反操作可以避免手动指定初始值，使得代码更加灵活和易读。
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto lg:py-4">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white md:text-5xl"
        >
          LOGO
        </Link>
        <div className="block mobile-menu md:hidden">
          {/* block 类是 Tailwind CSS 中的显示类，表示在所有屏幕尺寸上都显示该元素。
              mobile-menu 类可能是开发者自定义的类名，表示这是一个用于移动端的菜单。
              md:hidden 类是 Tailwind CSS 中的响应式类，表示在中等屏幕尺寸及以上（md 及以上）时，该元素将隐藏。
              这个 <div> 元素的作用是，当屏幕尺寸小于中等屏幕时，显示移动端菜单，而在中等屏幕及以上时隐藏。 */}
          {!navbarOpen ? (
            // 在这里，{!navbarOpen ? ... : ...} 表达式表示：如果 navbarOpen 的值为 false，那么渲染菜单按钮（Bars3Icon），否则渲染关闭按钮（XMarkIcon）
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            // 当 navbarOpen 为 true 时，渲染另一个按钮，点击时将 navbarOpen 设置为 false，并显示 XMarkIcon。
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          {/* hidden 类是 Tailwind CSS 中的类，表示在所有屏幕尺寸上都隐藏该元素。
              menu 类可能是开发者自定义的类名，表示这是一个菜单。
              md:block 类是 Tailwind CSS 中的响应式类，表示在中等屏幕尺寸及以上（md 及以上）时，显示该元素。
              md:w-auto 类是 Tailwind CSS 中的类，表示在中等屏幕尺寸及以上时，该元素的宽度将自动调整。 */}
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {/* space-x-8 表示在水平方向上的相邻子元素之间设置间距为 8 单位。具体的间距大小可能取决于你的 Tailwind CSS 配置，通常默认单位是像素或其他相对单位。 */}
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
