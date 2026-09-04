import { SITE_DATA } from '@/data/siteData'

function ServiceIcon({ type }) {
  if (type === 'ai-video') {
    return (
      <svg className="w-7 h-7 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 10l5-3v10l-5-3v3a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h9a2 2 0 012 2v3z" />
        <path d="M8 9v6l5-3-5-3z" fill="currentColor" fillOpacity="0.3" />
      </svg>
    )
  }
  if (type === 'scissors') {
    return (
      <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    )
  }
  if (type === 'zap') {
    return (
      <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.25" />
      </svg>
    )
  }
  return (
    <svg className="w-7 h-7 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 font-black tracking-wider uppercase">OUR SERVICES</span>
        <h2 className="text-2xl sm:text-4xl font-black text-white">ركائز العمل والخدمات المتكاملة</h2>
        <p className="text-xs sm:text-sm text-slate-400">منظومة مترابطة تغطي كافة مراحل التحويل الإعلاني من أول ثانية في الفيديو حتى استلام الأوردر.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SITE_DATA.services.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ServiceIcon type={service.iconType} />
            </div>
            <h3 className="font-black text-base text-white group-hover:text-purple-300 transition">
              {service.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
