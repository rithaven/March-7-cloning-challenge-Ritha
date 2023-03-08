import React from 'react'
import DegreeCard from '../UI/DegreeCard'

const Hero = () => {
  return (
    <div>
        <div className=' p-20'>
            <div className='grid grid-cols-2 gap-4 max-w-6xl m-auto'>
                <div>
                  <h3 className='text-5xl font-bold mt-10 '>University of Amsterdam</h3>
                  <p className='text-3xl mt-4'>Inspiring generations since 1632.</p>
                </div>
                <div>
                 <div>
                    <img className='w-full object-cover' src="/Student.jpg" alt="" />
                 </div>

                </div>

            </div>
            <div className='flex gap-4  max-w-6xl m-auto -mt-36 '>
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