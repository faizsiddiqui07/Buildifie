import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import { EffectFade, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

// Importing banner images
import bannerImage1 from "../assets/images/snow10.webp";
import bannerImage2 from "../assets/images/snow09.webp";
import bannerImage3 from "../assets/images/snow14.webp";

import gallery1 from "../assets/images/snow12.webp";
import gallery2 from "../assets/images/snow01.webp";
import gallery4 from "../assets/images/snow06.webp";

import aboutImage from "../assets/images/6.2.jpg";
import realEstateImage from "../assets/images/real-estate.jpg";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.png";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const banners = [bannerImage1, bannerImage2, bannerImage3];
  const gallery = [
    bannerImage1,
    bannerImage2,
    bannerImage3,
    gallery1,
    gallery2,
    gallery4,
  ];

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>BUILDIFIE | EcoTech & Sustainable Real Estate Affairs</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Buildifie is an emerging Eco-tech & Sustainable Real Estate company, founded by a team of seasoned professional, including Architects, Legal consultants & Financial experts."
        />

        {/* Canonical URL to prevent Duplicate Content */}
        <link rel="canonical" href="https://buildifie.com" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Buildifie, sustainable real estate, eco-tech projects, real estate investment, green building, innovative business models, eco-friendly housing, sustainable architecture"
        />

        {/* Article Tags */}
        <meta property="article:tag" content="Buildifie" />
        <meta property="article:tag" content="sustainable real estate" />
        <meta property="article:tag" content="eco-tech projects" />
        <meta property="article:tag" content="real estate investment" />
        <meta property="article:tag" content="green building" />
        <meta property="article:tag" content="innovative business models" />
        <meta property="article:tag" content="eco-friendly housing" />
        <meta property="article:tag" content="sustainable architecture" />

        {/* Open Graph Metadata */}
        <meta property="og:url" content="https://buildifie.com" />
        <meta
          property="og:title"
          content="BUILDIFIE | EcoTech & Sustainable Real Estate Affairs"
        />
        <meta
          property="og:description"
          content="Buildifie is an emerging Eco-tech & Sustainable Real Estate company, founded by a team of seasoned professional, including Architects, Legal consultants & Financial experts."
        />
      </Helmet>

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            className="h-full"
          >
            {banners.map((image, index) => (
              <SwiperSlide key={index}>
                <Link to="#">
                  <img
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 z-20">
            <div className="inline-block">
              <h2 className="text-sm xs:text-[16px] sm:text-[19px] lg:text-[21px] font-bold pb-2 tracking-[4.4px]">
                EcoTech Real Estate Affairs
              </h2>
              <div className="w-full h-1 bg-white mt-2"></div>
            </div>

            <p
              className="uppercase leading-4 xs:leading-5 sm:leading-6 text-[21px] xs:text-[24px] sm:text-[28px] lg:text-[32px] font-medium my-4"
              style={{ fontFamily: "Saira Stencil One" }}
            >
              Crafting Legacies
              <br />
              <br />
              &amp;
              <br />
              <br />
              Empowering Assets
            </p>

            <div className="inline-block">
              <div className="w-full h-1 bg-white mb-2"></div>
              <h2 className="text-md sm:text-[19px] lg:text-[21px] font-bold pb-2 mb-4">
                Eco-Driven Designs, Tech-Enabled Living
              </h2>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section data-aos="zoom-in-up" className="py-16 border-b-2">
          <div className="mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8">
            {/* About Text */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h1
                className="text-[#454b68] text-3xl md:text-5xl font-bold mb-2 tracking-wider"
                style={{ fontFamily: "Saira Stencil One" }}
              >
                BUILDIFIE
              </h1>
              <p className="text-[#426e2f] text-xl mb-6 ">
                Redefining Real Estate with Expertise and Integrity
              </p>
              <p className="leading-relaxed mb-4 text-base md:text-lg">
                At <span className="font-bold">Buildifie</span>, we are more
                than just a real estate affairs company; we are a mission-driven
                initiative powered by{" "}
                <span className="font-bold">Magnecron</span>, an emerging Asset
                Management Company. Our foundation is built on a team of
                Seasoned Professionals, including{" "}
                <span className="font-bold">
                  Architects (Founders; Khaan Aamir + Kalpana Saini & Co.)
                </span>
                , Lawyers, Financial experts, and Ex-Bankers, united by a shared
                vision of Reliability, Creativity, and Environmental
                Responsibility. With a startup spirit and an unwavering
                commitment to excellence, we conceptualize projects that go
                beyond structures to create spaces that inspire, endure, and
                align with sustainable Eco-Tech & Eco-Driven practices....
              </p>
              <Button className="bg-[#454b68]">
                <Link to="/about" className="text-sm md:text-lg font-semibold">
                  Read more &rarr;
                </Link>
              </Button>
            </div>

            {/* About Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={aboutImage}
                alt="About Buildifie"
                loading="lazy"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section className="relative overflow-hidden pt-16" data-aos="zoom-in-up">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={15}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {gallery.map((image, index) => (
              <SwiperSlide key={index}>
                <Link to="#">
                  <img
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section data-aos="zoom-in-up" className="w-full px-4 sm:px-8 py-10">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Content Section */}
            <div>
              <h2 className="text-[#426e2f] text-3xl font-bold mb-6">
                Real Estate Market Cap in India
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                The real estate market in India is currently valued at
                approximately{" "}
                <span className="font-semibold">$265 billion</span> in 2024,
                with expectations to grow to{" "}
                <span className="font-semibold">$1 trillion</span> by 2030,
                driven by urbanization, infrastructure development, and
                increased foreign investment. The sector contributes
                significantly to the nation's GDP, accounting for about{" "}
                <span className="font-semibold">7%</span> in 2024 and projected
                to reach <span className="font-semibold">13%</span> by 2030.
              </p>
              <p className="mt-4 leading-relaxed text-base md:text-lg">
                Key growth drivers include government initiatives such as
                affordable housing programs, regulatory reforms like RERA, and
                infrastructure projects like the Delhi-Mumbai Industrial
                Corridor and Noida International Airport. Emerging trends
                include the adoption of PropTech, fractional ownership, and a
                focus on sustainability, which is becoming a priority for
                stakeholders.
              </p>
            </div>

            {/* Images Section */}
            <div className="w-full sm:w-[70%] mx-auto">
              {/* <img
                src={image2}
                alt="Market Trends"
                loading="lazy"
                className="h-fit rounded-lg shadow-lg"
              /> */}
              <img
                src={realEstateImage}
                alt="Real Estate Market"
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section
          data-aos="zoom-in-up"
          className="w-full px-4 sm:px-8 py-4 sm:py-16"
        >
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[#426e2f] text-3xl font-bold mb-6">
                Tourism and Second Home in India
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                India's real estate market for{" "}
                <span className="font-bold">TOURISM & SECOND HOME</span> is
                rapidly growing, driven by rising disposable incomes, urban
                lifestyle changes, and a preference for getaway destinations.
                The second-home market is flourishing in scenic and
                well-connected locations, particularly hill stations, coastal
                towns, and heritage-rich regions. By 2030, the second-home and
                holiday-home segments are projected to contribute significantly
                to the real estate sector's valuation of $1 trillion.
              </p>
            </div>

            {/* Images Section */}
            <div className="order-2 lg:order-1">
              <img
                src={image3}
                alt="Market Trends"
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section data-aos="zoom-in-up" className="w-full px-4 sm:px-8 py-10">
          <div className=" mx-auto text-center">
            {/* Heading Section */}
            <h2 className="text-[#426e2f] text-3xl font-bold mb-8">
              World Real Estate Market Cap
            </h2>

            {/* Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={image4}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                alt="Real Estate Market 1"
              />
              <img
                src={image5}
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                alt="Real Estate Market 2"
              />
            </div>
          </div>
        </section>

        <section
          data-aos="zoom-in"
          className="w-full px-4 sm:px-8 py-4 sm:py-16"
        >
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Content Section */}
            <div className="">
              <h2 className="text-[#426e2f] text-3xl font-semibold mb-6">
                Tourism and Second Home in the World
              </h2>
              <p className="leading-relaxed mb-4 text-base md:text-lg">
                The second-home and tourism-oriented real estate market
                represents a significant and growing segment within the global
                property sector. This includes vacation homes, resorts, serviced
                apartments, and properties catering to short-term rental markets
                driven by tourism demand.
              </p>
              <p className="leading-relaxed mb-4 text-base md:text-lg">
                The global vacation home market is valued at over $70 billion in
                2023 and is projected to grow at a CAGR of 6%-8% through 2030,
                driven by the increasing popularity of remote work and lifestyle
                investments.
              </p>
            </div>

            {/* Image Section */}
            <div className="">
              <img
                src={image6}
                alt="Tourism and Second Home Market Trends"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
