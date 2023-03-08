import Link from 'next/link'
import React from 'react'
import { icons } from 'react-icons'

const FooterLinks = (props) => {
  return (
    <div className='p-6'>
        <h3 className='mb-4'>{props.title}</h3>
        <div className='grid pb-8 '>
          {
            [
            {
                icons:"/chevron-right.svg",
               link:"Bachelor's programmes"
            },
            {
                icons:"/chevron-right.svg",
                link:"Minors"
             },
             {
                icons:"/chevron-right.svg",
                link:"Master's programmes"
             },
             {
                icons:"/chevron-right.svg",
                link:"Professional development"
             },
             {
                icons:"/chevron-right.svg",
                link:"Exchange"
             },
             {
                icons:"/chevron-right.svg",
                link:"Summer School"
             },
             {
                icons:"/chevron-right.svg",
                link:"PhD at UvA"
             },
             {
                icons:"/chevron-right.svg",
                link:"Research at UvA"
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