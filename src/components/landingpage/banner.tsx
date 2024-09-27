import Image from "next/image";
<<<<<<< HEAD

const Banner = () => {
  return (
    <>
      <div className="mt-2 container w-full bg-cover bg-center relative z-10"> 
        {/* Give the banner a lower z-index */}
        <Image
          src="/images/vech1.png"
          alt="first"
          className="w-full fill"
          width={1000}
          height={10000}
        />
        <div className="container-a">
          <div className="container-aa">
            <div className="container-aaa relative">
              <div className="mr-9 absolute top-1 right-0">
                <h1 className="m-0">Your dream vehicle</h1>
                <p>Is Just Few Miles Away</p>
              </div>
            </div>
            <div className="container-aab bg-green-200">
              This is form container
=======
import "./banner.css";
// import Image from "next/image";
const Banner = () => {
  return (
    <>
    
      <div className="container mt-2 h-[550]  w-full bg-cover bg-center relative ">
        <Image
          src="/images/vech1.png"
          alt="first"
          className="w-full fill image"
          width={1000}
          height={10000}
        />
        <div className="container-a mx-auto  ">
          <div className="container-aa py-4 md:grid-cols-1">
            <div className="container-aaa mr-7 relative md:ps-20 lg:px-2 xl:px-2">
              <div className="mr-9 absolute top-1 right-0">
                <h1 className="m-0 ">Your dream vehilce</h1>
                <p className="">Is Just Few Miles Away</p>
              </div>
            </div>
            <div className="container-aab bg-green-200">himal
>>>>>>> b07c797478cfaf481a8eeb7f2abfad6cd5577b43
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="container2 bg-green-400"></div>
=======
      {/* <div className="container bg-green-400 ">
        <div className="container2 mx-auto">
        <div className="container2-aa">
          <div className="contaien2-aa-a"></div>
          <div className="container2-aa-b"></div>
          <div className="container2-aa-c"></div>
        </div>
        </div>
    </div> */}
>>>>>>> b07c797478cfaf481a8eeb7f2abfad6cd5577b43
    </>
  );
};

export default Banner;
