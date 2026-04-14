import React from 'react';
import Navbar from '../components/Navbar';
import AdminSidebar from '../components/AdminSidebar';

const EditPackage = () => {
  return (
    <div className="flex bg-[#131313] text-[#e5e2e1] font-body relative  mt-16">
      <AdminSidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Navbar />

        <style dangerouslySetInnerHTML={{__html: `
          .ink-pool-gradient {
              background: linear-gradient(to bottom right, #000000, #131b2e);
          }
        `}} />

        <main className="flex-1 pb-20 overflow-y-auto">
        <div className="p-4 md:p-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-white tracking-tight font-headline">Concierge Platinum Suite</h1>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 rounded-xl text-[#e5e2e1] border border-[#5b403c] hover:bg-[#1c1b1b] transition-all font-semibold text-sm">
                Discard Changes
              </button>
              <button className="px-8 py-2.5 rounded-xl ink-pool-gradient text-white font-semibold text-sm shadow-xl shadow-[#ffb4a7]/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">save</span>
                Save Package
              </button>
            </div>
          </div>

          {/* Bento Grid Layout for Form */}
          <div className="grid grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Primary Details */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              
              {/* Basic Info Card */}
              <section className="bg-[#0e0e0e] rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffb4a7]">info</span>
                  Core Configuration
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#e3beb8] px-1 font-label">Package Title</label>
                    <input 
                      className="w-full bg-[#353534] border-0 rounded-md p-3 text-[#e5e2e1] focus:ring-2 focus:ring-[#e4e2e1] transition-all font-medium outline-none" 
                      type="text" 
                      defaultValue="Concierge Platinum Suite" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#e3beb8] px-1 font-label">Detailed Description</label>
                    <textarea 
                      className="w-full bg-[#353534] border-0 rounded-md p-3 text-[#e5e2e1] focus:ring-2 focus:ring-[#e4e2e1] transition-all outline-none resize-y min-h-[120px]" 
                      rows="4"
                      defaultValue="The definitive management solution for high-net-worth clients requiring 24/7 priority access, custom wealth reporting, and dedicated concierge services. Includes all Premium features plus exclusive access to the Atelier Lounge."
                    ></textarea>
                  </div>
                  
                  {/* Package Price Field */}
                  <div className="grid grid-cols-1 gap-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#e3beb8] px-1 font-label">Package Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg">$</span>
                      <input 
                        className="w-full bg-[#353534] border-0 rounded-md pl-8 p-3 text-[#e5e2e1] focus:ring-2 focus:ring-[#e4e2e1] transition-all font-bold text-xl outline-none" 
                        type="number" 
                        defaultValue="2499" 
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Right Column: Metadata & Controls */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              
              {/* Visual Assets Section */}
              <section className="bg-[#0e0e0e] rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-4 font-headline">Package Branding</h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 group relative bg-[#1c1b1b]">
                  <img 
                    alt="Package visual" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYDY6gaO79E1ls55PJkb8Fl-hR0Qjd5hVtD4tQuhSzwNQAVHZLjWw5KPFJIpViSjj66-0XPrfKAkc601GrJ1NMOhinwtQjSZFpOCXbnM4ctLGZJkd1S5eUZL9QfVTI9aSR8EWhvCYvAYcoXOMVZAUUbXeduJnrJnfHgLMvOI-DnRfpvXCEf5h2FQtBUvY2R2mRLo3D0xLxJmaYblIgprn3QjHmMqlQDj63itVimuW1821WCMbjFKQClKMEXZwjf3KPIn91njB_7hen"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors rounded-lg text-xs font-bold uppercase tracking-widest font-label">Update Image</button>
                  </div>
                </div>
                <p className="text-[10px] text-[#e3beb8] leading-relaxed">This image will appear in the client portal and marketing brochures.</p>
              </section>
              
              {/* Availability Status */}
              <section className="bg-[#0e0e0e] rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-4 font-headline">Availability</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-3 bg-[#1c1b1b] rounded-lg cursor-pointer hover:bg-[#201f1f] transition-colors">
                    <span className="font-semibold text-sm select-none">Visible in Catalog</span>
                    <input defaultChecked className="w-5 h-5 rounded-md text-[#ffb4a7] bg-[#353534] border-transparent focus:ring-offset-0 focus:ring-0 cursor-pointer" type="checkbox" />
                  </label>
                  <label className="flex items-center justify-between p-3 bg-[#1c1b1b] rounded-lg cursor-pointer hover:bg-[#201f1f] transition-colors">
                    <span className="font-semibold text-sm select-none">New Enrollments</span>
                    <input defaultChecked className="w-5 h-5 rounded-md text-[#ffb4a7] bg-[#353534] border-transparent focus:ring-offset-0 focus:ring-0 cursor-pointer" type="checkbox" />
                  </label>
                  
                  <div className="pt-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#e3beb8] mb-2 block font-label">Capacity Limit</label>
                    <div className="flex items-center gap-3">
                      <input className="flex-1 accent-black h-2 rounded-lg appearance-none bg-[#353534]" max="100" min="0" type="range" defaultValue="75" />
                      <span className="text-sm font-bold w-12 text-right">75/100</span>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Danger Zone */}
              <section className="bg-[#93000a]/10 rounded-xl p-6 border border-[#ffb4ab]/10">
                <h3 className="text-sm font-bold text-[#ffdad6] mb-3 uppercase tracking-widest font-label">Management Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 text-sm font-semibold text-[#ffdad6] hover:bg-[#93000a]/30 rounded-lg transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">archive</span>
                    Archive Package
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm font-semibold text-[#ffb4ab] hover:bg-[#ffb4ab]/10 rounded-lg transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">delete_forever</span>
                    Delete Permanently
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
        </main>

      </div>
    </div>
  );
};

export default EditPackage;
