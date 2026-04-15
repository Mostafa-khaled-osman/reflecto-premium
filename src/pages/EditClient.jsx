import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

const EditClient = () => {
  const [premiumSupport, setPremiumSupport] = useState(true);
  const [apiAccess, setApiAccess] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(true);

  // Common input styling based on the dark photo
  const inputStyle = "w-full bg-[#201f1f] text-white border border-transparent focus:border-[#ffb4a7] rounded-md py-3 px-4 font-medium outline-none transition-colors";
  const labelStyle = "block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2";

  return (
    <div className="flex bg-[#131313] min-h-[calc(100vh-5rem)] font-body text-[#e5e2e1] relative  md:mt-16 ">
      <AdminSidebar />
      {/* Existing Sidebar Integration */}

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12">
        
        {/* Breadcrumb & Hero */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm font-medium">
            <span>Clients</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-[#e5e2e1]">Edit Client Details</span>
          </div>
          <h2 className="text-4xl font-black font-headline text-white mb-2 tracking-tight">Modify Profile</h2>
          <p className="text-gray-400">Update the executive profile and corporate associations for client reference 092-B.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-32">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Personal Information Panel */}
            <section className="bg-[#1a1a1a] rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-bold font-headline text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffb4a7] bg-[#ffb4a7]/10 p-1.5 rounded-lg">person</span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullLegalName" className={labelStyle}>Full Legal Name</label>
                  <input className={inputStyle} id="fullLegalName" type="text" defaultValue="Alexander Sterling" />
                </div>
                <div>
                  <label htmlFor="emailAddress" className={labelStyle}>Email Address</label>
                  <input className={inputStyle} id="emailAddress" type="email" defaultValue="a.sterling@vanguard-corp.com" />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className={labelStyle}>Phone Number</label>
                  <input className={inputStyle} id="phoneNumber" type="tel" defaultValue="+1 (555) 234-8890" />
                </div>
                <div>
                  <label htmlFor="timeZone" className={labelStyle}>Time Zone</label>
                  <input className={inputStyle} id="timeZone" type="text" defaultValue="Eastern Standard Time (GMT-5)" />
                </div>
              </div>
            </section>

            {/* Business Context Panel */}
            <section className="bg-[#1a1a1a] rounded-xl p-8">
              <h3 className="text-lg font-bold font-headline text-white mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffb4a7] bg-[#ffb4a7]/10 p-1.5 rounded-lg">domain</span>
                Business Context
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className={labelStyle}>Company</label>
                  <input className={inputStyle} id="company" type="text" defaultValue="Vanguard Global Strategy" />
                </div>
                <div>
                  <label htmlFor="roleTitle" className={labelStyle}>Role / Title</label>
                  <input className={inputStyle} id="roleTitle" type="text" defaultValue="Chief Strategy Officer" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="professionalBio" className={labelStyle}>Professional Bio</label>
                  <textarea className={`${inputStyle} resize-none`} id="professionalBio" rows="4" defaultValue="Managing high-net-worth portfolio movements and long-term expansion strategies for the North American sector." />
                </div>
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Account Status Panel */}
            <section className="bg-[#1a1a1a] rounded-xl p-8 relative overflow-hidden">
              <span className="material-symbols-outlined absolute top-4 right-4 text-[120px] text-white opacity-[0.02] pointer-events-none">shield</span>
              
              <h3 className="text-lg font-bold font-headline text-white mb-6 flex items-center gap-3 relative z-10">
                <span className="material-symbols-outlined text-[#ffb4a7] bg-[#ffb4a7]/10 p-1.5 rounded-lg">settings</span>
                Account Status
              </h3>
              
              <div className="space-y-6 relative z-10">
                
                {/* Current State */}
                <div className="bg-[#201f1f] p-4 rounded-lg flex justify-between items-center border border-white/5">
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Current State</span>
                    <span className="text-white font-bold text-sm">Active Member</span>
                  </div>
                  <span className="material-symbols-outlined text-[#d32f2f] bg-[#d32f2f]/20 rounded-full">check_circle</span>
                </div>

                {/* Toggles */}
                <div className="space-y-4">
                  <label htmlFor="premiumSupport" className="flex items-center gap-4 cursor-pointer">
                    <div className="relative inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={premiumSupport}
                        onChange={() => setPremiumSupport(!premiumSupport)}
                      />
                      <div className={`w-11 h-6 rounded-full peer transition-all duration-300 relative ${premiumSupport ? 'bg-[#ffb4a7]' : 'bg-[#353534]'}`}>
                        <div className={`absolute top-[2px] w-5 h-5 bg-white rounded-full transition-all duration-300 ${premiumSupport ? 'left-[22px]' : 'left-[2px]'}`}></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-white">Premium Support</span>
                  </label>
                  
                  <label className="flex items-center gap-4 cursor-pointer">
                    <div className="relative inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={apiAccess}
                        onChange={() => setApiAccess(!apiAccess)}
                      />
                      <div className={`w-11 h-6 rounded-full peer transition-all duration-300 relative ${apiAccess ? 'bg-[#ffb4a7]' : 'bg-[#353534]'}`}>
                        <div className={`absolute top-[2px] w-5 h-5 bg-white rounded-full transition-all duration-300 ${apiAccess ? 'left-[22px]' : 'left-[2px]'}`}></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-white">API Access</span>
                  </label>
                </div>

                {/* Security Note */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Security Note</p>
                    <p className="text-[10px] text-gray-500 italic">Last updated: Oct 24, 2023 by Admin-ID: 882</p>
                  </div>
                  <button className="w-full py-2.5 px-4 text-xs font-bold text-white border border-white/10 rounded-md hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">history</span>
                    Reset Access Keys
                  </button>
                </div>

              </div>
            </section>

            {/* Vanguard Global HQ Image Banner */}
            <div className="relative rounded-xl overflow-hidden h-48 border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Building HQ" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-sm">Vanguard Global HQ</p>
                  <p className="text-gray-300 text-xs mt-1">New York, Manhattan District</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Floating Action / Autosave Toast & Footer Actions combined */}
      {/* The photo shows "Draft autosaved at 14:02 PM" as a toast, and "Cancel Changes" / "Save Executive Profile" at the bottom right. */}
      <div className="fixed bottom-0 right-0 left-0 md:left-[280px] p-6 lg:p-10 pointer-events-none z-50 flex flex-col items-end gap-6">
        
        {/* Toast */}
        {isToastVisible && (
          <div className="bg-black/90 border border-white/10 backdrop-blur-md px-4 py-3 rounded-lg flex items-center gap-3 shadow-2xl pointer-events-auto">
            <span className="material-symbols-outlined text-[#d32f2f] text-lg rounded-full">info</span>
            <span className="text-sm font-semibold text-white">Draft autosaved at 14:02 PM</span>
            <button onClick={() => setIsToastVisible(false)} className="text-gray-500 hover:text-white transition-colors flex items-center ml-2">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex bg-[#131313]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 items-center gap-6 shadow-2xl pointer-events-auto mt-4">
          <button className="text-white text-sm font-semibold hover:text-[#ffb4a7] transition-colors">
            Cancel Changes
          </button>
          <button className="ink-pool-gradient text-white px-8 py-3 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2 hover:shadow-[#ffb4a7]/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm">save</span>
            Save Executive Profile
          </button>
        </div>

      </div>

    </div>
  );
};

export default EditClient;
