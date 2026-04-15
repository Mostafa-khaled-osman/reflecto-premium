import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const OrdersBilling = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');

  const stats = [
    {
      title: 'Total Revenue',
      value: '142,500.00',
      currency: 'SAR',
      trend: '+12.5%',
      trendType: 'positive',
      icon: 'payments',
      empty: true
    },
    {
      title: 'Outstanding',
      value: '18,250.00',
      currency: 'SAR',
      trend: '14 invoices overdue',
      trendType: 'warning',
      icon: 'pending_actions',
      empty: false
    },
    {
      title: 'Total Orders',
      value: '1,284',
      currency: 'units',
      trend: '94 orders in queue',
      trendType: 'neutral',
      icon: 'shopping_cart',
      empty: false
    }
  ];

  const orders = [
    {
      id: 'KG-8821',
      client: { initials: 'AA', name: 'Ahmed Al-Sayed' },
      service: 'Turbo Tune-Up Pro',
      date: 'Oct 24, 2023',
      amount: '4,500.00',
      status: 'Paid',
      statusColor: 'green'
    },
    {
      id: 'KG-8819',
      client: { initials: 'MB', name: 'Mark Bennington' },
      service: 'Carbon Ceramic Kit',
      date: 'Oct 23, 2023',
      amount: '12,200.00',
      status: 'Pending',
      statusColor: 'orange'
    },
    {
      id: 'KG-8815',
      client: { initials: 'SK', name: 'Sarah Khalid' },
      service: 'Full Custom Wrap',
      date: 'Oct 21, 2023',
      amount: '7,850.00',
      status: 'Paid',
      statusColor: 'green'
    },
    {
      id: 'KG-8812',
      client: { initials: 'FK', name: 'Fahad Khan' },
      service: 'Engine Diagnostics Package',
      date: 'Oct 18, 2023',
      amount: '2,100.00',
      status: 'Overdue',
      statusColor: 'red'
    },
    {
      id: 'KG-8809',
      client: { initials: 'NB', name: 'Nasser Bin Rashid' },
      service: 'Brake System Upgrade',
      date: 'Oct 15, 2023',
      amount: '5,400.00',
      status: 'Paid',
      statusColor: 'green'
    }
  ];

  const getStatusClasses = (status, color) => {
    const baseClasses = 'px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wider border';
    const colors = {
      green: 'bg-green-500/10 text-green-500 border-green-500/20',
      orange: 'bg-[#E64833]/10 text-[#E64833] border-[#E64833]/20',
      red: 'bg-red-500/10 text-red-500 border-red-500/20'
    };
    return `${baseClasses} ${colors[color]}`;
  };

  const getTrendIcon = (type) => {
    switch(type) {
      case 'positive':
        return 'trending_up';
      case 'warning':
        return 'warning';
      default:
        return 'schedule';
    }
  };

  const getTrendColor = (type) => {
    switch(type) {
      case 'positive':
        return 'text-green-500';
      case 'warning':
        return 'text-[#E64833]';
      default:
        return 'text-white/60';
    }
  };

  return (
    <div className="flex bg-[#131313] min-h-screen text-white overflow-hidden pt-20">
      <AdminSidebar />
      
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-8">
        
        <div className="pl-12 lg:pl-0">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Orders &amp; Billing</h2>
            <p className="text-[#9CA3AF] mt-1">Financial performance and transaction monitoring</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-[#1A1A1A] border border-[#333333] text-white px-4 py-2 rounded-lg text-sm font-medium hover:border-[#E64833] transition-all flex items-center">
              <span className="material-symbols-outlined text-sm mr-2">filter_list</span>
              Export
            </button>
            <button className="bg-gradient-to-r from-[#E64833] to-[#992211] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center shadow-[0_0_10px_rgba(230,72,51,0.2)]">
              <span className="material-symbols-outlined text-sm mr-2">add_circle</span>
              Create Invoice
            </button>
          </div>
        </div>

        {/* Bento Grid Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 relative overflow-hidden group">
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
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl overflow-hidden">
          {/* Table Controls */}
          <div className="p-4 border-b border-[#333333] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#0D0D0D] border border-[#333333] text-white text-xs rounded-lg pl-3 pr-8 py-2 focus:ring-1 focus:ring-[#E64833] appearance-none outline-none cursor-pointer"
                >
                  <option>Status: All</option>
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Overdue</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-xs pointer-events-none">
                  expand_more
                </span>
              </div>
              <div className="relative">
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="bg-[#0D0D0D] border border-[#333333] text-white text-xs rounded-lg pl-3 pr-8 py-2 focus:ring-1 focus:ring-[#E64833] appearance-none outline-none cursor-pointer"
                >
                  <option>Time: Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>This Year</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-xs pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex items-center text-xs text-[#9CA3AF]">
              <span>Showing {orders.length} of 1,284 orders</span>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0D0D0D] border-b border-[#333333]">
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Order ID</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Client Name</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Service/Package</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest text-right">Amount</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[#E64833] text-[10px] font-black uppercase tracking-widest text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333333]">
                {orders.map((order, index) => (
                  <tr 
                    key={order.id} 
                    className={`${index % 2 === 0 ? 'bg-[#0D0D0D]' : 'bg-[#141414]'} hover:bg-[#1A1A1A] transition-colors group`}
                  >
                    <td className="px-6 py-4 font-mono text-sm text-white font-medium">#{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-[#262626] flex items-center justify-center text-[#E64833] font-bold text-xs">
                          {order.client.initials}
                        </div>
                        <span className="text-white text-sm font-semibold">{order.client.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#9CA3AF] text-sm">{order.service}</td>
                    <td className="px-6 py-4 text-[#9CA3AF] text-sm">{order.date}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-white font-bold text-sm">{order.amount}</span>
                      <span className="text-[#9CA3AF] text-[10px] ml-1">SAR</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={getStatusClasses(order.status, order.statusColor)}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-[#9CA3AF] hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6">
          <h3 className="text-white font-bold text-lg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] hover:bg-[#262626] rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[#E64833]">add_circle</span>
              <span className="text-white text-sm font-medium">New Invoice</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] hover:bg-[#262626] rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[#E64833]">payments</span>
              <span className="text-white text-sm font-medium">Record Payment</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] hover:bg-[#262626] rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[#E64833]">download</span>
              <span className="text-white text-sm font-medium">Export Report</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-[#0D0D0D] hover:bg-[#262626] rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[#E64833]">send</span>
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