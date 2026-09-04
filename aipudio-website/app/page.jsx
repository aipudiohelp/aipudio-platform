'use client'

import { useState } from 'react'
import { SITE_DATA } from '@/data/siteData'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('all')
  const [openFaq, setOpenFaq] = useState(null)

  const filteredPortfolio = activeTab === 'all'
    ? SITE_DATA.portfolio
    : SITE_DATA.portfolio.filter((item) => item.category === activeTab)

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      
      {/* 1. القائمة العلوية الزجاجية */}
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

      {/* 2. الواجهة الرئيسية (Hero Section) */}
      <section className="relative pt-16 pb-20 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[130px] -z-10 pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/15 blur-[120px] -z-10 pointer-events-none rounded-full" />

        <div className="flex-1 space-y-6 text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-cyan-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{SITE_DATA.brand.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight">
            نصنع المحتوى الفيروسي... <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              ونبني الأنظمة التي تحوله لمبيعات مؤكدة
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-medium">
            ندمج بين إنتاج إعلانات الذكاء الاصطناعي والمونتاج السينمائي فائق الاحتفاظ بالجمهور، مع أنظمة البيع المباشر (Aipudio-LP) لإنهاء مشكلة السلات المتروكة ومضاعفة العائد الإعلاني لنشاطك.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#pricing"
              className="px-7 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-purple-600/25 hover:opacity-95 transition text-center active:scale-95"
            >
              استعرض باقات النمو التجاري 🚀
            </a>
            <a
              href={SITE_DATA.brand.lpUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs sm:text-sm rounded-2xl transition text-center flex items-center justify-center gap-2"
            >
              <span>جرّب نظام صفحات البيع (LP) مجاناً</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* كارت محاكاة النظام */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
          <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="w-full h-full rounded-2xl bg-[#0F1420] p-4 flex flex-col justify-between relative overflow-hidden border border-white/5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono text-cyan-400 font-bold">ACTIVE CAMPAIGN PIPELINE</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">ROAS 5.2x</span>
              </div>

              <div className="space-y-3 my-auto text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30">
                  ⚡
                </div>
                <h4 className="text-sm font-black text-white">إعلان AI + صفحة بيع مخصصة</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">الزائر يشاهد الريلز ➔ ينتقل لصفحة المنتج ➔ يصلك الأوردر جاهزاً للشحن فوراً</p>
              </div>

              <div className="bg-emerald-950/60 border border-emerald-500/40 p-3 rounded-2xl text-right space-y-1 backdrop-blur-xs">
                <div className="flex items-center justify-between text-[10px] font-bold text-emerald-400">
                  <span>طلب شراء جديد مؤكد 🛍️</span>
                  <span>منذ دقيقة</span>
                </div>
                <p className="text-[11px] font-mono text-white font-black">2x باقة العناية - 600 ج.م</p>
                <p className="text-[9px] text-slate-300">العميل: أحمد محمود - الجيزة (شحن سريع)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. شريط الأرقام والانتشار */}
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

      {/* 4. ركائز المنظومة والخدمات */}
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

      {/* 5. معرض سابقة الأعمال */}
      <section id="portfolio" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-10 border-t border-white/5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold">PORTFOLIO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">نماذج من أعمالنا وحملاتنا الفعلية</h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 text-xs font-bold">
            {[
              { key: 'all', label: 'الكل' },
              { key: 'medical', label: 'طبي وتجميل' },
              { key: 'fashion', label: 'أزياء وملابس' },
              { key: 'gadgets', label: 'أجهزة وأدوات' },
              { key: 'education', label: 'تعليم وأكاديميات' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-xl transition ${
                  activeTab === tab.key
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-purple-500/50 transition"
            >
              <div className={`aspect-[9/16] bg-gradient-to-b ${item.bgGradient} p-4 flex flex-col justify-between relative`}>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-black/50 border border-white/20 px-2 py-0.5 rounded-full text-white font-bold">{item.country}</span>
                  <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">{item.badge}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-black text-white block">{item.title}</span>
                  <p className="text-[10px] text-slate-300">{item.tagline}</p>
                </div>
              </div>
              <div className="p-4 border-t border-white/5 bg-[#0C101A]">
                <span className="text-[11px] font-mono text-cyan-400 font-bold block">{item.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. مسار الرحلة المتكاملة */}
      <section id="workflow" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 border-t border-white/5">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono text-cyan-400 font-black tracking-wider uppercase">HOW IT WORKS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">كيف تتحول المشاهدات إلى أرباح حقيقية؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-mono font-black text-purple-400">خطوة 01</span>
            <h4 className="text-base font-black text-white">صناعة إعلان AI فيروسي</h4>
            <p className="text-xs text-slate-400 leading-relaxed">نحدد نقطة الألم الشرائية وننتج ريلز سينمائي يجذب المهتمين بنشاطك ويدفعهم للنقر الفوري على الرابط.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-mono font-black text-cyan-400">خطوة 02</span>
            <h4 className="text-base font-black text-white">استقبال مباشر على صفحة الهبوط</h4>
            <p className="text-xs text-slate-400 leading-relaxed">تفتح صفحة فائقة السرعة للموبايل تعرض شارات الضمان وعروض الباقات لإلغاء أي تردد قبل الشراء.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className="text-xs font-mono font-black text-emerald-400">خطوة 03</span>
            <h4 className="text-base font-black text-white">استلام الأوردر على الواتساب</h4>
            <p className="text-xs text-slate-400 leading-relaxed">تصلك رسالة الشراء المؤكدة شاملة الاسم، الهاتف، والعنوان التفصيلي لبدء الشحن الفوري.</p>
          </div>
        </div>
      </section>

      {/* 7. باقات الأسعار (السوق المصري) */}
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

      {/* 8. الأسئلة الشائعة (FAQ) */}
      <section id="faq" className="py-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-8 border-t border-white/5">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-white">الأسئلة الشائعة</h2>
          <p className="text-xs text-slate-400">إجابات سريعة حول آلية عملنا وكيفية بدء التعاقد.</p>
        </div>

        <div className="space-y-3">
          {SITE_DATA.faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 text-right flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-cyan-300 transition"
              >
                <span>{faq.q}</span>
                <span className="font-mono text-slate-500">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="p-4 pt-0 text-xs text-slate-400 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. قسم الختام والتواصل المباشر */}
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

      {/* 10. التذييل (Footer) */}
      <footer className="border-t border-white/5 py-8 px-4 sm:px-8 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 {SITE_DATA.brand.name}. جميع الحقوق محفوظة — Creative AI, High-End Montage & SaaS Infrastructure.</p>
        <div className="flex justify-center gap-4 text-[11px] text-slate-400">
          <a href={SITE_DATA.brand.lpUrl} target="_blank" rel="noreferrer" className="hover:underline">نظام الصفحات Aipudio-LP</a>
          <span>•</span>
          <a href={`https://wa.me/${SITE_DATA.brand.whatsapp}`} target="_blank" rel="noreferrer" className="hover:underline">خدمة العملاء والدعم الفني</a>
        </div>
      </footer>

    </div>
  )
}
