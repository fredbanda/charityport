import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
  <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
    <div className="hero-map" />

    {/* HERO LEFT SIDE */}
    <div className="relative z-20 flex flex-1 flex-col xl:w1/2">
      <Image 
      src={"/camp.svg"}
      alt='camp'
      width={50}
      height={50}
      className='absolute left-[-5px] top-[-30px] w-10 lg:w[50px]'
      />
    
    <h1 className='bold-52 lg:bold-88'>Bridging the digital divide in South Africa</h1>
    <p className="regular-16 text-gray-30 mx:max-w[520px] mt-6" >
    Welcome to CharityPort, dedicated to bridging the digital divide in South Africa. Our organization is committed to providing a helping hand to those who lack access to computers due to financial constraints. Through generous donations of used computers and laptops, we aim to empower individuals by granting them the essential tools for education, employment, and connectivity. Join us in our mission to create equal opportunities and make technology an accessible resource for all, unlocking a brighter future for South Africans in need.
    </p>

    <div className="my-11 flex flex-wrap gap-5">
      <div className="flex items-center gap-2">
        {Array(5).fill(0).map((_, index) => (
        <Image 
        src="/star.svg"
        key={index}
        alt='star'
        width={24}
        height={24}
        />
        ))}
        </div>
        <p className="bold-16 lg:bold-20 text-blue-70">
          198k
          <span className=" text-bold lg:regular-20 text-green-500 ml-1 ">Excellent Reviews</span>
        </p>
      </div>
    </div>
  </section>
  )
}

export default Hero
