const Cart = ({cart,SetCart}) => {
     const total = cart.reduce((sum, item) => sum + item.price, 0);

      const handleRemove = (index) => {
        SetCart(prev => prev.filter((_, i) => i !== index))
    }
    console.log(cart)
    return (
       <section className="max-w-7xl mx-auto p-10 rounded-xl border border-gray-300">
        <h1 className="font-bold text-2xl">Your Cart</h1>
        <div>
            <div>
        {cart.length === 0 && <p className="text-gray-400 py-4 text-center text-2xl">No items in cart.</p>}
          {cart.map((item, index) => (
            <div key={index} className="flex p-4 items-center mb-5 rounded-xl shadow gap-4 bg-[#F9FAFC] justify-between">
              <div className="flex items-center gap-4">
                <div className="shadow p-2 rounded-full">
                <img src={item.image} alt={item.name} className="w-10 h-10" />
              </div>
              <div>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="font-semibold">${item.price}/mo</p>
              </div>
              </div>
              <button  onClick={() => handleRemove(index)} className="font-bold text-red-500">Remove</button>
            </div>
          ))}
            </div>
       {cart.length>0 && (<div className="flex justify-between items-center">
        <p className="text-gray-500">Total:</p>
        <p className="font-bold text-2xl">${total}</p>
        </div>)}
        <div>
            <button onClick={()=>SetCart([])} className="btn w-full mt-3 py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Proceed To Checkout</button>
        </div>
        </div>
       </section>
    );
};

export default Cart;