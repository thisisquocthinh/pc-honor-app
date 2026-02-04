import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inventory() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4 sm:p-8">
      <div className="w-full max-w-[400px] h-[850px] bg-background-light rounded-[3rem] shadow-2xl overflow-hidden relative flex flex-col border-8 border-gray-900 transition-colors duration-300">
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20">
          <span className="text-sm font-semibold text-gray-900">9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="material-icons-outlined text-xs text-gray-900">signal_cellular_alt</span>
            <span className="material-icons-outlined text-xs text-gray-900">wifi</span>
            <span className="material-icons-outlined text-xs text-gray-900">battery_full</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar pb-24 px-6 pt-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
              <p className="text-sm text-gray-500 mt-1">Manage stock & pricing</p>
            </div>
            <div className="relative">
              <img alt="User Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtzCX0JYeOF8CpcaNEMXe0cZybUI3kyJfKxrKUJimbmttP2GegfUDYHYBSvu3HzGdPIY3Or0OBrZLKj93odHYdvZbngx0OVT0thwHucO8Z_c6a4EM9o0v4CzZ-2GCNSq4Pw-2HtWD9ZqmBxJefSrso1ApORSgjbL9jXdH2tf7cXYnb5V0rUYtcVw2ALXf71_-m8XgVo-IdeBJH-ZE-vKUq00EgVQZ-0zC-Iz3J6lLWAmbUNuqjzvynLJ1j5K1ji2GM6KHZkpBsdOT8" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <div className="flex-1 relative">
              <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input className="w-full h-12 pl-11 pr-4 rounded-full bg-white text-gray-900 border-none focus:ring-2 focus:ring-primary shadow-sm text-sm placeholder-gray-400" placeholder="Search models..." type="text" />
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full shadow-lg hover:scale-105 transition-transform">
              <span className="material-icons-outlined">tune</span>
            </button>
          </div>

          <button className="w-full mb-6 py-4 px-6 bg-primary rounded-3xl flex items-center justify-between shadow-lg shadow-blue-500/20 group hover:shadow-blue-500/30 transition-all">
            <div className="flex flex-col items-start">
              <span className="text-white font-bold text-lg">Add New Model</span>
              <span className="text-blue-100 text-sm">Update inventory list</span>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="material-icons-outlined text-white">add</span>
            </div>
          </button>

          <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-6 -mx-6 px-6">
            <button className="flex-shrink-0 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium">All Models</button>
            <button className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white text-gray-600 text-sm font-medium shadow-sm">Flagship</button>
            <button className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white text-gray-600 text-sm font-medium shadow-sm">X Series</button>
          </div>

          <div className="space-y-5">
            <div className="bg-card-light rounded-3xl p-5 shadow-soft transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img alt="Honor Magic5 Pro" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZGEYJEy32Mvhk0FXg93X6APQge3bvp7Mygb6SNAi7jMaDkEJIJ4hgNN-Hpl65VEpfzIiujNk7JiUAfJ75GWm5lCx--f1ZMxYnsFmw1znkhPFY-a_6z5J60oshmKT3faQoDJ-6mbYZVD0ygBbJ55fqEMK9SekBsIKDg-feZtRZWOlIs_woZqgdqgJ1ytpQ3tL5orTKqQt5SEql6eLWRph5-OvZdaUIaLWm5vhj5YSWbId59sHGbZY04Ej5YN6UXA6jH3_WQtSXicz" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Honor Magic5 Pro</h3>
                    <p className="text-xs text-gray-500">Flagship Series</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                    <span className="material-icons-outlined text-xl">edit</span>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <span className="material-icons-outlined text-xl">delete</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-background-light rounded-xl p-3 flex justify-between items-center group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-white rounded text-gray-700 shadow-sm border border-gray-100">12/512GB</span>
                      <span className="text-sm font-medium text-gray-800">Meadow Green</span>
                    </div>
                    <div className="text-xs text-green-600 font-medium">Bonus: 50k (if >3 units)</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">$899</div>
                    <div className="text-xs text-gray-500">Stock: 12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8" />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-6 pointer-events-none">
          <div className="bg-[#1C1C1E] text-white backdrop-blur-lg flex items-center justify-between px-2 py-2 rounded-[32px] shadow-2xl pointer-events-auto max-w-[320px] mx-auto">
            <button onClick={() => navigate('/dashboard')} className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
              <span className="material-icons-outlined">home</span>
            </button>
            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-md">
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
