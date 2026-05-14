const Getstartedsteps = () => {
    return (
        <section className="p-50 bg-[#F9FAFC] mt-30">
            <div className="text-center">
            <h2 className="font-bold text-5xl mb-3">Get Started in 3 Steps</h2>
            <p className="text-[#627382] mb-8">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-9">
                <div className="px-5 py-30 flex flex-col items-center text-center rounded-xl bg-white shadow-lg">
                <img src="/src/assets/user.png" className="rounded-full p-4 bg-[rgb(243,232,254)] mb-5" alt="" />
                <h3 className="text-2xl font-semibold mb-3">Create Account</h3>
                <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="px-5 py-30 flex flex-col items-center text-center rounded-xl bg-white shadow-lg">
                <img src="/src/assets/package.png" className="rounded-full p-4 bg-[rgb(243,232,254)] mb-5" alt="" />
                <h3 className="text-2xl font-semibold mb-3">Choose Products</h3>
                <p className="text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="px-5 py-30 flex flex-col items-center text-center rounded-xl bg-white shadow-lg">
                <img src="/src/assets/rocket.png" className="rounded-full p-4 bg-[rgb(243,232,254)] mb-5" alt="" />
                <h3 className="text-2xl font-semibold mb-3">Start Creating</h3>
                <p className="text-[#627382]">Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </section>
    );
};

export default Getstartedsteps;