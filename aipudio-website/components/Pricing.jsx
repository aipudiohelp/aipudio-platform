import { SITE_DATA } from '@/data/siteData'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 border-t border-white/5">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 font-black tracking-wider uppercase">PRICING TIERS</span>
        <h2 className="text-2xl sm:text-4xl font-black text-white">باقات التعاقد والنمو التجاري</h2>
        <p className="text-xs sm:text-sm text-slate-400">باقات شفافة محددة المخرجات، مصممة لتحقيق أعلى عائد على ميزانيتك الإعلانية.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {SITE_DATA.pricing.map((plan) => (
          <div
            key={plan.id}
            className={`p-7 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 transition relative ${
              plan.featured
                ? 'bg-gradient-to-b from-purple-950/40 via-[#0E121E] to-[#07090E] border-2 border-purple-500/80 shadow-2xl shadow-purple-600/20'
                : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                {plan.badge}
              </div>
            )}

            <div className="space-y-4">
              {!plan.featured && (
                <span className="text-xs font-black text-slate-400 block uppercase font-mono">{plan.badge}</span>
              )}
              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1.5 pt-2">
                <span className="text-3xl sm:text-4xl font-black text-white">{plan.price}</span>
                <span className="text-xs text-slate-400 font-bold">{plan.period}</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-white/10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${SITE_DATA.brand.whatsapp}?text=${encodeURIComponent(plan.whatsappMsg)}`}
              target="_blank"
              rel="noreferrer"
              className={`w-full py-4 text-xs font-black rounded-2xl transition text-center active:scale-95 ${
                plan.featured
                  ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 hover:opacity-95'
                  : 'bg-white/10 hover:bg-white/15 text-white'
              }`}
            >
              اختيار الباقة والتواصل ⚡
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
