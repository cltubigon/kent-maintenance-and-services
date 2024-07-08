import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'
// import texture from './images/texture.png'

const CcdSection4 = () => {
  return (
    <div className={'bg-primary'}>
      <div
        className={`py-10 md:py-[80px] text-white relative bg-[url("/public-images/texture.png")]`}
      >
        {/* <Image
        src={texture}
        fill
        className="object"
        alt="texture background"
      /> */}
        <div className={'container md:px-6 lg:px-10 xl:px-0'}>
          <h2
            className={
              'font-tinos text-3xl md:text-4xl font-semibold text-center'
            }
          >
            How much does a house cleaner cost in Kent?
          </h2>

          <table className="table-auto w-full mx-auto lg:w-[698px] my-6">
            <thead>
              <tr className="text-left">
                <th className="p-2">Cleaning Services</th>
                <th className="p-2">Prices</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  Weekly clean
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  From £19.99 per hour
                </td>
              </tr>
              <tr>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  Fortnightly
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  £24.99 per hour
                </td>
              </tr>
              <tr>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  {'One off clean (7 hours max)'}
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  £25 booking fee + £24.99 per hour
                </td>
              </tr>
            </tbody>
          </table>

          <p className={'w-full mx-auto lg:w-[698px] text-center'}>
            Prices may vary depending on the area, minimum hours may also apply.
          </p>

          <div className={'w-fit mx-auto'}>
            <Link href="/contact-us">
              <Button variant="light" className="mx-auto mt-10">
                Book online
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CcdSection4
