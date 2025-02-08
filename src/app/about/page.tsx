"use client";
import Image from "next/image";


export default function About() {
  return (
    <section className="section">
      <h1 className="h1">About Me</h1>
      <div className="about">
        <div className="">
          <Image
            src="/img.jpeg"
            height={400}
            width={300}
            alt="about-image"
            className="about-image rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
        <div className="about-text">
          <p>
            Welcome! I'm Tayyeba, a skilled frontend web developer dedicated to
            building visually stunning and highly interactive websites. With a
            keen eye for design and a deep understanding of user experience, I
            create modern, responsive, and intuitive interfaces that enhance
            digital experiences. My expertise lies in crafting clean, efficient
            code and ensuring seamless functionality across all devices. Let’s
            bring your vision to life with creativity and precision!
          </p>

          <p>
            Every website I create is built with meticulous attention to detail,
            ensuring optimal performance and responsiveness on all devices. I am
            dedicated to turning concepts into captivating and impactful online
            experiences that make a lasting impression in today’s digital world.
          </p>
          <div className="skills">
            <div className="skill-item">
              <h5>HTML & CSS</h5>
              <div className="html-css"></div>
            </div>
            <div className="skill-item">
              <h5>JavaScript</h5>
              <div className="js"></div>
            </div>
            <div className="skill-item">
              <h5>TypeScript</h5>
              <div className="ts"></div>
            </div>
            <div className="skill-item">
              <h5>React JS</h5>
              <div className="react-js"></div>
            </div>
            <div className="skill-item">
              <h5>Next JS</h5>
              <div className="next-js"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
