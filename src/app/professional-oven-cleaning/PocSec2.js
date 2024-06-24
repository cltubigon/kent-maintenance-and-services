'use client'
import React from 'react'
import { ReactCompareSlider } from 'react-compare-slider'
import ImageBefore from './images/comparison/ImageBefore'
import ImageAfter from './images/comparison/ImageAfter'

const PocSec2 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'text-center font-tinos text-3xl md:text-4xl font-bold'}>
          Swipe to see the results yourself
        </p>
        <ReactCompareSlider
          className="max-w-[800px] mx-auto mt-10"
          itemOne={<ImageBefore />}
          itemTwo={<ImageAfter />}
        />
      </div>
    </div>
  )
}

export default PocSec2
