import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
// 两种的不同：1，ProjectSection 2，AboutSection
// 在这里，onClick 是一个回调函数，通过箭头函数的方式将 onClick(name) 传递给按钮的 onClick 事件。这样写法的好处是，可以在点击按钮时执行 onClick 函数，并将 name 作为参数传递给该函数。这样做是为了确保在点击按钮时，onClick 函数被正确调用，并且能够传递必要的参数。
// 在这里，直接将 selectTab 函数传递给了按钮的 onClick 事件。这里假设 selectTab 函数不需要额外的参数。这种写法更为简洁，前提是所传递的函数不需要接收额外的参数。如果需要传递参数，也可以使用类似的方式 onClick={() => selectTab(someValue)}。
