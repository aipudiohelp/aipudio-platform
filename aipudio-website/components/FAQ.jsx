'use client'

import { useState } from 'react'
import { SITE_DATA } from '@/data/siteData'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
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
  )
}
