import React from 'react'
import after from '../oven-compare-clean-1024x576.jpg'
import Image from 'next/image'

const ImageAfter = () => {
  return (
    <div className="relative">
      <p className={'absolute top-3 right-3 bg-primary text-white py-1 px-3 rounded-md shadow-md'}>
        After
      </p>
      <Image src={after} alt="Oven After" />
    </div>
  )
}

export default ImageAfter
