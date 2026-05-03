import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { checkoutService } from '../services/api';
import AdminSidebar from '../components/AdminSidebar';

const OrdersBilling = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');

  const { data: checkoutData, isLoading } = useQuery({
    queryKey: ['adminCheckouts'],
    queryFn: checkoutService.getAll,
  });

  const rawOrders = checkoutData?.data || [];

  // Filter logic (simple client-side filter for demo purposes)
  const filteredOrders = rawOrders.filter(order => {
    if (statusFilter !== 'All' && statusFilter !== 'Status: All') {
      return order.status.toLowerCase() === statusFilter.toLowerCase();
    }
    return true;
  });

  // Calculate stats from data
  const totalRevenue = rawOrders.reduce((sum, order) => {
    return (order.status === 'paid' || order.status === 'completed') ? sum + (order.amount || 0) : sum;
  }, 0);
  
  const outstanding = rawOrders.reduce((sum, order) => {
    return (order.status === 'pending' || order.status === 'overdue') ? sum + (order.amount || 0) : sum;
  }, 0);

  const stats = [
    {
      title: 'Total Revenue',
      value: totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      currency: 'SAR',
      trend: '+12.5%',
      trendType: 'positive',
      icon: 'payments',
    },
    {
      title: 'Outstanding',
      value: outstanding.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      currency: 'SAR',
      trend: `${rawOrders.filter(o => o.status === 'overdue').length} invoices overdue`,
      trendType: 'warning',
      icon: 'pending_actions',
    },
    {
      title: 'Total Orders',
      value: rawOrders.length.toLocaleString(),
      currency: 'units',
      trend: 'From checkout gateways',
      trendType: 'neutral',
      icon: 'shopping_cart',
    }
  ];

  // Dummy fallback data just in case API is empty during development
  const dummyOrders = [
    { id: 'KG-8821', client_name: 'Ahmed Al-Sayed', service: 'Tabby Payment', created_at: '2023-10-24T10:00:00Z', amount: 4500, status: 'paid' },
    { id: 'KG-8819', client_name: 'Mark Bennington', service: 'Tamara Installments', created_at: '2023-10-23T14:30:00Z', amount: 12200, status: 'pending' },
    { id: 'KG-8812', client_name: 'Fahad Khan', service: 'Tabby Payment', created_at: '2023-10-18T09:15:00Z', amount: 2100, status: 'overdue' },
  ];

  const ordersToDisplay = rawOrders.length > 0 ? filteredOrders : dummyOrders;

  const getStatusClasses = (status) => {
    const baseClasses = 'px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wider border';
    const s = (status || '').toLowerCase();
    
    if (s === 'paid' || s === 'completed') return `${baseClasses} bg-green-500/10 text-green-500 border-green-500/20`;
    if (s === 'overdue' || s === 'failed' || s === 'cancelled') return `${baseClasses} bg-red-500/10 text-red-500 border-red-500/20`;
    if (s === 'pending') return `${baseClasses} bg-[#E64833]/10 text-[#E64833] border-[#E64833]/20`;
    
    return `${baseClasses} bg-gray-500/10 text-gray-500 border-gray-500/20`;
  };

  const getTrendIcon = (type) => {
    switch(type) {
      case 'positive': return 'trending_up';
      case 'warning': return 'warning';
      default: return 'schedule';
    }
  };

  const getTrendColor = (type) => {
    switch(type) {
      case 'positive': return 'text-green-500';
      case 'warning': return 'text-[#E64833]';
      default: return 'text-white/60';
    }
  };

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden pt-20">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-8">
        
        <div className="pl-12 lg:pl-0">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              Orders &amp; Billing
              {isLoading && <div className="w-5 h-5 border-2 border-[#E64833] border-t-transparent rounded-full animate-spin"></div>}
            </h2>
            <p className="text-[#9CA3AF] mt-1">Financial performance and transaction monitoring</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-[#1A1A1A] border border-[#333333] text-white px-4 py-2 rounded-lg text-sm font-medium hover:border-[#E64833] hover:bg-[#262626] transition-all flex items-center">
              <span className="material-symbols-outlined text-sm mr-2">filter_list</span>
              Export
            </button>
            <button className="bg-gradient-to-r from-[#E64833] to-[#992211] hover:brightness-110 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center shadow-[0_0_15px_rgba(230,72,51,0.3)] transition-all">
              <span className="material-symbols-outlined text-sm mr-2">add_circle</span>
              Create Invoice
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 relative overflow-hidden group hover:border-[#E64833]/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-[#E64833]">{stat.icon}</span>
              </div>
              <p className="text-[#9CA3AF] text-xs font-bold uppercase tracking-widest">{stat.title}</p>
              <div className="flex items-baseline mt-2 space-x-2">
                <h3 className="text-3xl font-black text-white">{stat.value}</h3>
                <span className="text-[#E64833] text-sm font-bold">{stat.currency}</span>
              </div>
              <div className={`mt-4 flex items-center text-xs ${getTrendColor(stat.trendType)} font-medium`}>
                <span className="material-symbols-outlined text-sm mr-1">{getTrendIcon(stat.trendType)}</span>
                <span>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Table Container */}
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl overflow-hidden mb-8">
          {/* Table Controls */}
          <div className="p-4 border-b border-[#333333] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#0D0D0D] border border-[#333333] text-white text-xs rounded-lg pl-3 pr-8 py-2 focus:ring-1 focus:ring-[#E64833] focus:border-[#E64833] appearance-none outline-none cursor-pointer"
                >
                  <option>Status: All</option>
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Overdue</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-xs pointer-events-none text-gray-400">
                  expand_more
                </span>
              </div>
              <div className="relative">
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="bg-[#0D0D0D] border border-[#333333] text-white text-xs rounded-lg pl-3 pr-8 py-2 focus:ring-1 focus:ring-[#E64833] focus:border-[#E64833] appearance-none outline-none cursor-pointer"
                >
                  <option>Time: Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>This Year</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-xs pointer-events-none text-gray-400">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex items-center text-xs text-[#9CA3AF]">
              <span>Showing {ordersToDisplay.length} orders</span>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#0D0D0D] border-b border-[#333333]">
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Order ID</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Client Name</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Method/Details</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest text-right">Amount</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333333]">
                {ordersToDisplay.length === 0 && !isLoading && (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500 italic">No orders found matching your criteria.</td>
                  </tr>
                )}
                
                {ordersToDisplay.map((order, index) => {
                  const clientName = order.client_name || 'Unknown Client';
                  const initials = clientName.split(' ').map(n=>n[0]).join('').substring(0, 2).toUpperCase();
                  const date = new Date(order.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                  
                  return (
                    <tr 
                      key={order.id || index} 
                      className={`${index % 2 === 0 ? 'bg-[#0D0D0D]' : 'bg-[#141414]'} hover:bg-[#262626] transition-colors group`}
                    >
                      <td className="px-6 py-4 font-mono text-sm text-white font-medium">
                        #{order.id ? order.id.substring(0, 8) : 'UNK'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-[#333333] flex items-center justify-center text-[#E64833] font-bold text-xs shrink-0">
                            {initials}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-white text-sm font-semibold truncate">{clientName}</span>
                            <span className="text-[10px] text-gray-500">{order.client_phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#9CA3AF] text-sm uppercase font-bold tracking-widest">
                          {order.payment_method || order.service || 'Checkout'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#9CA3AF] text-sm">{date}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-white font-bold text-sm">{(order.amount || 0).toLocaleString()}</span>
                        <span className="text-[#9CA3AF] text-[10px] ml-1">{order.currency || 'SAR'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={getStatusClasses(order.status)}>
                          {order.status || 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[#9CA3AF] hover:text-white transition-colors p-1 rounded hover:bg-white/10">
                          <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] border border-[#333333] hover:border-[#E64833]/50 hover:bg-[#262626] rounded-lg transition-all group">
              <span className="material-symbols-outlined text-[#E64833] group-hover:scale-110 transition-transform">add_circle</span>
              <span className="text-white text-sm font-medium">New Invoice</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] border border-[#333333] hover:border-[#E64833]/50 hover:bg-[#262626] rounded-lg transition-all group">
              <span className="material-symbols-outlined text-[#E64833] group-hover:scale-110 transition-transform">payments</span>
              <span className="text-white text-sm font-medium">Record Payment</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] border border-[#333333] hover:border-[#E64833]/50 hover:bg-[#262626] rounded-lg transition-all group">
              <span className="material-symbols-outlined text-[#E64833] group-hover:scale-110 transition-transform">download</span>
              <span className="text-white text-sm font-medium">Export Report</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] border border-[#333333] hover:border-[#E64833]/50 hover:bg-[#262626] rounded-lg transition-all group">
              <span className="material-symbols-outlined text-[#E64833] group-hover:scale-110 transition-transform">send</span>
              <span className="text-white text-sm font-medium">Send Reminder</span>
            </button>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default OrdersBilling;