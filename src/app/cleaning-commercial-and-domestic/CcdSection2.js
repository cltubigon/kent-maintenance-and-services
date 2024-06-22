import React from 'react'
import Image from 'next/image'
import iron from './images/iron-icon.png'
import brush from './images/brush-icon.png'
import dustpan from './images/dustpan-icon.png'
import hoover from './images/hoover-icon.png'
import house from './images/house-icon.png'
import spray from './images/spray-icon.png'

const CcdSection2 = () => {
  return (
    <div className={'py-10 md:py-[48px] bg-secondary-100'}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 grid grid-cols-2 lg:grid-cols-6 gap-8'
        }
      >
        <div className={'flex flex-col items-center gap-5'}>
          <Image src={iron} alt="iron icon" />
          <p className={''}>Ironing</p>
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <Image src={dustpan} alt="dustpan icon" />
          <p className={''}>Dusting</p>
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <Image src={spray} alt="spray icon" />
          <p className={''}>Polishing</p>
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <Image src={brush} alt="brush icon" />
          <p className={''}>Regular Cleans</p>
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <Image src={hoover} alt="hoover icon" />
          <p className={''}>Vacuuming</p>
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <Image src={house} alt="house icon" />
          <p className={''}>One-off Cleans</p>
        </div>
      </div>
    </div>
  )
}

export default CcdSection2
