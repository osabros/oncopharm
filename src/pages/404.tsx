import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Footer from '../components/Footer'
import Header from '../components/Header'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <h1>
        This page does not exist
      </h1>
      {process.env.NODE_ENV === "development" ? (
        <>
          <br />
          Try creating a page in <code>src/pages/</code>.
          <br />
        </>
      ) : null}
      <Link to="/">Return to homepage</Link>.
      <Footer />
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
