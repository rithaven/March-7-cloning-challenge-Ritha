import Link from 'next/link'
import React from 'react'
import { icons } from 'react-icons'

const FooterLinks = (props) => {
  return (
    <div className='p-4'>
        <h3 className='mb-4'>{props.title}</h3>
        <div className='grid'>
          {
            [
            {
                icons:"/chevron-right.svg",
               link:"Bachelor's programmes"
            },
            {
                icons:"/chevron-right.svg",
                link:"one"
             },
             {
                icons:"/chevron-right.svg",
                link:"two"
             },
             {
                icons:"/chevron-right.svg",
                link:"Bachelor's programmes"
             },
             {
                icons:"/chevron-right.svg",
                link:"Bachelor's programmes"
             },
             {
                icons:"/chevron-right.svg",
                link:"Bachelor's programmes"
             },
             {
                icons:"/chevron-right.svg",
                link:"Bachelor's programmes"
             },
             {
                icons:"/chevron-right.svg",
                link:"Bachelor's programmes"
             },
             {
                icons:"/chevron-right.svg",
                link:"Bachelor's programmes"
             },
                
            ].map((props,key)=>{
                return(
                    <div key={key} className="flex">
                       <img className='h-6' src={props.icons} alt="" />
                       <Link href=''>{props.link}</Link>
                    </div>
                )
            })
          }
        </div>

    </div>
  )
}

export default FooterLinks