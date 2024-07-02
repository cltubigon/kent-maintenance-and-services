import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const PhoneNumber = ({ className, ...props }) => {
  return (
    <Link href={'tel:08000025962'} className={twMerge(className)} {...props}>
      0800 002 5962
    </Link>
  )
}

export default PhoneNumber
