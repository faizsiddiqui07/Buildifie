import React from "react";
import personaHills from "../../assets/images/snow12.webp";
import personaHills1 from "../../assets/images/snow01.webp";
import personaHills2 from "../../assets/images/snow09.webp";
import personaHills3 from "../../assets/images/snow06.webp";
import personaHills4 from "../../assets/images/snow10.webp";
import personaHills5 from "../../assets/images/snow14.webp";
import { Link } from "react-router-dom";
import personaHillsPdf from "../../assets/files/personaHills.pdf";
import { Helmet } from "react-helmet-async";

const PersonaHills = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Persona Hills Project | Buildifie - Luxury Villas in Kausani
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Persona Hills, a himalyan outlook sky-view villas & apartments project by Buildifie, designed as a luxurious and eco-friendly real estate habitable volumes."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://buildifie.com/projects/persona-hills" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="buildifie, Persona Hills, Luxury Villas, Cottage, Himalaya view villas, Holiday home, Second home, Luxury Interior, Kausani,Switzerland of India,EcoTech Luxury Villa, Luxury sky view rooms"
        />

        {/* Article Tags */}
        <meta property="article:tag" content="buildifie" />
        <meta property="article:tag" content="Persona Hills" />
        <meta property="article:tag" content="Luxury Villas" />
        <meta property="article:tag" content="Cottage" />
        <meta property="article:tag" content="Himalaya view villas" />
        <meta property="article:tag" content="Holiday home" />
        <meta property="article:tag" content="Second Home" />
        <meta property="article:tag" content="Luxury Interior" />
        <meta property="article:tag" content="Kausani" />
        <meta property="article:tag" content="Switzerland of India" />
        <meta property="article:tag" content="EcoTech Luxury Villa" />
        <meta property="article:tag" content="Luxury sky view rooms" />

        {/* Open Graph Meta Tags for social media */}
        <meta property="og:url" content="https://buildifie.com/projects/persona-hills"/>
        <meta
          property="og:title"
          content="Persona Hills Project | Buildifie - Luxury Villas in Kausani"
        />
        <meta
          property="og:description"
          content="Persona Hills, a himalyan outlook sky-view villas & apartments project by Buildifie, designed as a luxurious and eco-friendly real estate habitable volumes."
        />
        
      </Helmet>

      <div className="w-full overflow-x-hidden">
        <div className="w-full relative">
          <img
            src={personaHills}
            loading="lazy"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center"
            alt="About Banner Image"
          />
          <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-12 text-center">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider"
              style={{ fontFamily: "Saira Stencil One" }}
            >
              Persona Hills
            </h1>
            <p className="text-lg md:text-2xl font-medium">
              Himalayan Outlook Sky-view Villas & Appartments
            </p>
            <div className="flex flex-col xs:flex-row gap-3 mt-5">
              <Link
                to="https://personahills.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#454b68] hover:bg-gray-900 transition-all p-1 xs:p-2 rounded-md text-white text-center"
              >
                Go to Website
              </Link>

              <Link
                to={personaHillsPdf}
                target="_blank"
                download
                className="bg-[#454b68] hover:bg-gray-900 transition-all p-1 xs:p-2 rounded-md text-white text-center"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-20 py-8 text-center text-base md:text-lg">
          <h2 className="text-[#426e2f]  text-2xl md:text-3xl font-semibold mb-6 text-center">
            PERSONA HILLS by BUILDIFIE
          </h2>
          <p
            data-aos="zoom-in"
            className="text-base md:text-lg leading-relaxed"
          >
            Nestled on the Kumaon hills of Himalayas, Persona Hills redefines
            luxury living with villas and apartments that seamlessly blend into
            the majestic Himalayan landscape. Designed by Architectus Bureau,
            the architecture embraces nature expansive glass facades, floating
            terraces, and sunlit sky-view rooms, offering sweeping views of the
            mountains and valleys. The design balances modern elegance with
            natural warmth, creating a tranquil mountain heaven where beauty of
            the environment becomes part of everyday life.
          </p>
        </div>

        <div className="w-full px-4 sm:px-8 flex flex-wrap gap-4 justify-center my-6">
          <img
            src={personaHills1}
            data-aos="zoom-in"
            loading="lazy"
            className="w-full sm:w-[40%] md:w-[30%] object-cover border-4 border-[#454b68] rounded-sm p-1"
            alt="Persona Hills Villa 1"
            // style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
          <img
            src={personaHills2}
            data-aos="zoom-in"
            loading="lazy"
            className="w-full sm:w-[40%] md:w-[30%] object-cover border-4 border-[#454b68] rounded-sm p-1"
            alt="Persona Hills Villa 2"
          />
          <img
            src={personaHills3}
            data-aos="zoom-in"
            loading="lazy"
            className="w-full sm:w-[40%] md:w-[30%] object-cover border-4 border-[#454b68] rounded-sm p-1"
            alt="Persona Hills Villa 3"
          />
          <img
            src={personaHills4}
            data-aos="zoom-in"
            loading="lazy"
            className="w-full sm:w-[40%] md:w-[30%] object-cover border-4 border-[#454b68] rounded-sm p-1"
            alt="Persona Hills Villa 4"
          />
          <img
            src={personaHills5}
            data-aos="zoom-in"
            loading="lazy"
            className="w-full sm:w-[40%] md:w-[30%] object-cover border-4 border-[#454b68] rounded-sm p-1"
            alt="Persona Hills Villa 4"
          />
        </div>
      </div>
    </>
  );
};

export default PersonaHills;
