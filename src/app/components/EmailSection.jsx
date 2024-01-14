"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      {/* 这段代码是一个使用 Tailwind CSS 中的样式来创建一个带有背景渐变、圆形形状、位置和特效的 div 元素。下面是对每个部分的解释：

        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"

        bg-: 这是 Tailwind CSS 中的背景颜色类前缀。
        [...]: 这是 Tailwind CSS 的 JIT 模式中的 Just-in-Time 编译语法，用于动态生成类名。
        radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)): 这是一个 CSS 渐变的表示法，表示创建一个径向渐变。ellipse_at_center 表示椭圆形的渐变，而 _var(--tw-gradient-stops) 是一个变量，它可能在项目的 CSS 样式表中定义。
        from-primary-900: 这是一个颜色类，表示渐变的起始颜色。primary-900 是一个由 Tailwind CSS 中颜色配置生成的类，表示主题颜色的某个深度。

        to-transparent: 这是一个颜色类，表示渐变的结束颜色为透明。

        rounded-full: 这是一个类，表示元素的边框是圆角的，使其呈现圆形形状。

        h-80 w-80: 这是高度和宽度的类，将元素的高度和宽度设置为 80。

        z-0: 这是 z-index 类，将元素的堆叠顺序设置为 0。

        blur-lg: 这是一个类，表示对元素应用一个较大程度的模糊效果。

        absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2: 这是定位和变换类，将元素定位到父容器的绝对位置。top-3/4 表示从顶部偏移父容器高度的 3/4，-left-4 表示从左侧偏移 4 个单位。transform -translate-x-1/2 -translate-y-1/2 表示在 x 和 y 方向上分别进行一半的反向平移，以确保元素位于其自身的中心。 */}
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-green-500">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
