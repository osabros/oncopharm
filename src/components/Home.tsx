import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

type HomeProps = {
  
}

export default function Home({} : HomeProps) {
  return (
    <>
      <div className="w-full h-128 inline-block overflow-hidden">
        <div className="relative animate-image-repeated-fade z-0 w-full h-128" style={{animationDelay: '0s'}}>
          <StaticImage src={'../images/slide-1.jpg'} alt={'slide-1'} className={'object-cover object-center max-w-full h-full'} />
        </div>
        <div className="relative animate-image-repeated-fade z-0 w-full h-128" style={{animationDelay: '-5s', bottom: '100%'}}>
          <StaticImage src={'../images/slide-2.jpg'} alt={'slide-2'} className={'object-cover object-center max-w-full h-full'} />
        </div>
        <div className="relative animate-image-repeated-fade z-0 w-full h-128" style={{animationDelay: '-10s', bottom: '200%'}}>
          <StaticImage src={'../images/slide-3.jpg'} alt={'slide-3'} className={'object-cover object-center max-w-full h-full'} />
        </div>
        <div className="relative animate-image-repeated-fade z-0 w-full h-128" style={{animationDelay: '-15s', bottom: '300%'}}>
          <StaticImage src={'../images/slide-4.jpg'} alt={'slide-4'} className={'object-cover object-center max-w-full h-full'} />
        </div>
        <div className='relative z-10 w-full h-128 bg-white opacity-80' style={{bottom: '400%'}}/>
        <div className='relative z-20 w-full h-128 px-4 flex justify-center' style={{bottom: '500%'}}>
          <div className='main-section my-auto text-center'>
            <h1>European<br/>Biopharma<br/>Therapeutics</h1>
            <p className='text-xl'>We are an innovation driven biopharmaceutical company headquartered in Germany and Israel.</p>
          </div>
        </div>
      </div>

      <div className='relative bg-white px-4' id='home'>
        <div className='main-section'>
          <h2>Our Mission</h2>
          <p><b>Precision Medicine:</b> Deliver the right life-saving medications to the right patients.</p>
        </div>
      </div>
    </>
  )
}