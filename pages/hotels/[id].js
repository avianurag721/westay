// "use client";

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SingleHotelData from "../../Components/SingleHotelData";

import IdHotelImg from "@/Components/IdHotelImg";

const hotel = ({ hotel }) => {
  const [hotelData, sethotelData] = useState({});
  useEffect(() => {
    // Update hotelData when the component mounts or when hotel changes
    if (hotel?.hotel) {
      sethotelData(hotel?.hotel);

      console.log("hotel", hotelData);
    }
  }, []);

  return (
    <div className=" bg-gradient-to-b from-slate-300 to-slate-50 flex flex-col justify-center items-center  w-full min-h-screen">
      {/* caraoual div  */}
      <div className="   flex flex-col justify-center items-center ">
      <h1 className=" capitalize bg-red-400 px-4 py-2 rounded-md text-4xl font-bold  my-5">{hotelData?.hotelName}</h1>
        <IdHotelImg photos={hotelData?.photos} />
      </div>

      {/* hotel data  div */}
      <div className="  flex justify-center items-center flex-col w-full">
        <SingleHotelData data={hotelData} />
      </div>
    </div>
  );
};
export async function getServerSideProps(ctx) {
  // console.log("printing", ctx.query.id)

  const data = await axios.get(
    `http://localhost:3000/api/hotels/${ctx.query.id}`
  );
  return {
    props: {
      hotel: data.data,
    },
  };
}

export default hotel;
