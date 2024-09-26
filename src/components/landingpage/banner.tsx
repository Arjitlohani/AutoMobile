import Image from "next/image";
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
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container bg-green-400 ">
        <div className="container2 mx-auto">
        <div className="container2-aa">
          <div className="contaien2-aa-a"></div>
          <div className="container2-aa-b"></div>
          <div className="container2-aa-c"></div>
        </div>
        </div>
    </div> */}
    </>
  );
};

export default Banner;
