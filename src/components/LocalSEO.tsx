import React from "react";

const LocalSEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Param Clinic",
    "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
    "url": "https://paramclinic.com",
    "telephone": "+15559998888",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Dental Street, Suite 456",
      "addressLocality": "Innovation District",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/paramclinic",
      "https://instagram.com/paramclinic",
      "https://linkedin.com/company/paramclinic"
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
