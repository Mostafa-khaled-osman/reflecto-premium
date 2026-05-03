import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clientService } from '../services/api';
import { useToast } from '../contexts/ToastContext';
import AdminSidebar from '../components/AdminSidebar';

const EditClient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const searchParams = new URLSearchParams(location.search);
  const clientId = searchParams.get('id');

  const [premiumSupport, setPremiumSupport] = useState(true);
  const [isActive, setIsActive] = useState(true);

  // Local form state
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    city: '',
    address: '',
    vehicleBrand: '',
    vehicleModel: '',
    notes: '',
    role: 'client'
  });

  const { data: clientData, isLoading: isFetching } = useQuery({
    queryKey: ['adminClient', clientId],
    queryFn: () => clientService.getById(clientId),
    enabled: !!clientId,
  });

  // Populate form when data arrives
  useEffect(() => {
    if (clientData) {
      setFormData({
        fullName: clientData.full_name || '',
        emailAddress: clientData.email || '',
        phoneNumber: clientData.phone || '',
        city: clientData.city || '',
        address: clientData.address || '',
        vehicleBrand: clientData.car_brand || '',
        vehicleModel: clientData.car_model || '',
        notes: clientData.notes || '',
        role: clientData.role || 'client'
      });
      setIsActive(clientData.is_active !== false); // Default to true
      setPremiumSupport(clientData.is_premium === true);
    }
  }, [clientData]);

  const updateMutation = useMutation({
    mutationFn: (payload) => clientService.update(clientId, payload),
    onSuccess: () => {
      toast.success('Client updated successfully');
      queryClient.invalidateQueries({ queryKey: ['adminClient', clientId] });
      queryClient.invalidateQueries({ queryKey: ['adminClients'] });
    },
    onError: (err) => {
      toast.error(err.message || 'Failed to update client');
    }
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSave = () => {
    if (!formData.fullName || !formData.phoneNumber) {
      toast.warning('Full Name and Phone Number are required.');
      return;
    }

    const payload = {
      full_name: formData.fullName,
      email: formData.emailAddress,
      phone: formData.phoneNumber,
      city: formData.city,
      address: formData.address,
      car_brand: formData.vehicleBrand,
      car_model: formData.vehicleModel,
      notes: formData.notes,
      role: formData.role,
      is_active: isActive,
      is_premium: premiumSupport
    };

    updateMutation.mutate(payload);
  };

  const handleCancel = () => {
    navigate('/clientsDashboard');
  };

  // Common input styling based on the dark photo
  const inputStyle = "w-full bg-[#201f1f] text-white border border-transparent focus:border-[#FF5C35] rounded-md py-3 px-4 font-medium outline-none transition-colors disabled:opacity-50";
  const labelStyle = "block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2";

  if (!clientId) {
    return (
      <div className="flex bg-[#131313] min-h-screen font-body text-[#e5e2e1] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Client ID Provided</h2>
          <button onClick={() => navigate('/clientsDashboard')} className="text-[#FF5C35] hover:underline">Go back to Clients</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-[#131313] min-h-screen font-body text-[#e5e2e1] relative pt-16 md:pt-0">
      <AdminSidebar />

      <main className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12">
        {isFetching ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-4 border-[#FF5C35] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Breadcrumb & Hero */}
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm font-medium">
                <span className="cursor-pointer hover:text-white" onClick={handleCancel}>Clients</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="font-bold text-[#e5e2e1]">Edit Client Details</span>
              </div>
              <h2 className="text-4xl font-black font-headline text-white mb-2 tracking-tight">Modify Profile</h2>
              <p className="text-gray-400">Update the executive profile and configuration for client <span className="font-mono text-white">{clientId.substring(0, 8)}...</span></p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-32">
              
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Personal Information Panel */}
                <section className="bg-[#1a1a1a] rounded-xl p-8 shadow-sm border border-white/5">
                  <h3 className="text-lg font-bold font-headline text-white mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#FF5C35] bg-[#FF5C35]/10 p-1.5 rounded-lg">person</span>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className={labelStyle}>Full Name *</label>
                      <input className={inputStyle} id="fullName" type="text" value={formData.fullName} onChange={handleInputChange} disabled={updateMutation.isPending} />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className={labelStyle}>Phone Number *</label>
                      <input className={inputStyle} id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleInputChange} disabled={updateMutation.isPending} />
                    </div>
                    <div>
                      <label htmlFor="emailAddress" className={labelStyle}>Email Address</label>
                      <input className={inputStyle} id="emailAddress" type="email" value={formData.emailAddress} onChange={handleInputChange} disabled={updateMutation.isPending} />
                    </div>
                    <div>
                      <label htmlFor="role" className={labelStyle}>System Role</label>
                      <select className={inputStyle} id="role" value={formData.role} onChange={handleInputChange} disabled={updateMutation.isPending}>
                        <option value="client">Client</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Vehicle & Location Context Panel */}
                <section className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5">
                  <h3 className="text-lg font-bold font-headline text-white mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#FF5C35] bg-[#FF5C35]/10 p-1.5 rounded-lg">directions_car</span>
                    Vehicle & Context
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vehicleBrand" className={labelStyle}>Vehicle Brand</label>
                      <input className={inputStyle} id="vehicleBrand" type="text" value={formData.vehicleBrand} onChange={handleInputChange} disabled={updateMutation.isPending} placeholder="e.g. Mercedes" />
                    </div>
                    <div>
                      <label htmlFor="vehicleModel" className={labelStyle}>Vehicle Model</label>
                      <input className={inputStyle} id="vehicleModel" type="text" value={formData.vehicleModel} onChange={handleInputChange} disabled={updateMutation.isPending} placeholder="e.g. S-Class" />
                    </div>
                    <div>
                      <label htmlFor="city" className={labelStyle}>City</label>
                      <input className={inputStyle} id="city" type="text" value={formData.city} onChange={handleInputChange} disabled={updateMutation.isPending} />
                    </div>
                    <div>
                      <label htmlFor="address" className={labelStyle}>Address / Neighborhood</label>
                      <input className={inputStyle} id="address" type="text" value={formData.address} onChange={handleInputChange} disabled={updateMutation.isPending} />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="notes" className={labelStyle}>Internal Notes</label>
                      <textarea className={`${inputStyle} resize-none`} id="notes" rows="4" value={formData.notes} onChange={handleInputChange} disabled={updateMutation.isPending} placeholder="Any specific instructions or preferences..." />
                    </div>
                  </div>
                </section>

              </div>

              {/* Right Column */}
              <div className="space-y-6">
                
                {/* Account Status Panel */}
                <section className="bg-[#1a1a1a] rounded-xl p-8 relative overflow-hidden border border-white/5">
                  <span className="material-symbols-outlined absolute top-4 right-4 text-[120px] text-white opacity-[0.02] pointer-events-none">shield</span>
                  
                  <h3 className="text-lg font-bold font-headline text-white mb-6 flex items-center gap-3 relative z-10">
                    <span className="material-symbols-outlined text-[#FF5C35] bg-[#FF5C35]/10 p-1.5 rounded-lg">settings</span>
                    Account Status
                  </h3>
                  
                  <div className="space-y-6 relative z-10">
                    
                    {/* Current State */}
                    <div className="bg-[#201f1f] p-4 rounded-lg flex justify-between items-center border border-white/5">
                      <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Current State</span>
                        <span className={`font-bold text-sm ${isActive ? 'text-green-500' : 'text-red-500'}`}>
                          {isActive ? 'Active Member' : 'Inactive / Suspended'}
                        </span>
                      </div>
                      <span className={`material-symbols-outlined rounded-full ${isActive ? 'text-green-500 bg-green-500/20' : 'text-red-500 bg-red-500/20'}`}>
                        {isActive ? 'check_circle' : 'cancel'}
                      </span>
                    </div>

                    {/* Toggles */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-4 cursor-pointer">
                        <div className="relative inline-flex items-center">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={isActive}
                            onChange={() => setIsActive(!isActive)}
                            disabled={updateMutation.isPending}
                          />
                          <div className={`w-11 h-6 rounded-full peer transition-all duration-300 relative ${isActive ? 'bg-[#FF5C35]' : 'bg-[#353534]'}`}>
                            <div className={`absolute top-[2px] w-5 h-5 bg-white rounded-full transition-all duration-300 ${isActive ? 'left-[22px]' : 'left-[2px]'}`}></div>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-white">Active Account</span>
                      </label>

                      <label className="flex items-center gap-4 cursor-pointer">
                        <div className="relative inline-flex items-center">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={premiumSupport}
                            onChange={() => setPremiumSupport(!premiumSupport)}
                            disabled={updateMutation.isPending}
                          />
                          <div className={`w-11 h-6 rounded-full peer transition-all duration-300 relative ${premiumSupport ? 'bg-[#FF5C35]' : 'bg-[#353534]'}`}>
                            <div className={`absolute top-[2px] w-5 h-5 bg-white rounded-full transition-all duration-300 ${premiumSupport ? 'left-[22px]' : 'left-[2px]'}`}></div>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-white">Premium Client</span>
                      </label>
                    </div>

                    {/* Security Note */}
                    <div className="pt-6 border-t border-white/10 space-y-4">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Security Note</p>
                        <p className="text-[10px] text-gray-500 italic">Modifications are logged for auditing.</p>
                      </div>
                      <button type="button" className="w-full py-2.5 px-4 text-xs font-bold text-red-500 border border-red-500/20 rounded-md hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">warning</span>
                        Force Password Reset
                      </button>
                    </div>

                  </div>
                </section>

                {/* HQ Image Banner (Kept for design flair) */}
                <div className="relative rounded-xl overflow-hidden h-48 border border-white/5 group">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Building HQ" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white font-bold text-sm">Reflecto Partner Center</p>
                      <p className="text-gray-300 text-xs mt-1">Global Client Management</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </main>

      {/* Floating Action Actions combined */}
      {!isFetching && (
        <div className="fixed bottom-0 right-0 left-0 md:left-[280px] p-6 lg:p-10 pointer-events-none z-50 flex flex-col items-end gap-6">
          <div className="flex bg-[#131313]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 items-center gap-6 shadow-2xl pointer-events-auto mt-4">
            <button onClick={handleCancel} disabled={updateMutation.isPending} className="text-white text-sm font-semibold hover:text-[#FF5C35] transition-colors disabled:opacity-50">
              Cancel
            </button>
            <button 
              onClick={handleSave} 
              disabled={updateMutation.isPending}
              className="bg-[#FF5C35] text-white px-8 py-3 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2 hover:shadow-[#FF5C35]/20 hover:brightness-110 transition-all active:scale-95 disabled:opacity-50"
            >
              {updateMutation.isPending ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <span className="material-symbols-outlined text-sm">save</span>
              )}
              Save Changes
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default EditClient;
