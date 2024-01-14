import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3 bg-primary-500"
      ></motion.div>
    </button>
  );
};

export default TabButton;
{
  /*
父组件向子组件传递属性:
TabButton 组件通过属性接收来自父组件的信息，其中 active 表示当前是否是选中状态，selectTab 是一个回调函数，用于在按钮被点击时触发。

子组件中的属性使用:
在 TabButton 组件内部，active 属性用于动态设置按钮样式。如果 active 为 true，则应用 text-white 类；否则，应用 text-[#ADB7BE] 类。

selectTab 属性则绑定在按钮的 onClick 事件上，当按钮被点击时，会执行父组件传递过来的回调函数，即 handleTabChange。

父组件的事件处理:
当 TabButton 组件内的按钮被点击时，触发了 selectTab 属性所对应的回调函数，也就是父组件传递的 handleTabChange 函数。

在这个回调函数中，通过参数 "skills"、"education"、"certifications" 等来告诉父组件当前选中的标签。*/
}
