import Image from "next/image";
import "./banner.css";
// import Image from "next/image";
const Banner = () => {
  return (
    <>
   

    <div className="container mt-2 h-[550] mb-6  w-full  relative ">
        <Image
          src="/images/vech1.png"
          alt="first"
          className="w-full "
          width={1000}
          height={10000}
        />
        <div className="absolute  w-full inset-0 h-full">
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
     

    

      
     
    </>
  );
};

export default Banner;
