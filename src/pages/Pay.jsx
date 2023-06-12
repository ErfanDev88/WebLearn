import React from 'react'
import pay from '../assets/png/pay.svg'
import { Link } from 'react-router-dom'

function Pay() {
  return (
    <div className='w-full flex flex-col justify-between items-center mt-16'>
      <h1 data-aos="fade" className='text-6xl font-black text-white text-center leading-relaxed md:leading-normal md:text-start'>این سرویس بزودی فعال میشه!</h1>
        <img data-aos="zoom-in" src={pay} alt="این سرویس بزودی فعال میشود!" className='w-[900px]'/>
        <Link to={'/'} className='p-3 rounded-xl bg-[#E44C2B] text-base font-medium text-white'>بازگشت به خانه</Link>
    </div>
  )
}

export default Pay