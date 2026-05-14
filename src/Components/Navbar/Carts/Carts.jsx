import { use } from "react";

import image1 from "../../../assets/products/image1.png"
import image2 from "../../../assets/products/image2.png"
import image3 from "../../../assets/products/image3.png"
import image4 from "../../../assets/products/image4.png"
import image5 from "../../../assets/products/image5.png"
import image6 from "../../../assets/products/image6.png"
import { Check } from "lucide-react";


const images=[image1, image2, image3, image4, image5, image6]

const Carts = ({ModelPromise}) => {
    const models=use(ModelPromise);
    console.log(models)
    return (
        <section className="mt-30">
            <div className="text-center">
                <h1 className="font-bold text-5xl mb-4">Premium Digital Tools</h1>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
               <div className="max-w-7xl mx-auto grid gap-8 grid-cols-3">
                {models.map((model,index)=><div className="border border-gray-200 text-left p-8 rounded-xl">
                    <img src={images[index]} className="mb-2" alt="" />
                    <div>
                        <h2 className="text-2xl font-bold mb-3">{model.name}</h2>
                    </div>
                    <div>
                        <p className="text-[#627382] mb-4">{model.description}</p>
                    </div>
                    <div>
                        <p className="font-bold text-xl mb-2">${model.price}/mo</p>
                    </div>
                    <div>
                        {model.features.map(feature=><p className="text-[#627382] flex items-center gap-1 mb-3">
                           <Check className="text-[#30B868]"></Check> {feature}
                        </p>)}
                    </div>
                    <button className="btn w-full py-5 rounded-full bg-[#891af9] text-white">Buy Now</button>
                </div>)}
               </div>
            </div>
        </section>
    );
};

export default Carts;