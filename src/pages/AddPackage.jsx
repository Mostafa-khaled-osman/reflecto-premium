import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const inclusionOptions = [
  'American PPF',
  'Nano Coating',
  'Thermal Insulation',
  'Leather Treatment',
  'Interior Detailing',
  'Engine Bay Detailing',
  'Wheel & Caliper Protection',
];

const AddPackage = () => {
  const navigate = useNavigate();
  const [packageName, setPackageName] = useState('');
  const [price, setPrice] = useState('');
  const [warranty, setWarranty] = useState('');
  const [description, setDescription] = useState('');
  const [inclusions, setInclusions] = useState([]);
  const [customFeatures, setCustomFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState('');
  const [showAddFeature, setShowAddFeature] = useState(false);
  const [showToast, setShowToast] = useState(true);

  const handleInclusionToggle = (item) => {
    setInclusions((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setCustomFeatures((prev) => [...prev, newFeature.trim()]);
      setNewFeature('');
      setShowAddFeature(false);
    }
  };

  const handleRemoveFeature = (index) => {
    setCustomFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 mt-20">
      {/* Main Content Area */}
      <main className="p-6 md:p-8 overflow-y-auto min-h-screen">
        <div className="max-w-6xl mx-auto pb-24 relative">
          {/* Breadcrumbs */}
          <nav className="text-xs text-gray-500 mb-2 font-medium">
            <Link to="/admin" className="hover:text-gray-300 cursor-pointer transition-colors">
              Packages
            </Link>
            <span className="mx-1">›</span>
            <span className="text-gray-300">Add Package</span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-8">
            Create New Package
          </h1>

          {/* Form Container */}
          <div className="space-y-6">
            {/* Package Details Section */}
            <section className="bg-[#1e1e1e] rounded-2xl p-8 border border-[#2a2a2a]">
              <h2 className="text-lg font-bold text-white mb-6">Package Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Package Name
                  </label>
                  <input
                    className="w-full bg-[#2a2a2a] border-none rounded-lg py-3 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-[#e65127] focus:outline-none transition-all"
                    placeholder="e.g. Ultimate Protection Plus"
                    type="text"
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Price
                  </label>
                  <input
                    className="w-full bg-[#2a2a2a] border-none rounded-lg py-3 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-[#e65127] focus:outline-none transition-all"
                    placeholder="e.g. 1200.00"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Warranty Duration (Years)
                  </label>
                  <input
                    className="w-full bg-[#2a2a2a] border-none rounded-lg py-3 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-[#e65127] focus:outline-none transition-all"
                    placeholder="e.g. 5"
                    type="text"
                    value={warranty}
                    onChange={(e) => setWarranty(e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Inclusions Section */}
            <section className="bg-[#1e1e1e] rounded-2xl p-8 border border-[#2a2a2a]">
              <h2 className="text-lg font-bold text-white mb-6">Inclusions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 mb-6">
                {inclusionOptions.map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded bg-[#2a2a2a] border-none text-[#e65127] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                      type="checkbox"
                      checked={inclusions.includes(item)}
                      onChange={() => handleInclusionToggle(item)}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </label>
                ))}

                {/* Custom features */}
                {customFeatures.map((feature, index) => (
                  <label key={`custom-${index}`} className="flex items-center gap-3 group">
                    <input
                      className="w-5 h-5 rounded bg-[#2a2a2a] border-none text-[#e65127] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                      type="checkbox"
                      defaultChecked
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors flex-1">
                      {feature}
                    </span>
                    <button
                      onClick={() => handleRemoveFeature(index)}
                      className="text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </button>
                  </label>
                ))}
              </div>

              {/* Add Feature inline input */}
              {showAddFeature && (
                <div className="flex items-center gap-3 mb-4">
                  <input
                    className="bg-[#2a2a2a] border-none rounded-lg py-2 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-[#e65127] focus:outline-none transition-all flex-1 max-w-xs"
                    placeholder="Feature name..."
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddFeature()}
                    autoFocus
                  />
                  <button
                    onClick={handleAddFeature}
                    className="text-[#e65127] text-sm font-semibold hover:text-white transition-colors"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => { setShowAddFeature(false); setNewFeature(''); }}
                    className="text-gray-500 text-sm font-semibold hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}

              <button
                onClick={() => setShowAddFeature(true)}
                className="text-[#e65127] border border-[#e65127]/30 rounded-lg px-4 py-1.5 text-[11px] font-semibold hover:bg-[#e65127]/10 transition-all flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
                Add Feature
              </button>
            </section>

            {/* Description Section */}
            <section className="bg-[#1e1e1e] rounded-2xl p-8 border border-[#2a2a2a]">
              <h2 className="text-lg font-bold text-white mb-6">Description</h2>
              <textarea
                className="w-full bg-[#2a2a2a] border-none rounded-lg py-4 px-4 text-sm text-white placeholder:text-[13px] placeholder:text-gray-500 focus:ring-1 focus:ring-[#e65127] focus:outline-none resize-none transition-all"
                placeholder="Write marketing copy for the package..."
                rows="6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </section>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => navigate('/admin')}
              className="px-10 py-3 border border-[#333333] rounded-xl text-white font-bold text-sm hover:bg-[#222] transition-colors"
            >
              Cancel
            </button>
            <button className="px-8 py-3 bg-[#ff5c35] rounded-xl text-white font-bold text-sm flex items-center gap-2 hover:bg-[#e65127] transition-colors shadow-lg shadow-[#e65127]/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Publish Package
            </button>
          </div>

          {/* Toast Notification */}
          {showToast && (
            <div className="fixed bottom-24 right-8 bg-[#0a0a0a] border border-[#222] rounded-md px-4 py-2.5 flex items-center gap-2.5 shadow-2xl z-[60]">
              <svg className="w-3.5 h-3.5 text-[#e65127]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <p className="text-[11px] text-gray-200 font-medium">Draft autosaved at 14:02 PM</p>
              <button
                onClick={() => setShowToast(false)}
                className="text-gray-500 hover:text-gray-300 ml-4 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AddPackage;
