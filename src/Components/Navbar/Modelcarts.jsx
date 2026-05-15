import { useState } from "react"
import image1 from "../../assets/products/image1.png"
import image2 from "../../assets/products/image2.png"
import image3 from "../../assets/products/image3.png"
import image4 from "../../assets/products/image4.png"
import image5 from "../../assets/products/image5.png"
import image6 from "../../assets/products/image6.png"
import { Check } from "lucide-react";
import { toast } from "react-toastify"
const images=[image1, image2, image3, image4, image5, image6]

const tagStyles = {
  "best seller": "bg-purple-100 text-purple-600",
  "popular": "bg-blue-100 text-blue-600",
  "new": "bg-green-100 text-green-600"
}

const Modelcarts = ({model,index,cart,SetCart}) => {
    console.log(cart)
      const [Issubscribed,Setissubscribed]=useState(false)

      const HandleSubscription=()=>{
        Setissubscribed(true);
        SetCart(prev=>[...prev,{ ...model, image: images[index] }])
        toast.success("Items added to Cart")
      }
    return (
        <div className=" relative border border-gray-200 text-left p-8 rounded-xl">
            <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${tagStyles[model.tagType]}`}>
            {model.tag}</span>
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
            <button onClick={HandleSubscription}className="btn w-full py-5 rounded-full bg-[#891af9] text-white">{Issubscribed?"added to cart!":"Buy Now"}</button>
            </div>
    );
};

export default Modelcarts;