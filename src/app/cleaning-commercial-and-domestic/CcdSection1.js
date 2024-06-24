import Icon_star from '../components/icons/Icon_star'
import Button from '../components/Button'
import Image from 'next/image'
import girlCleaning from './images/girl-cleaning.jpg'

const CcdSection1 = () => {
  return (
    <div className={'pt-10 pb-5 md:pt-[80px] md:pb-10 relative'}>
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <h1
          className={
            'text-4xl md:text-5xl lg:text-6xl font-tinos font-bold mb-10 md:mb-[62px] text-center mx-auto w-full lg:w-[60%]'
          }
        >
          Domestic Cleaning Edinburgh
        </h1>
        <p
          className={
            'bg-secondary-400 rounded-tr-md rounded-tl-md w-fit px-5 py-2 mx-auto text-white text-lg md:text-xl '
          }
        >
          Our local office is open now
        </p>
        <div
          className={
            'bg-secondary-700 py-4 px-7 md:py-8 md:px-14 rounded-md w-full lg:w-[853px] mx-auto text-white'
          }
        >
          <p className={'text-xl md:text-2xl leading-9 text-center'}>
            Maid2Clean specialises in maintaining homes around Scotland,
            providing incredible domestic cleaning services in Edinburgh and
            beyond. No matter the requirements, our cleaners work as efficiently
            as possible to get the job done to the highest standard.
          </p>
          <div
            className={
              'flex flex-col md:flex-row justify-center items-center gap-3 mt-6'
            }
          >
            <div className={'flex gap-1'}>
              <Icon_star className="size-6 text-yellow-500" />
              <Icon_star className="size-6 text-yellow-500" />
              <Icon_star className="size-6 text-yellow-500" />
              <Icon_star className="size-6 text-yellow-500" />
              <Icon_star className="size-6 text-yellow-500" />
            </div>
            <p className={'text-2xl leading-9 text-center'}>
              96% of clients recommend our service
            </p>
          </div>
          <div
            className={
              'flex flex-col md:flex-row justify-center items-center gap-3 mt-6'
            }
          >
            <Button>Book your cleaner online</Button>
            <Button>Enquire about our services</Button>
          </div>
          <p className={'font-tinos text-3xl md:text-3xl text-balance text-center mt-8 font-semibold'}>
            For a free personalised quote, call Maid2Clean on 0131 510 6401
          </p>
        </div>
      </div>
      <Image
        src={girlCleaning}
        fill
        sizes="max-width (767px) 100vw, 100vw"
        className="object-cover -z-10"
        priority
        alt="girl cleaning"
      />
    </div>
  )
}

export default CcdSection1
