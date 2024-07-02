import React from 'react'


export default function NavMarQ() {
  return (
    <div>
      <marquee behavior="scroll" direction="left" scrollamount="4" >
       <div className='pt-1'>
         <strong>Latest News:</strong> <span className=" pl-10 "> "Join us for our Annual Orthopedic Conference  " </span>
         <span className='pl-10'>"Free Treatment for Ayushman and Golden Card Holders"</span>
                   <span className='pl-10'>" 24x7 Service Available "</span>
                   <span className='pl-10'> "skilled medical professionals and qualified nurses"</span>
                   <span className='pl-10'> "Intensive care unit is outfitted with specifically built beds, a central oxygen supply, and contemporary ventilators"</span>
                   <span className='pl-10'> "Experts in complicated trauma, infected fracture non-union, bone and joint specialization"</span>
            </div>      
         </marquee>
       
    </div>
  )
}
