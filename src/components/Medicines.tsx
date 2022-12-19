import { useRef, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from "gatsby"

type MedicinesProps = {
  
}

export default function Medicines({} : MedicinesProps) {
  const parallaxRef = useRef(null);

  useEffect(() => { // holy f**king shit chatgpt built this for me!!!
    function handleScroll() {
      if (parallaxRef === null) return
      if (parallaxRef.current === null) return

      // Calculate the scroll position of the page
      const scrollTop = window.pageYOffset - parallaxRef.current.offsetTop;

      // Update the position of the parallax element
      parallaxRef.current.style.transform = `translateY(${scrollTop * 0.2}px)`;
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='h-96 mx-auto' id='medicines'>
        <div className="relative z-0" ref={parallaxRef}>
          <StaticImage
            src={'../images/white-pill-container-blue-background.jpg'}
            alt={'medicines'}
            className={'!absolute object-cover object-top w-full h-96'}
          />
        </div>

        <div className='absolute z-10 w-full h-96 bg-white opacity-80'/>
        <div className='absolute z-20 w-full h-96 px-4 text-center flex justify-center'>
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