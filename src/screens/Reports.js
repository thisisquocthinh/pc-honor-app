import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reports() {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-background-light min-h-screen relative shadow-2xl overflow-hidden pb-24">
        <header className="px-6 pt-12 pb-4 flex items-center gap-3">
          <button onClick={() => navigate('/dashboard')} className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center">
            <span className="material-icons-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-xl font-bold">Daily Report</h1>
            <p className="text-sm text-gray-500">Summary & insights</p>
          </div>
        </header>

        <div className="px-6 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500">Today's Sales</p>
              <p className="text-lg font-bold mt-1">$1,598</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500">Net Profit</p>
              <p className="text-lg font-bold mt-1">$312</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500">Total Bonus</p>
              <p className="text-lg font-bold mt-1">$150</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold">Sales Trend</h2>
              <span className="text-xs text-gray-500">(placeholder)</span>
            </div>
            <div className="h-40 rounded-xl bg-background-light flex items-center justify-center text-gray-400 text-sm">
              Chart placeholder (Tailwind port pending)
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold">Recent Transactions</h2>
              <button className="text-xs font-semibold text-primary">See all</button>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gray-100" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold">Honor MagicBook 14</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Sold • 10:42 AM</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">$799</p>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-green-100 text-[10px] font-bold text-green-600">Paid</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-8" />
      </div>
    </div>
  );
}
