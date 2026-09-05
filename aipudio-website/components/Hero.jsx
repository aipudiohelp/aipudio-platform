import { SITE_DATA } from '@/data/siteData'

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 blur-[140px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="flex-1 space-y-6 text-right">
        {/* شارة توضيح هوية الوكالة */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-cyan-300 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>وكالة إنتاج إعلاني ومسارات بيع مباشر</span>
        </div>

        {/* العنوان البسيط والواضح */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.3] tracking-tight">
          إعلانات فيديو تشد عميلك... <br />
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            ونظام بيع يحول المشاهدات لأوردرات مؤكدة
          </span>
        </h1>

        {/* الوصف المباشر المناسب لأصحاب الأعمال */}
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
          نصنع لك محتوى إعلاني احترافي ومونتاج سينمائي يخطف انتباه المشتري في أول ثوانٍ، ونربطه بصفحات بيع سريعة (Aipudio-LP) تستلم طلبات الزبائن مباشرة على الواتساب جاهزة للشحن أو الحجز دون تشتيت.
        </p>

        {/* أزرار الإجراء السريع */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <a
            href="#pricing"
            className="px-7 py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-purple-600/25 hover:opacity-95 transition text-center active:scale-95"
          >
            استعرض باقات الإعلانات والأسعار 🚀
          </a>
          <a
            href={SITE_DATA.brand.lpUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs sm:text-sm rounded-2xl transition text-center flex items-center justify-center gap-2"
          >
            <span>نظام صفحات البيع المباشر (LP)</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>

      {/* هاتف العرض السينمائي */}
      <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
        <div className="relative w-full max-w-[270px] sm:max-w-[300px] aspect-[9/18.5] rounded-[38px] p-2.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black border-2 border-white/20 shadow-2xl shadow-purple-900/40 backdrop-blur-md">
          
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-20" />

          <div className="w-full h-full rounded-[28px] bg-black overflow-hidden relative border border-white/5 flex flex-col justify-between">
            <video
              src="/videos/hero-showcase.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 p-2.5 pt-5 bg-gradient-to-b from-black/80 via-transparent to-transparent flex items-center justify-between">
              <span className="text-[9px] font-mono text-cyan-400 font-bold bg-black/50 px-2 py-0.5 rounded-md border border-cyan-500/20">LIVE CAMPAIGN</span>
              <span className="text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold shadow">ROAS 5.2x</span>
            </div>

            <div className="relative z-10 m-2.5 p-2.5 rounded-2xl bg-[#07090E]/90 border border-emerald-500/40 backdrop-blur-md shadow-lg text-right space-y-1">
              <div className="flex items-center justify-between text-[9px] font-bold text-emerald-400">
                <span>طلب شراء مؤكد 🛍️</span>
                <span className="text-[8px] text-slate-400 font-mono">منذ لحظات</span>
              </div>
              <p className="text-[10px] font-black text-white font-mono">أوردر جاهز للتسليم - 600 ج.م</p>
              <p className="text-[8px] text-slate-300">وصول تلقائي لبيانات العميل بالكامل على الواتساب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
