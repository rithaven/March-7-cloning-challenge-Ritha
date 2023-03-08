import React from 'react'

const Card = (props) => {
  return (
    <div className='border border-gray-300 pb-16 hover:shadow-2xl bg-white  '>
        <div className='gird space-y-3'>
            <div>
            <img className='w-full object-cover h-52' src={props.image} alt="" />
            </div>
            <div className='pl-4'>
                <h3 className='font-bold text-2xl hover:underline hover:text-red-500' >{props.title}</h3>
            </div>
            <div className=''>
                <p className='text-md pl-4 text-ellipsis overflow-hidden '>{props.description}</p>
            </div>

        </div>

    </div>
  )
}

export default Card