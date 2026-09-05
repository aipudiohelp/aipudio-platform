'use client'

import { useState } from 'react'
import { SITE_DATA } from '@/data/siteData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/90 border-b border-white/5 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* شعار Aipudio */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600/40 to-cyan-500/30 p-0.5 border border-white/10 group-hover:border-purple-500/50 transition flex items-center justify-center overflow-hidden shadow-lg shadow-purple-900/30 shrink-0">
            <img
              src={SITE_DATA.brand.logoSrc}
              alt={SITE_DATA.brand.name}
              className="w-full h-full object-contain p-1 drop-shadow"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback')
                if (fallback) fallback.classList.remove('hidden')
              }}
            />
            <span className="logo-fallback hidden font-black text-white text-base tracking-tighter">Ai</span>
          </div>
          <div>
            <span className="font-black text-base sm:text-lg text-white block tracking-wide group-hover:text-cyan-300 transition">
              {SITE_DATA.brand.name}
            </span>
            <span className="text-[8px] sm:text-[9px] text-cyan-400 font-mono block -mt-1 uppercase tracking-wider">
              Growth & Tech Ecosystem
            </span>
          </div>
        </a>

        {/* روابط شاشات الكمبيوتر والتابلت */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
          <a href="#services" className="hover:text-white transition">الخدمات</a>
          <a href="#portfolio" className="hover:text-white transition">سابقة الأعمال</a>
          <a href="#workflow" className="hover:text-white transition">مسار التحويل</a>
          <a href="#pricing" className="hover:text-white transition">الباقات والأسعار</a>
          <a href="#faq" className="hover:text-white transition">الأسئلة الشائعة</a>
        </nav>

        {/* أزرار الإجراءات وزر القائمة للموبايل */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE_DATA.brand.lpUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl border border-white/10 hover:border-white/20 transition hidden md:inline-block"
          >
            منصة الصفحات (LP) ↗
          </a>

          <a
            href={`https://wa.me/${SITE_DATA.brand.whatsapp}?text=${encodeURIComponent('مرحباً، أود استشارة لتطوير المبيعات والمحتوى لنشاطي التجاري')}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-90 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-purple-600/30 transition active:scale-95 whitespace-nowrap"
          >
            ابدأ مشروعك ⚡
          </a>

          {/* زر القائمة للشاشات الصغيرة (Hamburger Button) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-90 transition"
            aria-label="فتح القائمة"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة التفاعلية لشاشات الموبايل */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 pb-3 border-t border-white/10 space-y-1 text-right bg-[#07090E]/95 backdrop-blur-2xl rounded-2xl p-3 border border-white/5 shadow-2xl">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-xl text-xs font-bold text-slate-200 hover:bg-white/5 hover:text-cyan-300 transition block"
          >
            الخدمات
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-xl text-xs font-bold text-slate-200 hover:bg-white/5 hover:text-cyan-300 transition block"
          >
            سابقة الأعمال
          </a>
          <a
            href="#workflow"
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-xl text-xs font-bold text-slate-200 hover:bg-white/5 hover:text-cyan-300 transition block"
          >
            مسار التحويل
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-xl text-xs font-bold text-slate-200 hover:bg-white/5 hover:text-cyan-300 transition block"
          >
            الباقات والأسعار
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-xl text-xs font-bold text-slate-200 hover:bg-white/5 hover:text-cyan-300 transition block"
          >
            الأسئلة الشائعة
          </a>
          
          <div className="pt-2 mt-1 border-t border-white/10">
            <a
              href={SITE_DATA.brand.lpUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 active:scale-98 transition"
            >
              <span>منصة صفحات البيع (Aipudio-LP)</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
              }
    
