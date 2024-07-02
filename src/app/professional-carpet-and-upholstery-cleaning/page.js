import React from 'react'
import PcucSection2 from './PcucSection2'
import PcucSection1 from './PcucSection1'
import PcucSection1a from './PcucSection1a'
import PcucSection4 from './PcucSection4'
import Icon_right from '../components/icons/Icon_right'
import Button from '../components/Button'
import Link from 'next/link'
import PcucSection5 from './PcucSection5'

const PcucPage = () => {
  return (
    <>
      {/* Section1 */}
      <div className={'py-10 md:py-[80px]'}>
        <div className={'container md:px-6 lg:px-10 xl:px-0'}>
          <h1 className={'text-4xl md:text-5xl font-tinos font-bold'}>
            Carpet Cleaning Services
          </h1>
          <p className={'mt-5 w-full lg:w-[80%]'}>
            We provide a comprehensive carpet cleaning service and can cover
            everything from single rooms to whole properties. Our carpet
            cleaning service is available to both domestic and commercial
            customers across Kent. When it comes to carpet cleaning, we can
            cover a number of areas such as:
          </p>
          <div className={'grid grid-cols-2 gap-2 md:grid-cols-3 mt-5'}>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Rental Properties</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Offices</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Homes</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Retail Stores</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Showrooms</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Commercial Premises</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Flats and Apartments</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Schools</p>
            </div>
            <div className={'flex items-center gap-2'}>
              <Icon_right />
              <p className={''}>Care Homes</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section2 */}
      <div
        className={
          'py-10 md:py-[80px] bg-primary text-white bg-[url("/public-images/texture.png")]'
        }
      >
        <div
          className={
            'container md:px-6 lg:px-10 xl:px-0 flex flex-col md:flex-row gap-8 items-center'
          }
        >
          <div className={'min-w-[35%]'}>
            <h3 className={'font-tinos text-4xl md:text-5xl font-bold'}>
              Find Out More
            </h3>
            <p className={'mt-5'}>
              Should you require more information on the services we offer to
              our customers across Kent or if you’d like to book us for a job,
              then be sure to get in touch. One of our team is always on hand to
              answer questions and deal with enquiries.
            </p>
          </div>
          <div className={'bg-secondary p-8 rounded-md  text-white'}>
            <h3
              className={
                'font-tinos text-3xl md:text-4xl font-bold text-center'
              }
            >
              Carpet and Upholstery Cleaning Service
            </h3>
            <p className={'mt-5'}>
              When it comes to finding carpet and upholstery cleaners, our team
              at Kent maintenance & Services are here to offer a fantastic
              service. From leather cleaning to stain removal, we’re here to
              take care of all your cleaning needs. So, if you’re in search of
              ‘carpet cleaning or upholstery cleaning Kent ’ let none other than
              our fully trained experts at Kent Maintenance and Services provide
              you with an efficient cleaning service.
            </p>
          </div>
        </div>
      </div>
      {/* Section3 */}
      <div className={'py-10 md:py-[80px]'}>
        <div className={'container md:px-6 lg:px-10 xl:px-0'}>
          <div className={'w-full lg:w-[85%]'}>
            <h3 className={'font-tinos text-4xl md:text-5xl font-bold'}>
              Carpet, Upholstery And Leather
            </h3>
            <p className={'mt-5'}>
              We’re available to take care of the needs of all our clients. So,
              from leather cleaning to fabric upholstery, it’s good to know that
              our team are here for you. Be sure to get in touch with us today
              to find out more about our carpet cleaning service and how we can
              help take any stains, odours or smells from your carpet.
            </p>
            <p className={'mt-5'}>
              So, if your carpet and upholstery have unwanted pet smells or if
              your carpet has stains, we provide a fantastic service, no matter
              what. Please waste no time and be sure to contact our team today
              for carpet cleaning in Middlesbrough. Upon doing so, we will be
              happy to provide you with a FREE quote.
            </p>
            <div className={'w-fit'}>
              <Link href={'/contact-us'}>
                <Button className="mt-10">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Section4 */}
      <div className={''}>
        <div className={'container md:px-6 lg:px-10 xl:px-0'}>
          <div
            className={
              'w-full md:w-[85%] mx-auto border-2 border-secondary p-5 md:p-10 rounded-md'
            }
          >
            <h3
              className={
                'font-tinos text-3xl md:text-4xl font-bold text-center'
              }
            >
              5 Reasons to Have Your Carpets Cleaned
            </h3>
            <p className={'mt-5 w-full'}>
              There are many reasons to have your carpets professionally
              cleaned. Be it to help sell a property as odours and stains will
              be removed, to simply helping to improve the appearance of your
              carpet, there are numerous benefits.
            </p>
            <p className={'mt-5 w-full'}>
              Not only that but it can be considered environmentally friendly to
              clean your carpets as it can remove grease, smells from pets and
              is also great value for money! So, if you’re looking for ways to
              keep your carpets clean for longer and to increase their
              longevity, professional carpet cleaning could be for you.
            </p>
            <p className={'mt-5 w-full font-semibold'}>
              That being said, our top 5 reasons to have your carpets cleaned
              are:
            </p>
            <div className={'grid grid-cols-1 gap-2 mt-5'}>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>Improves the appearance of carpets</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>Removes pet smells and odours</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  Looks more appealing when it comes to selling
                </p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  Helps maintain a high standard of cleanliness
                </p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  Keeps your carpet looking fresh and stain free for longer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section5 */}
      <div className={'py-10 md:py-[80px]'}>
        <div className={'container md:px-6 lg:px-10 xl:px-0'}>
          <div className={'w-full lg:w-[85%]'}>
            <h3 className={'font-tinos text-3xl md:text-4xl font-bold'}>
              Commercial Services
            </h3>
            <p className={'mt-5'}>
              As well as offering our carpet and upholstery cleaning, we also
              offer commercial services too. So, if your business premises needs
              its fabric upholstery, office furniture or carpets cleaned, be
              sure to trust our team to do a fantastic job.
            </p>
          </div>
          <div className={'w-full lg:w-[85%] mt-10'}>
            <h1 className={'text-4xl md:text-5xl font-tinos font-bold'}>
              One-Off Deep Cleans
            </h1>
            <p className={'mt-5'}>
              We have various commercial clients across Kent & South East
              England, so no matter if you’re looking for a one-off deep clean
              of your commercial property or to have your carpets thoroughly
              cleaned, be sure to get in touch with us today for a no-obligation
              quote.
            </p>
          </div>
          <div className={'w-full lg:w-[85%] mt-10'}>
            <h3 className={'font-tinos text-3xl md:text-4xl font-bold'}>
              Professional Upholstery Cleaning in Kent
            </h3>
            <p className={'mt-5'}>
              Here at{' '}
              <Link
                href="/"
                target="_blank"
                className="text-primary underline font-semibold"
              >
                Kent Maintenance and Services Limited
              </Link>
              , we provide professional upholstery cleaning to our domestic and
              commercial customers in Kent and across the surrounding areas.
              When it comes to upholstery, we can clean any type of item,
              whether it’s sofas, rugs, chairs or something else. We use a range
              of high-quality cleaning solutions and a number of machines to
              achieve the highest level of finish for upholstery cleaning. Our
              team of upholstery cleaners have years of combined industry
              experience.
            </p>
            <p className={'mt-5'}>
              We undertake all types of work and regularly work with both
              homeowners and business owners in and around Kent. Having carried
              out upholstery cleaning for many years, we have developed a
              well-known reputation for the service we provide. If you’re
              looking for a local upholstery cleaner in kent, then be sure to
              contact us for a quote.
            </p>
          </div>
          <div className={'w-full lg:w-[85%] mt-10'}>
            <h3 className={'font-tinos text-3xl md:text-4xl font-bold'}>
              Our Upholstery Cleaning Services
            </h3>
            <p className={'mt-5'}>
              We provide a comprehensive upholstery cleaning service to our
              customers in Middlesbrough and across the surrounding areas. Using
              a range of leading industry products and tools, we’ll transform
              your items from tired to refreshed. The results of upholstery
              cleaning can be seen for themselves and we fully photograph and
              document all work carried out. Some of the items we regularly
              cover as part of upholstery cleaning are:
            </p>
            <div className={'grid grid-cols-2 gap-2 md:grid-cols-3 mt-5'}>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>Sofas and Chairs</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>Dining Room Furniture</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>Mattresses</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>Rugs and Runners</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>Outdoor Soft Seating</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>And Much More…</p>
              </div>
            </div>
            <p className={'mt-5'}>
              No matter what your upholstery cleaning requirements might be, we
              have you covered. For more information or to arrange upholstery
              cleaning in Middlesbrough, be sure to get in touch with us today.
              One of our team is always on hand to help
            </p>
          </div>
          <div className={'w-full lg:w-[85%] mt-10'}>
            <h3 className={'font-tinos text-3xl md:text-4xl font-bold'}>
              Benefits of Upholstery Cleaning
            </h3>
            <p className={'mt-5'}>
              There are various benefits to having your upholstery cleaned. From
              the most obvious being that it removes stains and dirt to the
              improved appearance, a lot of the time you will see a new lease of
              life in your upholstery after it’s been professionally cleaned.
            </p>
            <p className={'mt-5'}>
              Our upholstery services cover anything from leather cleaning to a
              full home clean. Nothing is off-limits for us, so if you’re
              looking to have your carpets or upholstery professionally cleaned,
              please be sure to call our team today. A lot of the time, you will
              see a huge improvement in your upholstery, meaning it can save you
              money by not having to replace your goods. So for all your
              cleaning needs across Kent, please be sure to give our team a call
              today.
            </p>
            <p className={'mt-5'}>
              For carpet and upholstery cleaning in Kent, call on Kent
              Maintenance and Services Limited. We have all your cleaning needs
              covered and our fully trained team will be happy to discuss our
              cleaning processes with you and what goes into our stain removal
              and cleaning service.
            </p>
          </div>
        </div>
      </div>
      {/* Section6 */}
      <div
        className={
          'py-10 md:py-[80px] bg-neutral-100 bg-[url("/public-images/texture.png")]'
        }
      >
        <div className={'container md:px-6 lg:px-10 xl:px-0'}>
          <h1 className={'text-4xl md:text-5xl font-tinos font-bold'}>
            Carpet & Upholstery Cleaners
          </h1>
          <p className={'mt-5'}>
            Our professional carpet and upholstery cleaners can come to both
            your home and commercial premises, so no matter if you’re looking to
            remove unwanted pet smells or a deep clean of your office furniture
            and upholstery, our team at Kent Maintenance and Services Limited
            are here for you.
          </p>
          <p className={'mt-5'}>
            With our cleaning service, we’ll ensure that your carpet &
            upholstery are cleaned to the highest standard. We will also inform
            you of the dry time or if it is safe for immediate use. Our carpet
            and upholstery cleaning services will ensure there’s no soggy
            carpets, unwanted smells and stains. We can also work with odours,
            grease and spills with the aim to remove those and give your
            upholstery and carpets a new lease of life.
          </p>
          <p className={'mt-5'}>
            We cover Kentand the surrounding areas of the south east of England,
            so please waste no time and be sure to call us for your carpets and
            upholstery cleaning. No job is ever too small or too large for us.
            Get your free no-obligation quote today.
          </p>
        </div>
      </div>
      <PcucSection1 />
      <PcucSection1a />
      <PcucSection2 />
      <PcucSection4 />
      <PcucSection5 />
    </>
  )
}

export default PcucPage
