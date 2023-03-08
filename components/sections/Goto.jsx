import React from 'react'
import LinksCard from '../UI/LinksCard'

const Goto = () => {
  return (
    <div className='bg-white p-32'>
        <div className=''>
            <h3 className='text-4xl font-bold pb-6'>GO TO:</h3>
            <div className='grid grid-cols-3 gap-4'>
             <LinksCard link="Alumni" />
             <LinksCard link="PhD" />
             <LinksCard link="Working at the UvA" />
             <LinksCard link="UvA Experts" />
             <LinksCard link="Staff website" />
             <LinksCard link="Student website" />
            </div>
        </div>
    </div>
  )
}

export default Goto