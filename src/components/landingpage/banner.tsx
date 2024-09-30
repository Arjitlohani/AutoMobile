import Image from "next/image";
import "./banner.css";
// import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="container mt-2 h-[550px]  w-full bg-cover bg-center relative ">
        <Image
          src="/images/vech1.png"
          alt="first"
          className=" w-full  image"
          width={1000}
          height={10000}
        />
        <div className="container-a  mx-auto w-fit ">
          <div className="container-aa py-4 md:flex md:flex-1  ">
            <div className="container-aaa mr-7 relative md:ps-20 lg:px-2 xl:px-2">
              <div className="mr-9 absolute top-1 right-0">
                <h1 className="m-0 ">Your dream vehilce</h1>
                <p className="">Is Just Few Miles Away</p>
              </div>
            </div>
            <div className="container-aab bg-green-200">
              himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasi
              error, corrupti eaque amet fugiat blanditiis modi voluptatum.
              himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasi
              error, corrupti eaque amet fugiat blanditiis modi volu himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasi
              error, corrupti eaque amet fugiat blanditiis modi voluptatum.
              himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasi
              error, corrupti eaque amet fugiat blanditiis modi voluptatum.himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasi
              error, corrupti eaque amet fugiat blanditiis modi voluptatum.himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasiptatum.himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasi
              error, corrupti eaque amet fugiat blanditiis modi voluptatum.himal Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Qui a officiis aliquid assumenda ullam dolorem nemo illo aut quasi
              error, corrupti eaque amet fugiat blanditiis modi voluptatum.
 eaque amet fugiat blanditiis modi voluptatum.
            </div>
          </div>
        </div>
      </div>

      <div className="parent mt-60 md:mt-30 lg:mt-0 hidden md:block lg:block">
        <div className="child mx-auto pb-8 pt-4 sm:px-2 md:px-4 lg:px-5 xl:px-5">
          <div className="children gap-8 max-[1380]:gap-2 lg:w-full hidden  ">
            <div className="child1 px-4">
              <img src="/index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 -mt-15 md:left-1 lg:left-3 xl:left-4">
                <p className="para sm:text-sm md:text-2xl lg:text-4xl xl:text-lg">
                  515K+
                </p>
                <p className="para-small text-sm"> Vehicles Sold</p>
              </div>
            </div>
            <div className="child1  px-4 ">
              <img src="/index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 md:left-1 lg:left-3 xl:left-4 ">
                <p className="para sm:text-sm md:text-2xl lg:text-4xl xl:text-lg "> 250K+ </p>
                <p className="para-small text-sm"> List </p>
              </div>
            </div>
            <div className="child1 px-4">
              <img src="./index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 md:left-1 lg:left-3 xl:left-4">
                <p className="para sm:text-sm md:text-2xl lg:text-4xl xl:text-lg">23.3k+ </p>
                <p className="para-small text-sm">cloud Dealers</p>
              </div>
            </div>
            <div className="child1 px-4">
              <img src="./index.webp" alt="images" />
              <div className="child1-para inset-0 left-2 md:left-1 lg:left-3 xl:left-4">
                <p className="para sm:text-sm md:text-2xl lg:text-4xl xl:text-lg"> 515K+ </p>
                <p className="para-small text-sm">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;


