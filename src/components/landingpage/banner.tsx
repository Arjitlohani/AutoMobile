import "./banner.css";
import Image from "next/image";

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
            </div>
          </div>
        </div>
      </div>

      <div className="container2 bg-green-400"></div>
    </>
  );
};

export default Banner;
