import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Facility from "./Facility";
import Link from "next/link";

const SingleHotelData = ({ data }) => {
  console.log("data of hotel", data?.hotelName);
  return (
    <div className=" mb-2 relative w-[80%] flex justify-center bg px-5  ">
      <div className=" w-[70%] ">
        <div className="  flex justify-between">
          <div>
            <h1 className=" text-5xl capitalize font-bold my-5">
              {data?.hotelName}
            </h1>
            <p className=" flex gap-2 items-center">
              {" "}
              <IoLocation /> {data?.address}
            </p>
          </div>
          <span className=" flex justify-center items-center max-h-10 rounded-md font-bold text-1xl px-4 bg-green-500">
            4.3 <FaRegStar />
          </span>
        </div>
        <div className=" flex my-2 items-center gap-2 bg-red-100 p-2 max-w-[70%] text-amber-600 rounded-md">
          <FaRegHeart /> A Modern Property With Tasteful Interiors And
          Wheelchair Accessibility
        </div>
        <p>5.0 · Check-in rating Delightful experience</p>
        {/* facilities section  */}
        <Facility data={data.facilities} />
        <div className=" my-4">
          <h1 className=" text-2xl font-bold">About This Stay</h1>
          <p className=" text-gray-500">A space for new-age travelers.</p>
        </div>
        <p className=" text-3xl font-bold">Price: {data.price } /-</p>
      </div>
      {/* payment section  */}
      <Link
        href={`/payment/${data?._id}`}
        className=" rounded-md w-[30%] sticky bottom-0 bg-green-600"
      >
        <div  className=" rounded-t-md py-1 bg-gradient-to-r from-red-500 to-orange-400">
          <p className=" text-center font-bold">   LOGIN TO GET UPTO 50% LOWER PRICES</p>
        </div>
        <button>LOGIN</button>
      </Link>
    </div>
  );
};

export default SingleHotelData;
