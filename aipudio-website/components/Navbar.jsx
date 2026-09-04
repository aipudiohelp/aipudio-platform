import { SITE_DATA } from '@/data/siteData'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090E]/80 border-b border-white/5 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20 flex items-center justify-center">
            <span className="font-black text-white text-base tracking-tighter">Ai</span>
          </div>
          <div>
            <span className="font-black text-lg text-white block tracking-wide">{SITE_DATA.brand.name}</span>
            <span className="text-[9px] text-cyan-400 font-mono block -mt-1 uppercase tracking-wider">Growth & Tech Ecosystem</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
          <a href="#services" className="hover:text-white transition">الخدمات</a>
          <a href="#portfolio" className="hover:text-white transition">سابقة الأعمال</a>
          <a href="#workflow" className="hover:text-white transition">مسار التحويل</a>
          <a href="#pricing" className="hover:text-white transition">الباقات والأسعار</a>
          <a href="#faq" className="hover:text-white transition">الأسئلة الشائعة</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE_DATA.brand.lpUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl border border-white/10 hover:border-white/20 transition hidden sm:inline-block"
          >
            منصة الصفحات (LP) ↗
          </a>
          <a
            href={`https://wa.me/${SITE_DATA.brand.whatsapp}?text=${encodeURIComponent('مرحباً، أود استشارة لتطوير المبيعات والمحتوى لنشاطي التجاري')}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-90 text-white px-4 py-2.5 rounded-xl shadow-lg shadow-purple-600/30 transition active:scale-95"
          >
            ابدأ مشروعك ⚡
          </a>
        </div>
      </div>
    </header>
  )
}
