import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 min-h-[max(884px,100dvh)] flex justify-center selection:bg-primary selection:text-white">
      <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-[max(884px,100dvh)] relative shadow-2xl overflow-hidden pb-24">
        {/* Header */}
        <header className="px-6 pt-12 pb-4 flex justify-between items-center bg-background-light dark:bg-background-dark z-10 sticky top-0">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Welcome back,</p>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mt-0.5">Nguyễn Quốc Thịnh</h1>
          </div>
          <div className="relative">
            <img
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-700 shadow-sm object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFUuKwf6IW-9yISUdkt2Ni0qvUPmk6LgpkFWxVvJSJIQxon1WNNSeOrXL9SuFjBpFCd_rbP7gMRZg3nUNaEN78VFzNyWlGwNBnwaKw00ZwzGXQ0dyz_P_dP6jRsyGUtavJLp5uzBMT5ttuq0kpml-Skz_Q6mUkEUSfyQqlLzrnFTnGxqk_7EAW7ZpxcGtQbV1XHAKeSU8Uw9nauVGf462S85ShVdnKwC6VlifXkr8bHtqlBGgbVB9pm5fDQZ5jfmCm7HA_HCJhEIH0"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
        </header>

        {/* Search */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-icons-outlined text-[20px]">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-card-dark rounded-full text-sm font-medium border-none shadow-sm focus:ring-2 focus:ring-primary placeholder-gray-400"
                placeholder="Search inventory or sales..."
                type="text"
              />
            </div>
            <button
              type="button"
              className="w-[52px] h-[52px] flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg shrink-0"
              aria-label="Filters"
            >
              <span className="material-icons-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto hide-scrollbar h-full pb-32">
          {/* Overview */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Overview</h2>
            <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-xl group">
              <img
                alt="Abstract Honor Blue Gradient"
                className="absolute inset-0 w-full h-full object-cover brightness-50 dark:brightness-40 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8pSExEHjrP0HBrRhXBECNdGeyWpLhLRc-x_Oo8S5hk_vZERuQPZkM94eeyFwK98rhBmvBW7SdEReFev2gKUUcklsNftW3toj9txPJiHGdyorqYQpWywZml4ybRoR9NDBtlq5Kw8v2vMOOSDZfOSTivl1khQEqQRqH7BK1wyz7XISl5Sy3sw4Bq4EAYKFsHa9uZd5DVJLR--HVRWiOdVMwnrzLv6ew0uVhYVVzvz4S-X1B1-csMPTjGfWPZqe0kLsssakoW9IjLceX"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                    Today&apos;s Goal
                  </span>
                  <button type="button" className="text-white hover:text-primary transition-colors" aria-label="More">
                    <span className="material-icons-outlined">more_horiz</span>
                  </button>
                </div>

                <div>
                  <p className="text-gray-300 text-sm mb-1 font-medium">Total Sell-out</p>
                  <div className="flex items-end gap-2 mb-4">
                    <h3 className="text-5xl font-bold tracking-tight">
                      1 <span className="text-2xl text-gray-400 font-normal">/ 10</span>
                    </h3>
                    <span className="mb-2 text-sm text-green-400 font-medium">+1 from yesterday</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-1000" style={{ width: '10%' }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>10% Achieved</span>
                    <span>Target: 10 Units</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6">
                  <button
                    type="button"
                    className="bg-white/10 backdrop-blur-md border border-white/20 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all"
                    aria-label="Details"
                  >
                    <span className="material-icons-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal stats cards */}
          <div className="mb-8">
            <div className="flex gap-4 overflow-x-auto px-6 pb-4 hide-scrollbar snap-x">
              <div className="snap-start min-w-[140px] bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-32">
                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-2">
                  <span className="material-icons-outlined text-[18px]">monetization_on</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Bonus Earned</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">$150.00</p>
                </div>
              </div>

              <div className="snap-start min-w-[140px] bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-32">
                <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mb-2">
                  <span className="material-icons-outlined text-[18px]">inventory_2</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Stock</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">45 Units</p>
                </div>
              </div>

              <div className="snap-start min-w-[140px] bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-32">
                <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mb-2">
                  <span className="material-icons-outlined text-[18px]">star</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Top Model</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">Honor 90</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-6 mb-8">
            <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => navigate('/record-sale')}
                className="flex flex-col items-center justify-center bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                  <span className="material-icons-outlined">add_shopping_cart</span>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Record Sale</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/inventory')}
                className="flex flex-col items-center justify-center bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-2 group-hover:scale-110 transition-transform">
                  <span className="material-icons-outlined">update</span>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Update Stock</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/reports')}
                className="flex flex-col items-center justify-center bg-white dark:bg-card-dark p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-2 group-hover:scale-110 transition-transform">
                  <span className="material-icons-outlined">assessment</span>
                </div>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Report</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Recent Activity</h2>
              <button type="button" className="text-xs font-semibold text-primary hover:text-blue-600">
                See all
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="bg-white dark:bg-card-dark p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                <img
                  alt="Laptop"
                  className="w-14 h-14 rounded-xl object-cover bg-gray-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_DgofQqta3F80iuwL-NxlyFarlw7FCpxFJk3rZRZ4f_Mn2RdUC9PeSyaoFss1w6OXEgBO-XB2LXJ3AEphnTHS_s3eV_Bu4GDEETPNECTPqwzP1xzM-rWSFM73pRmNpsvQ01URX0AGF9PzQFxvmRRlZtj_z1h-zifZCEZ7bPHxn7oXl6z9bo5xEwDpiQNEqE1U3307rgNWk3EoXnUGbc-TzS7q-vwZYWejo6pn7uHLAV9YLReOh_C30TpVXoc26rP838FuZG8tSyk0"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Honor MagicBook 14</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Sold by You • 10:42 AM</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">$799</p>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-green-100 dark:bg-green-900/30 text-[10px] font-bold text-green-600 dark:text-green-400">
                    Sold
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-card-dark p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                <img
                  alt="Phone"
                  className="w-14 h-14 rounded-xl object-cover bg-gray-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9yW1eLiX4BaCRL4MVmQNgiY31bdns7KyboHlxJLzcpcDABckKTKiiTPcTRvML8rcT9ecFbzOHjsy2sKRvK8zI83MJB6kVj5EOZr4TqTNnZIoykTOD-Dj1n7bBP7ClhzPVyE7bCzB5oN7xrXIto4ZBJbXN5NGjMKX7i53rR_keYdxermd6NDgMgdkf8Wh3NWE2g-QrI-DBqEqCUIBz0axnT9NR6VBYk-jq5di0TvO2QrJ58mFHaroNT0aRgTik-9BN0mMe6Iicbai"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Honor 90 Lite</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Restocked • 09:15 AM</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">+5 Units</p>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                    Stock
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8" />
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-6 pointer-events-none">
          <div className="bg-[#1C1C1E] text-white backdrop-blur-lg flex items-center justify-between px-2 py-2 rounded-[32px] shadow-2xl pointer-events-auto max-w-[320px] mx-auto">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-md"
              aria-label="Home"
            >
              <span className="material-icons-outlined">home</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/inventory')}
              className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Inventory"
            >
              <span className="material-icons-outlined">inventory_2</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/reports')}
              className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Reports"
            >
              <span className="material-icons-outlined">analytics</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/record-sale')}
              className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Record Sale"
            >
              <span className="material-icons-outlined">grid_view</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
