import React from 'react'
import PcucCircledNumber from './PcucCircledNumber'
import Image from 'next/image'
import extraction from './images/extraction.png'
import stainRemoval from './images/spot-and-stain-removal.png'
import vacuuming from './images/vacuuming.png'
import protection from './images/protection.png'
import Button from '../components/Button'
import Link from 'next/link'

const PcucSection2 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'font-tinos text-3xl md:text-4xl font-bold text-center'}>
          The Four Seasons Of Garden Care
        </p>
        <div
          className={
            'grid grid-cols-2 lg:grid-cols-4 gap-y-[120px] md:gap-y-[220px] lg:gap-y-[unset] gap-10 md:mt-[200px] lg:mt-[170px] mt-[100px]'
          }
        >
          <div className={'text-center'}>
            <div className={'relative'}>
              <Image
                src={vacuuming}
                quality={100}
                alt="Hot water extraction"
                className="absolute bottom-14 right-0 left-0 mx-auto -z-10 max-sm:max-w-[90px] lg:max-w-[110px] max-w-[153px]"
              />
              <PcucCircledNumber
                numberstyle="md:text-3xl font-semibold"
                className="md:size-20 mx-auto after:lg:w-16 after:lg:h-[2px] after:lg:bg-secondary after:lg:absolute after:lg:-right-[26%] after:xl:-right-[20%] bg-white z-10"
              >
                1
              </PcucCircledNumber>
            </div>
            <p className={'md:text-xl font-bold mt-5 lg:mt-7 xl:mt-10'}>
              Deep pile vacuuming
            </p>
          </div>
          <div className={'text-center'}>
            <div className={'relative'}>
              <Image
                src={stainRemoval}
                quality={100}
                alt="Hot water extraction"
                className="absolute bottom-14 right-0 left-0 mx-auto -z-10 max-sm:max-w-[90px] lg:max-w-[110px] max-w-[153px]"
              />
              <PcucCircledNumber
                numberstyle="md:text-3xl font-semibold"
                className="md:size-20 mx-auto after:lg:w-16 after:lg:h-[2px] after:lg:bg-secondary after:lg:absolute after:lg:-right-[26%] after:xl:-right-[20%] bg-white z-10"
              >
                2
              </PcucCircledNumber>
            </div>
            <p className={'md:text-xl font-bold mt-5 lg:mt-7 xl:mt-10'}>
              Spot & stain removal
            </p>
          </div>
          <div className={'text-center'}>
            <div className={'relative'}>
              <Image
                src={extraction}
                quality={100}
                alt="Hot water extraction"
                className="absolute bottom-14 right-0 left-0 mx-auto -z-10 max-sm:max-w-[90px] lg:max-w-[110px] max-w-[153px]"
              />
              <PcucCircledNumber
                numberstyle="md:text-3xl font-semibold"
                className="md:size-20 mx-auto after:lg:w-16 after:lg:h-[2px] after:lg:bg-secondary after:lg:absolute after:lg:-right-[26%] after:xl:-right-[20%] bg-white z-10"
              >
                3
              </PcucCircledNumber>
            </div>
            <p className={'md:text-xl font-bold mt-5 lg:mt-7 xl:mt-10'}>
              Hot water extraction
            </p>
          </div>
          <div className={'text-center'}>
            <div className={'relative'}>
              <Image
                src={protection}
                quality={100}
                alt="Hot water extraction"
                className="absolute bottom-14 right-0 left-0 mx-auto -z-10 max-sm:max-w-[90px] lg:max-w-[110px] max-w-[153px]"
              />
              <PcucCircledNumber
                numberstyle="md:text-3xl font-semibold"
                className="md:size-20 mx-auto bg-white z-10"
              >
                4
              </PcucCircledNumber>
            </div>
            <p className={'md:text-xl font-bold mt-5 lg:mt-7 xl:mt-10'}>
              Protection
            </p>
            <p className={'text-sm italic font-semibold'}>extra costs apply</p>
          </div>
        </div>
        <div className={'w-fit mx-auto'}>
          <Link href={'/contact-us'}>
            <Button className="mt-16">Get a quote</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PcucSection2
