export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // حماية لوحة التحكم من الظهور في بحث جوجل
    },
    sitemap: 'https://aipudio.online/sitemap.xml',
  }
}

