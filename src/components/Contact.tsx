import React from 'react';

type ContactProps = {
  
}

export default function Contact({} : ContactProps) {
  return (
    <>
      <div className='bg-white px-4'>
        <div className='main-section'>
          <h2>Contact</h2>
            <div className='md:grid md:grid-cols-2'>
              <div className='py-6'>
                <h3>Germany</h3>
                <p className='h-36'>
                  Friedrichstraße 43-45<br/>
                  Berlin<br/>
                  10117<br/>
                  Germany<br/>
                </p>
                <a href='tel:491755710544' target="_blank" rel="noopener noreferrer">+49 175 5710544</a>
                <div className='w-80 h-80 border border-solid border-black my-6'>
                  <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Friedrichstra%C3%9Fe%2043-45+(EBT%20Germany)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
              </div>
              <div className='py-6'>
                <h3>Israel</h3>
                <p className='h-36'>
                  C3<br/>
                  Haarbaa 28<br/>
                  Tel Aviv<br/>
                  6473925<br/>
                  Israel<br/>
                </p>
                <a href='tel:972522221193' target="_blank" rel="noopener noreferrer">+972 52-2221193</a>
                <div className='w-80 h-80 border border-solid border-black my-6'>
                  <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Haarbaa%2028%20Tel%20aviv+(EBT%20Israeli)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}