export default function Pillars() {
  const pillars = [
    {
      icon: '✨',
      title: 'واجهة تليق بقيمة منتجك',
      desc: 'ريلز وإخراج بصري سينمائي يعكس جودة منتجك ويزيل انطباع "المشروع المتواضع"، ليبني ثقة فورية تدفع عميلك للشراء دون تردد.',
      badge: 'هيبة البراند',
      borderColor: 'border-purple-500/30',
      bgGlow: 'from-purple-600/10',
    },
    {
      icon: '⚡',
      title: 'نظام بيع ذكي بدون تعقيد',
      desc: 'صفحة وصول سريعة وخفيفة على الهاتف، يرى فيها العميل تفاصيل العرض ويؤكد طلبه مباشرة على الواتساب دون سلات متروكة.',
      badge: 'أوردرات مؤكدة',
      borderColor: 'border-cyan-500/30',
      bgGlow: 'from-cyan-600/10',
    },
    {
      icon: '🎯',
      title: 'شراكة حقيقية تمنع هدر أموالك',
      desc: 'لا نتركك لإعلانات عشوائية تحرق ميزانيتك؛ نوجه حملتك للمشتري الجاد فقط ونقيس كل تفاعل وتحويل بالأرقام الحية.',
      badge: 'أعلى عائد',
      borderColor: 'border-emerald-500/30',
      bgGlow: 'from-emerald-600/10',
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* عنوان القسم */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
          OUR PARTNERSHIP VALUE
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          كيف نقف بجانب مشروعك الصاعد؟
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          نحول نشاطك التجاري من مجرد صفحة تنشر منشورات إلى منظومة بيع متكاملة تجذب العميل المناسب وتغلق الصفقة فوراً.
        </p>
      </div>

      {/* كروت المحاور الثلاثة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className={`relative p-6 rounded-3xl bg-gradient-to-b ${item.bgGlow} to-white/[0.02] border ${item.borderColor} backdrop-blur-md flex flex-col justify-between space-y-4 hover:border-white/30 transition duration-300`}
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-[10px] font-mono font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                {item.badge}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
