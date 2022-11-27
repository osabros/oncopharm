import React from 'react';

type AboutProps = {
  
}

export default function About({} : AboutProps) {
  return (
    <>
      <div className="h-96">
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '0'}}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            className="absolute object-cover object-center w-full h-96"
            alt="Wild Landscape"
          />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '2s'}}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            className="absolute object-cover object-center w-full h-96"
            alt="Camera"
          />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '4s'}}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            className="absolute object-cover object-center w-full h-96"
            alt="Exotic Fruits"
          />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '6s'}}>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/044.webp"
            className="absolute object-cover object-center w-full h-96"
            alt="Camera"
          />
        </div>
        <div className='absolute z-10 w-full h-96 bg-white opacity-80'/>
        <div className='absolute z-20 w-full h-96 px-4 flex justify-center'>
          <div className='main-section my-auto text-center'>
            <h1>European Biopharma Therapeutics</h1>
            <p>We are an innovation driven biopharma company headquartered in Germany and Israel.</p>
          </div>
        </div>
      </div>

      <div className='bg-white px-4'>
        <div className='main-section'>
          <h2>Mission</h2>
          <p>Ensure Cancer patients receive the most appropriate Oncology Pharmacology.</p>
        </div>
      </div>
      <div className='bg-gray-100 px-4'>
        <div className='main-section'>
          <h2>Specialization</h2>
          <p>
            The Oncoloy market is complex. With more than 270 licenced oncology drugs on the market, and more than 700 late stage developments, it is becoming more difficult than ever to ensure patients receive the most appropriate care.<br/>
            At EBT, we look to ensure patient in Europe can have access to the most appropriate oncology products available globally.
          </p>
        </div>
      </div>
      <div className='bg-white px-4'>
        <div className='main-section'>
          <h2>Unique Value Add</h2>
          <ul>
            <li>Network of Euroepan oncologists</li>
            <li>Network of European KOLs</li>
            <li>Access to proprietary knowledge</li>
            <li>Access to medicines</li>
          </ul>
        </div>
      </div>
      <div className='bg-gray-100 px-4'>
        <div className='main-section'>
        <h2>Leadership</h2>
        <h2>Investors and advisory board</h2>
        </div>
      </div>
    </>
  )
}