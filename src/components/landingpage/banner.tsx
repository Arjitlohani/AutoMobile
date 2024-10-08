"use client"
import "./banner.css";
import { useState } from "react";
import Image from "next/image";
import VehicleTypesButton from "../Buttons/vehicleTypesButton";
const Banner = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicleSelector, setVehicleSelector] = useState("");

  const handleClick = (vehicle: string) => {
    setSelectedVehicle((prev) => (prev === vehicle ? "" : vehicle));
  };

  const handleButtonClick = (vehicle: string) => {
    setVehicleSelector((prev) => (prev === vehicle ? "" : vehicle));
  };
  return (
    <>
      <div className="container mt-2 h-[550px]  w-full sm:w-[50%] lg:w-[100%] bg-cover bg-center relative md:w-70%">
        <Image
          src="/images/vech1.png"
          alt="first"
          className=" w-full  sm:w-[50%] md:w-[100%] lg:w-[100%]  image "
          width={1000}
          height={10000}
        />
        <div className="container container-a sm:w-[50%] md:w-[100%] lg:w-[100%]  mx-auto w-fit relative ">
        {/* grid-cols-1 md:grid-cols-8  lg:grid-cols-12 */}
          <div className="container-aa md:mx-auto    py-4 ">
            <div className="container-aaa mr-7 relative md:ps-20 lg:px-2 xl:px-2 ">
              <div className="mr-9 absolute top-1 left-0">
                <h1 className="m-0 ">Your dream vehilce</h1>
                <p className="">Is Just Few Miles Away</p>
              </div>
            </div>
            <div className="container-aab bg-white rounded-2xl col-span-5 col-start-1 lg:col-start-7 mx-auto mt-40 lg:mt-0 shadow-lg  w-[50%] md:w-[70%]">
              <div className="relative   mt-5 h-[650px]  text-black    px-4 m-11">
                <div className="flex justify-center items-center">
                  <div className="px-4">
                    <div className="text-center">
                      <h2 className="my-0 font-bold lg:text-[22px] text-md text-gray-800">
                        Your dream vechile is Waiting for You
                      </h2>
                      <div className="mt-0 text-sm md:text-lg text-gray-500">
                        We will make it true
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-border-center pb-2"></div>
                <div className="flex-1 pt-6">
                  <div>
                    <div className="mx-auto ">
                      <div className="bg-white">
                        <div className="flex justify-center">
                          <div className="text-center text-xl font-medium">
                            What are you looking for?
                          </div>
                          <span>*</span>
                        </div>
                        <div className="flex justify-center items-center pb-8">
                          <div className="pt-2">
                            <div className="flex gap-3">
                              {/* <div
                                onClick={() => handleClick("car")}
                                className={`vechile-img rounded border ${
                                  selectedVehicle === "car"
                                    ? "bg-gradient-to-r from-[#3ba5e0] to-[#34d1c4] shadow-lg"
                                    : "bg-[#f1f1f1] "
                                } flex cursor-pointer flex-col items-center justify-center py-4 capitalize `}
                                style={{
                                  filter:
                                    selectedVehicle === "car"
                                      ? "drop-shadow(0 0 10px #3ba5e0)"
                                      : "none",
                                }}
                              >
                                <div className="">
                                  <img
                                    src="/images/car.svg"
                                    alt="bike"
                                    width="53"
                                    height="24"
                                  />
                                </div>
                                <div className="text-center">Car</div>
                              </div> */}

<VehicleTypesButton
        title="Car"
        imgSrc="/images/car.svg" // Path to your car image
        btnType="button"
        containerStyles={`rounded-3xl min-w-[100px] ${
          selectedVehicle === "car"
                                    ? "bg-gradient-to-r from-[#3ba5e0] to-[#34d1c4] shadow-lg"
                                    : "bg-[#f1f1f1] "
        }`} // Change the background color based on selection
        handleClick={() => handleClick("car")}
      />

                              {/* <div
                                onClick={() => handleClick("bike")}
                                className={`vechile-img rounded border ${
                                  selectedVehicle === "bike"
                                    ? "bg-gradient-to-r from-[#3ba5e0] to-[#34d1c4] shadow-lg"
                                    : "bg-[#f1f1f1] "
                                } flex cursor-pointer flex-col items-center justify-center py-4 capitalize `}
                                style={{
                                  filter:
                                    selectedVehicle === "bike"
                                      ? "drop-shadow(0 0 10px #3ba5e0)"
                                      : "none",
                                }}
                              >
                                <div className="">
                                  <img
                                    src="/images/bike.svg"
                                    alt="bike"
                                    width="53"
                                    height="24"
                                  />
                                </div>
                                <div className="text-center">Bike</div>
                              </div> */}
                              <VehicleTypesButton
        title="bike"
        imgSrc="/images/bike.svg" // Path to your car image
        btnType="button"
        containerStyles={`rounded-3xl min-w-[100px] ${
          selectedVehicle === "bike"
                                    ? "bg-gradient-to-r from-[#3ba5e0] to-[#34d1c4] shadow-lg"
                                    : "bg-[#f1f1f1] "
        }`} // Change the background color based on selection
        handleClick={() => handleClick("bike")}
      />

                              {/* <div
                                onClick={() => handleClick("scooter")}
                                className={`vechile-img rounded border ${
                                  selectedVehicle === "scooter"
                                    ? "bg-gradient-to-r from-[#3ba5e0] to-[#34d1c4] shadow-lg"
                                    : "bg-[#f1f1f1] "
                                }  flex cursor-pointer flex-col items-center justify-center py-4 capitalize `}
                                style={{
                                  filter:
                                    selectedVehicle === "scooter"
                                      ? "drop-shadow(0 0 10px #3ba5e0)"
                                      : "none",
                                }}
                              >
                                <div className="">
                                  <img
                                    src="/images/scooter.svg"
                                    alt="bike"
                                    width="53"
                                    height="24"
                                  />
                                </div>
                                <div className="text-center">Scooter</div>
                              </div> */}
                              <VehicleTypesButton
        title="Scooter"
        imgSrc="/images/scooter.svg" // Path to your car image
        btnType="button"
        containerStyles={`rounded-3xl min-w-[100px] ${
          selectedVehicle === "scooter"
                                    ? "bg-gradient-to-r from-[#3ba5e0] to-[#34d1c4] shadow-lg"
                                    : "bg-[#f1f1f1] "
        }`} // Change the background color based on selection
        handleClick={() => handleClick("scooter")}
      />
                            </div>
                          </div>
                        </div>
                        <div className="pb-4 text-center">
                          <div className="flex justify-center pb-2">
                            <div className="text-[#30343e] font-bold">
                              What is your Prefered conditions?
                            </div>
                            <span>*</span>
                          </div>

                          <div  className="mt-3 mb-10 flex justify-center rounded-full">
                            <button
                            onClick={() => handleButtonClick("used")}
                            className={`-mr-2 cursor-pointer px-12 py-2 text-sm rounded-full ${
                              vehicleSelector === "used" ? "bg-[#3ba5e0] text-white z-10 rounded-r-full" : "bg-[#eff3ff] text-black"
                            } `}>
                              Used
                            </button>
                            <button
                            onClick={() => handleButtonClick("new")}
                            className={`-ms-2 cursor-pointer px-12 py-2 text-sm  ${
                              vehicleSelector === "new" ? "bg-[#3ba5e0] text-white z-10 rounded-r-full" : "bg-[#eff3ff] text-black"
                            }`}>
                              New
                            </button>
                          </div>

                          <div>Prefer Location*</div>

                          <div className="my-3 flex justify-center">
                            <div className="w-[70%]">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Enter Your City"
                                  className="input input-bordered border-1 w-full relative rounded-lg border py-3 pl-4 capitalized focus:outline-0"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-5 flex justify-center">
                            <div className="mt-2 cursor-pointer flex h-5 text-xs text-[#3ba5e0] gap-2">
                              <img
                                src="/images/location.svg"
                                alt="loaction"
                                style={{ height: "16px", width: "16px" }}
                              />
                              Detect my location
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-3 flex justify-center">
                      <button
                        style={{
                          background:
                            "linear-gradient(to right, #3ba5e0 20%, #a2adbd 20%)",
                        }}
                        className="w-60% max-w-md rounded-lg px-4 py-3 font-bold text-white"
                      >
                        Buy Your Vehicle
                      </button>
                    </div>
                  </div>
                  <div className="relative mx-auto mb-6">
                    <div className="flex justify-center gap-2 text-center">
                      <div className="flex">
                        <p className="steps completed bg-[#3fc03e] inline-flex h-[13px] w-[13px] items-center justify-center rounded-full text-white"></p>
                        <span></span>
                      </div>
                      <div className="flex">
                        <p className="bg-gray-300 inline-flex h-[13px] w-[13px] items-center justify-center rounded-full text-white"></p>
                        <span></span>
                      </div>
                      <div className="flex">
                        <p className="bg-gray-300 inline-flex h-[13px] w-[13px] items-center justify-center rounded-full text-white"></p>
                        <span></span>
                      </div>
                      <div className="flex">
                        <p className="bg-gray-300 inline-flex h-[13px] w-[13px] items-center justify-center rounded-full text-white"></p>
                        <span></span>
                      </div>
                      <div className="flex">
                        <p className="bg-gray-300 inline-flex h-[13px] w-[13px] items-center justify-center rounded-full text-white"></p>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parent mt-80 hidden sm:mt-80  md:mt-30 lg:mt-0   md:block lg:block">
        <div className="child mx-auto pb-8 pt-4 sm:px-2 md:px-4 lg:px-5 xl:px-5">
          <div className="children gap-8 max-[1380]:gap-2 lg:w-full hidden  ">
            <div className="child1 px-4">
              <img src="/index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 -mt-15 md:left-1 lg:left-3 xl:left-4">
                <p className="para sm:text-sm md:text-2xl  lg:text-4xl ">
                  515K+
                </p>
                <p className="para-small text-sm"> Vehicles Sold</p>
              </div>
            </div>
            <div className="child1  px-4 ">
              <img src="/index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 md:left-1 lg:left-3 xl:left-4 ">
                <p className="para sm:text-sm md:text-2xl lg:text-4xl  ">
                  
                  250K+
                </p>
                <p className="para-small text-sm "> Listing </p>
              </div>
            </div>
            <div className="child1 px-4">
              <img src="./index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 md:left-1 lg:left-3 xl:left-4">
                <p className="para sm:text-sm md:text-2xl lg:text-4xl ">
                  23.3k+{" "}
                </p>
                <p className="para-small text-sm lg:text-lg">cloud Dealers</p>
              </div>
            </div>
            <div className="child1 px-4">
              <img src="./index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 md:left-1 lg:left-3 xl:left-4">
                <p className="para sm:text-sm md:text-2xl lg:text-4xl ">
                  {" "}
                  515K+{" "}
                </p>
                <p className="para-small text-sm lg:text-lg">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     



    <div className="container h-[256px] lg:mx-auto lg:h-[200px]  mt-[22rem] md:mt-0">
      <div className="obvt-obt-ticker">
        <div className="obvt-title-container">
          <img src="/images/obv_img.png" alt="obvt_img" />
          <h4>Pricing Ticker</h4>

        </div>
        <div className="obvt-parent-wrapper">
          <div className="obvt-card">
            <div className="obvt-logo">
                        <img src="/images/obvt_logo.png" alt="" />
            </div>

            <div className="obvt-meter">
              <img src="/images/obtv_meter.png" alt="" />
            </div>

            <div className="obvt-select-vechile-type">

              <div className="obvt-align">
                
              </div>
              <div className="obvt-align "></div>
            </div>

          </div>
          <div className="obvt-glide"></div>

        </div>

      </div>

    </div>


    </>
  );
};

export default Banner;
