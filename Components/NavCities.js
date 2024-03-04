import { FaCaretDown } from "react-icons/fa";

const NavCities = () => {
  const cities = [
    {
      city: "Bangalore",
      hotels: ["aradhna", "citi Club"],
    },
    { city: "Chennai", hotels: ["Aradhna INN", "citi Club"] },
    { city: "Mumbai", hotels: ["Aradhna INN", "Mumbai Stay", "citi Club"] },
    { city: "kolkata", hotels: ["Aradhna INN", "kolkata Stay", "citi Club"] },
    { city: "Lucknow", hotels: ["Aradhna INN", "citi Club"] },
    { city: "Manali", hotels: ["Aradhna INN", "Annapurna", "citi Club"] },
    { city: "Noida", hotels: ["Aradhna INN", "citi Club"] },
    { city: "Delhi", hotels: ["Aradhna INN", "citi Club"] },
    { city: "Hyderabad", hotels: ["Aradhna INN", "citi Club"] },
    { city: "All Cities" },
  ];
  return (
    <div className="  bg-slate-100">
      <ul className="  relative list-none my-auto mx-4  flex justify-around items-center">
        {cities.map((item) => (
          <li
            key={item.city}
            className=" p-4 hover:bg-white  flex group my-auto justify-center items-center"
          >
            {item.city}
            {item.city !== "All Cities" && (
              <span className="group-hover:rotate-180 transition-all duration-200">
                <FaCaretDown />
              </span>
            )}
            {item.city !== "All Cities" && (
              <div className=" mx-auto hidden group-hover:block absolute top-14  w-44 bg-white border">
                <ul className=" flex flex-col ml-4 list-none">
                  {item?.hotels?.length ? (
                    <h1 className=" font-bold">Popular Places</h1>
                  ) : (
                    ""
                  )}
                  {item?.hotels?.map((item,index) => (
                    
                      <li key={index}>{item}</li>
                    
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavCities;
