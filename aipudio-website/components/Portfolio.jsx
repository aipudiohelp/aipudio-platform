'use client'

import { useState } from 'react'
import { SITE_DATA } from '@/data/siteData'

export default function Portfolio() {
  const [selectedCountry, setSelectedCountry] = useState('all')

  const countries = [
    { key: 'all', label: 'الكل', flag: '🌍' },
    { key: 'eg', label: 'مصر', flag: '🇪🇬' },
    { key: 'sa', label: 'السعودية', flag: '🇸🇦' },
    { key: 'kw', label: 'الكويت', flag: '🇰🇼' },
    { key: 'gr', label: 'اليونان', flag: '🇬🇷' },
    { key: 'iq', label: 'العراق', flag: '🇮🇶' },
    { key: 'sd', label: 'السودان', flag: '🇸🇩' },
    { key: 'sy', label: 'سوريا', flag: '🇸🇾' },
  ]

  const filteredPortfolio = selectedCountry === 'all'
    ? SITE_DATA.portfolio
    : SITE_DATA.portfolio.filter((item) => item.countryCode === selectedCountry)

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 border-t border-white/5">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">PORTFOLIO BY REGION</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">سابقة أعمالنا موزعة جغرافياً</h2>
          <p className="text-xs text-slate-400 mt-1">اختر الدولة لاستعراض الحملات والأنظمة المنفذة في أسواقها الفعلية.</p>
        </div>

        {/* شريط أعلام الدول */}
        <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
          {countries.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCountry(c.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                selectedCountry === c.key
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* شبكة عرض النماذج */}
      {filteredPortfolio.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/60 transition shadow-xl"
            >
              {/* شاشة الفيديو */}
              <div className="aspect-[9/16] relative overflow-hidden bg-black">
                <video
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent p-4 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-black/70 backdrop-blur-xs border border-white/20 px-2.5 py-0.5 rounded-full text-white font-bold">
                      {item.country}
                    </span>
                    <span className="text-[10px] bg-purple-600 text-white px-2.5 py-0.5 rounded-full font-bold shadow">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-300 font-bold block">{item.specialty}</span>
                    <span className="text-xs font-black text-white block">{item.title}</span>
                    <p className="text-[10px] text-slate-300 line-clamp-2 leading-relaxed">{item.tagline}</p>
                  </div>
                </div>
              </div>

              {/* شريط الإحصائيات السفلي */}
              <div className="p-3.5 border-t border-white/5 bg-[#0C101A]">
                <span className="text-[11px] font-mono text-cyan-400 font-bold block">{item.stats}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
          <p className="text-sm font-bold text-slate-400">جاري تحديث ورفع سابقة الأعمال الإضافية لهذه الدولة ⏳</p>
          <a
            href={`https://wa.me/${SITE_DATA.brand.whatsapp}?text=${encodeURIComponent('أود الاستفسار عن نماذج الأعمال المنفذة في هذه الدولة')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-xs font-bold text-cyan-400 hover:underline"
          >
            تواصل معنا لمعاينة نماذج أعمال خاصة مباشرة ↗
          </a>
        </div>
      )}
    </section>
  )
}
