import React from 'react'

const HouseRepairs = () => {
  return (
    <div className="py-5 flex flex-col gap-3">
      <h3 className={'font-tinos text-2xl md:text-4xl font-bold'}>
        Expert Repairs and Restorations – Your Home Maintenance Specialists
      </h3>
      <p className={''}>
        At Kent Maintenance and Services Limited, we tackle a wide range of
        projects to cater to all your home maintenance needs. Our team are
        well-equipped and experienced to handle various repair and restoration
        tasks, including but not limited to:
      </p>
      <ul className="list-outside list-disc pl-5 md:pl-12 list">
        <li className="my-3">
          Gutters and Roofs: We take care of gutter cleaning, repairs, and
          maintenance to ensure your home’s drainage system is functioning
          optimally. Additionally, we address roof issues such as leaks, damaged
          tiles, and general repairs.
        </li>
        <li className="my-3">
          Floors: From fixing squeaky floorboards to repairing tiles or floor
          coverings, we can restore the beauty and functionality of your
          flooring.
        </li>
        <li className="my-3">
          Graffiti Removal: Our team can assist in removing graffiti from
          various surfaces, restoring the appearance of your property.
        </li>
        <li className="my-3">
          Broken Structures: Whether it’s a broken fence, gate, or any other
          structures around your property, we can repair and restore them.
        </li>
        <li className="my-3">
          General Repairs: Our team can handle various minor repairs throughout
          your home, ensuring everything is in perfect working condition.
        </li>
      </ul>
      <p className={''}>
        By choosing our team, you can trust that we’ll address your home’s
        repair needs with professionalism and expertise. Let us help you keep
        your home in top shape and prevent larger and more expensive repairs in
        the future.
      </p>
    </div>
  )
}

export default HouseRepairs
