import React from 'react'
import Image from 'next/image'
import { Gap } from '../../atoms'

const ProductCard = ({ src, alt}) => {
  return (
    <div className="relative w-auto h-96 group overflow-hidden">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 py-6 bg-opacity-70 backdrop-filter backdrop-blur-md w-full px-5 bg-white bottom-0 -mb-36 group-hover:mb-0 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-custom-gray font-playfair">Body Product</p>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM23.5303 6.53033C23.8232 6.23744 23.8232 5.76257 23.5303 5.46967L18.7574 0.696701C18.4645 0.403807 17.9896 0.403807 17.6967 0.696701C17.4038 0.989594 17.4038 1.46447 17.6967 1.75736L21.9393 6L17.6967 10.2426C17.4038 10.5355 17.4038 11.0104 17.6967 11.3033C17.9896 11.5962 18.4645 11.5962 18.7574 11.3033L23.5303 6.53033ZM1 6.75L23 6.75L23 5.25L1 5.25L1 6.75Z" fill="#2C302D"/>
          </svg>
        </div>
        <Gap height={10} />
        <p style={{color: '#6F6F6F'}}>maintain and care for the beauty and health of the body</p>
      </div>
    </div>
  )
}

export default ProductCard
