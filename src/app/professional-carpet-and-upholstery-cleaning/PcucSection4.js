import React from 'react'
import { ReactCompareSlider } from 'react-compare-slider'
import ImageAfter from './comparison/ImageAfter'
import ImageBefore from './comparison/ImageBefore'

const PcucSection4 = () => {
  return (
    <div className={'py-10 md:py-[80px] bg-neutral-100 bg-[url("/public-images/texture.png")]'}>
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'font-tinos text-3xl md:text-4xl font-bold text-center'}>
          See the difference Xtraclean make
        </p>
        <ReactCompareSlider
          className="w-fit mx-auto mt-10"
          itemOne={<ImageBefore />}
          itemTwo={<ImageAfter />}
        />
      </div>
    </div>
  )
}

export default PcucSection4
