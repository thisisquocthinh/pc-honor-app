import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecordSale() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ x9d_black: 1, x9d_green: 0 });

  const increment = (key) => setCounts((c) => ({ ...c, [key]: (c[key] || 0) + 1 }));
  const decrement = (key) => setCounts((c) => ({ ...c, [key]: Math.max(0, (c[key] || 0) - 1) }));

  const totalUnits = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex justify-center selection:bg-primary selection:text-white">
      <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-screen relative shadow-2xl overflow-hidden">
        {/* Sticky Top Navigation */}
        <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center p-4 justify-between max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/dashboard')} aria-label="Back" type="button">
                <span className="material-symbols-outlined text-slate-900 dark:text-white cursor-pointer">arrow_back_ios</span>
              </button>
              <h2 className="text-lg font-bold tracking-tight">Record Daily Sale</h2>
            </div>
            <span className="material-symbols-outlined text-primary">history</span>
          </div>
          {/* Search Component */}
          <div className="px-4 pb-4 max-w-md mx-auto">
            <label className="flex flex-col w-full">
              <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="text-slate-400 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full border-none bg-transparent focus:ring-0 text-base font-normal placeholder:text-slate-400 px-3 text-slate-900 dark:text-white"
                  placeholder="Search Honor model..."
                  defaultValue=""
                />
              </div>
            </label>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="max-w-md mx-auto p-4 pb-40">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Select Model &amp; Variants</h3>
          <div className="space-y-4">
            {/* Model Accordion 1 (Expanded) */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm">
              <details className="group" open>
                <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">smartphone</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Honor X9D</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">2 Variants Available</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>

                <div className="px-4 pb-4 divide-y divide-slate-100 dark:divide-slate-700">
                  {/* Variant Item */}
                  <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">Midnight Black</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">8GB/256GB</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Stock: 12
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => decrement('x9d_black')}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label="Decrease"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-6 text-center font-bold text-primary">{counts.x9d_black}</span>
                      <button
                        type="button"
                        onClick={() => increment('x9d_black')}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label="Increase"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>

                  {/* Variant Item 2 */}
                  <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">Emerald Green</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">12GB/512GB</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Stock: 8
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => decrement('x9d_green')}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label="Decrease"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-6 text-center font-bold text-primary">{counts.x9d_green}</span>
                      <button
                        type="button"
                        onClick={() => increment('x9d_green')}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label="Increase"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Model Accordion 2 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">tablet_android</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Honor Magic V2</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">3 Variants Available</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 text-center text-sm text-slate-400">
                  Expand to manage variant sales
                </div>
              </details>
            </div>

            {/* Model Accordion 3 */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">phone_iphone</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Honor X7D 5G</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">1 Variant Available</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="p-4" />
              </details>
            </div>
          </div>
        </main>

        {/* Fixed Bottom Summary & Action */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 pt-4 pb-8 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-30">
          <div className="max-w-md mx-auto">
            {/* Inventory Preview Summary */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Inventory Impact</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Current: 12</span>
                  <span className="material-symbols-outlined text-primary text-sm">trending_flat</span>
                  <span className="text-sm font-bold text-primary">After: {12 - totalUnits}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Units</span>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{totalUnits} Unit{totalUnits !== 1 ? 's' : ''}</p>
              </div>
            </div>
            {/* Action Button */}
            <button
              type="button"
              className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">cloud_upload</span>
              Confirm &amp; Update Sheets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
