import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AddClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    vehicleType: '',
    city: '',
    neighborhood: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
    // Navigate back to clients page after successful submission
    navigate('/clientsDashboard');
  };

  const handleCancel = () => {
    navigate('/clientsDashboard');
  };

  return (
    <div className="flex bg-[#131313] min-h-[calc(100vh-5rem)] font-body text-[#e5e2e1] selection:bg-[#c8c6c6] relative mt-16">
      
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
        <div className="p-8 pb-32 max-w-5xl">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-8">Add New Client</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client Information Section */}
            <section className="bg-[#1a1a1a] rounded-xl p-6 border-t-2 border-[#e65130] shadow-lg">
              <h2 className="text-lg mb-6 font-bold">Client Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#9ca3af]">Full Name</label>
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-[#222222] border-[#333333] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#e65130] focus:border-[#e65130]"
                    placeholder="e.g., Mark Thompson"
                  />
                </div>
                
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#9ca3af]">Phone Number</label>
                  <input 
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-[#222222] border-[#333333] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#e65130] focus:border-[#e65130]"
                    placeholder="e.g. +1 (202) 555-0198"
                  />
                </div>
                
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#9ca3af]">Email Address</label>
                  <input 
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full bg-[#222222] border-[#333333] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#e65130] focus:border-[#e65130]"
                    placeholder="e.g. mark.t@email.com"
                  />
                </div>
                
                {/* Vehicle Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#9ca3af]">Vehicle Type</label>
                  <input 
                    type="text"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    className="w-full bg-[#222222] border-[#333333] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#e65130] focus:border-[#e65130]"
                    placeholder="e.g. 2023 Tesla Model S"
                  />
                </div>
              </div>
            </section>

            {/* Address Details Section */}
            <section className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
              <h2 className="text-lg mb-6 font-bold">Address Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* City */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#9ca3af]">City</label>
                  <input 
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#222222] border-[#333333] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#e65130] focus:border-[#e65130]"
                    placeholder="e.g. Miami"
                  />
                </div>
                
                {/* Neighborhood */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#9ca3af]">Neighborhood</label>
                  <input 
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    className="w-full bg-[#222222] border-[#333333] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#e65130] focus:border-[#e65130]"
                    placeholder="e.g. Brickell"
                  />
                </div>
              </div>
            </section>

            {/* Notes Section */}
            <section className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
              <h2 className="text-lg mb-6 font-bold">Notes</h2>
              <div className="space-y-2">
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full bg-[#222222] border-[#333333] rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none focus:ring-1 focus:ring-[#e65130] focus:border-[#e65130]"
                  placeholder="Enter specific client preferences or detailing instructions..."
                  rows="4"
                />
              </div>
            </section>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-[#e65130] hover:bg-opacity-90 text-white font-semibold py-3 px-12 rounded-lg transition-all shadow-lg active:scale-95 mt-2"
            >
              Save Client
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddClient;