import React from 'react'
import Button from '../components/Button'
import Icon_check2 from '../components/icons/Icon_check2'
import Link from 'next/link'
import PhoneNumber from '../components/ThisWebsiteOnly/PhoneNumber'

const CcdSection3 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 grid grid-cols-1 lg:grid-cols-2 lg:divide-x-[1px] max-sm:gap-8'
        }
      >
        {/* Column1 */}
        <div className={'lg:pr-10 flex flex-col gap-3'}>
          <h3 className={'font-tinos text-2xl font-bold'}>
            Regular domestic & commercial cleaning in Kent
          </h3>
          <p className={'text-paragraph'}>
            {`If it's a regular clean you're looking for, Kent maintenance and services can offer a weekly or 
fortnightly service. Our prices start from just £19.99 per hour.`}
          </p>
          <p className={'text-paragraph'}>
            Discuss your cleaning requirements with one of our friendly team,
            our telephone number is: <PhoneNumber className={'text-primary'} />.
          </p>
          <div className={'flex gap-3 mt-3'}>
            <Icon_check2 className="text-primary min-w-5 min-h-5" />
            <p className={'text-paragraph'}>
              Insured, thoroughly vetted and local house cleaners around
              Edinburgh.
            </p>
          </div>
        </div>
        {/* Column2 */}
        <div className={'lg:pl-10 flex flex-col gap-3'}>
          <h3 className={'font-tinos text-2xl font-bold'}>
            One off domestic & commercial cleaning in Kent
          </h3>
          <p className={'text-paragraph'}>
            Need your house office or any other premises cleaned a single time?
            This service comes with no long term contracts and ensures your home
            is left completely clean throughout.
          </p>
          <p className={'text-paragraph'}>
            The cleaning visit can be booked for up to 6 hours on a single day.
            depending on the size and current condition of your home you may
            require more or less hours.
          </p>
          <p className={'text-paragraph'}>
            Our local cleaners are happy to tackle a variety of house cleaning
            tasks from mopping to ironing.
          </p>
          <p className={'text-paragraph'}>
            Discuss your requirements with our friendly office team today on{' '}
            <PhoneNumber className="text-primary" />.
          </p>
          <p className={'text-paragraph'}>Still have a question?</p>
          <p className={'text-primary text-2xl font-bold mt-3'}>
            £40 booking fee + £24.99 per hour
          </p>

          <div className={'w-fit'}>
            <Link href="/contact-us">
              <Button className="mt-5">Book online</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CcdSection3
