import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

type AboutProps = {
  
}

export default function About({} : AboutProps) {
  return (
    <>
      <div className="h-128">
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '0'}}>
          <StaticImage src={'../images/slide-1.jpg'} alt={'slide-1'} className={'absolute object-cover object-center w-full h-128'} />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '10s'}}>
          <StaticImage src={'../images/slide-2.jpg'} alt={'slide-2'} className={'absolute object-cover object-center w-full h-128'} />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '20s'}}>
          <StaticImage src={'../images/slide-3.jpg'} alt={'slide-3'} className={'absolute object-cover object-center w-full h-128'} />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '30s'}}>
          <StaticImage src={'../images/slide-4.jpg'} alt={'slide-4'} className={'absolute object-cover object-center w-full h-128'} />
        </div>
        <div className='absolute z-10 w-full h-128 bg-white opacity-80'/>
        <div className='absolute z-20 w-full h-128 px-4 flex justify-center'>
          <div className='main-section my-auto text-center'>
            <h1>European Biopharma Therapeutics</h1>
            <p className='text-xl'>We are an innovation driven biopharma company headquartered in Germany and Israel.</p>
          </div>
        </div>
      </div>

      <div className='bg-white px-4'>
        <div className='main-section'>
          <h2>Our Mission</h2>
          <p>The Oncology market is complex. With more than 270 licenced oncology drugs on the market, and more than 700 late stage developments, it is becoming more difficult than ever to ensure patients receive the most appropriate care.</p>
          <p>At EBT, we look to ensure patient in Europe can have access to the most appropriate oncology products available globally.</p>
        </div>
      </div>
    </>
  )
}