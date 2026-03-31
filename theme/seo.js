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
    "headline": "Recon Book — Complete Guide to Invariant Testing for Smart Contracts",
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
})();
