import React from 'react'
import Button from './components/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Kent Maintenance and Services',
  // description: 'Generated by create next app',
}

const Homepage = () => {
  return (
    <div>
      <div className="py-10 md:py-[80px] bg-gradient-to-br from-primary-400 to-primary">
        <div className={'container md:px-6 lg:px-10 xl:px-0'}>
          <h1
            className={
              'text-4xl md:text-[40px] font-bold text-white text-center font-tinos'
            }
          >
            Kent Maintenance & Services Limited
          </h1>
          <Button className="mx-auto mt-5" variant="light">
            One Call Does All
          </Button>
        </div>
      </div>
      <div className={'py-10 md:py-[80px]'}>
        <div
          className={
            'container md:px-6 lg:px-10 xl:px-0 grid grid-cols-1 max-w-[950px] gap-10'
          }
        >
          <div className="flex flex-col gap-2">
            <h3
              className={
                'font-tinos text-[22px] max-sm:leading-7 md:text-[26px] mb-4 font-bold text-balance'
              }
            >
              Kent Maintenance and Services LTD
            </h3>
            <p className={'text-paragraph'}>
              Welcome to Kent Maintenance and Services LTD. Here on our website
              you can find the various services that we offer
            </p>
            <p className={'text-paragraph'}>
              Although all of what we have listed on our website we can do. We
              are also able to help out with other requests / services too. If
              you would like anything else doing that we have not covered on our
              website feel free to reach out to us via our contact page and a
              member of our staff will be able to discuss this with you and let
              you know.
            </p>
            <p className={'text-paragraph'}>
              We are based in Sittingbourne (ME10) & Canterbury (CT1) being
              located here we are able to cover most areas of Kent with no
              additional costs. Depending where a-bouts in Kent the job is it
              may be subject to travel costs but this would be discussed and
              agreed in any works before carried out.
            </p>
            <p className={'text-paragraph'}>
              All of our staff are competent and will work to the best of their
              ability. Quality of work over quantity means a lot to us and we
              will always aim to leave all clients satisfied and happy with any
              works carried out for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
