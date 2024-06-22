import Divider from '../components/Divider'
import Icon_googleplus from '../components/icons/Icon_googleplus'
import Icon_facebook2 from '../components/icons/Icon_facebook2'
import Icon_youtube from '../components/icons/Icon_youtube'
import Link from 'next/link'
import Icon_phone from '../components/icons/Icon_phone'
import Form from './Form'
import Icon_email from '../components/icons/Icon_email'

const CuSection1 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col md:flex-row max-sm:gap-8'
        }
      >
        {/* Column 1 */}
        <div
          className={'flex flex-col w-full lg:min-w-[390px] lg:max-w-[390px]'}
        >
          <Divider className="w-[50px] ml-0" />
          <p className={'font-tinos text-4xl md:text-5xl font-bold mt-4'}>Contact</p>
          <div className={'text-paragraph'}>
            <div className={'flex my-5 gap-2 items-center'}>
              <Icon_email className="size-5" />
              <Link
                href="mailto:kentmaintenance.co.uk"
                className="text-primary"
              >
                <p className={''}>info@kentmaintenance.co.uk</p>
              </Link>
            </div>
            <div className={'flex my-5 gap-2 items-center'}>
              <Icon_phone className="size-4" />
              <Link href="tel:08000025962" className="text-primary">
                0800 002 5962
              </Link>
            </div>
            <p>
              Alpha Cleaning Services
              <br />8 Turner Close, Kemsley, Sittingbourne, kent – ME102UE
            </p>
          </div>
          <div className={'flex items-center text-white gap-4 mt-5'}>
            <div className={'relative size-[35px] rounded-md bg-[#3B5998]'}>
              <Icon_facebook2 className="absolute right-0 left-0 bottom-0 top-0 m-auto" />
            </div>
            <div className={'relative size-[35px] rounded-md bg-[#CD201F]'}>
              <Icon_youtube className="size-6 absolute right-0 left-0 bottom-0 top-0 m-auto" />
            </div>
            <div className={'relative size-[35px] rounded-md bg-[#DD4B39]'}>
              <Icon_googleplus className="size-6 absolute right-0 left-0 bottom-0 top-0 m-auto" />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className={'w-full py-8 px-5 md:px-10 shadow-md bg-neutral-50'}>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default CuSection1
