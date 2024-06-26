import PcucCircledNumber from './PcucCircledNumber'
import Button from '../components/Button'

const PcucSection1 = () => {
  return (
    <div className="py-10 md:py-[80px]">
      <div className={'container md:px-6 lg:px-10 xl:px-0'}>
        <div className={'text-center'}>
          <h3
            className={'font-tinos text-3xl md:text-4xl font-bold text-center'}
          >
            Here is how easy it is to book an appointment
          </h3>
          <p className={'mt-5'}>
            Keeping your carpets clean requires more than just vacuuming alone.
            To get a deep clean, Xtraclean use the latest state-of-the-art
            equipment and solutions for the best results everytime.
          </p>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'}>
          <div className={'text-center'}>
            <div className={'relative'}>
              <PcucCircledNumber className="mx-auto after:md:w-10 after:lg:w-16 after:md:h-[2px] after:md:bg-secondary after:md:absolute after:md:-right-[19%] after:lg:-right-[18%] after:xl:-right-[15%]">
                1
              </PcucCircledNumber>
            </div>
            <p className={'font-tinos text-2xl md:text-3xl font-bold mt-3'}>
              Contact Us
            </p>
            <p className={'mt-5'}>
              Contact us direct and speak to one of our staff about your
              requirements. We can provide you with a live quote and schedule an
              appointment.
            </p>
          </div>
          <div className={'text-center'}>
            <div className={'relative'}>
              <PcucCircledNumber className="mx-auto after:md:w-10 after:lg:w-16 after:md:h-[2px] after:md:bg-secondary after:md:absolute after:md:-right-[19%] after:lg:-right-[18%] after:xl:-right-[15%]">
                2
              </PcucCircledNumber>
            </div>
            <p className={'font-tinos text-2xl md:text-3xl font-bold mt-3'}>
              On the day
            </p>
            <p className={'mt-5'}>
              Allow our trained technicians access to your property and advise
              on the location of the carpets that require cleaning. Please give
              your technician specific instructions if necessary.
            </p>
          </div>
          <div className={'text-center'}>
            <PcucCircledNumber className="mx-auto">3</PcucCircledNumber>
            <p className={'font-tinos text-2xl md:text-3xl font-bold mt-3'}>
              Enjoy
            </p>
            <p className={'mt-5'}>
              Breathe in the freshly cleaned carpets with the knowledge that
              your floor covers are now deep cleaned and sanitised, good enough
              to eat off!
            </p>
          </div>
        </div>
        <div
          className={
            'flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center mt-16'
          }
        >
          <Button className="">Get a quote</Button>
          <Button className="" variant="secondary">
            Request a callback
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PcucSection1
