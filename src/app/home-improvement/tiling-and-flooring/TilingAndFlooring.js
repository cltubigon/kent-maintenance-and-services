import React from 'react'

const TilingAndFlooring = () => {
  return (
    <div className="py-5 flex flex-col gap-3">
      <p className={''}>
        Whether you’re simply updating your current bathroom or kitchen, or
        giving it a complete makeover, we will be able to help you with your
        tiling and grouting requirements. This includes:
      </p>
      <ul className="list-outside list-disc pl-5 md:pl-12 list">
        <li className="my-3">Laying new tiles</li>
        <li className="my-3">Cleaning existing tiles and grout</li>
        <li className="my-3">Repairing broken or cracked tiles.</li>
      </ul>
      <p className={''}>
        Re-grouting is a cost-effective way to give your wet areas a fresh look.
        However, it is also important to re-grout your tiles every so often to
        maintain the integrity of the waterproofing. Before the grout in between
        your tiles begins to wear away, give us a call.
      </p>
      <ul className="list-outside list-disc pl-5 md:pl-12 list">
        <li className="my-3">
          Repair existing flooring (hardwood, composite, lino, tiles)
        </li>
        <li className="my-3">Replace floor boards</li>
        <li className="my-3">Lay new flooring.</li>
      </ul>
    </div>
  )
}

export default TilingAndFlooring
