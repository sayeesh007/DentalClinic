import React from "react";

const LocalSEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Param Clinic | Premium Dental Excellence",
    "image": "/images/tooth-v2.png",
    "url": "https://paramclinic.com",
    "telephone": "+919998888888",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation St, Suite 456",
      "addressLocality": "Bengaluru",
      "addressRegion": "KA",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/paramclinic",
      "https://twitter.com/paramclinic"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalSEO;
