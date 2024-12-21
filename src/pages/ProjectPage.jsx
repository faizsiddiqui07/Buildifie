import React from "react";
import projectBannerImage from "../assets/images/projectImage.webp";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import { FreeMode } from "swiper/modules";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerImage1 from "../assets/images/snow10.webp";
import bannerImage2 from "../assets/images/snow09.webp";
import bannerImage3 from "../assets/images/snow14.webp";

import gallery2 from "../assets/images/snow01.webp";
import gallery1 from "../assets/images/snow12.webp";
import gallery4 from "../assets/images/snow06.webp";


const gallery = [
    bannerImage1,
    bannerImage2,
    bannerImage3,
    gallery1,
    gallery2,
    gallery4,
  ];

const ProjectPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Projects | Buildifie - Transforming Real Estate with Innovation
        </title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Explore Buildifie's innovative eco-tech and sustainable real estate conceptually designed projects."
        />

        {/* Canonical URL to prevent Duplicate Content */}
        <link rel="canonical" href="https://buildifie.com/projects" />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Buildifie, Buildifie projects,Questline,ultra luxury real estate, sustainable real estate, eco-friendly developments, innovative real estate projects,Architectus Bureau,Archetype"
        />

        {/* Article Tags */}
        <meta property="article:tag" content="Buildifie" />
        <meta property="article:tag" content="Buildifie projects" />
        <meta property="article:tag" content="Questline" />
        <meta property="article:tag" content="ultra luxury real estate" />
        <meta property="article:tag" content="sustainable real estate" />
        <meta property="article:tag" content="eco-friendly developments" />
        <meta property="article:tag" content="innovative real estate projects"/>
        <meta property="article:tag" content="Architectus Bureau" />
        <meta property="article:tag" content="Archetype" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:url" content="https://buildifie.com/projects" />
        <meta
          property="og:title"
          content="Our Projects | Buildifie - Transforming Real Estate with Innovation"
        />
        <meta
          property="og:description"
          content="Explore Buildifie's innovative eco-tech and sustainable real estate conceptually designed projects."
        />
      </Helmet>

      <div className="w-full overflow-x-hidden">
        <div className="w-full relative">
          <img
            src={projectBannerImage}
            loading="lazy"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center"
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
              Projects - Archetype, Perspective & Concept
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center gap-4 py-6 px-4 sm:px-8">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="bg-[#454b68] text-white w-[50%] hover:bg-gray-900 hover:text-white"
              >
                <Button variant="outline">Questline-I Projects</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mx-2 xs:mx-0">
                <DropdownMenuGroup>
                  <Link to={"/projects/persona-hills"}>
                    <DropdownMenuItem className="cursor-pointer">
                      Persona Hills
                    </DropdownMenuItem>
                  </Link>
                  <Link to={"#"}>
                    <DropdownMenuItem className="cursor-pointer">
                      Himalayan Valerise
                    </DropdownMenuItem>
                  </Link>
                  <Link to={"#"}>
                    <DropdownMenuItem className="cursor-pointer">
                      Boulevard Barrio
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="bg-[#454b68] text-white w-[50%] hover:bg-gray-900 hover:text-white"
              >
                <Button variant="outline">Questline-II Projects</Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </div>

        {/* Gallery section */}
        <section className="relative overflow-hidden pb-16">
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
      </div>
    </>
  );
};

export default ProjectPage;
