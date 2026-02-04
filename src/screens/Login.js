import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-[400px] flex flex-col items-center bg-pattern">
        <div className="w-full">
          <div className="flex flex-col items-center py-8">
            <div
              className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAcNSKACxGMGNeoqsGuhkw2X7y6iYxYVeInQJ_kxxGsuaj8VI46dEG8-rylZCnYXPRCO0eWTDzsLtxMNqIPNR7VNgr54V7RPC0KGQmg29RZMo75UkpdsN7UjWkZWv04mHrZYRCqPgmEC5ImYpMPAlmoCDBhkAijqTMMjU9oxAd0NdNIkHtg0lFgvMLCk0qxcdGMWwX6EQgcdzvGoT3AlWEIHotx8LirPcx9Slho6VM0_L0FTB0Tbl74y2lMW0u4qoBQC1xDpOzfSBT')",
                backgroundSize: 'cover',
              }}
            />
            <h1 className="text-[#0d121b] dark:text-white tracking-tight text-[28px] font-bold leading-tight px-4 text-center">
              PC Honor Center
            </h1>
            <p className="text-[#4c669a] dark:text-[#94a3b8] text-sm font-normal leading-normal pt-1 px-4 text-center">
              Sales and Inventory Management
            </p>
          </div>

          <div className="w-full space-y-2">
            <div className="flex flex-col gap-1 px-4">
              <label className="flex flex-col w-full">
                <p className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal pb-1.5 ml-1">
                  Employee Code / Username
                </p>
                <input
                  className="form-input flex w-full rounded-xl text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#4c669a]/60 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-all"
                  placeholder="Enter your employee code"
                  type="text"
                  defaultValue=""
                />
              </label>
            </div>

            <div className="flex flex-col gap-1 px-4 py-2">
              <label className="flex flex-col w-full">
                <p className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal pb-1.5 ml-1">Password</p>
                <div className="flex w-full items-stretch relative">
                  <input
                    className="form-input flex w-full rounded-xl text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#4c669a]/60 dark:placeholder:text-gray-500 p-[15px] pr-12 text-base font-normal leading-normal transition-all"
                    placeholder="Enter your password"
                    type="password"
                    defaultValue=""
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4c669a] dark:text-gray-400 hover:text-primary transition-colors"
                    type="button"
                    aria-label="Show password"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </label>
            </div>

            <div className="px-5 text-right">
              <button className="text-sm font-medium text-primary hover:underline" type="button">
                Forgot Password?
              </button>
            </div>

            <div className="px-4 pt-6 flex gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98]"
              >
                Login
              </button>
              <button
                className="flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 rounded-xl text-primary shadow-sm hover:bg-gray-50 transition-all active:scale-[0.95]"
                type="button"
                aria-label="Biometric login"
              >
                <span className="material-symbols-outlined text-[32px]">fingerprint</span>
              </button>
            </div>
          </div>

          <div className="h-20" />

          <div className="mt-auto pb-8 flex flex-col items-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-[#cfd7e7] dark:border-gray-700">
              <span className="material-symbols-outlined text-[#4c669a] dark:text-[#94a3b8] text-sm">cloud_done</span>
              <p className="text-[#4c669a] dark:text-[#94a3b8] text-xs font-medium uppercase tracking-wider">
                Securely connected to G-Suite
              </p>
            </div>
            <div className="mt-6 flex gap-1.5 opacity-20">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-8 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
