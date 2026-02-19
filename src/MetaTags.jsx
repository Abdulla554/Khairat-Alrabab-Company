/* eslint-disable react/prop-types */

import { Helmet } from 'react-helmet-async'

export const MetaTags = ({ customTitle, customDescription }) => {
  const title = customTitle || "Khairat Alrabab Company | General Contracting & Real Estate"
  const description = customDescription || "Khairat Alrabab is an Iraqi company specializing in general contracting, trading, and real estate development delivering integrated solutions aligned with international standards."
  const keywords = "Khairat Alrabab, general contracting, trading, real estate development, Iraq, Babylon, Hillah"
  const siteUrl = "https://khairatalrabab.com/"
  const imageUrl = `${siteUrl}logo.png`
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/png" href="/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Khairat Alrabab Company" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="business:contact_data:street_address" content="Babylon — Hillah — Hay Alsaha, Iraq" />
      <meta property="business:contact_data:phone_number" content="+9647838527173" />
      <meta property="business:contact_data:email" content="khairatalrababcc@gmail.com" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0E2A47" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Preconnect to Important Origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* PWA Tags */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  )
}
