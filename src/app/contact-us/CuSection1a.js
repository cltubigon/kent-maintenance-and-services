import React from 'react'
import Icon_map from '../components/icons/Icon_map'

const CuSection1a = () => {
  return (
    <div className="py-10 md:py-[80px] bg-neutral-50">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'font-tinos text-center text-4xl md:text-5xl font-bold'}>
          Areas We Cover
        </p>
        <div className={'grid grid-cols-2 md:grid-cols-3 mt-10 text-xl'}>
          <div
            className={
              'flex w-[160px] mx-auto gap-2 items-center max-sm:py-3 md:p-4'
            }
          >
            <Icon_map className="min-w-6 max-w-6" />
            <p className={''}>Sittingbourne</p>
          </div>
          <div
            className={
              'flex w-[160px] mx-auto gap-2 items-center max-sm:py-3 md:p-4'
            }
          >
            <Icon_map className="min-w-6 max-w-6" />
            <p className={''}>Sheerness</p>
          </div>
          <div
            className={
              'flex w-[160px] mx-auto gap-2 items-center max-sm:py-3 md:p-4'
            }
          >
            <Icon_map className="min-w-6 max-w-6" />
            <p className={''}>Faversham</p>
          </div>
          <div
            className={
              'flex w-[160px] mx-auto gap-2 items-center max-sm:py-3 md:p-4'
            }
          >
            <Icon_map className="min-w-6 max-w-6" />
            <p className={''}>Canterbury</p>
          </div>
          <div
            className={
              'flex w-[160px] mx-auto gap-2 items-center max-sm:py-3 md:p-4'
            }
          >
            <Icon_map className="min-w-6 max-w-6" />
            <p className={''}>Ashford</p>
          </div>
          <div
            className={
              'flex w-[160px] mx-auto gap-2 items-center max-sm:py-3 md:p-4'
            }
          >
            <Icon_map className="min-w-6 max-w-6" />
            <p className={''}>Maidstone</p>
          </div>
          <div
            className={
              'flex w-[160px] mx-auto gap-2 items-center max-sm:py-3 md:p-4'
            }
          >
            <Icon_map className="min-w-6 max-w-6" />
            <p className={''}>Medway</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CuSection1a
