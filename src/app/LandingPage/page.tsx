import { Banner } from "@/components"
import Navbar from "@/components/utils/Navbar"

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <div className="overflow-hidden pb-6">
      <div className="pb-6">
         
      <Banner/>
      </div>
    </div>
    </>
  )
}

export default LandingPage
