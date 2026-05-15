import { ShoppingCart,Menu } from "lucide-react";
import { useState } from "react";
const Navbar = ({cart}) => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        
        <div>
            <nav className="flex flex-col md:flex-row justify-around items-center p-5 gap-4">
            <div>
            <h1 className="font-bold text-4xl text-[rgb(112,39,248)]">DigiTools</h1>
            </div>
            <div className="relative">
           <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
           <Menu />
           </button>
           <ul className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-10 right-0 bg-white md:bg-transparent shadow md:shadow-none p-5 md:p-0 rounded-xl gap-4 md:gap-8 font-semibold text-lg z-50`}>
           <li><a href="#">Products</a></li>
           <li><a href="#">Features</a></li>
           <li><a href="#">Pricing</a></li>
           <li><a href="#">Testimonials</a></li>
           <li><a href="#">FAQ</a></li>
           </ul>
           </div>
            <div className="flex gap-5 items-center">
           <div className="relative cursor-pointer">
             <ShoppingCart/>
             {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[rgb(123,34,249)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{cart.length}</span>
          )}
           </div>
            <button className="font-semibold text-lg"><a href="">Login</a></button>
            <button className="btn p-5 rounded-full text-lg bg-[rgb(123,34,249)] text-white">Get Started</button>
            </div>
        </nav>
        <hr className="text-gray-100"/>
        </div>
        
    );
};

export default Navbar;