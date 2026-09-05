'use client'

import { useState } from 'react'
import { SITE_DATA } from '@/data/siteData'

export default function Pricing() {
  const [activeCard, setActiveCard] = useState(1) // الباقة المحددة افتراضياً (المتكاملة)

  return (
    <section id="pricing" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 border-t border-white/5 relative">
      {/* توهج خلفي جمالي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-purple-600/10 blur-[150px] -z-10 pointer-events-none rounded-full" />

      {/* الترويسة */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 font-black tracking-widest uppercase">INVESTMENT & PLANS</span>
        <h2 className="text-2xl sm:text-4xl font-black text-white">باقات التعاقد ومسارات النمو</h2>
        <p className="text-xs sm:text-sm text-slate-400">باقات محددة المخرجات والتكاليف، مصممة لتحقيق عائد إعلاني مباشر لنشاطك.</p>
        
        {/* مؤشر توجيهي للهواتف */}
        <div className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-cyan-300 border border-white/10 mt-2">
          <span>⟵ اسحب الكروت يميناً ويساراً للمقارنة</span>
        </div>
      </div>

      {/* حاوية الكروت: سحب أفقي على الموبايل، وشبكة ثلاثية متوازنة على الشاشات الكبيرة */}
      <div 
        className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-6 px-2 md:px-0 no-scrollbar items-stretch"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SITE_DATA.pricing.map((plan, index) => {
          const isPro = plan.featured

          return (
            <div
              key={plan.id}
              className={`relative shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${
                isPro
                  ? 'bg-gradient-to-b from-[#131627] via-[#0E1222] to-[#080B14] border-2 border-purple-500/80 shadow-2xl shadow-purple-900/40 md:-translate-y-2'
                  : 'bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {/* شارة التميز للباقة المفضلة */}
              {isPro && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white text-[10px] font-black tracking-wide shadow-lg shadow-purple-600/50 uppercase whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                {/* رأس الكارت والاسم */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                      {plan.badge && !isPro ? plan.badge : 'PLAN TIER'}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">{plan.desc}</p>
                </div>

                {/* السعر الكبير */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">{plan.price}</span>
                  <span className="text-xs font-bold text-slate-400">{plan.period}</span>
                </div>

                {/* قائمة المخرجات والمميزات */}
                <div className="space-y-3 pt-2">
                  <p className="text-[11px] font-mono text-slate-300 font-bold uppercase">ما تتضمنه الباقة:</p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-snug">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPro ? 'bg-purple-500/20 text-cyan-400' : 'bg-white/10 text-emerald-400'
                        }`}>
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* زر الإجراء المرتبط بالواتساب */}
              <div className="pt-8">
                <a
                  href={`https://wa.me/${SITE_DATA.brand.whatsapp}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm text-center block transition active:scale-95 shadow-lg ${
                    isPro
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-purple-600/30 hover:opacity-95'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  اختيار الباقة والتعاقد ⚡
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
                    }
                    
