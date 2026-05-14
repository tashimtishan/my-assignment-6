import { ShoppingCart } from "lucide-react";
const Navbar = () => {
    return (
        
        <div>
                    <nav className="flex justify-around items-center p-5">
            <div>
            <h1 className="font-bold text-4xl text-[rgb(112,39,248)]">DigiTools</h1>
            </div>
            <div>
            <ul className="flex gap-8 font-semibold text-lg">
                <li><a href="#">Products</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            </div>
            <div className="flex gap-5 items-center">
            <ShoppingCart className="cursor-pointer"/>
            <button className="font-semibold text-lg"><a href="">Login</a></button>
            <button className="btn p-5 rounded-full text-lg bg-[rgb(123,34,249)] text-white">Get Started</button>
            </div>
        </nav>
        <hr className="text-gray-100"/>
        </div>
        
    );
};

export default Navbar;