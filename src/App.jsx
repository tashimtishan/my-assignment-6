import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Navbar/Banner/Banner"
import Ratings from "./Components/Navbar/Ratings/Ratings"
import Carts from "./Components/Navbar/Carts/Carts"



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
    </>
  )
}

export default App
