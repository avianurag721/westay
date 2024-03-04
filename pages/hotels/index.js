"use client";

import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const hotel = () => {
  const [hotels, sethotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading,setFetchloading]=useState(false)
  useEffect(() => {
    (async function fetchHotels() {
      setLoading(true);
      const responce = await axios.get("/api/hotels/getAllHotels");
      // console.log(responce?.data?.Hotels);
      sethotels(responce.data?.Hotels);
      setLoading(false);
    })();
  }, []);
  // console.log(hotels[0]);

  const id = 1;
  return (
    <div className=" flex w-full min-h-screen">
      <div className=" w-[30%] bg-yellow-400 ">filter</div>
      {loading ? (
        <div className=" bg-black text-blue-700 flex justify-center items-center w-full min-h-screen text-6xl font-bold">
          Loading...
        </div>
      ) : (
        <div className=" bg-neutral-300 w-full px-5">
          {hotels.map((hotel) => (
            <div
              key={hotel._id}
              className=" bg-white h-[250px] rounded-md border-2  border-black  m-4 flex justify-center"
            >
              {/* img  div   */}
              {hotel?.photos && (
                <div className=" flex justify-between w-[40%] ">
                  <Image
                    className="w-[70%] "
                    src={hotel?.photos[0]}
                    priority
                    width={100}
                    height={100}
                    alt="banner1"
                  />
                  <div className=" flex gap-1 flex-col justify-around items-center">
                    <Image
                      className="   "
                      src={hotel?.photos[0]}
                      priority
                      width={100}
                      height={100}
                      alt="banner2"
                    />
                    <Image
                      className="  "
                      src={hotel?.photos[0]}
                      priority
                      width={100}
                      height={100}
                      alt="banner3"
                    />
                    <Image
                      className="  "
                      src={hotel?.photos[0]}
                      priority
                      width={100}
                      height={100}
                      alt="banner4"
                    />
                  </div>
                </div>
              )}
              {/* other details div   */}
              <div className=" w-[60%] p-2  ">
                <h1 className=" text-3xl font-bold">{hotel.hotelName}</h1>
                <h1 className=" flex  items-center">
                  {" "}
                  <FaLocationDot /> {hotel.address}
                </h1>
                <h1 className=" flex my-2 text-2xl font-bold  items-center">
                  {" "}
                  Amenities
                </h1>
                <ol className=" flex gap-2 text-center">{hotel.facilities}</ol>
                <div className=" flex justify-between">
                  <div className="  gap-2 items-center">
                    <span className=" font-bold mr-2">
                      Price:&#8377;{hotel.price}
                    </span>
                    <strike>&#8377;1599</strike>
                    <h1 className=" text-xs text-gray-600">
                      +111 taxes and gst per room per night
                    </h1>
                  </div>

                  <div className=" flex gap-5 mr-5">
                    <Link 
                      href={`/hotels/${hotel?._id}`}
                      className=" hover:scale-95 transition-all duration-200 p-2 border-2 border-black rounded-sm font-bold"
                    >
                      View Details
                    </Link>
                    <button className=" hover:scale-95 transition-all duration-200 p-2 bg-green-500 font-bold rounded-sm">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default hotel;
