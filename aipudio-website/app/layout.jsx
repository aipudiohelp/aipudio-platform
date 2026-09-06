import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://aipudio.online'),
  title: 'Aipudio | شريك الأنشطة الصاعدة - محتوى يليق ببراندك ومبيعات ذكية',
  description: 'نساعد أصحاب الأنشطة الصاعدة والناشئة في تقديم منتجاتهم بمستوى براند احترافي، وبناء مسارات بيع رقمية تحول المشاهدين لأوردرات مؤكدة على الواتساب.',
  keywords: [
    'تطوير مشاريع صغيرة',
    'إنتاج محتوى تجاري',
    'تصوير براندات',
    'Aipudio',
    'حلول بيع رقمية',
    'زيادة مبيعات المتاجر',
    'تسويق الأنشطة المحلية',
    'مسار بيع واتساب',
    'إعلانات ريلز للأنشطة',
  ],
  authors: [{ name: 'Aipudio Ecosystem' }],
  creator: 'Aipudio',
  publisher: 'Aipudio',
  openGraph: {
    title: 'Aipudio | شريك الأنشطة الصاعدة في بناء البراند ومضاعفة المبيعات',
    description: 'محتوى فيديو يليق بهيبة براندك، ونظام بيع ذكي يحول المشاهدات لأوردرات مؤكدة على الواتساب دون سلات متروكة.',
    url: 'https://aipudio.online',
    siteName: 'Aipudio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aipudio - شريك نمو الأنشطة الصاعدة',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aipudio | شريك الأنشطة الصاعدة - محتوى يليق ببراندك ومبيعات ذكية',
    description: 'نقف بجانب أصحاب الأنشطة الصاعدة: محتوى احترافي ومسارات بيع رقمية تضاعف مبيعاتك.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  const FB_PIXEL_ID = '26761924540141738'

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* تتبع فيسبوك (Meta Pixel) */}
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

        {/* تتبع مايكروسوفت كلاريتي (Microsoft Clarity) */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ydr9s7xewt");
            `,
          }}
        />
      </head>
      <body className="bg-[#07090E] text-slate-100 antialiased font-sans">
        {children}
        
        {/* كود تحليلات Vercel */}
        <Analytics />
      </body>
    </html>
  )
}

