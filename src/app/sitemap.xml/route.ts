/* eslint-disable @typescript-eslint/no-unused-vars */
// app/sitemap.xml/route.ts

import { NextResponse } from 'next/server';

export const dynamic = 'force-static'; // atau 'force-dynamic' jika datanya dari DB

export async function GET() {
  const baseUrl = 'https://www.9lapakgacor.com';

  const staticPages = [''];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
