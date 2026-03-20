// Sitemap generator component
// This generates an XML sitemap for search engines

export const sitemapData = {
  baseUrl: 'https://your-domain.com', // Replace with your actual domain
  pages: [
    {
      path: '/',
      priority: 1.0,
      changefreq: 'daily',
      title: 'GST Calculator - Free Online GST Calculator India'
    },
    {
      path: '/invoice-generator',
      priority: 0.9,
      changefreq: 'daily',
      title: 'Invoice Generator - Free GST Invoice Maker'
    },
    {
      path: '/invoice-history',
      priority: 0.7,
      changefreq: 'weekly',
      title: 'Invoice History'
    },
    {
      path: '/gst-rates',
      priority: 0.8,
      changefreq: 'monthly',
      title: 'GST Rates in India 2026'
    },
    {
      path: '/how-to-calculate-gst',
      priority: 0.8,
      changefreq: 'monthly',
      title: 'How to Calculate GST - Complete Guide'
    },
    {
      path: '/about-gst',
      priority: 0.7,
      changefreq: 'monthly',
      title: 'About GST in India'
    },
    {
      path: '/gst-tips',
      priority: 0.8,
      changefreq: 'weekly',
      title: 'GST Tips & Best Practices'
    }
  ]
};

// Generate sitemap XML
export function generateSitemapXML(): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urlEntries = sitemapData.pages.map(page => `
  <url>
    <loc>${sitemapData.baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;
}

// Instructions for manual sitemap creation:
// 1. Copy the XML output below
// 2. Create a file named "sitemap.xml" in your /public folder
// 3. Paste the XML content
// 4. Upload to your server
// 5. Submit to Google Search Console

/*
SITEMAP.XML CONTENT (Copy this to /public/sitemap.xml):

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/invoice-generator</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://your-domain.com/invoice-history</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://your-domain.com/gst-rates</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://your-domain.com/how-to-calculate-gst</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://your-domain.com/about-gst</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://your-domain.com/gst-tips</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
*/
