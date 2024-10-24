import { Banner } from "@/components"  
// import Test from "@/components/landingpage/Test"
import Navbar from "@/components/utils/Navbar"

const LandingPage = () => {
  const handleProfileCard = () => {
    console.log("Profile card handled");
  };

  const isOpenProfileCard = false;
  return (
    <>
    <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />
    <div className="overflow-hidden pb-6">
      <div className="pb-6">
         
      <Banner/>
      {/* <Test/> */}
      </div>
    </div>
    </>
  )
}

export default LandingPage
