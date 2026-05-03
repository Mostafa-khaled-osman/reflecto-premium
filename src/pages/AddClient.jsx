import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clientService } from '../services/api';
import { useToast } from '../contexts/ToastContext';
import AdminSidebar from '../components/AdminSidebar';

const AddClient = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    vehicleBrand: '',
    vehicleModel: '',
    city: '',
    neighborhood: '',
    notes: '',
    role: 'client'
  });

  const createMutation = useMutation({
    mutationFn: (data) => clientService.create(data),
    onSuccess: () => {
      toast.success('Client created successfully');
      queryClient.invalidateQueries({ queryKey: ['adminClients'] });
      navigate('/clientsDashboard');
    },
    onError: (err) => {
      toast.error(err.message || 'Failed to create client');
    }
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
    if (!formData.fullName || !formData.phoneNumber) {
      toast.warning('Full Name and Phone Number are required.');
      return;
    }

    const payload = {
      full_name: formData.fullName,
      phone: formData.phoneNumber,
      email: formData.emailAddress || undefined,
      car_brand: formData.vehicleBrand || undefined,
      car_model: formData.vehicleModel || undefined,
      city: formData.city || undefined,
      address: formData.neighborhood || undefined,
      notes: formData.notes || undefined,
      role: formData.role
    };

    createMutation.mutate(payload);
  };

  const handleCancel = () => {
    navigate('/clientsDashboard');
  };

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen font-body text-[#e5e2e1] relative pt-16 md:pt-0">
      
      <AdminSidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
        <div className="p-8 pb-32 max-w-5xl">
          <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm font-medium">
            <span>Clients</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-bold text-[#e5e2e1]">Add New Client</span>
          </div>
          <h1 className="text-3xl font-bold mb-8 text-white">Register New Client</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client Information Section */}
            <section className="bg-[#1a1a1a] rounded-xl p-6 border-t-2 border-[#FF5C35] shadow-lg border border-x-white/5 border-b-white/5">
              <h2 className="text-lg mb-6 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF5C35]">person</span>
                Client Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Full Name *</label>
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    placeholder="e.g., Mark Thompson"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Phone Number *</label>
                  <input 
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    placeholder="e.g. +966 50 123 4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    placeholder="e.g. mark.t@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Role</label>
                  <select 
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                  >
                    <option value="client">Client</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Vehicle Details */}
            <section className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-white/5">
              <h2 className="text-lg mb-6 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF5C35]">directions_car</span>
                Vehicle Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Brand</label>
                  <input 
                    type="text"
                    name="vehicleBrand"
                    value={formData.vehicleBrand}
                    onChange={handleInputChange}
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    placeholder="e.g. Porsche"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Model</label>
                  <input 
                    type="text"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    placeholder="e.g. 911 GT3"
                  />
                </div>
              </div>
            </section>

            {/* Address Details Section */}
            <section className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-white/5">
              <h2 className="text-lg mb-6 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF5C35]">location_on</span>
                Location Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">City</label>
                  <input 
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    placeholder="e.g. Riyadh"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Address / Neighborhood</label>
                  <input 
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleInputChange}
                    disabled={createMutation.isPending}
                    className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    placeholder="e.g. Al Olaya"
                  />
                </div>
              </div>
            </section>

            {/* Notes Section */}
            <section className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-white/5">
              <h2 className="text-lg mb-6 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF5C35]">note</span>
                Internal Notes
              </h2>
              <div className="space-y-2">
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  disabled={createMutation.isPending}
                  className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none resize-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                  placeholder="Enter specific client preferences or detailing instructions..."
                  rows="4"
                />
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button 
                type="button"
                onClick={handleCancel}
                disabled={createMutation.isPending}
                className="px-8 py-3 rounded-lg border border-white/10 font-bold hover:bg-white/5 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={createMutation.isPending}
                className="flex-1 bg-[#FF5C35] hover:brightness-110 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-[#FF5C35]/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {createMutation.isPending && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                Save Client
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddClient;