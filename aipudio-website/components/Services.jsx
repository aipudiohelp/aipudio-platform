import { SITE_DATA } from '@/data/siteData'

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
            className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-purple-500/40 transition space-y-3 group"
          >
            <span className="text-3xl block">{service.icon}</span>
            <h3 className="font-black text-base text-white group-hover:text-purple-400 transition">
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
