import { FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";

const Facility = ({ data }) => {
  console.log("data..")
  return (
    <div className=" ">
      <h1 className=" text-4xl font-bold my-4">Amenities</h1>
      <ul className=" flex gap-5 text-1xl">
        <li className="flex gap-2 items-center" > <FaWifi/> Wi-Fi </li>
        <li className="flex gap-2 items-center"> <TbAirConditioning/> AC </li>
        <li className="flex gap-2 items-center"> <PiTelevisionBold/> T.V. </li>
        <li className="flex gap-2 items-center"> <IoBedOutline/> King Size Bed </li>
      </ul>
     
    </div>
  );
};

export default Facility;
