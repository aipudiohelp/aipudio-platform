'use client'

import { SITE_DATA } from '@/data/siteData'

export default function Footer() {
  const socials = [
    {
      name: 'Facebook',
      url: SITE_DATA.socials?.facebook || 'https://www.facebook.com/share/1BnCSXSAec/',
      color: 'hover:text-blue-500 hover:border-blue-500/40',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: SITE_DATA.socials?.instagram || 'https://www.instagram.com/aipudio?igsi=MXI0ZDI3bWR3cDRrZg==',
      color: 'hover:text-pink-500 hover:border-pink-500/40',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: SITE_DATA.socials?.tiktok || 'https://www.tiktok.com/@aipudio?_r=1&_t=ZS-99SwlCcIeI8',
      color: 'hover:text-cyan-400 hover:border-cyan-400/40',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: SITE_DATA.socials?.youtube || 'https://youtube.com/@aipudio?si=0-cTasPM80bCkWLU',
      color: 'hover:text-red-500 hover:border-red-500/40',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Telegram',
      url: SITE_DATA.socials?.telegram || 'https://t.me/aipudio',
      color: 'hover:text-sky-400 hover:border-sky-400/40',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="border-t border-white/5 bg-[#05070B] text-slate-400 py-16 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        
        {/* قسم الدعوة للإجراء الختامي */}
        <div className="space-y-4 max-w-xl mx-auto">
          <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
            جاهز لمضاعفة مبيعاتك وأرباح نشاطك؟
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            اختر مسارك الآن وسنتولى هندسة المحتوى ونظام البيع من البداية حتى وصول الأوردرات.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${SITE_DATA.brand.whatsapp}?text=${encodeURIComponent('مرحباً، أود استشارة مباشرة لبدء التعاقد مع Aipudio')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white text-xs sm:text-sm font-black shadow-xl shadow-purple-600/30 hover:opacity-95 transition active:scale-95"
            >
              <span>تحدث مباشرة مع فريق العمل عبر واتساب</span>
              <span>⚡</span>
            </a>
          </div>
        </div>

        {/* أيقونات التواصل الاجتماعي */}
        <div className="pt-4 border-t border-white/5 flex flex-col items-center gap-4">
          <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
            تابعنا على المنصات الرسمية
          </span>
          <div className="flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className={`w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-white/[0.08] ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* الروابط السفلية وحقوق الملكية */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-mono">
            © {new Date().getFullYear()} {SITE_DATA.brand.name}. جميع الحقوق محفوظة — Creative AI, High-End Montage & SaaS Infrastructure.
          </p>
          <div className="flex items-center gap-5 text-[11px] font-bold">
            <a href={SITE_DATA.brand.lpUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">
              نظام الصفحات Aipudio-LP
            </a>
            <a href="#services" className="hover:text-cyan-300 transition">
              الخدمات
            </a>
            <a href={`https://wa.me/${SITE_DATA.brand.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">
              الدعم الفني
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
