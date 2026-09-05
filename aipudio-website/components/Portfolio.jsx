'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/data/supabase'
import { SITE_DATA } from '@/data/siteData'

export default function Portfolio() {
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [portfolioItems, setPortfolioItems] = useState([])
  const [loading, setLoading] = useState(true)

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
          // استخدام البيانات الافتراضية إذا كانت قاعدة البيانات فارغة
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

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 border-t border-white/5">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">PORTFOLIO BY REGION</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">سابقة أعمالنا موزعة جغرافياً</h2>
          <p className="text-xs text-slate-400 mt-1">استعرض النماذج وحملات الذكاء الاصطناعي حسب الدولة والتخصص.</p>
        </div>

        {/* شريط اختيار الدولة */}
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

      {/* شبكة النماذج */}
      {loading ? (
        <div className="p-12 text-center text-xs font-mono text-slate-500">جاري تحميل النماذج...</div>
      ) : filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const hasVideo = Boolean(item.video_url || item.videoSrc)
            const mediaSrc = item.video_url || item.videoSrc || item.image_url

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/60 transition shadow-xl"
              >
                <div className="aspect-[9/16] relative overflow-hidden bg-black flex items-center justify-center">
                  {hasVideo ? (
                    <video
                      src={mediaSrc}
                      poster={item.image_url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <span className="text-3xl block mb-2">🎬</span>
                      <span className="text-[11px] text-slate-400 font-mono">قيد الإنتاج</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-4 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] bg-black/70 backdrop-blur-xs border border-white/20 px-2.5 py-0.5 rounded-full text-white font-bold">
                        {item.country_name || item.country}
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

                <div className="p-3.5 border-t border-white/5 bg-[#0C101A]">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold block">{item.stats}</span>
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
