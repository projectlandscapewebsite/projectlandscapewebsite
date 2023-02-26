import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Footer from "./footers/footer"
import Map from "./map"
import FaqFeatured from "./faq/faqFeatured"
import Ebook from "./ebook"

import EbookImg from "../images/ph.jpg"
import CtaMain from "./cta/ctaMain"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <FaqFeatured />
      <CtaMain title="what's your project?" />
      <Footer />
      <Map />
    </>
  )
}
