import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { checkoutService, meService } from '../services/api';
import { useToast } from '../contexts/ToastContext';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Determine what is being purchased from location state or URL params
  // E.g., navigate('/checkout', { state: { packageId: 'diamond', name: 'Diamond PPF', price: 1800 } })
  const searchParams = new URLSearchParams(location.search);
  const itemName = location.state?.name || searchParams.get('item') || 'Reflecto Premium Package';
  const itemPrice = location.state?.price || parseInt(searchParams.get('price')) || 1500;
  
  const [paymentMethod, setPaymentMethod] = useState('tabby'); // 'tabby' or 'tamara'
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: ''
  });

  // Fetch client profile if logged in to pre-fill data
  useEffect(() => {
    meService.getProfile()
      .then(res => {
        if (res?.data) {
          const names = (res.data.full_name || '').split(' ');
          setFormData({
            firstName: names[0] || '',
            lastName: names.slice(1).join(' ') || '',
            email: res.data.email || '',
            phone: res.data.phone || '',
            city: res.data.city || '',
            address: res.data.address || ''
          });
        }
      })
      .catch(() => {
        // Not logged in or error, ignore
      });
  }, []);

  const checkoutMutation = useMutation({
    mutationFn: (data) => {
      if (paymentMethod === 'tabby') {
        return checkoutService.createTabby(data);
      } else {
        return checkoutService.createTamara(data);
      }
    },
    onSuccess: (res) => {
      toast.success(`Redirecting to ${paymentMethod === 'tabby' ? 'Tabby' : 'Tamara'}...`);
      if (res?.data?.checkoutUrl) {
        window.location.href = res.data.checkoutUrl;
      }
    },
    onError: (err) => {
      toast.error(err.message || 'Failed to initialize checkout. Please try again.');
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) {
      toast.warning('First name and phone number are required.');
      return;
    }

    const payload = {
      total_amount: itemPrice,
      currency: "SAR",
      customer: {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phone,
        city: formData.city,
        address: formData.address
      },
      items: [
        {
          name: itemName,
          quantity: 1,
          unit_price: itemPrice,
          reference_id: `REF-${Date.now()}`,
          sku: `SKU-${itemName.substring(0,5).toUpperCase()}`
        }
      ]
    };

    checkoutMutation.mutate(payload);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 font-body selection:bg-[#FF5C35]/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF5C35] blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-sm mr-1">arrow_back</span>
            Back
          </button>
          <h1 className="text-4xl font-black font-headline mt-6 tracking-tight">Secure Checkout</h1>
          <p className="text-gray-400 mt-2">Complete your reservation for Reflecto Premium services.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Form & Payment Method */}
          <div className="flex-1 space-y-8">
            
            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-8">
              
              {/* Customer Details */}
              <section className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5C35] to-transparent"></div>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF5C35]">person</span>
                  Customer Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">First Name *</label>
                    <input 
                      type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required
                      disabled={checkoutMutation.isPending}
                      className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">Last Name</label>
                    <input 
                      type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
                      disabled={checkoutMutation.isPending}
                      className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">Phone Number *</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                      disabled={checkoutMutation.isPending}
                      className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      disabled={checkoutMutation.isPending}
                      className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">City</label>
                    <input 
                      type="text" name="city" value={formData.city} onChange={handleInputChange}
                      disabled={checkoutMutation.isPending}
                      className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-400">Address / Neighborhood</label>
                    <input 
                      type="text" name="address" value={formData.address} onChange={handleInputChange}
                      disabled={checkoutMutation.isPending}
                      className="w-full bg-[#262626] border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#FF5C35] focus:border-[#FF5C35]"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 shadow-xl">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF5C35]">payments</span>
                  Select Payment Method
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Tabby */}
                  <div 
                    onClick={() => !checkoutMutation.isPending && setPaymentMethod('tabby')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'tabby' 
                        ? 'border-[#3EED9A] bg-[#3EED9A]/5' 
                        : 'border-white/5 bg-[#262626] hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'tabby' ? 'border-[#3EED9A]' : 'border-gray-500'
                      }`}>
                        {paymentMethod === 'tabby' && <div className="w-3 h-3 rounded-full bg-[#3EED9A]"></div>}
                      </div>
                      <div className="bg-[#3EED9A] text-black font-black px-3 py-1 rounded tracking-widest text-xs">TABBY</div>
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1">Pay in 4 Installments</h3>
                    <p className="text-gray-400 text-sm">No interest, no hidden fees.</p>
                  </div>

                  {/* Tamara */}
                  <div 
                    onClick={() => !checkoutMutation.isPending && setPaymentMethod('tamara')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'tamara' 
                        ? 'border-[#FFB5AE] bg-[#FFB5AE]/5' 
                        : 'border-white/5 bg-[#262626] hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'tamara' ? 'border-[#FFB5AE]' : 'border-gray-500'
                      }`}>
                        {paymentMethod === 'tamara' && <div className="w-3 h-3 rounded-full bg-[#FFB5AE]"></div>}
                      </div>
                      <div className="bg-[#FFB5AE] text-black font-black px-3 py-1 rounded tracking-widest text-xs">TAMARA</div>
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1">Split in 3 Payments</h3>
                    <p className="text-gray-400 text-sm">Sharia-compliant, zero interest.</p>
                  </div>

                </div>
              </section>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 shadow-xl sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start pb-4 border-b border-white/5">
                  <div>
                    <h3 className="font-bold text-white">{itemName}</h3>
                    <p className="text-gray-400 text-sm mt-1">Reflecto Premium Service</p>
                  </div>
                  <span className="font-bold">{itemPrice.toLocaleString()} SAR</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span>{itemPrice.toLocaleString()} SAR</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>VAT (15%)</span>
                  <span>Included</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-6 border-t border-white/5 mb-6">
                <span className="font-bold text-lg">Total</span>
                <div className="text-right">
                  <span className="font-black text-2xl text-[#FF5C35]">{itemPrice.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 ml-1">SAR</span>
                </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                disabled={checkoutMutation.isPending}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                  paymentMethod === 'tabby' 
                    ? 'bg-[#3EED9A] text-black shadow-[#3EED9A]/20 hover:brightness-105' 
                    : 'bg-[#FFB5AE] text-black shadow-[#FFB5AE]/20 hover:brightness-105'
                }`}
              >
                {checkoutMutation.isPending ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <span className="material-symbols-outlined text-xl">lock</span>
                )}
                Pay via {paymentMethod === 'tabby' ? 'Tabby' : 'Tamara'}
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-6 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">encrypted</span>
                Secure 256-bit SSL encryption
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
