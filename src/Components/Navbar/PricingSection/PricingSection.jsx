import { Check } from "lucide-react";
const PricingSection = () => {
    return (
      <section className="p-50">
        <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="mb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
       <div className="flex justify-center gap-10 mt-5">
         <div className="shadow-lg p-10 rounded-2xl bg-[rgb(249,250,252)]">
        <h4 className="font-bold text-2xl">Starter</h4>
        <p className="mb-5">Perfect for getting started</p>
        <p className="font-bold text-3xl mb-5">$0/month</p>
        <ul className="mb-10">
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Access to 10 free tools</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Basic templates</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Community support</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>1 project per month</li>
        </ul>
        <button className="btn w-full rounded-full px-20 py-5 mt-5 bg-[#7525f8] text-white">Get Started Free</button>
        </div>

         <div className="relative shadow-lg p-10 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>
        <h4 className="font-bold text-2xl">Pro</h4>
        <p className="mb-5">Best for professionals</p>
        <p className="font-bold text-3xl mb-5">$29/month</p>
        <ul className="mb-10 flex-col">
            <li className="flex items-center gap-2"><Check></Check>Access to all premium tools</li>
            <li className="flex items-center gap-2"><Check></Check>Unlimited templates</li>
            <li className="flex items-center gap-2"><Check></Check>Priority support</li>
            <li className="flex items-center gap-2"><Check></Check>Unlimited projects</li>
            <li className="flex items-center gap-2"><Check></Check>Cloud sync</li>
            <li className="flex items-center gap-2"><Check></Check>Advanced analytics</li>
            
        </ul>
        <button className="btn w-full rounded-full px-20 py-5 mt-5">Start Pro Trial</button>
        </div>

         <div className="shadow-lg p-10 rounded-2xl bg-[rgb(249,250,252)]">
        <h4 className="font-bold text-2xl">Enterprise</h4>
        <p className="mb-5">For teams and businesses</p>
        <p className="font-bold text-3xl mb-5">$99/month</p>
        <ul className="mb-10">
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Everything in Pro</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Team collaboration</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Custom integrations</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Dedicated support</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>SLA guarantee</li>
            <li className="flex items-center gap-2"><Check className="text-green-500"></Check>Custom branding</li>
        </ul>
        <button className="btn w-full rounded-full px-20 py-5 mt-5 bg-[#7525f8] text-white">Contact Sales</button>
        </div>
       </div>
      </section>
    );
};

export default PricingSection;