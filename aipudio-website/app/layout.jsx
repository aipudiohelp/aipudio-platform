import Script from 'next/script'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://aipudio.online'),
  title: 'Aipudio | منظومة إنتاج الإعلانات ومسارات البيع المباشر',
  description: 'نصنع إعلانات فيديو تشد عميلك ونبني أنظمة بيع سريعة تحول المشاهدات إلى أوردرات مؤكدة على الواتساب دون سلات متروكة.',
  keywords: [
    'إنتاج إعلانات',
    'إعلانات ريلز',
    'صفحات هبوط',
    'Aipudio',
    'مونتاج سينمائي',
    'تسويق إلكتروني مصر والسعودية',
    'زيادة مبيعات المتاجر',
    'إعلانات واتساب مباشرة',
  ],
  authors: [{ name: 'Aipudio Ecosystem' }],
  creator: 'Aipudio',
  publisher: 'Aipudio',
  openGraph: {
    title: 'Aipudio | إعلانات فيديو سينمائية وأنظمة بيع مباشر',
    description: 'حوّل زوار إعلاناتك لأوردرات مؤكدة فوراً على الواتساب. استعرض سابقة أعمالنا وباقات التعاقد.',
    url: 'https://aipudio.online',
    siteName: 'Aipudio',
    images: [
      {
        url: '/logo.png', // صورة الكارت عند مشاركة الرابط
        width: 1200,
        height: 630,
        alt: 'Aipudio Growth & Tech Ecosystem',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aipudio | منظومة النمو الرقمي والإعلانات',
    description: 'نصنع المحتوى الذي يبيع.. ونبني أنظمة البيع المباشر لمتجرك أو عيادتك.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  // ضع رقم البيكسل الخاص بك هنا
  const FB_PIXEL_ID = 'YOUR_PIXEL_ID_HERE'

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* كود Meta Pixel الرسمي */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="facebook-pixel"
          />
        </noscript>
      </head>
      <body className="bg-[#07090E] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
