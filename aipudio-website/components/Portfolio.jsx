'use client'

import { useState } from 'react'
import { SITE_DATA } from '@/data/siteData'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { key: 'all', label: 'الكل' },
    { key: 'medical', label: 'طبي وتجميل' },
    { key: 'fashion', label: 'أزياء وملابس' },
    { key: 'gadgets', label: 'أجهزة وأدوات' },
    { key: 'education', label: 'تعليم وأكاديميات' },
  ]

  const filteredPortfolio = activeTab === 'all'
    ? SITE_DATA.portfolio
    : SITE_DATA.portfolio.filter((item) => item.category === activeTab)

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 border-t border-white/5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold">PORTFOLIO</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">نماذج من أعمالنا وحملاتنا الفعلية</h2>
        </div>

        <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 text-xs font-bold">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === tab.key
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPortfolio.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/50 transition"
          >
            <div className={`aspect-[9/16] bg-gradient-to-b ${item.bgGradient} p-4 flex flex-col justify-between relative`}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] bg-black/50 border border-white/20 px-2 py-0.5 rounded-full text-white font-bold">{item.country}</span>
                <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">{item.badge}</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black text-white block">{item.title}</span>
                <p className="text-[10px] text-slate-300">{item.tagline}</p>
              </div>
            </div>
            <div className="p-4 border-t border-white/5 bg-[#0C101A]">
              <span className="text-[11px] font-mono text-cyan-400 font-bold block">{item.stats}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
