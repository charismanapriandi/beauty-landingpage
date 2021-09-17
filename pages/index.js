import React from 'react'
import { Button, ButtonIcon, Gap } from '../components/atoms'
import { AboutUsCard, Container, Navigation, ProductCard } from '../components/molecules'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const products = [
  {
    id: 1,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_1.png'
  },
  {
    id: 2,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_2.png'
  },
  {
    id: 3,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_3.png'
  },
  {
    id: 4,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_4.png'
  },
  {
    id: 5,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_1.png'
  },
  {
    id: 6,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_2.png'
  },
  {
    id: 7,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_3.png'
  },
  {
    id: 8,
    title: 'body Product',
    body: 'maintain and care for the beauty and health of the body',
    image: '/images/product_4.png'
  }
]

const index = () => {
  
  return (
    <div>
      <Navigation />
      <section className="bg-custom-cream-100 flex items-center justify-between h-screen relative overflow-hidden">
        <Container>

          {/* <div className="flex justify-between"> */}
            {/* left */}
            {/* <div className=" h-screen items-center justify-between"> */}
              <div className="flex-1 mx-4">
                <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl leading-relaxed font-playfair">
                  Beautiful people <br />
                  deserve beautiful <br />
                  cosmetics.
                </h1>
                <Gap height={10} />
                <p className="leading-relaxed" style={{color: "#6F6F6F"}}>We provide cosmetic product that use natural ingredient with <br />high technology treatment services with best quality.</p>
                <Gap height={50} />
                <Button
                  label="SEE PRODUCT"
                  icon={
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z" fill="white"/>
                    </svg>
                  }
                  withIcon
                  primary
                />
                <div className="flex items-center absolute bottom-10">
                  <div className="relative flex justify-center items-center">
                    <div className={`absolute bg-gradient-to-t from-custom-cream-100 opacity-40 to-custom-cream-400 w-10 h-10 rounded-full flex justify-center items-center`}/>
                    <span >
                      <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1L6.75 1ZM5.46967 17.5303C5.76256 17.8232 6.23744 17.8232 6.53033 17.5303L11.3033 12.7574C11.5962 12.4645 11.5962 11.9896 11.3033 11.6967C11.0104 11.4038 10.5355 11.4038 10.2426 11.6967L6 15.9393L1.75736 11.6967C1.46447 11.4038 0.989593 11.4038 0.6967 11.6967C0.403806 11.9896 0.403806 12.4645 0.6967 12.7574L5.46967 17.5303ZM5.25 1L5.25 17L6.75 17L6.75 1L5.25 1Z" fill="#CFB573"/>
                      </svg>
                    </span>
                  </div>
                  <p className="ml-6 font-bold uppercase text-custom-cream-400">Explore more</p>
                </div>
              </div>

              {/* right */}
              
              <div className="hidden lg:block absolute -bottom-2 lg:right-10 xl:right-20" style={{height: '605.88px', width: '637px'}}>
                <Image 
                  src={'/images/header.png'}
                  layout="fill"
                  objectFit={'contain'}
                  alt="header"
                />
              </div>
          {/* </div> */}
          <div className="sm:absolute relative z-10 mt-10 sm:mt-0 shadow sm:shadow-none mx-auto sm:mx-0 right-0 bottom-0 p-7 backdrop-blur-md backdrop-filter bg-opacity-50 bg-white max-w-md sm:w-96">
            <div className="bg-custom-cream-400 absolute w-7 h-7 flex justify-center items-center rounded-full -top-4">
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29074 0C5.81382 0.816092 5.4902 1.67816 5.31988 2.58621C5.14955 3.49425 5.13252 4.3908 5.26878 5.27586C5.40504 6.16092 5.68892 7.0115 6.12041 7.82759C6.55191 8.64368 7.12534 9.36782 7.84071 10L8.76048 9.39655C8.9308 9.29311 9.01029 9.16092 8.99894 9C8.97623 8.82759 8.91945 8.68966 8.82861 8.58621C8.53338 8.21839 8.28356 7.77586 8.07917 7.25862C7.86342 6.72989 7.72716 6.16667 7.67039 5.56896C7.60225 4.95977 7.63064 4.33333 7.75555 3.68966C7.8691 3.04598 8.10188 2.42529 8.45389 1.82759C8.60151 1.58621 8.64693 1.37356 8.59015 1.18966C8.52202 0.994252 8.38008 0.850574 8.16433 0.758621L6.29074 0ZM1.1128 0C0.635886 0.816092 0.312265 1.67816 0.141938 2.58621C-0.028389 3.49425 -0.0454216 4.3908 0.0908403 5.27586C0.227101 6.16092 0.51098 7.0115 0.942474 7.82759C1.37397 8.64368 1.9474 9.36782 2.66278 10L3.58254 9.39655C3.75287 9.29311 3.83235 9.16092 3.821 9C3.79829 8.82759 3.74151 8.68966 3.65067 8.58621C3.35544 8.21839 3.10563 7.77586 2.90123 7.25862C2.68549 6.72989 2.54922 6.16667 2.49245 5.56896C2.42432 4.95977 2.45271 4.33333 2.57761 3.68966C2.69116 3.04598 2.92394 2.42529 3.27595 1.82759C3.42357 1.58621 3.46899 1.37356 3.41221 1.18966C3.34408 0.994252 3.20214 0.850574 2.9864 0.758621L1.1128 0Z" fill="white"/>
              </svg>
            </div>
            <p className="text-sm">Beauty is a spa and beauty place that sales cusmetic product and serves the best quality with professionals</p>
          </div>
        </Container>
      </section>

      {/*  */}

      <section>
        <div className="hidden sm:block"><Gap height={110} /></div>
        <div className="sm:hidden"><Gap height={50} /></div>
        <Container>
          <AboutUsCard />
        </Container>
        <div className="hidden sm:block"><Gap height={110} /></div>
        <div className="sm:hidden"><Gap height={50} /></div>
      </section>

      {/*  */}

      <section className="bg-gradient-to-t from-transparent to-custom-cream-200 h-screen">
        <div className="hidden sm:block"><Gap height={110} /></div>
        <div className="sm:hidden"><Gap height={50} /></div>
        <Container>
          <div className="mx-4">
            <div className="flex items-center">
              <div className="h-0.5 w-14 mr-4 bg-custom-cream-400" />
              <p className="text-sm font-bold text-custom-cream-400">PRODUCT</p>
            </div>
            <Gap height={10} />
            <div className="flex justify-between items-end">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair leading-relaxed w-2/3 sm:w-1/2">Beauty is power, a smile is the sword</h1>
              <div className="hidden sm:block">
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
              <div className="sm:hidden">
                <ButtonIcon
                  primaryOutline
                  icon={
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z" fill="#CFB573"/>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:block"><Gap height={60} /></div>
          <div className="sm:hidden"><Gap height={30} /></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4">
            {
              products.map(product => {
                return (
                  <ProductCard
                    key={product.id}
                    src={product.image}
                  />
                )
              })
            }
          </div>
        </Container>
      </section>
      
      {/* <div>
        <div className="w-10 h-10 fixed z-50 bottom-10 right-10 bg-green-600 sm:bg-red-400 md:bg-blue-400 lg:bg-yellow-500 xl:bg-purple-400 2xl:bg-gray-600">
            <p className="font-bold text-white sm:hidden">null</p>
            <p className="font-bold text-white hidden sm:block md:hidden">sm</p>
            <p className="font-bold text-white hidden md:block lg:hidden">md</p>
            <p className="font-bold text-white hidden lg:block xl:hidden">lg</p>
            <p className="font-bold text-white hidden xl:block 2xl:hidden">xl</p>
            <p className="font-bold text-white hidden 2xl:block">2xl</p>
        </div>
      </div> */}
    </div>
  )
}

export default index
