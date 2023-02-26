import React from "react"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import SEO from "../components/seo"
import PortfolioBanner from "../components/portfolioBanner"
import MainServicesLinks from "../components/services/mainServicesLinks"
import AllServicesBanner from "../components/services/allServicesBanner"
import ImageRight from "../components/sections/imageRight"

import ProductsImg from "../images/ph.jpg"
import ShowroomSection from "../components/sections/showroomSection"
import MainVideo from "../components/sections/mainVideo"
import Why from "../components/why"
import CtaMain from "../components/cta/ctaMain"
import MainTrends from "../components/trends/mainTrends"
import FaqFeatured from "../components/faq/faqFeatured"
import Ebook from "../components/ebook"

import EbookImg from "../images/ph.jpg"
import MainTestimonials from "../components/testimonials/mainTestimonials"
import FinanceBanner from "../components/financeBanner"

export default function index() {
  return (
    <Layout>
      <SEO title="home" description="" />
      <Hero />
      <PortfolioBanner />
      <MainServicesLinks />
      <AllServicesBanner />
      <ImageRight
        subheader="new year, new products"
        title="get the highest quality calgary landscape materials"
        body="Your home is your pride and joy, and we are the professionals who can help you maintain its outdoor beauty. Increasing your property's value and making your yard the envy of the block, Project Landscape ensures that your landscaping needs are met. From irrigation seasonal clean-up, construction and more services, we are the Calgary Landscaping experts you can trust for all your residential landscaping needs."
        to="/calgary-landscaping-materials"
        button="discover products"
        img={ProductsImg}
        alt="calgary landscape materials"
      />
      <ShowroomSection />
      <MainVideo />
      <MainTrends />
      <Why />
      <FaqFeatured />
      <Ebook
        img={EbookImg}
        alt="calgary landscaping experts advice"
        title="download our landscaping ebook"
        href=""
      />
      <MainTestimonials />
      <FinanceBanner />
      <CtaMain
        subheader="your personal paradise starts here"
        title="get started on your outdoor oasis"
        body="Lorem ipsum dolor sit amet consectetur. Volutpat pretium turpis velit sit massa in elementum urna. Mi non arcu ornare id hac sed gravida porta elit. Mollis consectetur nunc nisl cursus sem et dis."
      />
    </Layout>
  )
}
