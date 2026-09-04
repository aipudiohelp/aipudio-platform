import { SITE_DATA } from '@/data/siteData'

export default function Footer() {
  return (
    <>
      <section className="py-20 px-4 sm:px-8 border-t border-white/5 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-white">جاهز لمضاعفة مبيعاتك وأرباح نشاطك؟</h2>
          <p className="text-xs sm:text-sm text-slate-400">اختر مسارك الآن وسنتولى هندسة المحتوى ونظام البيع من البداية حتى وصول الأوردرات.</p>
          <div className="pt-4 flex justify-center">
            <a
              href={`https://wa.me/${SITE_DATA.brand.whatsapp}?text=${encodeURIComponent('مرحباً، أود التنسيق لبدء العمل مع منظومة Aipudio')}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-purple-600/30 hover:opacity-95 transition"
            >
              تحدث مباشرة مع فريق العمل عبر واتساب ⚡
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-4 sm:px-8 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 {SITE_DATA.brand.name}. جميع الحقوق محفوظة — Creative AI, High-End Montage & SaaS Infrastructure.</p>
        <div className="flex justify-center gap-4 text-[11px] text-slate-400">
          <a href={SITE_DATA.brand.lpUrl} target="_blank" rel="noreferrer" className="hover:underline">نظام الصفحات Aipudio-LP</a>
          <span>•</span>
          <a href={`https://wa.me/${SITE_DATA.brand.whatsapp}`} target="_blank" rel="noreferrer" className="hover:underline">خدمة العملاء والدعم الفني</a>
        </div>
      </footer>
    </>
  )
}
