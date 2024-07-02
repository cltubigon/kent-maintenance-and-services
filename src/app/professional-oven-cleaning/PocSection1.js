import Icon_right from '../components/icons/Icon_right'

const PocSection1 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <h1 className="text-4xl md:text-5xl font-bold font-tinos">
          Professional Oven Cleaning
        </h1>
        <p className={'mt-5'}>
          Kent maintenance and services limited is your oven cleaning specialist
          in kent . Kent Maintenance and Services has cleaned thousands of
          ovens, averaging around 40 each month. As such, we have amassed
          thousands of hours of experience cleaning ovens using eco-friendly
          cleaning products.
        </p>
      </div>
      <div className={'mt-10'}>
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
              What’s involved in the cleaning process?
            </h3>
            <div className={'grid grid-cols-1 gap-2 mt-5'}>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  All removable parts such as racks, side racks, grill pan and
                  trays will be removed and soaked in a specially designed
                  heated dip tank in the back of my van.
                </p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  The oven door will be removed (where possible), disassembled
                  and thoroughly cleaned inside and out.
                </p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  The inside of the oven will be meticulously cleaned removing
                  all the burnt-on residue and grease.
                </p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  Your hob, Extractor/filters and Microwave will receive the
                  same extensive treatment.
                </p>
              </div>
              <div className={'flex items-center gap-2'}>
                <Icon_right />
                <p className={''}>
                  Oven bulbs and filters can also be replaced.
                </p>
              </div>
              <p className={'mt-5 w-full'}>
                Using non-toxic, fume free, environmentally friendly cleaning
                products your oven, hob, extractor, Cleaning Services Prices
                Carpet cleaning- 2 Standard size room £85 Carpet cleaning- 3
                standard size rooms £105 Upholstery. Please contact us.
                microwave, Aga or Range will be cleaned back to near showroom
                condition.
              </p>
              <p className={'mt-5 w-full'}>
                Regular deep cleaning will not only ensure your oven is in a
                sparkling condition but is smoke free when cooking.
              </p>
              <p className={'mt-5 w-full'}>
                It is our focus to give our customers a reliable, courteous and
                friendly service always.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <div className={'mt-12'}>
          <h3 className={'font-tinos text-3xl md:text-4xl font-bold'}>
            How long will it usually take?
          </h3>
          <p className={'mt-5 max-w-[650px]'}>
            It varies depending on the model but a minimum timescale would be
            1.5 hrs, we can give you a better timescale when we obtain more
            information from you.
          </p>
          <p className={'text-primary text-2xl font-bold mt-10'}>
            £40 booking fee + £24.99 per hour
          </p>
        </div>
      </div>
    </div>
  )
}

export default PocSection1
