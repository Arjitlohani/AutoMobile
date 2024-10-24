import LoanNav from "@/components/utils/LoanNav";
import Navbar from "@/components/utils/Navbar";



const page = () => {
    const handleProfileCard = () => {
        console.log("Profile card handled");
      };
    
      const isOpenProfileCard = false;
  return (
    <>
   <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />
   <LoanNav/>
   <h3 className="ml-7">Home / Loan</h3>
   <div className="w-full flex ">
    <div className=" bg-slate-800 text-white">
    hello
    </div>

    <div className=" bg-slate-400">
    hello
    
    </div>

   </div>
    </>
    
  )
}

export default page
