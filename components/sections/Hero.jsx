import React from 'react'
import DegreeCard from '../UI/DegreeCard'

const Hero = () => {
  return (
    <div>
        <div className='md:p-20 p-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl m-auto'>
                <div>
                  <h3 className='md:text-5xl text-2xl font-bold mt-10 '>University of Amsterdam</h3>
                  <p className=' md:text-3xl text-base mt-4'>Inspiring generations since 1632.</p>
                </div>
                <div>
                 <div>
                    <img className='w-full object-cover' src="/Student.jpg" alt="" />
                 </div>

                </div>

            </div>
            <div className=' flex-col-1 gap-6 md:flex md:gap-4  md:max-w-6xl m-auto md:-mt-36 '>
              <div>
              <DegreeCard title="Bachelor's" image="/arrow-right.svg" link="20+ English-taught Bachelor's programmes" />
              </div>
              <div>
              <DegreeCard title="Bachelor's" image="/arrow-right.svg" link="20+ English-taught Bachelor's programmes" />
              </div>
              <div>
              <DegreeCard title="Bachelor's" image="/arrow-right.svg" link="20+ English-taught Bachelor's programmes" />
              </div>
            </div>

        </div>
    </div>
  )
}

export default Hero