import { Link } from 'gatsby';
import React from 'react';

type FooterProps = {

}

export default function Footer({} : FooterProps) {
  return (
    <footer id='footer' className='bg-neutral-800'>
      <div className='text-white text-center px-4 py-10'>
        <Link to={'/'} >
          Terms of use
        </Link>
        {'  |  '}
        <Link to={'/'} >
          Privacy policy
        </Link>
      </div>
      <div className='px-4 py-10'>
        <div className='text-center text-white'>
          Copyright © 2022 All rights reserved by European Biopharma Therapeutics Ltd
        </div>
    </div>
  </footer>
  )
}