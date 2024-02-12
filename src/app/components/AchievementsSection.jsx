"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects done",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Ongoing Projects",
    value: "15",
    postfix: "+",
  },
  // {
  //   metric: "Awards",
  //   value: "7",
  // },
  {
    metric: "Hours of Study",
    value: "100",
  },
];

const AchievementsSection = () => {
  return (
    <div className="px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {/* sm: 这是屏幕尺寸的前缀，表示当屏幕尺寸达到或超过小屏幕（small）时生效。 */}
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="flex flex-row text-4xl font-bold text-white">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-4xl font-bold text-white"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {/* AnimatedNumbers 组件是用于显示带有动画效果的数字的组件。在这里：
                    includeComma 表示是否在数字中包含逗号。
                    animateToNumber 设置要动画显示的数字。
                    locale 设置数字的格式，这里是美式英语。
                    className 设置数字的样式。
                    configs 是一个函数，用于设置动画的配置参数。在这里，根据数字的索引设置了不同的张力（tensions），以创建不同的动画效果。 */}
                {achievement.postfix}
                {/* 在这个例子中，动画数字部分会显示 "100"，然后通过 {achievement.postfix} 就会显示 +。最终呈现的效果是数字后面跟着一个加号。这样的设计允许你在每个成就的数字后面添加不同的后缀，以满足你的需求。 */}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
