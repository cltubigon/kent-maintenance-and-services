import before from './images/Carpet-cleaning-before.width-640.jpg'
import Image from 'next/image'

const ImageBefore = () => {
  return (
    <div className="relative">
      <p
        className={
          'absolute top-3 left-3 bg-primary text-white py-1 px-3 rounded-md shadow-md'
        }
      >
        Before
      </p>
      <Image src={before} alt="Oven After" />
    </div>
  )
}

export default ImageBefore
