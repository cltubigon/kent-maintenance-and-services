import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
  dark: 'leading-[22px] flex gap-2 shadow-md items-center justify-center w-fit h-fit rounded-full font-semibold text-white px-8 py-3 bg-primary active:bg-primary-700 hover:bg-primary-600 transition-all duration-300',
  light:
    'leading-[22px] flex gap-2 shadow-md items-center justify-center w-fit h-fit rounded-full font-semibold px-8 py-3 text-secondary bg-white active:bg-secondary-900 hover:bg-secondary hover:text-white transition-all duration-300',
}
const sizes = {
  md: `leading-[22px] font-semibold w-[230px] py-3`,
}

const Button = forwardRef(function Button(
  { children, className, variant, size, ...props },
  ref
) {
  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['dark']
  const varSize = size ? sizes[size.toLowerCase()] : ''
  return (
    <button
      type={props.type || 'button'}
      ref={ref}
      className={twMerge(variation, varSize, className)}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
