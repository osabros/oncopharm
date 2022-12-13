import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

type HomeProps = {
  
}

export default function Home({} : HomeProps) {
  return (
    <>
      <div className="h-128">
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '0'}}>
          <StaticImage src={'../images/slide-1.jpg'} alt={'slide-1'} className={'!absolute object-cover object-center w-full h-128'} />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '5s'}}>
          <StaticImage src={'../images/slide-2.jpg'} alt={'slide-2'} className={'!absolute object-cover object-center w-full h-128'} />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '10s'}}>
          <StaticImage src={'../images/slide-3.jpg'} alt={'slide-3'} className={'!absolute object-cover object-center w-full h-128'} />
        </div>
        <div className="animate-image-repeated-fade z-0" style={{animationDelay: '15s'}}>
          <StaticImage src={'../images/slide-4.jpg'} alt={'slide-4'} className={'!absolute object-cover object-center w-full h-128'} />
        </div>
        <div className='absolute z-10 w-full h-128 bg-white opacity-80'/>
        <div className='absolute z-20 w-full h-128 px-4 flex justify-center'>
          <div className='main-section my-auto text-center'>
            <h1>European<br/>Biopharma<br/>Therapeutics</h1>
            <p className='text-xl'>We are an innovation driven biopharmaceutical company headquartered in Germany and Israel.</p>
          </div>
        </div>
      </div>

      <div className='bg-white px-4' id='home'>
        <div className='main-section'>
          <h2>Our Mission</h2>
          <p><b>Precision Medicine:</b> Deliver the right life-saving medications to the right patients.</p>
        </div>
      </div>
    </>
  )
}