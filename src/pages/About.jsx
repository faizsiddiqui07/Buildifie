import React from "react";
import aboutBannerImage from "../assets/images/aboutBanner1.webp";
import aboutImage1 from "../assets/images/17.1.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us | Buildifie - Leading Sustainable Real Estate Innovators
        </title>

        {/* Meta Description for SEO */}
        <meta 
          name="description"
          content="Discover Buildifie's mission to revolutionize multidisciplinary real estate with eco-friendly innovations. Learn about our vision, values, and commitment to sustainability in every project we undertake."
        />

        {/* Canonical URL to prevent Duplicate Content */}
        <link rel="canonical" href="https://buildifie.com/about" />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Buildifie, About Buildifie, sustainable real estate, eco-friendly innovations, Buildifie mission, Buildifie vision, Ecotech real estate, Eco-driven and tech-enabled, Oxigen positive habitation, eco-conscious living spaces,Khaan Aamir,Kalpana saini"
        />

        {/* Article Tags */}
        <meta property="article:tag" content="Buildifie" />
        <meta property="article:tag" content="About Buildifie" />
        <meta property="article:tag" content="sustainable real estate" />
        <meta property="article:tag" content="eco-friendly innovations" />
        <meta property="article:tag" content="Buildifie mission" />
        <meta property="article:tag" content="Buildifie vision" />
        <meta property="article:tag" content="Ecotech real estate" />
        <meta property="article:tag" content="Eco-driven and tech-enabled" />
        <meta property="article:tag" content="Oxigen positive habitation" />
        <meta property="article:tag" content="eco-conscious living spaces" />
        <meta property="article:tag" content="Khaan Aamir" />
        <meta property="article:tag" content="Kalpana saini" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:url" content="https://buildifie.com/about" />
        <meta
          property="og:title"
          content="About Us | Buildifie - Leading Sustainable Real Estate Innovators"
        />
        <meta
          property="og:description"
          content="Discover Buildifie's mission to revolutionize real estate with eco-friendly innovations. Learn about our vision, values, and commitment to sustainability in every project we undertake."
        />
      </Helmet>

      <div className="w-full overflow-x-hidden">
        <div className="w-full relative">
          <img
            src={aboutBannerImage}
            loading="lazy"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-top"
            alt="About Banner Image"
          />
          <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-12 text-center">
            <h1
              className="text-3xl md:text-4xl lg:text-[54px]  mb-2 tracking-[0.11em]"
              style={{ fontFamily: "Saira Stencil One" }}
            >
              BUILDIFIE
            </h1>
            <p className="text-lg md:text-4xl tracking-[0.06em]">
              Redefining Real Estate with Expertise and Integrity
            </p>
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-20 py-8 text-center text-base md:text-lg">
          <p>
            At <span className="font-bold">Buildifie</span>, we are more than
            just a real estate affairs company; we are a mission-driven
            initiative powered by <span className="font-bold">Magnecron</span>,
            an emerging Asset Management Company. Our foundation is built on a
            team of Seasoned Professionals, including{" "}
            <span className="font-bold">
              Architects (Founders; Khaan Aamir + Kalpana Saini & Co.)
            </span>
            , Lawyers, Financial experts, and Ex-Bankers, united by a shared
            vision of Reliability, Creativity, and Environmental Responsibility.
            With a startup spirit and an unwavering commitment to excellence, we
            conceptualize projects that go beyond structures to create spaces
            that inspire, endure, and align with sustainable Eco-Tech &
            Eco-Driven practices.
          </p>
          <br /> 
          <p>
            Driven by innovation and guided by professional expertise,{" "}
            <span className="font-bold">Buildifie </span>
            bridges the gap between creative design and practical execution. Our
            projects are thoughtfully crafted to meet the evolving needs of
            communities while ensuring environmental harmony. Backed by
            <span className="font-bold"> Magnecron’s</span> strategic Asset
            Management, we deliver solutions that are not only visionary but
            also strategically empowered to build lasting value.
          </p>
          <br />
          <p>
            Whether it’s crafting sustainable homes, designing EcoTech
            commercial & residential spaces, or managing complex real estate
            ventures, we bring a multidisciplinary approach that combines
            architectural brilliance, legal precision, and financial foresight.
            At <span className="font-bold">Buildifie</span>, we believe in
            creating more than just properties; we aim to build trust, foster
            growth, and secure legacies. Join us as we shape a future where
            every space is a testament to reliability, innovation, and a
            commitment to a better tomorrow
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="w-full flex justify-center h-[500px] sm:h-[650px] md:h-[800px] lg:h-[900px] py-8 px-4 md:px-8"
        >
          <img src={aboutImage1} loading="lazy" alt="About image" />
        </div>
      </div>
    </>
  );
};

export default About;
