import type { Language } from '../App';

export interface SEOMetadata {
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  keywords: {
    en: string;
    tr: string;
  };
  canonical?: string;
  ogImage?: string;
}

// SEO metadata for all pages
export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: {
      en: 'STRATRI – AI Governance, Technology Policy & Responsible Innovation',
      tr: 'STRATRI – Yapay Zeka Yönetişimi, Teknoloji Politikası & Sorumlu İnovasyon',
    },
    description: {
      en: 'STRATRI is a governance and technology policy studio helping organizations align AI, regulation, and societal impact at the crossroads of technology, policy, and society.',
      tr: 'STRATRI, teknoloji, politika ve toplumun kesişiminde yapay zeka, düzenleme ve toplumsal etkiyi hizalamaya yardımcı olan bir yönetişim ve teknoloji politikası stüdyosudur.',
    },
    keywords: {
      en: 'AI governance consulting, technology policy, responsible AI, AI strategy, AI ethics, governance frameworks',
      tr: 'yapay zeka yönetişimi danışmanlığı, teknoloji politikası, sorumlu yapay zeka, yapay zeka stratejisi, yapay zeka etiği, yönetişim çerçeveleri',
    },
  },
  services: {
    title: {
      en: 'Services – AI Strategy, Governance, Market Research & Policy Advisory | STRATRI',
      tr: 'Hizmetler – Yapay Zeka Stratejisi, Yönetişim, Pazar Araştırması & Politika Danışmanlığı | STRATRI',
    },
    description: {
      en: 'Explore STRATRI\'s services across AI strategy maturity, governance and ethics, market and policy research, and government affairs at the intersection of technology and regulation.',
      tr: 'STRATRI\'nin yapay zeka strateji olgunluğu, yönetişim ve etik, pazar ve politika araştırması ve kamu işleri alanlarındaki hizmetlerini keşfedin.',
    },
    keywords: {
      en: 'AI strategy, AI governance, AI ethics, market research, policy advisory, technology consulting',
      tr: 'yapay zeka stratejisi, yapay zeka yönetişimi, yapay zeka etiği, pazar araştırması, politika danışmanlığı, teknoloji danışmanlığı',
    },
  },
  frameworks: {
    title: {
      en: 'Railway – AI Governance Maturity Framework & RAIL Loop | STRATRI',
      tr: 'Railway – Yapay Zeka Yönetişim Olgunluk Çerçevesi & RAIL Loop | STRATRI',
    },
    description: {
      en: 'Discover Railway, STRATRI\'s AI governance maturity framework, and the RAIL Loop approach for risk, alignment, literacy, and lifecycle regulation in responsible AI deployment.',
      tr: 'Railway, STRATRI\'nin yapay zeka yönetişim olgunluk çerçevesini ve sorumlu yapay zeka dağıtımında risk, hizalama, okuryazarlık ve yaşam döngüsü düzenlemesi için RAIL Loop yaklaşımını keşfedin.',
    },
    keywords: {
      en: 'AI governance framework, Railway framework, RAIL loop, AI maturity model, responsible AI deployment',
      tr: 'yapay zeka yönetişim çerçevesi, Railway çerçevesi, RAIL loop, yapay zeka olgunluk modeli, sorumlu yapay zeka dağıtımı',
    },
  },
  insights: {
    title: {
      en: 'Insights – Techletter, Reports & Articles on AI Governance and Policy | STRATRI',
      tr: 'İçgörüler – Yapay Zeka Yönetişimi ve Politikası Üzerine Techletter, Raporlar & Makaleler | STRATRI',
    },
    description: {
      en: 'Read STRATRI\'s insights on AI governance, responsible technology and digital policy, including Techletter dispatches, in-depth reports, articles and AI Wrapped briefings.',
      tr: 'STRATRI\'nin yapay zeka yönetişimi, sorumlu teknoloji ve dijital politika üzerine içgörülerini, Techletter gönderileri, derinlemesine raporlar, makaleler ve AI Wrapped brifinglari okuyun.',
    },
    keywords: {
      en: 'AI governance insights, Techletter, AI policy reports, technology articles, AI governance research',
      tr: 'yapay zeka yönetişimi içgörüleri, Techletter, yapay zeka politika raporları, teknoloji makaleleri, yapay zeka yönetişimi araştırması',
    },
  },
  about: {
    title: {
      en: 'About STRATRI – Governance & Technology Policy Studio',
      tr: 'Hakkımızda STRATRI – Yönetişim & Teknoloji Politikası Stüdyosu',
    },
    description: {
      en: 'Learn about STRATRI\'s mission, principles and leadership, including Managing Partner Nesibe Kr Can, a consultant and researcher in AI governance and emerging tech regulation.',
      tr: 'STRATRI\'nin misyonunu, ilkelerini ve liderliğini, yapay zeka yönetişimi ve yeni teknoloji düzenlemeleri konusunda danışman ve araştırmacı olan Yönetici Ortak Nesibe Kr Can dahil olmak üzere öğrenin.',
    },
    keywords: {
      en: 'STRATRI about, Nesibe Kr Can, AI governance consultant, technology policy studio, emerging tech regulation',
      tr: 'STRATRI hakkında, Nesibe Kr Can, yapay zeka yönetişimi danışmanı, teknoloji politikası stüdyosu, yeni teknoloji düzenlemeleri',
    },
  },
  connect: {
    title: {
      en: 'Connect with STRATRI – AI Governance & Technology Policy Studio',
      tr: 'STRATRI ile İletişime Geçin – Yapay Zeka Yönetişimi & Teknoloji Politikası Stüdyosu',
    },
    description: {
      en: 'Contact STRATRI to discuss AI governance, responsible technology, and policy. Reach us via form, email, LinkedIn or Techletter for collaboration and advisory.',
      tr: 'Yapay zeka yönetişimi, sorumlu teknoloji ve politika hakkında konuşmak için STRATRI ile iletişime geçin. İşbirliği ve danışmanlık için form, e-posta, LinkedIn veya Techletter üzerinden bize ulaşın.',
    },
    keywords: {
      en: 'contact STRATRI, AI governance consulting, technology policy advisory, collaboration opportunities',
      tr: 'STRATRI iletişim, yapay zeka yönetişimi danışmanlığı, teknoloji politikası danışmanlığı, işbirliği fırsatları',
    },
  },
};

