import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://paprika-design.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add other static routes if they become separate pages
  ]
}
