import propertyMaintenance from './images/property-maintenance.png'
import propertyMaintenancewhite from './images/property-maintenance-white.png'
import fencing from './images/fencing.png'
import fencingwhite from './images/fencing-white.png'
import tilingandflooring from './images/tiling-and-flooring.png'
import tilingandflooringwhite from './images/tiling-and-flooring-white.png'
import furnitureassembly from './images/furniture-assembly.png'
import furnitureassemblywhite from './images/furniture-assembly-white.png'
import houserepairs from './images/house-repairs.png'
import houserepairswhite from './images/house-repairs-white.png'
import decksandpergolas from './images/decks-and-pergolas.png'
import decksandpergolaswhite from './images/decks-and-pergolas-white.png'
import guttercleaning from './images/gutter-cleaning.png'
import guttercleaningwhite from './images/gutter-cleaning-white.png'
import highpressurecleaning from './images/high-pressure-cleaning.png'
import highpressurecleaningwhite from './images/high-pressure-cleaning-white.png'
import smokealarm from './images/smoke-alarms.png'
import smokealarmwhite from './images/smoke-alarms-white.png'
import residentialpainting from './images/residential-painting.png'
import residentialpaintingwhite from './images/residential-painting-white.png'
import PropertyMaintenance from './property-maintenance/PropertyMaintenance'
import Fencing from './fencing/Fencing'
import TilingAndFlooring from './tiling-and-flooring/TilingAndFlooring'
import FurnitureAssembly from './furniture-assembly/FurnitureAssembly'
import HouseRepairs from './house-repairs/HouseRepairs'
import DecksAndPergolas from './decks-and-pergolas/DecksAndPergolas'
import GutterCleaning from './gutter-cleaning/GutterCleaning'
import HighPressureCleaning from './high-pressure-cleaning/HighPressureCleaning'
import SmokeAlarm from './smoke-alarm/SmokeAlarm'
import ResidentialPainting from './residential-painting/ResidentialPainting'

export const cardData = [
  {
    id: 1,
    imgSrc: { dark: propertyMaintenance, white: propertyMaintenancewhite },
    name: 'Property Maintenance',
    Description: PropertyMaintenance,
  },
  {
    id: 2,
    imgSrc: { dark: fencing, white: fencingwhite },
    name: 'Fencing',
    Description: Fencing,
  },
  {
    id: 3,
    imgSrc: { dark: tilingandflooring, white: tilingandflooringwhite },
    name: 'Tiling and Flooring',
    Description: TilingAndFlooring,
  },
  {
    id: 4,
    imgSrc: { dark: furnitureassembly, white: furnitureassemblywhite },
    name: 'Furniture Assembly',
    Description: FurnitureAssembly,
  },
  {
    id: 5,
    imgSrc: { dark: houserepairs, white: houserepairswhite },
    name: 'House Repairs',
    Description: HouseRepairs,
  },
  {
    id: 6,
    imgSrc: { dark: decksandpergolas, white: decksandpergolaswhite },
    name: 'Decks and Pergolas',
    Description: DecksAndPergolas,
  },
  {
    id: 7,
    imgSrc: { dark: guttercleaning, white: guttercleaningwhite },
    name: 'Gutter Cleaning',
    Description: GutterCleaning,
  },
  {
    id: 8,
    imgSrc: { dark: highpressurecleaning, white: highpressurecleaningwhite },
    name: 'High Pressure Cleaning',
    Description: HighPressureCleaning,
  },
  {
    id: 9,
    imgSrc: { dark: residentialpainting, white: residentialpaintingwhite },
    name: 'Residential Painting',
    Description: ResidentialPainting,
  },
]
