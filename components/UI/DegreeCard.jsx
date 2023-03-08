import React from 'react'
import Link from 'next/link'


const DegreeCard = (props) => {
  return (
    <div className='border border-red-400 p-4 w-80 bg-white'>
        <h3 className='text-red-500'>{props.title}</h3>
        <div className='flex  justify-between'>
            <h3>
            {props.link}
            </h3>
        <img className='h-8' src={props.image} alt="" />
        </div>
        

    </div>
  )
}

export default DegreeCard