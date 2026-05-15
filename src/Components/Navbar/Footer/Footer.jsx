const Footer = () => {
    return (
       <footer className="bg-[#101727]">
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto text-white p-10 md:p-50 gap-10 md:gap-20">
          <div className="md:mx-20">
        <h1 className="text-5xl font-bold mb-5">DigiTools</h1>
        <p>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div>
        <p className="text-2xl mb-3">Product</p>
        <ul className="space-y-3">
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Templates</a></li>
            <li><a href="">Integrations</a></li>
        </ul>
        </div>
        <div>
         <p className="text-2xl mb-3">Company</p>
        <ul className="space-y-3" >
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Press</a></li>
        </ul>
        </div>
        <div>
         <p className="text-2xl mb-3">Resources</p>
        <ul className="space-y-3">
            <li><a href="">Documentation</a></li>
            <li><a href="">Help Center</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        </div>
        <div>
            <p className="mb-2 text-xl">Social Links</p>
           <div className="flex gap-3">
            <a href=""> <img className="bg-white p-2 rounded-full" src="/Instagram (1).png" alt="" /></a>
            <a href=""><img className="bg-white p-2 rounded-full" src="/Facebook (1).png" alt="" /></a>
           <a href=""> <img className="bg-white p-2 rounded-full" src="/fi_5968958.png" alt="" /></a>
           </div>
        </div>
      </div>
      <hr className="w-400 mx-auto text-gray-700"/>
      <div className="text-white flex justify-between max-w-400 mx-auto items-center mb-3">
        <div>
            <p className="text-[#627382]">© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="flex p-8 gap-3 text-[#627382]">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
      </div>
       </footer>
    );
};

export default Footer;