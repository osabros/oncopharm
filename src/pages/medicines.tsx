import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'

const MedicinesPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
        <main>
          <div className='bg-white md:max-w-3xl md:mx-auto px-4' style={{minHeight: 'calc(100vh - 208px - 72px)'}}>
            <div className='main-section'>
              <h1>Medicines</h1>
              <p>Additional details regarding our portfolio of medicines and proprietary tools are currently available to registered HCPs only.</p>
              <p>For additional details of our medicines, please provide your email address and we will contact you with additional details:</p>
              <form
                onSubmit={(e) => { e.preventDefault(); console.log(e);}}
                noValidate
                className="bg-white shadow-md rounded p-8 pt-4"
              >
                <div className="max-w-xl mx-auto p-1 pl-0 flex flex-wrap gap-2 items-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <input
                    id='email'
                    type='email'
                    placeholder="email@example.com"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  />
                  <button
                    className="ml-auto mt-4 self-end px-7 py-3 bg-blue-600 text-white font-medium uppercase leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:text-white hover:no-underline focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      <Footer />
    </>
  )
}

export default MedicinesPage

export const Head: HeadFC = () => <title>European Biopharma Therapeutics | Medicines</title>
