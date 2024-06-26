import Image from 'next/image'
import React from 'react'
import clean from './images/clean.2e16d0ba.fill-450x450.jpg'
import rinse from './images/rinse.2e16d0ba.fill-450x450.jpg'
import protect from './images/9556176d-8227-48bf-86b3-44f0913badb7_result.jpg'

const PcucSection1a = () => {
  return (
    <div className={'py-10 md:py-[80px] bg-neutral-100 bg-[url("/public-images/texture.png")]'}>
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'font-tinos text-3xl md:text-4xl font-bold text-center'}>
          Give your carpets the deepest clean with Xtraclean
        </p>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 lg:gap-10 md:mt-10'
          }
        >
          <div
            className={
              'flex flex-col gap-5 md:gap-10 text-center bg-secondary text-white p-5 md:p-10 rounded-md shadow-custom2'
            }
          >
            <p className={'text-xl font-bold'}>Clean</p>
            <Image
              src={clean}
              quality={100}
              alt="Clean"
              className="rounded-full size-[221px] mx-auto"
            />
            <p className={''}>
              A deep-rooted vacuum along with specially heat-treated cleaning
              solutions loosens the top layer and embedded dirt.
            </p>
          </div>
          <div
            className={
              'flex flex-col gap-5 md:gap-10 text-center bg-secondary text-white p-5 md:p-10 rounded-md shadow-custom2'
            }
          >
            <p className={'text-xl font-bold'}>Rinse</p>
            <Image
              src={rinse}
              quality={100}
              alt="Rinse"
              className="rounded-full size-[221px] mx-auto"
            />
            <p className={''}>
              A deep-rooted vacuum along with specially heat-treated cleaning
              solutions loosens the top layer and embedded dirt.
            </p>
          </div>
          <div
            className={
              'flex flex-col gap-5 md:gap-10 text-center bg-secondary text-white p-5 md:p-10 rounded-md shadow-custom2'
            }
          >
            <p className={'text-xl font-bold'}>Protect</p>
            <Image
              src={protect}
              quality={100}
              alt="Protect"
              className="rounded-full size-[221px] mx-auto"
            />
            <p className={''}>
              A deep-rooted vacuum along with specially heat-treated cleaning
              solutions loosens the top layer and embedded dirt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PcucSection1a
