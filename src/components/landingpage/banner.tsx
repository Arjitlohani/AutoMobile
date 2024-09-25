import "./banner.css"
import Image from "next/image"
const Banner = () => {
  return (
    <div className="container h-[550] w-full bg-cover bg-center relative">
        <Image src="/vech1.webp" alt="first" 
            className="w-full h-[80vh]"
            width={1000}
            height={10000}/> 
        <div className="container-1  mx-auto ">
        <div className="grid gap-4 py-4 md:grid-cols-1">
            <div className="mr-7 md:ps-20 lg:px-2">
                <div className="mr-9 md:ps-20 lg:px-2 xl:px-2">
                    <div className="mr-9 w-full">
                    <h1 className="m-0 font-bold text-white ">Your dream vehilce</h1>
                    <p className="text-white">Lorem</p>
                    </div>
                </div>
                <div></div>
            </div>   
        </div>
        </div>
        
        <div>

        </div>
      
    </div>
  )
}

export default Banner
