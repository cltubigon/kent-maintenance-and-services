import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'
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
          <h2 className={'text-3xl font-semibold text-center'}>
            How much does a house cleaner cost in Edinburgh?
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
                  Regular weekly house cleaning
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  From £15.80 per hour
                </td>
              </tr>
              <tr>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  Regular fortnightly house cleaning
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  From £16.60 per hour
                </td>
              </tr>
              <tr>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  6 hours maximum for a one-off clean
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  £40 booking fee plus £15 per hour
                </td>
              </tr>
            </tbody>
          </table>

          <p className={'w-full mx-auto lg:w-[698px] text-center'}>
            Prices may vary depending on the area, minimum hours may also apply.
            For an online estimate, please use our online booking service to get
            the exact rates for your property.
          </p>
          <Button variant="light" className='mx-auto mt-10'>Book online</Button>
        </div>
      </div>
    </div>
  )
}

export default CcdSection4
