import "./banner.css";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      {/* <div className="mt-2 container h-[550] w-full bg-cover bg-center relative">
        <Image
          src="/images/vech1.png"
          alt="first"
          className="w-full fill  "
          width={1000}
          height={10000}
        />
        <div className="container-1  mx-auto ">
          <div className="grid gap-4 py-4 md:grid-cols-1 gri">
            <div className="mr-7 md:ps-20 lg:px-2">
              <div className="mr-9 md:ps-20 lg:px-2 xl:px-2">
                <div className="mr-9 w-full text">
                  <h1 className="m-0 font-bold text-white head">
                    Your dream vehilce
                  </h1>
                  <p className="text-white">Lorem</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div></div>
      </div> */}


      <div className="mt-2 container h-[550] w-full bg-cover bg-center relative">
      <Image
          src="/images/vech1.png"
          alt="first"
          className="w-full fill  "
          width={1000}
          height={10000}
        />
        <div className="container-a relative mx-auto ">
          <div className="container-aa absolute top-0 left-0">
            <div className="container-aaa">himal </div>
            <div className="container-aab">karki</div>

          </div>
        </div>

      </div>

      {/* <div className="md:mt-60 lg:mt-0 xl:mt-0 bg-blue-400 h-28">

      </div> */}
    </>
  );
};

export default Banner;
