import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Add JSON-LD structured data for better SEO
export function StructuredData() {
  const location = useLocation();

  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Organization Schema (for all pages)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "GST Calculator Pro",
      "url": "https://your-domain.com",
      "description": "Free online GST calculator and invoice generator for Indian businesses, freelancers, and shopkeepers",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      }
    };

    // Software Application Schema for Tools
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "GST Calculator & Invoice Generator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "featureList": [
        "GST Calculator",
        "Invoice Generator",
        "PDF Download",
        "CGST SGST IGST Calculation",
        "Invoice History Management"
      ]
    };

    // FAQ Schema for content pages
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is GST?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GST (Goods and Services Tax) is an indirect tax levied on the supply of goods and services in India. It replaced multiple cascading taxes like VAT, service tax, and excise duty."
          }
        },
        {
          "@type": "Question",
          "name": "How to calculate GST?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate GST: Forward calculation - GST Amount = (Base Price × GST Rate) / 100. Reverse calculation - Base Price = Total Price / (1 + GST Rate/100)."
          }
        },
        {
          "@type": "Question",
          "name": "What are GST rates in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GST rates in India are 0%, 5%, 12%, 18%, and 28%. Essential items are taxed at lower rates while luxury goods attract higher rates."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between CGST, SGST, and IGST?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CGST and SGST apply to intra-state transactions (within same state), split equally. IGST applies to inter-state transactions (between different states)."
          }
        }
      ]
    };

    // HowTo Schema for calculator page
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate GST Online",
      "description": "Step by step guide to calculate GST using our free online calculator",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Enter Base Amount",
          "text": "Enter the base amount (price without GST) in the calculator"
        },
        {
          "@type": "HowToStep",
          "name": "Select GST Rate",
          "text": "Choose the applicable GST rate (0%, 5%, 12%, 18%, or 28%)"
        },
        {
          "@type": "HowToStep",
          "name": "View Results",
          "text": "Get instant calculations showing CGST, SGST, IGST, and total amount"
        }
      ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://your-domain.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": getCurrentPageName(location.pathname),
          "item": `https://your-domain.com${location.pathname}`
        }
      ]
    };

    // Combine schemas based on page
    let schemas = [organizationSchema, breadcrumbSchema];
    
    if (location.pathname === '/') {
      schemas.push(softwareSchema, howToSchema);
    } else if (location.pathname.includes('how-to') || location.pathname.includes('about') || location.pathname.includes('tips')) {
      schemas.push(faqSchema);
    }

    // Add to document
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname]);

  return null;
}

function getCurrentPageName(pathname: string): string {
  const names: Record<string, string> = {
    '/': 'GST Calculator',
    '/invoice-generator': 'Invoice Generator',
    '/invoice-history': 'Invoice History',
    '/gst-rates': 'GST Rates Guide',
    '/how-to-calculate-gst': 'How to Calculate GST',
    '/about-gst': 'About GST',
    '/gst-tips': 'GST Tips'
  };
  return names[pathname] || 'GST Calculator';
}
