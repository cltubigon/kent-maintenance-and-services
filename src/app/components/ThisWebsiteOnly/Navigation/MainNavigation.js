'use client'
import Image from 'next/image'
import mainLogo from '@/app/images/kent-maintenance-200.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { restrictedPathsNavigationMenu } from '@/app/lib/restrictFooterNavigation'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const MainNavigation = () => {
  const pathName = usePathname()

  const restricted = restrictedPathsNavigationMenu.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )

  if (restricted) return

  const nav = [
    { path: '/', name: 'Home' },
    {
      name: 'Cleaning services',
      // path: '/cleaning-services',
      array: [
        {
          name: 'Cleaning Commercial and Domestic',
          path: '/cleaning-commercial-and-domestic',
        },
        {
          name: 'Professional carpet and upholstery cleaning',
          path: '/professional-carpet-and-upholstery-cleaning',
        },
        {
          name: 'Professional oven cleaning',
          path: '/professional-oven-cleaning',
        },
      ],
    },
  ]

  const nav2 = [
    {
      name: 'Maintenance Services',
      // path: '/maintenance-services',
      array: [
        {
          name: 'Grounds keeping and gardening services',
          path: 'grounds-keeping-and-gardening-services',
        },
        {
          name: 'Home Improvement',
          path: '/home-improvement',
        },
      ],
    },
    {
      name: 'Contact us',
      path: '/contact-us',
    },
  ]

  return (
    <>
      <div className={`flex py-12 shadow-sm select-none`}>
        <div
          className={
            'flex justify-start xl:justify-between items-center gap-2 md:gap-4 xl:gap-[unset] max-w-[1150px] w-full mx-auto px-3 md:px-6 xl:px-0  z-[999]'
          }
        >
          <MobileNav parameters={{ nav: [...nav, ...nav2], pathName }} />
          <DesktopNav parameters={{ nav, pathName }} />
          <div className={'flex w-full bg-red-300 lg:w-[unset] relative'}>
              <div className={'w-fit absolute top-[-50px] -left-[28px] right-0 mx-auto md:left-[-80px]'}>
              <Link
                href={'/'}
                className=""
              >
                <Image
                  src={mainLogo}
                  quality={100}
                  priority
                  className="max-w-[180px] mx-auto"
                  alt="Love Transfusion logo"
                />
              </Link>
              </div>
          </div>
          <DesktopNav parameters={{ nav: nav2, pathName }} />
        </div>
      </div>
    </>
  )
}

export default MainNavigation
