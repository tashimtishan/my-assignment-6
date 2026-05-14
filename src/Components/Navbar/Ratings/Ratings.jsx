const Ratings = () => {
    return (
        <section className="mt-50 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-15">
           <div className="flex  divide-x divide-white/40 justify-center">
             <div className="px-16 text-center">
            <h2 className="font-bold text-6xl text-white mb-4">50K+</h2>
            <p className="text-gray-300">Active Users</p>
            </div>
            <div className="px-16 text-center">
            <h2 className="font-bold text-6xl text-white mb-4">200+</h2>
            <p className="text-gray-300">Premium Tools</p>
            </div>
            <div className="px-16 text-center">
            <h2 className="font-bold text-6xl text-white mb-4">4.9</h2>
            <p className="text-gray-300">Rating</p>
            </div>
           </div>
        </section>
    );
};

export default Ratings;