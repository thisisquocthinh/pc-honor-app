import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inventory() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 min-h-[max(884px,100dvh)] flex justify-center selection:bg-primary selection:text-white">
      <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-[max(884px,100dvh)] relative shadow-2xl overflow-hidden pb-24">
        {/* Header */}
        <header className="px-6 pt-12 pb-4 flex justify-between items-start bg-background-light dark:bg-background-dark z-10 sticky top-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Inventory</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage stock &amp; pricing</p>
          </div>
          <div className="relative">
            <img
              alt="User profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtzCX0JYeOF8CpcaNEMXe0cZybUI3kyJfKxrKUJimbmttP2GegfUDYHYBSvu3HzGdPIY3Or0OBrZLKj93odHYdvZbngx0OVT0thwHucO8Z_c6a4EM9o0v4CzZ-2GCNSq4Pw-2HtWD9ZqmBxJefSrso1ApORSgjbL9jXdH2tf7cXYnb5V0rUYtcVw2ALXf71_-m8XgVo-IdeBJH-ZE-vKUq00EgVQZ-0zC-Iz3J6lLWAmbUNuqjzvynLJ1j5K1ji2GM6KHZkpBsdOT8"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
        </header>

        <div className="overflow-y-auto hide-scrollbar h-full pb-32 px-6">
          {/* Search */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input
                className="w-full h-12 pl-11 pr-4 rounded-full bg-white dark:bg-card-dark text-gray-900 dark:text-white border-none focus:ring-2 focus:ring-primary shadow-sm text-sm placeholder-gray-400"
                placeholder="Search models..."
                type="text"
              />
            </div>
            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:scale-105 transition-transform"
              aria-label="Filters"
            >
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>

          {/* Add new model */}
          <button
            type="button"
            className="w-full mb-6 py-4 px-6 bg-primary rounded-3xl flex items-center justify-between shadow-lg shadow-blue-500/20 group hover:shadow-blue-500/30 transition-all"
          >
            <span className="flex flex-col items-start">
              <span className="text-white font-bold text-lg">Add New Model</span>
              <span className="text-blue-100 text-sm">Update inventory list</span>
            </span>
            <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="material-symbols-outlined text-white">add</span>
            </span>
          </button>

          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-6 -mx-6 px-6">
            <button type="button" className="flex-shrink-0 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium">
              All Models
            </button>
            <button type="button" className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white dark:bg-card-dark text-gray-600 dark:text-gray-300 text-sm font-medium shadow-sm">
              Flagship
            </button>
            <button type="button" className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white dark:bg-card-dark text-gray-600 dark:text-gray-300 text-sm font-medium shadow-sm">
              X Series
            </button>
            <button type="button" className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white dark:bg-card-dark text-gray-600 dark:text-gray-300 text-sm font-medium shadow-sm">
              Accessories
            </button>
          </div>

          {/* List */}
          <div className="space-y-5">
            {/* Card 1 */}
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      alt="Honor Magic5 Pro"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZGEYJEy32Mvhk0FXg93X6APQge3bvp7Mygb6SNAi7jMaDkEJIJ4hgNN-Hpl65VEpfzIiujNk7JiUAfJ75GWm5lCx--f1ZMxYnsFmw1znkhPFY-a_6z5J60oshmKT3faQoDJ-6mbYZVD0ygBbJ55fqEMK9SekBsIKDg-feZtRZWOlIs_woZqgdqgJ1ytpQ3tL5orTKqQt5SEql6eLWRph5-OvZdaUIaLWm5vhj5YSWbId59sHGbZY04Ej5YN6UXA6jH3_WQtSXicz"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Honor Magic5 Pro</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Flagship Series</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button type="button" className="p-2 text-gray-400 hover:text-primary transition-colors" aria-label="Edit">
                    <span className="material-symbols-outlined text-xl">edit</span>
                  </button>
                  <button type="button" className="p-2 text-gray-400 hover:text-red-500 transition-colors" aria-label="Delete">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-background-light dark:bg-surface-dark rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-white dark:bg-gray-600 rounded text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
                        12/512GB
                      </span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Meadow Green</span>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">Bonus: 50k (if &gt;3 units)</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-white">$899</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Stock: <span className="text-gray-900 dark:text-white font-semibold">12</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background-light dark:bg-surface-dark rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-white dark:bg-gray-600 rounded text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
                        12/512GB
                      </span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Black</span>
                    </div>
                    <div className="text-xs text-primary font-medium">Bonus: 30k/unit</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-white">$899</div>
                    <div className="text-xs text-red-500 font-medium">Stock: 2</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      alt="Honor 90 5G"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNmjqNJL4eqApZ87yt40CWHvQnzCr5WBeReUGNCThJ25hrEMA3Ik0ujTjjCPqfcRx8pqFgp8awyN-q_7BGAB3qAveSQ_ibyAK10VQell5AnfJ8cfC-yyzFOAKqx7m5DqJ3rnv-jZ6sEtI8VcbyxjIspF5xa7d1S6-xccfTS7IsJtvVd9O8bi4eFbUa5MhHfFcuck0JO7PyMlV-D4fodz3KEzoOwu7Wy18PgzZkINZlpi3hfD7wAnCSBRyPeTBxZlx7BQm8Dqkqj0EL"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Honor 90 5G</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Number Series</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button type="button" className="p-2 text-gray-400 hover:text-primary transition-colors" aria-label="Edit">
                    <span className="material-symbols-outlined text-xl">edit</span>
                  </button>
                  <button type="button" className="p-2 text-gray-400 hover:text-red-500 transition-colors" aria-label="Delete">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-background-light dark:bg-surface-dark rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-white dark:bg-gray-600 rounded text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
                        12/256GB
                      </span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Diamond Silver</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">No active bonus</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-white">$450</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Stock: <span className="text-gray-900 dark:text-white font-semibold">24</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background-light dark:bg-surface-dark rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-white dark:bg-gray-600 rounded text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
                        8/256GB
                      </span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Emerald Green</span>
                    </div>
                    <div className="text-xs text-primary font-medium">Bonus: 20k/unit</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-white">$399</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Stock: <span className="text-gray-900 dark:text-white font-semibold">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      alt="Honor X9b"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcuDrDySUqIiGliVym-BvYOg08FLGoHoHIsX0oW1LcLG3kB5Sv-FMdBi25-GRTo93J8Ch8uh5MmUhfZ6DjLTKbMXInwlbKGxMAuq487ySXZr0rn-qkewQq8W94eHDzwhxpfJcgW6FztI9OaFLWLwmBYcSBP7RCQrPoiEIAkoRdF-LE5mRunoOLsOQ6KzqF5yWZeqlnNfVoyRy4uJNmYeA4UtivdWG43C3RFiKW4XucE0AiOLkX-fH-KRH9f55bm2XzNyIPQC892KB9"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Honor X9b</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">X Series</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button type="button" className="p-2 text-gray-400 hover:text-primary transition-colors" aria-label="Edit">
                    <span className="material-symbols-outlined text-xl">edit</span>
                  </button>
                  <button type="button" className="p-2 text-gray-400 hover:text-red-500 transition-colors" aria-label="Delete">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-background-light dark:bg-surface-dark rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-white dark:bg-gray-600 rounded text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600">
                        12/256GB
                      </span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Sunrise Orange</span>
                    </div>
                    <div className="text-xs text-primary font-medium">Bonus: 15k/unit</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-white">$320</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Stock: <span className="text-gray-900 dark:text-white font-semibold">45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8" />
        </div>

        {/* Bottom Nav - Fixed floating */}
        <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div className="bg-[#1C1C1E] text-white backdrop-blur-lg flex items-center justify-between px-2 py-2 rounded-[32px] shadow-2xl pointer-events-auto max-w-[320px] mx-4">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Home"
            >
              <span className="material-icons-outlined">home</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/inventory')}
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-md"
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
