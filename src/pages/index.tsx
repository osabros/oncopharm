import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Leadership from '../components/Leadership'
import Vision from '../components/Vision'
import Medicines from '../components/Medicines'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
        <main>
          <Home />
          <Vision />
          <Medicines />
          <Leadership />
          <Contact />
        </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>European Biopharma Therapeutics</title>
