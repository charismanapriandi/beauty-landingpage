import React from 'react'
import Image from 'next/image'
import { Button, Gap } from '../../atoms'

const AboutUsCard = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1 relative">
        <Image 
          alt="aboutus"
          src="/images/aboutus.png"
          width={617}
          height={556}
          objectFit="contain"
        />
      </div>
      <div className="flex-1 relative z-10">
        <div className="-ml-10">
          <div className="flex items-center">
            <div className="h-0.5 w-14 mr-4 bg-custom-cream-400" />
            <p className="text-sm font-bold text-custom-cream-400">ABOUT US</p>
          </div>
          <Gap height={10} />
          <h1 className="font-bold text-5xl font-playfair">Beauty is power, a smile is the sword</h1>
        </div>
        <Gap height={20} />
        <div className="p-16">
          <div className="border-t border-1 w-full" />
          <Gap height={24} />
          <p className="">Beauty aesthetic beauty clinic that carries the concept of Natural Ingredient with High Technology namely facial care systems, hair care to body treatments using natural ingredients that are synergized with the use of modern technology at affordable prices.</p>
          <Gap height={50} />
          <Button
            label={'READ MORE'}
            primaryOutline
            withIcon
            icon={
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z" fill="#CFB573"/>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUsCard
