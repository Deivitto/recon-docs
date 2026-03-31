(function () {
  var softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Recon",
    "alternateName": ["Recon Pro", "Recon Fuzz", "GetRecon"],
    "applicationCategory": "DeveloperApplication",
    "applicationSubCategory": "Smart Contract Security Testing",
    "operatingSystem": "Web, VS Code",
    "url": "https://getrecon.xyz",
    "description": "Cloud-native invariant testing platform for EVM smart contracts. Run Echidna, Medusa, Foundry, Halmos, and Kontrol fuzzing jobs in the cloud with real-time Telegram alerts, CI/CD campaigns, AI-powered harness generation, and governance fuzzing.",
    "featureList": [
      "Cloud fuzzing with Echidna, Medusa, Foundry, Halmos, Kontrol",
      "AI-powered fuzzing suite generation (Recon Magic)",
      "CI/CD campaigns with GitHub PR integration",
      "Real-time Telegram and webhook alerts on broken properties",
      "Dynamic variable replacement for multi-config testing",
      "Governance fuzzing with on-chain event monitoring",
      "Chimera framework: write once, run on all fuzzers",
      "Automatic Foundry reproducer generation",
      "Corpus reuse and cloud-persisted corpus management",
      "VS Code extension for scaffolding and coverage"
    ],
    "softwareRequirements": "Foundry, Solidity >=0.8",
    "author": {
      "@type": "Organization",
      "name": "Recon",
      "url": "https://getrecon.xyz",
      "founder": {
        "@type": "Person",
        "name": "Alex the Entreprenerd",
        "alternateName": "GalloDaSballo",
        "url": "https://x.com/GalloDaSballo",
        "jobTitle": "Founder & Lead Security Researcher",
        "knowsAbout": ["Smart Contract Security", "Invariant Testing", "DeFi Security", "Fuzzing", "EVM"]
      },
      "foundingDate": "2023",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 5,
        "maxValue": 10
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tools available; Pro subscription for cloud features"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "9",
      "bestRating": "5"
    }
  };

  var techArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Recon Book: Complete Guide to Invariant Testing for Smart Contracts",
    "description": "Technical documentation covering invariant testing methodology, the Chimera framework, cloud fuzzing with Recon Pro, AI-powered harness generation, and advanced techniques like governance fuzzing and optimization mode.",
    "url": "https://book.getrecon.xyz",
    "inLanguage": "en",
    "author": [
      {
        "@type": "Person",
        "name": "Alex the Entreprenerd",
        "alternateName": "GalloDaSballo",
        "url": "https://x.com/GalloDaSballo",
        "jobTitle": "Founder & Lead Security Researcher"
      },
      {
        "@type": "Person",
        "name": "nican0r",
        "jobTitle": "Lead Invariants Engineer"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Recon",
      "url": "https://getrecon.xyz"
    },
    "about": [
      "Invariant Testing",
      "Smart Contract Fuzzing",
      "Property-Based Testing",
      "EVM Security",
      "Solidity Testing"
    ],
    "proficiencyLevel": "Expert",
    "dependencies": "Foundry, Solidity, Echidna, Medusa"
  };

  var script1 = document.createElement("script");
  script1.type = "application/ld+json";
  script1.textContent = JSON.stringify(softwareApp);
  document.head.appendChild(script1);

  var script2 = document.createElement("script");
  script2.type = "application/ld+json";
  script2.textContent = JSON.stringify(techArticle);
  document.head.appendChild(script2);

  // Canonical URL
  var canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = window.location.origin + window.location.pathname;
  document.head.appendChild(canonical);

  // og:url (needs runtime URL)
  var ogUrl = document.createElement("meta");
  ogUrl.setAttribute("property", "og:url");
  ogUrl.content = window.location.origin + window.location.pathname;
  document.head.appendChild(ogUrl);

  // BreadcrumbList JSON-LD
  var pathParts = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '').split('/').filter(Boolean);
  var breadcrumbItems = [{
    "@type": "ListItem",
    "position": 1,
    "name": "Recon Book",
    "item": "https://book.getrecon.xyz/"
  }];
  var accumulated = "https://book.getrecon.xyz";
  for (var i = 0; i < pathParts.length; i++) {
    accumulated += "/" + pathParts[i];
    var name = pathParts[i]
      .replace(/\.html$/, '')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, function(c) { return c.toUpperCase(); });
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": i + 2,
      "name": name,
      "item": accumulated
    });
  }
  if (breadcrumbItems.length > 1) {
    var breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
    var script3 = document.createElement("script");
    script3.type = "application/ld+json";
    script3.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script3);
  }

  // Sitewide backlink footer to getrecon.xyz
  var content = document.getElementById("content");
  if (content) {
    var footer = document.createElement("footer");
    footer.style.cssText = "margin-top:3rem;padding:1.5rem 0;border-top:1px solid var(--sidebar-separator,#3b3b3b);text-align:center;font-size:0.85rem;opacity:0.8;";
    footer.innerHTML = '<a href="https://getrecon.xyz" target="_blank" rel="noopener">Recon</a> · '
      + '<a href="https://getrecon.xyz/dashboard/jobs" target="_blank" rel="noopener">Cloud Fuzzing</a> · '
      + '<a href="https://getrecon.xyz/dashboard/magic" target="_blank" rel="noopener">Recon Magic</a> · '
      + '<a href="https://discord.gg/aCZrCBZdFd" target="_blank" rel="noopener">Discord</a> · '
      + '<a href="https://x.com/getrecon" target="_blank" rel="noopener">Twitter</a>';
    content.appendChild(footer);
  }
})();
