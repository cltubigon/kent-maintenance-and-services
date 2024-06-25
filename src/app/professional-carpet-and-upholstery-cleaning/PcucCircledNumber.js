import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const PcucCircledNumber = forwardRef(function PcucCircledNumber(
  { children, className, ...props },
  ref
) {
  return (
    <div
      className={twMerge(
        'rounded-full size-20 md:size-[166px] border-2 border-primary flex flex-col items-center justify-center',
        className
      )}
      {...props}
    >
      <p
        className={twMerge(
          'text-5xl md:text-6xl text-primary',
          props?.numberstyle
        )}
      >
        {children}
      </p>
    </div>
  )
})

export default PcucCircledNumber
