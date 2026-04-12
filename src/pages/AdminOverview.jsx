import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminOverview = () => {

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden pt-20">
      <AdminSidebar />

      {/* <div className="flex-grow lg:pl-80 flex flex-col xl:flex-row overflow-hidden"> */}
      {/* BEGIN: Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {/* Header (Preserving functional pieces from original) */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pl-12 lg:pl-0 mt-4 lg:mt-0 shrink-0">
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Dashboard / Overview</div>
            <h1 className="text-3xl font-display font-bold">Overview</h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <div className="relative shrink-0">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input
                type="text"
                placeholder="Search client, ID..."
                className="bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-6 py-3 text-sm w-48 sm:w-80 focus:outline-none focus:border-[#FF5C35] transition-all"
              />
            </div>
            <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-white transition-all relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF5C35] rounded-full"></span>
            </button>
            <Link
              to="/Contact"
              className="px-6 py-3 shrink-0 bg-[#FF5C35] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              <span className="hidden sm:inline">New Contact</span>
              <span className="sm:hidden">New</span>
            </Link>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[380px] rounded-xl overflow-hidden relative shadow-2xl shrink-0 mt-2">
          <img alt="Main Car Hero" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1200" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Client Data Table Section */}
        <section className="bg-[#222222] rounded-xl p-6 border border-[#333333] flex-1 flex flex-col min-h-[400px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-white text-lg font-semibold tracking-wide">CLIENT DATA & SCHEDULING</h2>
            {/* <div className="flex items-center gap-2 text-[#a0a0a0]">
                <span className="text-xs font-semibold cursor-pointer hover:text-white transition-colors">EXPORT REPORT</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div> */}
          </div>

          <div className="w-full flex-1 flex flex-col overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 text-[#a0a0a0] text-xs font-semibold tracking-wider pb-3 border-b border-[#333333] mb-3">
                <div className="col-span-3">NAME & BATES</div>
                <div className="col-span-2">NOTICE / NATURE</div>
                <div className="col-span-3">DEVELOPED SERVICE</div>
                <div className="col-span-2">SMARTPHONE</div>
                <div className="col-span-2 text-right">ACTION / FLEET</div>
              </div>

              {/* Table Body Rows */}
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-12 gap-4 items-center bg-[#141414] border border-[#333333] rounded-lg p-3 hover:bg-gray-800 transition-colors">
                  <div className="col-span-3 flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover border border-gray-600" src="https://i.pravatar.cc/150?u=Masstaria" alt="User" />
                    <span className="text-white text-sm">Masstaria</span>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">RESION</div>
                  <div className="col-span-3 flex items-center gap-2">
                    <span className="text-gray-300 text-sm">TRAK ASH & NGNESS</span>
                    <svg className="w-3 h-3 text-[#ff4d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">PIN SENSIOXE</div>
                  <div className="col-span-2 text-right text-gray-400 text-sm">DESIGN</div>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center bg-[#141414] border border-[#333333] rounded-lg p-3 hover:bg-gray-800 transition-colors">
                  <div className="col-span-3 flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover border border-gray-600" src="https://i.pravatar.cc/150?u=Phillip" alt="User" />
                    <span className="text-white text-sm whitespace-nowrap">Phillip Saonatksarsmona</span>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">RESION</div>
                  <div className="col-span-3 flex items-center gap-2">
                    <span className="text-gray-300 text-sm">TRANSFORM OERING SERIES</span>
                    <svg className="w-3 h-3 text-[#ff4d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">PIN CIEEDE</div>
                  <div className="col-span-2 text-right text-gray-400 text-sm">DESIGN</div>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center bg-[#141414] border border-[#333333] rounded-lg p-3 hover:bg-gray-800 transition-colors">
                  <div className="col-span-3 flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover border border-gray-600" src="https://i.pravatar.cc/150?u=Ptohyer" alt="User" />
                    <span className="text-white text-sm">Ptohyer Clanirig</span>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">RGSION</div>
                  <div className="col-span-3 flex items-center justify-between">
                    <span className="text-gray-300 text-sm">PLAE RECOVERY</span>
                    <div className="w-4 h-4 border border-[#ff4d4d] rounded-sm mr-4"></div>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">FROWARD FOROA</div>
                  <div className="col-span-2 text-right text-gray-400 text-sm">DESIGN</div>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center bg-[#141414] border border-[#333333] rounded-lg p-3 hover:bg-gray-800 transition-colors">
                  <div className="col-span-3 flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover border border-gray-600" src="https://i.pravatar.cc/150?u=Smwess" alt="User" />
                    <span className="text-white text-sm">Smwess Clooering</span>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">RESION</div>
                  <div className="col-span-3 flex items-center gap-2">
                    <span className="text-gray-300 text-sm">TRONSXR EXETIVE VISUAL</span>
                    <svg className="w-3 h-3 text-[#ff4d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className="col-span-2 text-gray-400 text-sm">PIN STING</div>
                  <div className="col-span-2 text-right text-gray-400 text-sm">DESIGN</div>
                </div>

                {/* Active highlighted row */}
                <div className="grid grid-cols-12 gap-4 items-center bg-[#ff4d4d] rounded-lg p-3 shadow-lg shadow-[#ff4d4d]/20">
                  <div className="col-span-3 flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover border border-white/30" src="https://i.pravatar.cc/150?u=Sacsio" alt="User" />
                    <span className="text-white font-medium text-sm">Sacsio & Porasslanema</span>
                  </div>
                  <div className="col-span-2 text-white/80 text-sm">SERVICE</div>
                  <div className="col-span-3 text-white/80 text-xs italic pr-4">Transforme nature wihicigclassorit is</div>
                  <div className="col-span-4 text-right text-white font-medium text-sm">TECHNOLOGY2</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* END: Main Content Area */}

      {/* BEGIN: Right Sidebar */}
      <aside className="w-full xl:w-[360px] flex-shrink-0 border-t xl:border-t-0 xl:border-l border-[#333333] bg-[#141414] overflow-y-auto p-4 flex flex-col gap-4">

        {/* Analytics Dial Section */}
        <section className="bg-[#222222] rounded-xl p-5 border border-[#333333] flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff4d4d]"></div>
              <div>
                <div className="text-white text-xs font-semibold">ACTRannon</div>
                <div className="text-[10px] text-gray-500">Ivorete antites</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff4d4d]"></div>
              <div>
                <div className="text-white text-xs font-semibold">Derktc clases</div>
                <div className="text-[10px] text-gray-500">Deletuler woes</div>
              </div>
            </div>
          </div>

          <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
              <path className="text-[#333333]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeWidth="3"></path>
              <path className="text-[#ff4d4d]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="15, 100" strokeDashoffset="-82" strokeWidth="3"></path>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-light text-white">82<span className="text-sm text-gray-400">%</span></span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 justify-end">
              <div className="text-right">
                <div className="text-white text-xs font-semibold">ACTIVE</div>
                <div className="text-[10px] text-gray-500">Acvie 0000</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <div className="text-right">
                <div className="text-white text-xs font-semibold">Chkl Develope</div>
                <div className="text-[10px] text-gray-500">Waear clases</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#ff4d4d]"></div>
            </div>
          </div>
        </section>

        {/* Active Analytics Map */}
        <section className="bg-[#222222] rounded-xl p-5 border border-[#333333]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-sm font-semibold tracking-wider">ACTIVE ANALYTICS</h2>
            <span className="text-[#a0a0a0] cursor-pointer hover:text-white">...</span>
          </div>
          <div className="w-full h-40 bg-[#141414] rounded-lg flex items-center justify-center relative overflow-hidden border border-[#333333]">
            <img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" alt="Map" />
            <div className="absolute w-2 h-2 bg-[#ff4d4d] rounded-full top-[30%] left-[25%] shadow-[0_0_10px_rgba(255,77,77,0.8)]"></div>
            <div className="absolute w-2 h-2 bg-[#ff4d4d] rounded-full top-[40%] left-[45%] shadow-[0_0_10px_rgba(255,77,77,0.8)]"></div>
            <div className="absolute w-2 h-2 bg-[#ff4d4d] rounded-full top-[25%] left-[75%] shadow-[0_0_10px_rgba(255,77,77,0.8)]"></div>
          </div>
        </section>

        {/* Recent Content Manager */}
        <section className="bg-[#222222] rounded-xl p-5 border border-[#333333] flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-sm font-semibold tracking-wider">RECENT CONTENT MANAGER</h2>
            <span className="text-[#a0a0a0] cursor-pointer hover:text-white">...</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-[#141414] rounded-lg p-2 border border-[#333333] relative overflow-hidden h-24">
              <img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600" alt="Camaro" />
              <div className="relative z-10">
                <div className="text-[10px] text-gray-400">GALLERY VIEW</div>
                <div className="text-xs text-white font-medium">CAMARO SS 2021</div>
              </div>
              <div className="absolute bottom-2 right-2 flex gap-1">
                <div className="w-2 h-2 bg-[#ff4d4d] rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="bg-[#141414] rounded-lg p-2 border border-[#333333] flex flex-col justify-end h-24 relative overflow-hidden">
              {/* SVG Line Chart Representation */}
              <svg className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="none">
                <path d="M0,80 Q20,30 40,60 T80,20 T120,50 T160,10 L200,90" fill="none" stroke="#ff4d4d" strokeWidth="2"></path>
                <path d="M0,90 Q20,60 40,80 T80,40 T120,70 T160,30 L200,100" fill="none" stroke="#555" strokeWidth="1"></path>
              </svg>
              <div className="flex justify-between items-end relative z-10 w-full">
                <div className="text-[10px] text-gray-400">ENGAGEMENT</div>
                <div className="flex gap-1 mb-1">
                  <div className="w-1.5 h-1.5 bg-[#4a4a4a] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#4a4a4a] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#ff4d4d] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 flex-1 min-h-[60px]">
            <div className="bg-[#141414] rounded border border-[#333333] overflow-hidden relative">
              <img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1552933529-e359b2477262?auto=format&fit=crop&q=80&w=400" alt="Thumb" />
              <div className="absolute bottom-1 left-1 bg-[#ff4d4d] text-[8px] text-white px-1 rounded">NEW</div>
            </div>
            <div className="bg-[#141414] rounded border border-[#333333] overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=400" alt="Thumb" />
            </div>
            <div className="bg-[#141414] rounded border border-[#333333] overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=400" alt="Thumb" />
            </div>
            <div className="bg-[#141414] rounded border border-[#333333] overflow-hidden flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
          </div>
        </section>

      </aside>
      {/* END: Right Sidebar */}
    </div>
    // </div>
  );
};

export default AdminOverview;
