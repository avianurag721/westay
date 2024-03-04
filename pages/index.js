import Navbar from "../Components/Navbar";
import Banners from "../Components/Banners";
import Head from "next/head";


export default function Home() {
  return (
    <main className={`flex no-scrollbar min-h-screen flex-col `}>
      <Head>
        <title>WEstay : A Place to live</title>
        <link  className=" rounded-full" rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Banners/>
      
    </main>
  );
}
