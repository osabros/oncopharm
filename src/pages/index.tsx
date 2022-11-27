import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
        <main>
          <About />
          <Contact />
        </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