// Helper function to update document head with SEO metadata
export function updateSEO(pageKey: string, language: Language) {
  const metadata = seoMetadata[pageKey];
  if (!metadata) return;

  // Update title
  document.title = metadata.title[language];

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', metadata.description[language]);

  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', metadata.keywords[language]);

  // Update or create og:title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', metadata.title[language]);

  // Update or create og:description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', metadata.description[language]);

  // Update or create og:locale
  let ogLocale = document.querySelector('meta[property="og:locale"]');
  if (!ogLocale) {
    ogLocale = document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    document.head.appendChild(ogLocale);
  }
  ogLocale.setAttribute('content', language === 'en' ? 'en_US' : 'tr_TR');

  // Add alternate language links (hreflang)
  // Remove existing hreflang tags
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());

  // Add new hreflang tags
  const currentPath = window.location.pathname;
  const baseUrl = window.location.origin;

  // English version
  const enLink = document.createElement('link');
  enLink.setAttribute('rel', 'alternate');
  enLink.setAttribute('hreflang', 'en');
  enLink.setAttribute('href', `${baseUrl}${currentPath}?lang=en`);
  document.head.appendChild(enLink);

  // Turkish version
  const trLink = document.createElement('link');
  trLink.setAttribute('rel', 'alternate');
  trLink.setAttribute('hreflang', 'tr');
  trLink.setAttribute('href', `${baseUrl}${currentPath}?lang=tr`);
  document.head.appendChild(trLink);

  // x-default (fallback)
  const defaultLink = document.createElement('link');
  defaultLink.setAttribute('rel', 'alternate');
  defaultLink.setAttribute('hreflang', 'x-default');
  defaultLink.setAttribute('href', `${baseUrl}${currentPath}`);
  document.head.appendChild(defaultLink);
}

// Helper to get page key from path
export function getPageKeyFromPath(path: string): string {
  if (path === '/' || path === '') return 'home';
  if (path.startsWith('/services')) return 'services';
  if (path.startsWith('/frameworks')) return 'frameworks';
  if (path.startsWith('/insights')) return 'insights';
  if (path.startsWith('/about')) return 'about';
  if (path.startsWith('/connect')) return 'connect';
  return 'home';
}
