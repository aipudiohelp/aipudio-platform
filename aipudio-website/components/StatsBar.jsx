import { SITE_DATA } from '@/data/siteData'

export default function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {SITE_DATA.stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {stat.value}
            </span>
            <p className="text-xs text-slate-400 font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
