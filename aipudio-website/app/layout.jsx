import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
  fontFamily: {
  sans: ['var(--font-cairo)', 'sans-serif'],
},
})

export const metadata = {
  title: 'Aipudio | منظومة النمو الرقمي وإعلانات الذكاء الاصطناعي',
  description:
    'استوديو إبداعي متكامل يجمع بين صناعة إعلانات الذكاء الاصطناعي (AI Reels)، المونتاج السينمائي المتقدم، وهندسة صفحات البيع المباشر لرفع المبيعات ومعدلات التحويل.',
  keywords: [
    'Aipudio',
    'ريلز ذكاء اصطناعي',
    'مونتاج إعلاني',
    'صفحات هبوط',
    'Aipudio-LP',
    'تسويق إلكتروني مصر',
    'ميديا بايينغ',
  ],
  metadataBase: new URL('https://aipudio.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aipudio | Creative AI & Tech Ecosystem',
    description: 'نصنع المحتوى الفيروسي... ونبني الأنظمة التي تحوله لمبيعات مؤكدة.',
    url: 'https://aipudio.online',
    siteName: 'Aipudio',
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aipudio | Creative AI & Tech Ecosystem',
    description: 'نصنع المحتوى الفيروسي... ونبني الأنظمة التي تحوله لمبيعات مؤكدة.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#07090E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} scroll-smooth`}>
      <body className="bg-[#07090E] text-slate-100 font-sans antialiased selection:bg-purple-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
