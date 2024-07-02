import React from 'react'
import Divider from '../components/Divider'

const GkgSection3 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <p className={'font-tinos text-3xl md:text-4xl font-bold'}>
          The Four Seasons Of Garden Care
        </p>
        <p className={'mt-5'}>
          Maintaining a garden varies greatly throughout our four seasons. We
          provide expert advice and assistance, tailored to the demands of each
          garden individually and designed to suit your objectives as its owner
          and the budget you are prepared or able to commit.
        </p>
        <div
          className={'grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 md:gap-10'}
        >
          <div
            className={
              'flex flex-col gap-4 bg-primary p-10 text-white rounded-md shadow-md'
            }
          >
            <p className={'font-tinos text-2xl md:text-3xl font-bold'}>
              SPRING
            </p>
            <Divider className="border-b-[1px] border-white" />
            <p className={''}>
              Spring is an exciting season in any garden. It brings the need to
              focus on planting and cleaning in preparation for summer, while
              keep an eye out for late season frost and deadheading.
            </p>
          </div>
          <div
            className={
              'flex flex-col gap-4 bg-primary p-10 text-white rounded-md shadow-md'
            }
          >
            <p className={'font-tinos text-2xl md:text-3xl font-bold'}>
              SUMMER
            </p>
            <Divider className="border-b-[1px] border-white" />
            <p className={''}>
              {`During the the peak period of summer, there's plenty to do in a
              garden. With the right planning and effort, a garden can be the
              perfect place for relaxing, socialising and playing.`}
            </p>
          </div>
          <div
            className={
              'flex flex-col gap-4 bg-primary p-10 text-white rounded-md shadow-md'
            }
          >
            <p className={'font-tinos text-2xl md:text-3xl font-bold'}>
              AUTUMN
            </p>
            <Divider className="border-b-[1px] border-white" />
            <p className={''}>
              {`As the days draw in and temperatures drops, it’s vital to prepare
              a garden for winter. Autumn is the perfect time to keep a garden
              tidy and free from leaves and plant bulbs ahead of spring.`}
            </p>
          </div>
          <div
            className={
              'flex flex-col gap-4 bg-primary p-10 text-white rounded-md shadow-md'
            }
          >
            <p className={'font-tinos text-2xl md:text-3xl font-bold'}>
              WINTER
            </p>
            <Divider className="border-b-[1px] border-white" />
            <p className={''}>
              In winter, pruning and general tidying is a prominent requirement
              for most gardens. Minimising damage from the winter weather is
              important to both foliage and furniture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GkgSection3
