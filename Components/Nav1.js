// "use client"

import { MdCardMembership } from "react-icons/md";
import { VscBriefcase } from "react-icons/vsc";
import { BiBuildingHouse } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import Cookies from "js-cookie";
import Link from "next/link";

const Nav1 = () => {
  const userExsits = Cookies.get("user");
  const handleLogout = () => {
    console.log("logging out");
    Cookies.remove("user");
    window.location.reload(false);
    console.log("loggd out");
  };
  const subParts = [
    {
      pic: MdCardMembership,
      heading: "Become a Member",
      subHeading: "Additional 10% of on Stays",
    },
    {
      pic: VscBriefcase,
      heading: "WEstay For Business",
      subHeading: "Trusted By 5000 Corporates",
    },
    {
      pic: BiBuildingHouse,
      heading: "List Your Property",
      subHeading: "Start earning in 30 mins",
    },
    {
      pic: IoCallOutline,
      heading: "+91-91409313**",
      subHeading: "Call Us to Book Now",
    },
  ];
  return (
    <div className=" flex justify-around  items-start">
      <div>
        <h1 className="flex mx-10 my-auto  font-extrabold text-red-500 text-4xl">
          WEstay
        </h1>
      </div>
      <div className=" flex justify-center min-h-14 ">
        {subParts.map((item, index) => (
          <div key={index} className="flex p-2 justify-center border-r-2 px-2">
            <span className=" flex justify-center items-center mx-2 text-2xl">
              {<item.pic />}
            </span>
            <div>
              <h1 className=" font-bold"> {item.heading}</h1>
              <p className=" text-gray-600 text-sm"> {item.subHeading}</p>
            </div>
          </div>
        ))}

        {/* language */}
        <div className=" flex justify-center items-center border-r-2 px-4 mx-2 hover:bg-slate-100 transition-all duration-200 ">
          <span className="flex justify-center items-center text-2xl">
            <TbWorld />
          </span>

          <h1 className=" font-bold">English</h1>
          <FaCaretDown />
        </div>

        {/* login and signup  */}
        <div className=" flex justify-center items-center  px-4 hover:bg-slate-100 transition-all duration-200 ">
          {userExsits ? (
            <div
              className=" cursor-pointer flex justify-center items-center gap-1 font-bold"
              onClick={handleLogout}
            >
              {" "}
              <span>
                <FaUser />{" "}
              </span>{" "}
              <span>Log out</span>
            </div>
          ) : (
            <div className=" flex justify-center items-center">
              <span className="flex justify-center p-1 items-center text-2xl">
                <FaRegCircleUser />
              </span>
              <Link href="/login" className=" font-bold">
                {" "}
                Login/SignUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav1;
