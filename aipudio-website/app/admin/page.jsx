'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/data/supabase'

export default function AdminPortfolio() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pin, setPin] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  // بيانات النموذج الجديد
  const [formData, setFormData] = useState({
    country_code: 'eg',
    country_name: 'مصر 🇪🇬',
    title: '',
    specialty: '',
    stats: '',
    badge: 'إعلان مباشر',
    tagline: '',
    image_url: '',
    video_url: '',
  })

  const countries = [
    { code: 'eg', name: 'مصر 🇪🇬' },
    { code: 'sa', name: 'السعودية 🇸🇦' },
    { code: 'kw', name: 'الكويت 🇰🇼' },
    { code: 'gr', name: 'اليونان 🇬🇷' },
    { code: 'iq', name: 'العراق 🇮🇶' },
    { code: 'sd', name: 'السودان 🇸🇩' },
    { code: 'sy', name: 'سوريا 🇸🇾' },
  ]

  // حماية اللوحة برمز دخول (افتراضي: 2026)
  const handleLogin = (e) => {
    e.preventDefault()
    if (pin === '2026') {
      setIsAuthenticated(true)
      fetchItems()
    } else {
      alert('رمز الدخول غير صحيح')
    }
  }

  const fetchItems = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .order('id', { ascending: false })

    if (!error && data) setItems(data)
    setLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from('portfolio').insert([formData])
    if (error) {
      alert('حدث خطأ أثناء الحفظ: ' + error.message)
    } else {
      alert('تم حفظ العمل بنجاح!')
      setFormData({
        country_code: 'eg',
        country_name: 'مصر 🇪🇬',
        title: '',
        specialty: '',
        stats: '',
        badge: 'إعلان مباشر',
        tagline: '',
        image_url: '',
        video_url: '',
      })
      fetchItems()
    }
    setLoading(false)
  }

  const handleDelete = async (id) => {
    if (confirm('هل أنت متأكد من حذف هذا العمل؟')) {
      await supabase.from('portfolio').delete().eq('id', id)
      fetchItems()
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#07090E] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4 text-center">
          <h1 className="text-xl font-black text-white">لوحة إدارة سابقة الأعمال</h1>
          <p className="text-xs text-slate-400">أدخل رمز الدخول السري للمتابعة</p>
          <input
            type="password"
            placeholder="رمز PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-center font-mono tracking-widest outline-none focus:border-purple-500"
          />
          <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs rounded-xl transition">
            دخول للوحة التحكم
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#07090E] text-white p-4 sm:p-8 max-w-6xl mx-auto space-y-10" dir="rtl">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div>
          <h1 className="text-2xl font-black">إدارة نماذج وسابقة الأعمال</h1>
          <p className="text-xs text-slate-400 mt-1">أضف نماذج بالصور المصغرة أو الفيديوهات لكل دولة</p>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="text-xs text-rose-400 border border-rose-500/30 px-3 py-1.5 rounded-lg">خروج</button>
      </div>

      {/* نموذج الإضافة */}
      <form onSubmit={handleSubmit} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
        <h2 className="text-sm font-black text-cyan-400">إضافة نموذج جديد</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block mb-1 text-slate-400">اختر الدولة:</label>
            <select
              value={formData.country_code}
              onChange={(e) => {
                const selected = countries.find((c) => c.code === e.target.value)
                setFormData({ ...formData, country_code: selected.code, country_name: selected.name })
              }}
              className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code} className="bg-[#07090E] text-white">
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-slate-400">اسم المشروع / البراند:</label>
            <input
              type="text"
              required
              placeholder="مثال: براند كابرينا كارجو"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-400">التخصص:</label>
            <input
              type="text"
              required
              placeholder="مثال: أزياء وموضة / عيادات طبية"
              value={formData.specialty}
              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
              className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-400">الأرقام والإحصائيات:</label>
            <input
              type="text"
              required
              placeholder="مثال: +890K تفاعل | ROAS 5.2x"
              value={formData.stats}
              onChange={(e) => setFormData({ ...formData, stats: e.target.value })}
              className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-400">رابط الصورة المصغرة (Thumbnail):</label>
            <input
              type="text"
              placeholder="رابط الصورة أو مسارها في public (مثال: /covers/cargo.jpg)"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl outline-none text-left font-mono"
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-400">رابط الفيديو (اتركه فارغاً إن لم يجهز):</label>
            <input
              type="text"
              placeholder="رابط الفيديو أو مساره (مثال: /videos/hero-showcase.mp4)"
              value={formData.video_url}
              onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
              className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl outline-none text-left font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-xs text-slate-400">الوصف والنتائج (Tagline):</label>
          <input
            type="text"
            required
            placeholder="مثال: استعراض خامات سينمائي ثلاثي الأبعاد وتجربة قياس افتراضية"
            value={formData.tagline}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-xs outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs rounded-xl shadow-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? 'جاري الحفظ...' : 'حفظ النموذج ونشره فوراً 🚀'}
        </button>
      </form>

      {/* قائمة الأعمال المسجلة حالياً */}
      <div className="space-y-4">
        <h2 className="text-sm font-black text-slate-300">النماذج المعروضة بالموقع ({items.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-md">{item.country_name}</span>
                <button onClick={() => handleDelete(item.id)} className="text-rose-400 text-xs hover:underline">
                  حذف 🗑️
                </button>
              </div>
              <div className="aspect-[9/16] bg-black/40 rounded-xl overflow-hidden relative border border-white/5 flex items-center justify-center">
                {item.video_url ? (
                  <video src={item.video_url} className="w-full h-full object-cover" muted loop autoPlay />
                ) : item.image_url ? (
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-slate-500">لا يوجد وسائط</span>
                )}
              </div>
              <div>
                <p className="font-bold text-xs">{item.title}</p>
                <p className="text-[10px] text-cyan-400">{item.specialty}</p>
                <p className="text-[10px] text-slate-400">{item.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
