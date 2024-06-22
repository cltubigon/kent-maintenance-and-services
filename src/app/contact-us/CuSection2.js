import React from 'react'
import Icon_carry from '../components/icons/Icon_carry'
import Icon_check3 from '../components/icons/Icon_check3'
import Icon_close from '../components/icons/Icon_close'

const CuSection2 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'font-tinos text-center text-5xl font-bold'}>
          Why Choose Us
        </p>
        <div
          className={'grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10'}
        >
          <div
            className={
              'flex flex-col gap-3 bg-white rounded-md shadow-md px-8 py-6'
            }
          >
            <Icon_carry className="size-10 mx-auto" />
            <p className={'text-xl font-semibold'}>FULLY TRAINED STAFF</p>
            <p className={'text-paragraph'}>
              We are trained on the latest equipment to assure that the job is
              completed properly and you are 100% satisfied
            </p>
          </div>
          <div
            className={
              'flex flex-col gap-3 bg-white rounded-md shadow-md px-8 py-6'
            }
          >
            <Icon_check3 className="size-10 mx-auto" />
            <p className={'text-xl font-semibold'}>INSURED</p>
            <p className={'text-paragraph'}>
              We are proud to say we are fully liability insured and offer a
              free no obligation quotation.
            </p>
          </div>
          <div
            className={
              'flex flex-col gap-3 bg-white rounded-md shadow-md px-8 py-6'
            }
          >
            <Icon_close className="size-10 mx-auto" />
            <p className={'text-xl font-semibold'}>NO HIDDEN CHARGES</p>
            <p className={'text-paragraph'}>
              You only pay what you are quoted, no extra charge, no hidden
              prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CuSection2
