'use client'
import Image from 'next/image'
import React from 'react'
import KentLogo from '@/app/images/kent-maintenance-200.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { restrictedPathsFooter } from '@/app/lib/restrictFooterNavigation'
import Icon_facebook2 from '../../icons/Icon_facebook2'
import Icon_whatsapp from '../../icons/Icon_whatsapp'

const Footer = () => {
  const pathName = usePathname()
  const restricted = restrictedPathsFooter.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )
  if (restricted) return

  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className={'py-10 md:py-[80px] bg-secondary-900'}>
      <div
        className={
          'container md:px-6 text-white lg:px-10 xl:px-0 flex flex-col md:flex-row justify-between gap-10'
        }
      >
        <div className={'flex flex-col max-sm:items-center'}>
          <Image
            src={KentLogo}
            alt="Kent Logo"
            className="w-[140px] md:w-[140px]"
          />
        </div>
        <div className={'flex flex-col max-sm:items-center'}>
          <p className={'text-primary mb-4'}>Find us on</p>
          <div className={'flex gap-2 items-center'}>
            <Icon_facebook2 />
            <Icon_whatsapp />
          </div>
        </div>
        <div className={'flex flex-col max-sm:items-center'}>
          <p className={'text-primary mb-4'}>Contact information</p>
          <p className={''}>Phone number:</p>
          <p className={''}>Office number:</p>
          <p className={''}>Opening hours:</p>
        </div>
        <div
          className={
            'flex flex-col max-sm:mx-auto max-sm:text-center max-w-[200px]'
          }
        >
          <p className={''}>
            Copyright © {new Date().getFullYear()}
            <br />Kent Maintenance and services limited.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
