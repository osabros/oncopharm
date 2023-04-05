import React from 'react';

type ContactProps = {
  
}

const PhoneIcon = () => (
  <div className='w-6 h-6'>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 122.88 122.27">
      <g>
        <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
      </g>
    </svg>
  </div>
)

const LocationIcon = () => (
  <div className='w-6 h-6'>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 122.88 117.55" >
      <g>
        <path style={{fillRule: 'evenodd', clipRule: 'evenodd'}} d="M78.81,82.78c-4.35,4.77-9.42,9.05-15.12,12.51c-0.7,0.51-1.65,0.58-2.43,0.08 c-8.41-5.35-15.48-11.78-21.03-18.76c-7.66-9.61-12.49-20.27-14.14-30.53c-1.68-10.41-0.11-20.42,5.07-28.56 c2.04-3.22,4.65-6.15,7.83-8.68C46.3,3.01,54.65-0.06,62.96,0c8.01,0.06,15.91,3.05,22.74,9.28c2.4,2.18,4.42,4.68,6.07,7.39 c5.57,9.17,6.77,20.87,4.32,32.73c-2.41,11.71-8.41,23.62-17.28,33.35V82.78L78.81,82.78L78.81,82.78z M25.32,74.54 c1.98,0,3.59,1.61,3.59,3.59c0,1.98-1.61,3.59-3.59,3.59h-6.74l-8.88,28.67h103.22l-9.64-28.67h-5.57c-1.98,0-3.59-1.61-3.59-3.59 c0-1.98,1.61-3.59,3.59-3.59h10.7l14.46,43.01H0l13.32-43.01H25.32L25.32,74.54z M61.38,18.51c9.88,0,17.88,8.01,17.88,17.87 c0,9.88-8.01,17.88-17.88,17.88c-9.88,0-17.87-8-17.87-17.88C43.49,26.51,51.5,18.51,61.38,18.51L61.38,18.51L61.38,18.51z"/>
      </g>
    </svg>
  </div>
)

export default function Contact({} : ContactProps) {
  return (
    <>
      <div className='bg-gray-100 px-4 lg:px-[5%]' id='contact'>
        <div className='main-section'>
          <h2>Contact</h2>
            <div className='md:grid md:grid-cols-2'>
              <div className='py-4 md:mx-auto'>
                <h3>European Office - Germany</h3>
                <div className='flex gap-4 items-start'>
                  <LocationIcon />
                  <p className='h-36'>
                    Friedrichstraße 43-45<br/>
                    Berlin<br/>
                    10117<br/>
                    Germany<br/>
                  </p>
                </div>
                <div className='flex gap-4 items-center'>
                  <PhoneIcon />
                  <a href='tel:491755710544' target="_blank" rel="noopener noreferrer">
                    +49 175 5710544
                  </a>
                </div>
                <div className='w-80 h-80 border border-solid border-gray-700 rounded-lg my-6'>
                  <iframe className=' rounded-lg' width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Friedrichstra%C3%9Fe%2043-45+(EBT%20Germany)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
              </div>
              <div className='py-4 md:mx-auto'>
                <h3>R&D Office – Israel</h3>
                <div className='flex gap-4 items-start'>
                  <LocationIcon />
                  <p className='h-36'>
                    C3<br/>
                    Haarbaa 28<br/>
                    Tel Aviv<br/>
                    6473925<br/>
                    Israel<br/>
                  </p>
                </div>
                <div className='flex gap-4 items-center'>
                  <PhoneIcon />
                  <a href='tel:972522221193' target="_blank" rel="noopener noreferrer">
                    +972 52-2221193
                  </a>
                </div>
                <div className='w-80 h-80 border border-solid border-gray-700 rounded-lg my-6'>
                  <iframe className='rounded-lg' width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Haarbaa%2028%20Tel%20aviv+(EBT%20Israeli)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}