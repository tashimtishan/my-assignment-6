import { Play } from "lucide-react";
const Banner = () => {
    return (
        <section className="flex max-w-7xl mx-auto mt-15 gap-15 min-h-[600px]">
            <div className=" w-fit shrink-0 mt-15 mr-3">
                <p className="inline-flex items-center gap-1 rounded-full bg-[rgb(225,231,255)] px-3 py-1 text-[rgb(110,41,248)] mb-5"><img src="/src/assets/Group 5 (1).png" alt="" />New: AI-Powered Tools Available</p>
                <h1 className="font-bold text-8xl mb-5">Supercharge Your<br />Digital Workflow</h1>
                <p className="text-[#627382] text-[18px] mb-5">Access premium AI tools, design assets, templates, and productivity<br />software—all in one place. Start creating faster today.<br />Explore Products</p>
               <div className="flex gap-3">
                 <button className="btn rounded-full bg-[rgb(110,41,248)] text-white p-5">Explore Products</button>
                <button className="flex items-center gap-1 btn rounded-full border border-[rgb(110,41,248)] text-[rgb(110,41,248)]p-5"><Play className="w-5"/>Watch Demo</button>
               </div>
            </div>
            <div className="flex-1">
               <img className="w-full h-full scale-110 mt-5 min-w-[500px]" src="/src/assets/banner.png" alt="" />
            </div>
        </section>
    );
};

export default Banner;