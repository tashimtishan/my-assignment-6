import { use } from "react";


import Modelcarts from "../modelcarts";




const Carts = ({ModelPromise,Activetab,Useactivetab,cart,SetCart}) => {

    const models=use(ModelPromise);
    
    console.log(models)
    return (
        <section className="mt-30">
            <div className="text-center">
                <h1 className="font-bold text-5xl mb-4">Premium Digital Tools</h1>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>

                {/* name of each tab group should be unique */}
             <div className="tabs tabs-box justify-center bg-transparent mt-3 mb-8">
             <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Products" defaultChecked onClick={()=>Useactivetab("Products")}/>
             <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Cart" onClick={()=>Useactivetab("Cart")}/>
             </div>
               <div className="max-w-7xl mx-auto grid gap-8 grid-cols-3">
                { Activetab === "Products" && models.map((model,index)=>
               <Modelcarts model={model} index={index} key={model.id} cart={cart} SetCart={SetCart}></Modelcarts>
            )}
               </div>
            </div>
        </section>
    );
};

export default Carts;