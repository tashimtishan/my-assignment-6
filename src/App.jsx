import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Navbar/Banner/Banner"
import Ratings from "./Components/Navbar/Ratings/Ratings"
import Carts from "./Components/Navbar/Carts/Carts"
import Getstartedsteps from "./Components/Navbar/Getstartedsteps/Getstartedsteps"
import PricingSection from "./Components/Navbar/PricingSection/PricingSection"
import Footer from "./Components/Navbar/Footer/Footer"



const getModels= async () =>{
  const res= await fetch("/models.json")
  return res.json()
}

const ModelPromise=getModels();
function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Ratings></Ratings>
    <Carts ModelPromise={ModelPromise}></Carts>
    <Getstartedsteps></Getstartedsteps>
    <PricingSection></PricingSection>
    <Footer></Footer>
    </>
  )
}

export default App
