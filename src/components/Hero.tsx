"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <Image
            src="/img.jpeg"
            height={200}
            width={200}
            alt="portfolio-image"
            className="portfolio-image"
          />
        </div>
        <div className="hero-text-content">
          <p>HEY THERE!</p>
          <h1 className="hero-h1">I AM TAYYEBA ALI</h1>
          <p>
            I am a passionate Frontend Developer and Graphic Designer dedicated
            to crafting visually stunning and user-friendly UX/UI web
            applications. I bring ideas to life on the web with HTML, CSS,
            JavaScript, and Next.js, blending creativity with technical
            expertise to deliver seamless digital experiences.
          </p>
          <div className="buttons">
            <button className="hero-btn1">
              <Link href="/contact" className="hero-contact">
                Contact Me
              </Link>
            </button>
            <button className="hero-btn2">My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}
