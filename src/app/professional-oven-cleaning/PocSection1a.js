import Image from 'next/image'
import React from 'react'
import Aga from './images/price-card-svg--aga.png'
import doubleOven from './images/price-card-svg--double-oven.png'
import electricHob from './images/price-card-svg--electric-hob.png'
import gasHob from './images/price-card-svg--gas-hob.png'
import hoods from './images/price-card-svg--hoods.png'
import range from './images/price-card-svg--range.png'
import singleOven from './images/price-card-svg--single-oven.png'

const PocSection1a = () => {
  return (
    <div className="py-10 md:py-[80px] bg-secondary-100">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'text-center font-tinos text-3xl md:text-4xl font-bold'}>
          Professional Oven Cleaning Services
        </p>
        <div className={'flex justify-center flex-wrap gap-y-10 mt-10'}>
          <div className={'w-[33%] lg:w-[25%]'}>
            <Image className="mx-auto" src={singleOven} alt="single oven" />
            <p className={'text-center'}>Single Oven</p>
          </div>

          <div className={'w-[33%] lg:w-[25%]'}>
            <Image className="mx-auto" src={doubleOven} alt="double oven" />
            <p className={'text-center'}>Double Oven</p>
          </div>
          <div className={'w-[33%] lg:w-[25%]'}>
            <Image className="mx-auto" src={electricHob} alt="electric hob" />
            <p className={'text-center'}>Electric Hob</p>
          </div>
          <div className={'w-[33%] lg:w-[25%]'}>
            <Image className="mx-auto" src={gasHob} alt="gas hob" />
            <p className={'text-center'}>Gas Hob</p>
          </div>

          <div className={'w-[33%] lg:w-[25%]'}>
            <Image className="mx-auto" src={hoods} alt="hoods" />
            <p className={'text-center'}>Hood</p>
          </div>

          <div className={'w-[33%] lg:w-[25%]'}>
            <Image className="mx-auto" src={range} alt="range" />
            <p className={'text-center'}>Range</p>
          </div>

          <div className={'w-[33%] lg:w-[25%]'}>
            <Image className="mx-auto" src={Aga} alt="aga" />
            <p className={'text-center'}>AGA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PocSection1a
