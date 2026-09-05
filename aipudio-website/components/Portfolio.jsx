'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/data/supabase'
import { SITE_DATA } from '@/data/siteData'

export default function Portfolio() {
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [portfolioItems, setPortfolioItems] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollContainerRef = useRef(null)

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

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const { data, error } = await supabase
          .from('portfolio')
          .select('*')
          .order('id', { ascending: false })

        if (!error && data && data.length > 0) {
          setPortfolioItems(data)
        } else {
          setPortfolioItems(SITE_DATA.portfolio)
        }
      } catch (err) {
        setPortfolioItems(SITE_DATA.portfolio)
      } finally {
        setLoading(false)
      }
    }

    loadPortfolio()
  }, [])

  const filteredItems = selectedCountry === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => (item.country_code || item.countryCode) === selectedCountry)

  // أزرار التحريك يميناً ويساراً للشاشات الكبيرة
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-8 border-t border-white/5">
      
      {/* الترويسة وأزرار التصفية */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">PORTFOLIO SHOWCASE</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">سابقة أعمالنا واستعراض الحملات</h2>
          <p className="text-xs text-slate-400 mt-1">مرر الشاشات يميناً ويساراً لاستعراض نماذج الريلز والأنظمة الفعلية.</p>
        </div>

        {/* شريط أعلام الدول وأزرار الأسهم */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-between">
          <div className="flex flex-wrap gap-1.5 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {countries.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCountry(c.key)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition active:scale-95 ${
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

          {/* أسهم التمرير لأجهزة الكمبيوتر */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-90 transition"
              title="السابق"
            >
              ➔
            </button>
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-90 transition"
              title="التالي"
            >
              ←
            </button>
          </div>
        </div>
      </div>

      {/* تنبيه خفيف على الهاتف لتشجيع التمرير */}
      <div className="sm:hidden flex items-center justify-between text-[11px] text-cyan-400/80 px-1 font-mono">
        <span>⟵ اسحب الشاشات للمشاهدة</span>
        <span>{filteredItems.length} نماذج</span>
      </div>

      {/* شريط الهواتف بتمرير أفقي وسحب لمسي فائق السلاسة */}
      {loading ? (
        <div className="p-16 text-center text-xs font-mono text-slate-500">جاري تحميل النماذج...</div>
      ) : filteredItems.length > 0 ? (
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item) => {
            const hasVideo = Boolean(item.video_url || item.videoSrc)
            const mediaSrc = item.video_url || item.videoSrc || item.image_url

            return (
              <div
                key={item.id}
                className="relative w-[260px] sm:w-[290px] shrink-0 aspect-[9/18.5] rounded-[38px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black border-2 border-white/20 shadow-2xl shadow-purple-900/30 snap-center group"
              >
                {/* نوتش الهاتف العلوي */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-20" />

                {/* الشاشة الداخلية */}
                <div className="w-full h-full rounded-[28px] bg-black overflow-hidden relative flex flex-col justify-between border border-white/5">
                  {hasVideo ? (
                    <video
                      src={mediaSrc}
                      poster={item.image_url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-500 space-y-2">
                      <span className="text-3xl">🎬</span>
                      <span className="text-[10px] font-mono">قيد التجهيز</span>
                    </div>
                  )}

                  {/* الشريط العلوي داخل شاشة الهاتف */}
                  <div className="relative z-10 p-2.5 pt-5 bg-gradient-to-b from-black/80 via-black/20 to-transparent flex items-center justify-between">
                    <span className="text-[9px] font-mono text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 font-bold">
                      {item.country_name || item.country}
                    </span>
                    <span className="text-[9px] bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold shadow">
                      {item.badge}
                    </span>
                  </div>

                  {/* كارت البيانات السفلي (مطابق لكارت إشعار الهيرو) */}
                  <div className="relative z-10 m-2.5 p-2.5 rounded-2xl bg-[#07090E]/90 border border-white/15 backdrop-blur-md shadow-lg text-right space-y-1 group-hover:border-purple-500/50 transition">
                    <div className="flex items-center justify-between text-[9px] font-bold text-cyan-400">
                      <span>{item.specialty}</span>
                      <span className="text-[8px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">LIVE</span>
                    </div>
                    <p className="text-[11px] font-black text-white truncate">{item.title}</p>
                    <p className="text-[9px] text-slate-300 line-clamp-1">{item.tagline}</p>
                    <div className="pt-1 border-t border-white/5">
                      <span className="text-[10px] font-mono text-emerald-400 font-black">{item.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
          <p className="text-sm font-bold text-slate-400">جاري تحديث ورفع سابقة الأعمال لهذه الدولة ⏳</p>
        </div>
      )}
    </section>
  )
}
