export default function Workflow() {
  const steps = [
    {
      num: 'خطوة 01',
      color: 'text-purple-400',
      title: 'صناعة إعلان AI فيروسي',
      desc: 'نحدد نقطة الألم الشرائية وننتج ريلز سينمائي يجذب المهتمين بنشاطك ويدفعهم للنقر الفوري على الرابط.',
    },
    {
      num: 'خطوة 02',
      color: 'text-cyan-400',
      title: 'استقبال مباشر على صفحة الهبوط',
      desc: 'تفتح صفحة فائقة السرعة للموبايل تعرض شارات الضمان وعروض الباقات لإلغاء أي تردد قبل الشراء.',
    },
    {
      num: 'خطوة 03',
      color: 'text-emerald-400',
      title: 'استلام الأوردر على الواتساب',
      desc: 'تصلك رسالة الشراء المؤكدة شاملة الاسم، الهاتف، والعنوان التفصيلي لبدء الشحن الفوري.',
    },
  ]

  return (
    <section id="workflow" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto space-y-12 border-t border-white/5">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 font-black tracking-wider uppercase">HOW IT WORKS</span>
        <h2 className="text-2xl sm:text-4xl font-black text-white">كيف تتحول المشاهدات إلى أرباح حقيقية؟</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <span className={`text-xs font-mono font-black ${step.color}`}>{step.num}</span>
            <h4 className="text-base font-black text-white">{step.title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
