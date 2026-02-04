import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reports() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const reportText = `DATE: 04/02/2026
PC NAME: Nguyễn Quốc Thịnh
CODE SHOP: HNR-HCM-015
STORE: CellphoneS Nguyễn Thái Học
1/ Sell-out
- Honor X9a: 2/10
- Honor 90 Lite: 1/5
- MagicBook 14: 0/2
- Pad X9: 1/3
2/ Tồn Kho
- Honor X9a: 8
- Honor 90 Lite: 12
- MagicBook 14: 4
- Pad X9: 5
- Watch GS3: 2
Total Sales Value: 18.490.000 VND
Notes: Khách quan tâm dòng X9a nhiều.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 min-h-[max(884px,100dvh)] flex justify-center selection:bg-primary selection:text-white">
      <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-[max(884px,100dvh)] relative shadow-2xl overflow-hidden pb-32">
        {/* Header */}
        <header className="px-6 pt-12 pb-4 flex items-center justify-between z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Back"
          >
            <span className="material-icons-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Daily Report</h1>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Settings"
          >
            <span className="material-icons-outlined">settings</span>
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 pb-32 hide-scrollbar">
          {/* Sync status */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Real-time Sync • Google Sheets</p>
          </div>

          {/* Preview Card */}
          <div className="bg-card-light dark:bg-card-dark rounded-3xl p-1 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] mb-6 transition-colors">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-primary text-sm">description</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Preview Output</span>
                </div>
                <span className="text-[10px] px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold tracking-wider">READY</span>
              </div>
              <div className="relative group">
                <pre className="font-mono text-sm leading-relaxed text-gray-800 dark:text-gray-300 p-5 bg-code-bg-light dark:bg-code-bg-dark overflow-x-auto hide-scrollbar select-all whitespace-pre-wrap">
                  {reportText}
                </pre>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1.5 rounded-md bg-white dark:bg-gray-700 shadow-sm text-gray-500 hover:text-primary"
                    aria-label="Copy"
                  >
                    <span className="material-icons-outlined text-sm">{copied ? 'check' : 'content_copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-6">
            <button
              type="button"
              onClick={handleCopy}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <span className="material-icons-outlined">{copied ? 'check' : 'content_copy'}</span>
              <span>{copied ? 'Copied!' : 'Copy Report to Clipboard'}</span>
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors border border-gray-100 dark:border-gray-700"
              >
                <span className="material-icons-outlined text-blue-500">share</span>
                <span>Zalo</span>
              </button>
              <button
                type="button"
                className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors border border-gray-100 dark:border-gray-700"
              >
                <span className="material-icons-outlined text-gray-500 dark:text-gray-400">business</span>
                <span>Company</span>
              </button>
            </div>
          </div>

          {/* Info note */}
          <div className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
            <span className="material-icons-outlined text-lg mt-0.5">info</span>
            <p className="text-xs leading-5">
              Please review the data above carefully. This report is generated based on your inputs in the Sales and Stock tabs.
            </p>
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
              className="w-12 h-12 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Inventory"
            >
              <span className="material-icons-outlined">inventory_2</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/reports')}
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-md"
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
