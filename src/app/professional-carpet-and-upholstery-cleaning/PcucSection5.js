import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'
// import texture from './images/texture.png'

const PcucSection5 = () => {
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
              'font-tinos text-3xl md:text-4xl font-semibold text-center w-full md:w-[60%] md:mx-auto'
            }
          >
            How much does carpet and upholstery cleaning cost in Kent ?
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
                  Carpet cleaning- 2 Standard size room
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  £85
                </td>
              </tr>
              <tr>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  Carpet cleaning- 3 standard size rooms
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  £105
                </td>
              </tr>
              <tr>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  Upholstery.
                </td>
                <td className="bg-white text-paragraph p-2 border border-primary">
                  Please contact us.
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

export default PcucSection5
