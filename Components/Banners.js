import Image from "next/image";
import { useRouter } from "next/router";

const Banners = () => {
  const router=useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    router.push("/hotels")
  }
  return (
    <div className=" flex flex-col justify-center item-center ">
      <div className=" flex flex-col justify-center items-center bg-red-500 min-h-60">
        <h1 className=" text-white font-bold text-4xl">
          Over 174,000+ hotels and homes across 35+ countries
        </h1>
        <form onSubmit={handleSearch} className=" rounded-lg bg-blue-700 mt-6">
          <input
            className=" rounded-l-md w-96 h-12 px-6 outline-none"
            type="text"
            placeholder="Search Your Hotels..."
          />
          <button type="submit" className=" text-lg text-white rounded-r-md bg-green-600  w-60 h-12 hover:bg-green-800 transition-all duration-200">
            Search
          </button>
        </form>
      </div>
      <div className=" mx-auto py-12 w-[90%] ">
        <Image
          className=" rounded-md my-4 w-full "
          src={"/banner1.jpg"}
          priority 
          width={100}
          height={54}
          alt="banner1"
        />
        <Image
          className=" rounded-md my-16 w-full "
          src={"/banner2.png"}
          width={100}
          height={54}
          alt="banner2"
        />
        <div className=" w-full border justify-around flex items-center p-4">
          <div className=" flex gap-6 justify-center item-center">
            <Image src={"/fireimg.png"} width={60} height={60} alt="fire" />
            <div>
              <h1 className=" font-bold  text-xl ">Get access to exclusive deals</h1>
              <p>Only the best deals reach your inbox</p>
            </div>
          </div>
          <div>
            <div className="relative ">
              <input className=" outline-none border rounded-md w-96 p-4 p-r-8"  type="text" placeholder="e.g. anurag@gmail.com" />
              <p className="absolute text-xs left-4 bg-white px-2 top-[-9px]">Your email</p>
              <button className="border bg-red-500 text-white text-bold mx-6 rounded-md w-44 p-4">Notify Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
