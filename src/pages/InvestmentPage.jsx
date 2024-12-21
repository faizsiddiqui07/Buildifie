import React from "react";
import investmentBannerImage from "../assets/images/investmentBanner.webp";
import investment from "../assets/images/investment.png";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.jpg";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.jpeg";
import { Helmet } from "react-helmet-async";

const InvestmentPage = () => {
  return (
    <> 
      <Helmet>
        <title>
          Investment Opportunities | Buildifie - High-potential real estate investment
        </title>

        {/* Meta description for SEO */}
        <meta
          name="description"
          content="Buildifie offers a range of structured investment models in Eco-tech and sustainable real estate affairs ensuring assured returns, equity growth, and long-term portfolio management"
        />

        {/* Canonical URL to prevent duplicate content  */}
        <link rel="canonical" href="https://buildifie.com/investment" />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Buildifie, high potential real estate,  real estate maximum return, holiday home, Scenic destination homes, buildifie investment model, buildifie debt investment model, buildifie equity participation model, buildifie portfolio management model, magnecron"
        />

        {/* Article Tags */}
        <meta property="article:tag" content="Buildifie" />
        <meta property="article:tag" content="high potential real estate" />
        <meta property="article:tag" content="real estate maximum return" />
        <meta property="article:tag" content="holiday home" />
        <meta property="article:tag" content="Scenic destination homes" />
        <meta property="article:tag" content="buildifie investment model" />
        <meta property="article:tag" content="buildifie debt investment model" />
        <meta property="article:tag" content="buildifie equity participation model" />
        <meta property="article:tag" content="buildifie portfolio management model" />
        <meta property="article:tag" content="magnecron" />

        {/* Open Graph Meta Tags for social media */}
        <meta property="og:url" content="https://buildifie.com/investment" />
        <meta
          property="og:title"
          content="Investment Opportunities | Buildifie - High-potential real estate investment"
        />
        <meta
          property="og:description"
          content="Buildifie offers a range of structured investment models in Eco-tech and sustainable real estate affairs ensuring assured returns, equity growth, and long-term portfolio management"
        />
      </Helmet>

      <div className="w-full overflow-x-hidden">
        {/* Banner Section */}
        <section className="relative w-full">
          <img
            src={investmentBannerImage}
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-top"
            alt="Investment Banner"
            loading="lazy"
          />
          <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-12 text-center">
            <h1
              className="text-3xl md:text-4xl lg:text-[54px]  mb-2 tracking-[0.11em]"
              style={{ fontFamily: "Saira Stencil One" }}
            >
              BUILDIFIE
            </h1>
            <p className="text-lg md:text-4xl tracking-[0.06em]">
              INVESTMENT MODELS UNDER MAGNECRON
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 px-4 md:px-8 lg:px-20 text-justify">
          <h2 className="text-[#426e2f] text-2xl md:text-3xl font-semibold mb-6 text-center">
            About Our Investment Models
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold">Buildifie</span>, powered by{" "}
            <span className="font-bold">Magnecron's</span> Asset Management
            expertise, offers a range of structured investment models designed
            to cater to diverse investor needs, ensuring assured returns, equity
            growth, and long-term portfolio management. These models are backed
            by a team of professionals, including architects, lawyers, financial
            experts, and ex-bankers, ensuring reliability, innovation, and
            sustainable growth.
          </p>
        </section>

        {/* Image Showcase Section */}
        <section data-aos="zoom-in" className="w-full pb-6">
          <div className="flex items-center justify-center px-6 sm:px-12">
            <img
              src={investment}
              alt="Investment Model"
              loading="lazy"
              className="w-[300px] sm:w-[400px] md:w-[500px] rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="w-full py-12 px-4 sm:px-8 border-b-4">
          <div className="space-y-16">
            {/* Assured Returns Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div data-aos="zoom-in-right">
                <h2 className="text-[#426e2f] text-2xl md:text-3xl font-bold mb-6 underline">
                  Assured Returns: Debt Investment Model
                </h2>
                <div className="space-y-4 leading-relaxed">
                  <InfoBlock title="Objective">
                    Provide fixed, predictable returns to investors while
                    funding high-potential real estate projects.
                  </InfoBlock>
                  <InfoBlock title="Investment Mechanism">
                    Investors participate in Buildifie’s real estate projects as
                    debt providers, earning 12%-15% assured annual returns.
                  </InfoBlock>
                  <InfoBlock title="Security Measures">
                    Fully secured investments backed by property mortgages or
                    project receivables.
                  </InfoBlock>
                  <InfoBlock title="Ideal For">
                    Risk-averse investors seeking steady income with minimal
                    exposure to market volatility.
                  </InfoBlock>
                  <InfoBlock title="Example">
                    Funding residential or commercial developments in Tier-2
                    cities, where demand growth is robust.
                  </InfoBlock>
                </div>
              </div>
              {/* Image */}
              <div data-aos="zoom-in-left" className="flex justify-center">
                <img
                  src={image7}
                  alt="Debt Investment Model"
                  loading="lazy"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Equity Participation Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div
                data-aos="zoom-in-right"
                className="flex justify-center order-2 md:order-1"
              >
                <img
                  src={image8}
                  alt="Equity Participation Model"
                  loading="lazy"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              {/* Text Content */}
              <div data-aos="zoom-in-left" className="order-1 md:order-2">
                <h2 className="text-[#426e2f] text-2xl md:text-3xl font-bold mb-6 underline">
                  Equity Participation Model
                </h2>
                <div className="space-y-4 leading-relaxed">
                  <InfoBlock title="Objective">
                    Maximize returns by allowing investors to share the profits
                    and growth potential of Buildifie’s projects.
                  </InfoBlock>
                  <InfoBlock title="Investment Mechanism">
                    Investors become equity partners in high-value real estate
                    projects, sharing proportional profits post-completion.
                  </InfoBlock>
                  <InfoBlock title="Upside Potential">
                    Returns can exceed 18%-24% annually or more, depending on
                    market performance and project success.
                  </InfoBlock>
                  <InfoBlock title="Transparency">
                    Detailed feasibility reports and progress updates ensure
                    informed decision-making.
                  </InfoBlock>
                  <InfoBlock title="Ideal For">
                    High-net-worth individuals (HNIs) and institutional
                    investors looking for exposure to the booming real estate
                    market.
                  </InfoBlock>
                  <InfoBlock title="Example">
                    Joint development of luxury villas, commercial hubs, or
                    second-home projects in tourism-driven locations like
                    Uttarakhand, Goa, or the Middle East.
                  </InfoBlock>
                </div>
              </div>
            </div>

            {/* Portfolio Management Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div data-aos="zoom-in-right">
                <h2 className="text-[#426e2f] text-2xl md:text-3xl font-bold mb-6 underline">
                  Portfolio Management Model: AUM-Focused Strategy
                </h2>
                <div className="space-y-4 leading-relaxed">
                  <InfoBlock title="Objective">
                    Offer clients a personalized, comprehensive portfolio
                    management service to diversify their real estate
                    investments and maximize returns.
                  </InfoBlock>
                  <InfoBlock title="Asset Management Services">
                    Property acquisition & management: From identifying
                    high-value assets to ensuring efficient operations.
                  </InfoBlock>
                  <InfoBlock title="Fractional Ownership & REITs">
                    Enable small and mid-sized investors to diversify into
                    premium properties with minimal investment.
                  </InfoBlock>
                  <InfoBlock title="Rental Income Management">
                    For vacation rentals and commercial properties, ensuring
                    optimized returns.
                  </InfoBlock>
                  <InfoBlock title="Technological Integration">
                    Advanced analytics, PropTech tools, and AI-driven insights
                    for smarter investment decisions.
                  </InfoBlock>
                  <InfoBlock title="Ideal For">
                    Investors seeking a hands-off approach to real estate with
                    professional management and regular performance reporting.
                  </InfoBlock>
                  <InfoBlock title="Example">
                    Managing a portfolio of holiday homes in scenic
                    destinations, leasing them out for rental income, and
                    optimizing tax benefits.
                  </InfoBlock>
                </div>
              </div>
              {/* Image */}
              <div data-aos="zoom-in-left" className="flex justify-center">
                <img
                  src={image9}
                  loading="lazy"
                  alt="Portfolio Management Model"
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 px-4 sm:px-8">
          <div
            data-aos="zoom-in"
            className="w-full flex justify-center items-center flex-col gap-y-2 mb-5"
          >
            <h4 className="text-2xl md:text-3xl font-bold underline">
              Why Choose
            </h4>
            <h2
              className="text-[#426e2f] text-3xl md:text-5xl font-extrabold tracking-wider"
              style={{ fontFamily: "Saira Stencil One" }}
            >
              BUILDIFIE ?
            </h2>
          </div>

          <div className="flex flex-col justify-center items-center gap-x-3 gap-y-8">
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-x-8">
              <div
                data-aos="fade-right"
                className="w-full xs:w-[65%] sm:w-[50%] flex justify-center md:justify-end"
              >
                <img
                  src={image13}
                  loading="lazy"
                  className="max-w-full"
                  alt=""
                />
              </div>

              <div
                data-aos="fade-left"
                className="w-full xs:w-[65%] sm:w-[50%]"
              >
                <p className="text-center md:w-[100%] lg:w-[70%] xl:w-[50%] text-lg">
                  Tailored models to suit different risk appetites and return
                  expectations.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-center items-center  gap-x-8">
              <div
                data-aos="fade-right"
                className="w-full xs:w-[65%] sm:w-[50%] flex justify-end order-2 sm:order-1"
              >
                <p className="text-center md:w-[100%] lg:w-[70%] xl:w-[50%] text-lg">
                  Supported by Magnecron’s asset management acumen and
                  Buildifie’s real estate expertise.
                </p>
              </div>

              <div
                data-aos="fade-left"
                className="w-full xs:w-[65%] sm:w-[50%] flex justify-center md:justify-start order-1 sm:order-2"
              >
                <img
                  src={image12}
                  loading="lazy"
                  className="max-w-full"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-x-8">
              <div
                data-aos="fade-right"
                className="w-full xs:w-[65%] sm:w-[50%] flex justify-center md:justify-end"
              >
                <img
                  src={image11}
                  loading="lazy"
                  className="max-w-full"
                  alt=""
                />
              </div>

              <div
                data-aos="fade-left"
                className="w-full xs:w-[65%] sm:w-[50%]"
              >
                <p className="text-center md:w-[100%] lg:w-[70%] xl:w-[50%] text-lg">
                  Projects aligned with ESG standards, ensuring long-term market
                  relevance.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-x-8">
              <div
                data-aos="fade-right"
                className="w-full xs:w-[65%] sm:w-[50%] flex justify-end order-2 sm:order-1"
              >
                <p className="text-center md:w-[100%] lg:w-[70%] xl:w-[50%] text-lg">
                  Robust due diligence and continuous monitoring to mitigate
                  potential risks.
                </p>
              </div>

              <div
                data-aos="fade-left"
                className="w-full xs:w-[65%] sm:w-[50%] flex justify-center md:justify-start order-1 sm:order-2"
              >
                <img
                  src={image10}
                  loading="lazy"
                  className="max-w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InvestmentPage;

const InfoBlock = ({ title, children }) => (
  <div>
    <h4 className="text-xl font-bold">{title}</h4>
    <p>{children}</p>
  </div>
);
