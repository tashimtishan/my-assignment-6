import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Navbar/Banner/Banner"
import Ratings from "./Components/Navbar/Ratings/Ratings"
import Carts from "./Components/Navbar/Carts/Carts"
import Getstartedsteps from "./Components/Navbar/Getstartedsteps/Getstartedsteps"
import PricingSection from "./Components/Navbar/PricingSection/PricingSection"
import Footer from "./Components/Navbar/Footer/Footer"
import Cart from "./Components/Navbar/Cart"
import { useState } from "react"



const getModels= async () =>{
  const res= await fetch("/models.json")
  return res.json()
}

const ModelPromise=getModels();
function App() {
  const [Activetab,Useactivetab]=useState("Products")
  const [cart,SetCart]=useState([]);
  console.log("App cart state:", cart)

  return (
    <>
    <Navbar cart={cart}></Navbar>
    <Banner></Banner>
    <Ratings></Ratings>
   <Carts ModelPromise={ModelPromise} Activetab={Activetab} Useactivetab={Useactivetab} cart={cart} SetCart={SetCart}/>
    {Activetab==="Cart" && <Cart cart={cart} SetCart={SetCart}/>}
    <Getstartedsteps></Getstartedsteps>
    <PricingSection></PricingSection>
    <Footer></Footer>
    </>
  )
}

export default App
