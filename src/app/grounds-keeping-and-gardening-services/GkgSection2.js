'use client'
import { useState } from 'react'
import { cardData } from './cardData'
import Popup from '../components/Popup'

const GkgSection2 = () => {
  const [popup, setpopup] = useState(null)
  const handleClick = ({ id, description }) => {
    setpopup({ id, description })
  }
  return (
    <div className="pb-10 md:pb-[80px]">
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'
        }
      >
        {/* Icon */}
        {cardData?.map((card, index) => {
          const { id, Icon, name, description } = card
          return (
            <div
              onClick={() => handleClick({ id, description })}
              key={index}
              className={
                'flex flex-col items-center cursor-pointer justify-center gap-2 rounded-lg border-4 border-secondary h-[225px] p-4 hover:text-white hover:bg-secondary hover:shadow-custom1 transition-all duration-300'
              }
            >
              <Icon className="mx-auto" />
              <p className={'text-lg md:text-xl font-bold text-center'}>
                {name}
              </p>
            </div>
          )
        })}
        {popup && (
          <Popup data={{ setpopup }} className="backdrop-blur-[unset]">
            <div className={'py-5 px-5'}>
              <p className={''}>{popup?.description}</p>
            </div>
          </Popup>
        )}
      </div>
    </div>
  )
}

export default GkgSection2
