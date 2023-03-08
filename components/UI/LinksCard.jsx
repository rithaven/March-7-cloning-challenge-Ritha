import React from 'react'
import Link from 'next/link'

const LinksCard = (props) => {
  return (
    <div className='border border-gray-200 p-4 hover:shadow-xl'>
        <Link className='font-md text-3xl hover:underline hover:text-red-500' href='/'>{props.link}</Link>
    </div>
  )
}

export default LinksCard