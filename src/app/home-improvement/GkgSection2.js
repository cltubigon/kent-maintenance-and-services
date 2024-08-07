'use client'
import { useState } from 'react'
import { cardData } from './cardData'
import Popup from '../components/Popup'
import Image from 'next/image'

const GkgSection2 = () => {
  const [popup, setpopup] = useState(null)
  const [hovered, sethovered] = useState(null)
  const handleClick = (id) => {
    setpopup(id)
  }

  const NewDescription = cardData?.find((item) => item?.id === popup)
  const DescComponent = NewDescription?.Description

  return (
    <div className="pb-10 md:pb-[80px]">
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'
        }
      >
        {cardData?.map((card, index) => {
          const { id, imgSrc, name } = card
          return (
            <div
              onClick={() => handleClick(id)}
              onMouseEnter={() => sethovered(id)}
              onMouseLeave={() => sethovered(null)}
              key={index}
              className={
                'flex flex-col items-center cursor-pointer justify-center gap-2 rounded-lg border-4 border-secondary h-[225px] p-4 hover:bg-secondary hover:text-white transition-all duration-300'
              }
            >
              <Image
                src={hovered === id ? imgSrc.white : imgSrc.dark}
                quality={100}
                alt={name}
              />
              <p className={'text-lg md:text-xl font-bold text-center'}>
                {name}
              </p>
            </div>
          )
        })}
        {popup && (
          <Popup
            data={{ setpopup, modalContainer: 'max-w-[850px]' }}
            className="backdrop-blur-[unset]"
          >
            <div className={'py-5 px-5'}>
              <DescComponent />
            </div>
          </Popup>
        )}
      </div>
    </div>
  )
}

export default GkgSection2
