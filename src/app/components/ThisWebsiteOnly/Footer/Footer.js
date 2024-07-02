'use client'
import Image from 'next/image'
import React from 'react'
import KentLogo from '@/app/images/kent-maintenance-200.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { restrictedPathsFooter } from '@/app/lib/restrictFooterNavigation'
import Icon_facebook2 from '../../icons/Icon_facebook2'
import Icon_whatsapp from '../../icons/Icon_whatsapp'
import PhoneNumber from '../PhoneNumber'

const Footer = () => {
  const pathName = usePathname()
  const restricted = restrictedPathsFooter.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )
  if (restricted) return

  const openingHours = [
    { day: 'Monday', hours: '08:00 - 18:00' },
    { day: 'Tuesday', hours: '08:00 - 18:00' },
    { day: 'Wednesday', hours: '08:00 - 18:00' },
    { day: 'Thursday', hours: '08:00 - 18:00' },
  ]
  const openingHours2 = [
    { day: 'Friday', hours: '08:00 - 18:00' },
    { day: 'Saturday', hours: '08:00 - 18:00' },
    { day: 'Sunday', hours: '10:00 - 15:00' },
  ]
  const openingHoursFull = [...openingHours, ...openingHours2]
  return (
    <div className={'py-10 md:py-[80px] bg-secondary-900'}>
      <div
        className={
          'container md:px-6 text-white lg:px-10 xl:px-0 flex flex-col md:flex-row justify-between gap-8 md:gap-10'
        }
      >
        <div className={'flex flex-col max-sm:items-center'}>
          <Link href={'/'}>
            <Image
              src={KentLogo}
              alt="Kent Logo"
              className="w-[140px] md:w-[140px]"
            />
          </Link>
        </div>
        <div className={'flex flex-col'}>
          <p className={'text-primary mb-4'}>Find us on</p>
          <div className={'flex gap-2 items-center'}>
            <Link
              href={'https://www.facebook.com/profile.php?id=61557090986535'}
              target="_blank"
            >
              <Icon_facebook2 />
            </Link>
            <Link href={'https://wa.me/message/U7CY5AS6EKQRB1'} target="_blank">
              <Icon_whatsapp />
            </Link>
          </div>
        </div>
        <div className={'flex flex-col md:min-w-[490px]'}>
          <p className={'text-primary mb-4'}>Contact information</p>
          <p className={''}>
            Phone number: <PhoneNumber className="hover:text-primary" />
          </p>
          <p className={''}>
            Office number: <PhoneNumber className="hover:text-primary" />
          </p>
          <p className={'mt-2 border-b-[1px] pb-1 border-secondary-700 mb-1'}>
            Opening hours:
          </p>
          <div className={'hidden md:grid grid-cols-1 md:grid-cols-2 gap-8'}>
            <div className={'flex flex-col'}>
              <div className={'grid grid-cols-2'}>
                <p className={'font-bold'}>Day:</p>
                <p className={'font-bold'}>Time:</p>
              </div>
              {openingHours.map((item, index) => {
                const { day, hours } = item
                return (
                  <div key={index} className={'grid grid-cols-2 text-white'}>
                    <p className={''}>{day}</p>
                    <p className={''}>{hours}</p>
                  </div>
                )
              })}
            </div>
            <div className={'flex flex-col'}>
              <div className={'grid grid-cols-2'}>
                <p className={'font-bold'}>Day:</p>
                <p className={'font-bold'}>Time:</p>
              </div>
              {openingHours2.map((item, index) => {
                const { day, hours } = item
                return (
                  <div key={index} className={'grid grid-cols-2 text-white'}>
                    <p className={''}>{day}</p>
                    <p className={''}>{hours}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={'grid md:hidden grid-cols-1 md:grid-cols-2 gap-8'}>
            <div className={'flex flex-col'}>
              <div className={'grid grid-cols-2'}>
                <p className={'font-bold'}>Day:</p>
                <p className={'font-bold'}>Time:</p>
              </div>
              {openingHoursFull.map((item, index) => {
                const { day, hours } = item
                return (
                  <div key={index} className={'grid grid-cols-2 text-white'}>
                    <p className={''}>{day}</p>
                    <p className={''}>{hours}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={'flex flex-col md:max-w-[200px]'}>
          <p className={''}>
            Copyright © {new Date().getFullYear()}
            <br />
            Kent Maintenance and services limited.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
