import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecordSale() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light font-display text-slate-900 antialiased min-h-screen flex justify-center">
      <div className="w-full max-w-md bg-background-light min-h-screen relative shadow-2xl overflow-hidden">
        {/* Sticky Top Navigation */}
        <div className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center p-4 justify-between max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/dashboard')} aria-label="Back">
                <span className="material-symbols-outlined text-slate-900 cursor-pointer">arrow_back_ios</span>
              </button>
              <h2 className="text-lg font-bold tracking-tight">Record Daily Sale</h2>
            </div>
            <span className="material-symbols-outlined text-primary">history</span>
          </div>
          {/* Search Component */}
          <div className="px-4 pb-4 max-w-md mx-auto">
            <label className="flex flex-col w-full">
              <div className="flex w-full items-stretch rounded-xl h-12 bg-white shadow-sm border border-slate-200">
                <div className="text-slate-400 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full border-none bg-transparent focus:ring-0 text-base font-normal placeholder:text-slate-400 px-3" placeholder="Search Honor model..." defaultValue="" />
              </div>
            </label>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="max-w-md mx-auto p-4 pb-40">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Select Model & Variants</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <details className="group" open>
                <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">smartphone</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Honor X9D</p>
                      <p className="text-xs text-slate-500">2 Variants Available</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>

                <div className="px-4 pb-4 divide-y divide-slate-100">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">Midnight Black</p>
                      <p className="text-xs text-slate-500">8GB/256GB</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Stock: 12
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Decrease">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-6 text-center font-bold text-primary">1</span>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Increase">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </main>

        {/* Bottom Nav */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-6 pointer-events-none">
          <div className="bg-[#1C1C1E] text-white backdrop-blur-lg flex items-center justify-between px-2 py-2 rounded-[32px] shadow-2xl pointer-events-auto max-w-[320px] mx-auto">
            <button onClick={() => navigate('/dashboard')} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-md">
              <span className="material-icons-outlined">home</span>
            </button>
            <button onClick={() => navigate('/inventory')} className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
              <span className="material-icons-outlined">inventory_2</span>
            </button>
            <button onClick={() => navigate('/reports')} className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
              <span className="material-icons-outlined">analytics</span>
            </button>
            <button className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
              <span className="material-icons-outlined">grid_view</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
