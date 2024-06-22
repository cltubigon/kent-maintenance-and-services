import React from 'react'
import Button from '../components/Button'
import Icon_check2 from '../components/icons/Icon_check2'

const CcdSection3 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 grid grid-cols-1 lg:grid-cols-2  lg:divide-x-[1px]'
        }
      >
        <div className={'lg:pr-10 flex flex-col gap-3'}>
          <h3 className={'text-lg font-semibold'}>
            Regular domestic cleaning in Edinburgh
          </h3>
          <p className={'text-paragraph'}>
            {`If it's a regular clean you're looking for, Maid2Clean can offer a
            weekly or fortnightly service. Our prices start from just £15.80 per
            hour and there are no hidden charges.`}
          </p>
          <p className={'text-paragraph'}>
            Once you have interviewed and chosen a cleaner you are happy with,
            the same cleaner will be provided each time. This allows the cleaner
            to get to know your home and requirements, working with you on any
            adjustments when necessary.
          </p>
          <p className={'text-paragraph'}>
            Holiday and sickness cover can be provided at no additional charge
            if requested. All of our cleaners are thoroughly vetted and the
            necessary insurance is in place for them to work in your home.
          </p>
          <p className={'text-paragraph'}>
            {`Discuss your cleaning requirements with one of our friendly team,
            our telephone number is: 0131 510 6401. If you'd like to go ahead
            with this service you could also book your Edinburgh cleaner online.`}
          </p>
          <div className={'flex gap-3 my-2'}>
            <Icon_check2 className="text-primary min-w-5 min-h-5" />
            <p className={'text-paragraph'}>
              100% money back guarantee if you are not happy with your first
              regular clean
            </p>
          </div>
          <div className={'flex gap-3'}>
            <Icon_check2 className="text-primary min-w-5 min-h-5" />
            <p className={'text-paragraph'}>
              Insured, thoroughly vetted and local house cleaners around
              Edinburgh.
            </p>
          </div>
          <div className={'flex gap-3'}>
            <Icon_check2 className="text-primary min-w-5 min-h-5" />
            <p className={'text-paragraph'}>
              Expertise from the UKs most recognised name in the domestic
              cleaning industry with more than 30 years of experience.
            </p>
          </div>
          <p className={'text-primary text-3xl font-semibold mt-5'}>
            From £15.80 per hour
          </p>
        </div>
        <div className={'lg:pl-10 flex flex-col gap-3'}>
          <h3 className={'text-lg font-semibold'}>
            Regular domestic cleaning in Edinburgh
          </h3>
          <p className={'text-paragraph'}>
            Need your house cleaned a single time? This service comes with no
            long term contracts and ensures your home is left completely clean
            throughout.
          </p>
          <p className={'text-paragraph'}>
            The cleaning visit can be booked for up to 6 hours on a single day.
            depending on the size and current condition of your home you may
            require more or less hours.
          </p>
          <p className={'text-paragraph'}>
            Our local cleaners are happy to tackle a variety of house cleaning
            tasks from mopping to ironing. Discuss your requirements with our
            friendly office team today on 0131 510 6401.
          </p>
          <p className={'text-paragraph'}>
            Still have a question? View some of our most frequently asked
            questions
          </p>
          <p className={'text-primary text-3xl font-semibold mt-5'}>
            £40 booking fee + £15 per hour
          </p>

          <Button className="mt-5">Book online</Button>
        </div>
      </div>
    </div>
  )
}

export default CcdSection3
