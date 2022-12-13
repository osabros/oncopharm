import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from "gatsby"

type MedicinesProps = {
  
}

export default function Medicines({} : MedicinesProps) {
  return (
    <>
      <div className='h-96' id='medicines'>
        <div className="z-0">
          <StaticImage
            src={'../images/white-pill-container-blue-background.jpg'}
            alt={'medicines'}
            className={'!absolute object-cover object-top w-full h-96'}
          />
        </div>

        <div className='absolute z-10 w-full h-96 bg-white opacity-80'/>
        <div className='absolute z-20 w-full h-96 px-4 main-section text-center flex justify-center'>
          <Link
            to='/medicines'
            type="button"
            className="text-xl justify-self-center self-center inline-block px-7 py-3 bg-blue-600 text-white font-medium uppercase leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:text-white hover:no-underline focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Explore our medicines
          </Link>
        </div>
      </div>
    </>
  )
}