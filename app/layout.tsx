import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Computer AMC & IT Support Services in Pune – TSP Computers',
  description: 'TSP Computers offers professional IT support services in Pune, including managed IT services, computer AMC, computer repair, hardware & network solutions.',
  generator: 'DevTiwari',
  alternates: {
    canonical: 'https://tspcomputers.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "TSP Computers",
        "image": "https://tspcomputers.com/images/tsp-logo.png",
        "@id": "https://tspcomputers.com",
        "url": "https://tspcomputers.com",
        "telephone": "+918169992609",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "450, Padmawati Towers, Office No 3, Amrai Ali",
          "addressLocality": "Bhor, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "412206",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.1476, 
          "longitude": 73.8464
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.facebook.com/tspcomputers",
          "https://www.instagram.com/tsp.computers?igsh=Zno0cnU1a256NnJo"
        ]
      },
      {
        "@type": "Organization",
        "name": "TSP Computers",
        "url": "https://tspcomputers.com",
        "logo": "https://tspcomputers.com/images/tsp-logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+918169992609",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi", "mr"]
        }
      },
      {
        "@type": "Service",
        "serviceType": "IT Support Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "TSP Computers"
        },
        "areaServed": {
          "@type": "City",
          "name": "Pune"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Computer AMC Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Network Support Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Microsoft 365 Partner Services"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tsp-logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
