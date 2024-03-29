import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

type LeadershipProps = {
  
}

type ProfileType = {
  name: string,
  role: string,
  linkedinProfile?: string,
  imageLocation?: string,
  description: string[],
}

const leaders : ProfileType[] = [
  {
    name: 'Dr. Andreas Penk',
    role: 'CEO',
    linkedinProfile: 'https://www.linkedin.com/in/andreas-penk/',
    imageLocation: '../images/andreas-penk.jpg',
    description: [
      'Andreas holds a degree in humane medicine. He is an inspirational global pharmaceutical industry leader with experience in leading large, complex businesses in Europe, Asia with focus on China and Japan, Australia and Africa/Middle East. He served for many years in executive roles within Pfizer, the last position being President Pfizer China.',
      'As a culturally astute leader he has built successful businesses for Pfizer across the globe.',
      'With more than 15 years of experience in Oncology and being experienced in managing pharmaceutical core functions from clinical development over manufacturing and ommercialization up to access and reimbursement he is a renowned expert in the biopharma field.',
    ]
  },
  {
    name: 'Dr. Thomas Rudolph',
    role: 'Board member and Co-founder',
    linkedinProfile: 'https://www.linkedin.com/in/thomas-rudolph-303995/',
    imageLocation: '../images/thomas-rudolph.jfif',
    description: [
      'TBD',
    ]
  },
]

const investors : ProfileType[] = [
  // {
  //   name: 'Xiaobing Wu, Ph.D',
  //   role: 'Advisor',
  //   linkedinProfile: 'https://www.linkedin.com/in/xiaobing-wu-a60b49b0/',
  //   imageLocation: '../images/wu-xiaobin.jfif',
  //   description: [
  //     'Dr. Wu previously was Country Manager of Pfizer China and the Regional President of Pfizer Essential Health for Greater China from 2009 to 2018.',
  //     'Under Dr. Wu’s leadership, Pfizer expanded its portfolio and organization, significantly grew sales, initiated innovative marketing programs, and established its position as a leading multinational pharmaceutical company in China. Prior to Pfizer, Dr. Wu served as President and Managing Director of Wyeth China and Hong Kong (2004-2009). Before joining Wyeth, Dr. Wu was General Manager of Bayer Healthcare in China (2001-2004). He started his career in 1992 in sales and marketing with Bayer in Germany',
  //     'Dr. Wu has a Ph.D. in biochemistry and pharmacology and a master’s degree in molecular biology from the University of Konstanz in Germany.',
  //   ]
  // },
  {
    name: 'Gilad Myerson',
    role: 'Investor',
    linkedinProfile: 'https://www.linkedin.com/in/gilad-myerson-b096504/',
    imageLocation: '../images/gilad-myerson.jfif',
    description: [
      'Gilad served as the COO of Theramex upon reestablishment of the business as a standalone speciality pharmaceutical company. Theramex is a Pharmaco dedicated to women and their health.',
      'Prior to Theramex Gilad supported the growth of several pharmaceutical companies while at McKinsey & Company.',
    ]
  },
]

type ProfileProps = {
  profile: ProfileType,
}

const Profile = ({profile} : ProfileProps) => (
  <li className='px-4 py-12'>
    <div className="flex w-full items-start" key={profile.name}>
      {
        profile.imageLocation === '../images/andreas-penk.jpg' ? <StaticImage src={'../images/andreas-penk.jpg'} className="w-16 h-16 md:w-24 md:h-24 rounded-lg mr-4" alt={profile.name} />
        : profile.imageLocation === '../images/thomas-rudolph.jfif' ? <StaticImage src={'../images/thomas-rudolph.jfif'} className="w-16 h-16 md:w-24 md:h-24 rounded-lg mr-4" alt={profile.name} />
        : profile.imageLocation === '../images/gilad-myerson.jfif' ? <StaticImage src={'../images/gilad-myerson.jfif'} className="w-16 h-16 md:w-24 md:h-24 rounded-lg mr-4" alt={profile.name} />
        : profile.imageLocation === '../images/wu-xiaobin.jfif' ? <StaticImage src={'../images/wu-xiaobin.jfif'} className="w-16 h-16 md:w-24 md:h-24 rounded-lg mr-4" alt={profile.name} />
        : <img className="w-16 h-16 md:w-24 md:h-24 rounded-lg mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
      }
      <div className="flex-1 px-2">
        <p className="font-bold mb-2">{profile.name}</p>
        <p className="italic mb-2">{profile.role}</p>
        {profile.linkedinProfile !== undefined &&
          <a href={profile.linkedinProfile} target="_blank" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-blue-500 fill-current mt-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
            </svg>
          </a>
        }
      </div>
    </div>
    <div className='mt-4'>
      {profile.description.map(sentance =>
        <p className="text-gray-600 leading-normal mb-2" key={sentance}>
          {sentance}
        </p>
      )}
    </div>
  </li>
)

export default function Leadership({} : LeadershipProps) {
  return (
    <>
      <div className='relative z-10 bg-white px-4 lg:px-[5%]' id='leadership'>
        <div className='main-section'>
          <h2>Leadership</h2>
          <ul className='divide-y divide-gray-400'>
            {leaders.map(leader =>
              <Profile profile={leader} key={leader.name}/>
              )}
          </ul>
          <h2 className='mt-8'>Investors and advisory board</h2>
          <ul className='divide-y divide-gray-400'>
            {investors.map(leader =>
              <Profile profile={leader} key={leader.name}/>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}