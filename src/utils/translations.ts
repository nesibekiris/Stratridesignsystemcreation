import type { Language } from '../App';

// Translation helper type
export type TranslatedText = {
  en: string;
  tr: string;
};

// Helper function to get text in current language
export function t(text: TranslatedText | string, language: Language): string {
  if (typeof text === 'string') return text;
  return text[language];
}

// Static translations for UI elements
export const staticTranslations = {
  navigation: {
    home: { en: 'Home', tr: 'Ana Sayfa' },
    services: { en: 'Services', tr: 'Hizmetler' },
    insights: { en: 'Insights', tr: 'İçgörüler' },
    about: { en: 'About', tr: 'Hakkımızda' },
    connect: { en: 'Connect', tr: 'İletişim' },
  },
  common: {
    learnMore: { en: 'Learn more', tr: 'Daha fazla' },
    readMore: { en: 'Read more', tr: 'Devamını oku' },
    viewAll: { en: 'View all', tr: 'Tümünü gör' },
    backToHome: { en: 'Back to Home', tr: 'Ana Sayfaya Dön' },
    loading: { en: 'Loading...', tr: 'Yükleniyor...' },
    copyright: { en: 'All rights reserved', tr: 'Tüm hakları saklıdır' },
  },
  newsletter: {
    title: { en: 'Stay close to the thinking', tr: 'Düşünceye yakın kalın' },
    description: { 
      en: 'Occasional deep dives on AI governance, policy and literacy – no spam.', 
      tr: 'AI yönetişimi, politika ve okuryazarlık üzerine ara sıra derinlemesine analizler – spam yok.' 
    },
    placeholder: { en: 'nesibe@stratri.com', tr: 'nesibe@stratri.com' },
    buttonText: { en: 'Subscribe', tr: 'Abone Ol' },
    success: { en: 'Thanks for subscribing!', tr: 'Abone olduğunuz için teşekkürler!' },
    error: { en: 'Something went wrong. Please try again.', tr: 'Bir şeyler ters gitti. Lütfen tekrar deneyin.' },
  },
};

// Content translations structure
export const contentTranslations = {
  hero: {
    title: {
      en: 'At the intersection of technology, society, and policy',
      tr: 'Teknoloji, toplum ve politikanın kesişiminde',
    },
    subtitle: {
      en: 'STRATRI turns that crossroads into strategy.',
      tr: 'STRATRI bu kavşağı stratejiye dönüştürür.',
    },
    description: {
      en: 'Your teams want to build. Regulators want assurance. The public wants to trust you. Most organizations feel these as competing forces. We help you align them.\n\nWe work at this intersection, with a deep focus on AI, so you can move forward without choosing one path at the expense of the others.',
      tr: 'Ekipleriniz inşa etmek istiyor. Düzenleyiciler güvence istiyor. Halk size güvenmek istiyor. Çoğu organizasyon bunları rekabet eden güçler olarak hisseder. Biz bunları hizalamanıza yardımcı oluruz.\n\nBu kesişimde, AI\'ya derin bir odaklanmayla çalışıyoruz, böylece bir yolu diğerlerinin pahasına seçmeden ilerleyebilirsiniz.',
    },
    primaryButtonText: {
      en: 'Explore how we work',
      tr: 'Nasıl çalıştığımızı keşfedin',
    },
    secondaryButtonText: {
      en: 'Talk to STRATRI',
      tr: 'STRATRI ile görüşün',
    },
  },
  threeRoads: {
    title: {
      en: 'Three roads. One decision point.',
      tr: 'Üç yol. Tek bir karar noktası.',
    },
    description1: {
      en: 'Most teams no longer make technology decisions from a single vantage point. Engineers, policy teams, executives, and communities all pull in different directions.',
      tr: 'Çoğu ekip artık teknoloji kararlarını tek bir bakış açısından vermiyor. Mühendisler, politika ekipleri, yöneticiler ve topluluklar farklı yönlere çekiyor.',
    },
    description2: {
      en: 'We treat your organization as a living junction of three roads:',
      tr: 'Organizasyonunuzu üç yolun canlı bir kavşağı olarak görüyoruz:',
    },
    conclusion: {
      en: 'STRATRI sits where those roads meet and helps you design how they move together instead of against each other.',
      tr: 'STRATRI bu yolların kesiştiği noktada durur ve birbirlerine karşı değil, birlikte nasıl ilerleyeceklerini tasarlamanıza yardımcı olur.',
    },
    roads: {
      technology: {
        name: { en: 'Technology', tr: 'Teknoloji' },
        description: { en: 'Systems, products, data, models', tr: 'Sistemler, ürünler, veri, modeller' },
      },
      policy: {
        name: { en: 'Policy', tr: 'Politika' },
        description: { en: 'Law, regulation, internal rules', tr: 'Hukuk, düzenleme, iç kurallar' },
      },
      society: {
        name: { en: 'Society', tr: 'Toplum' },
        description: { en: 'Users, workers, citizens, public trust', tr: 'Kullanıcılar, çalışanlar, vatandaşlar, kamu güveni' },
      },
    },
  },
  services: {
    title: {
      en: 'We do not ask you to pick a road. We help you design the junction.',
      tr: 'Sizden bir yol seçmenizi istemiyoruz. Kavşağı tasarlamanıza yardımcı oluyoruz.',
    },
    pillars: {
      strategy: {
        title: { en: 'AI Strategy & Maturity', tr: 'Yapay Zeka Stratejisi & Olgunluk' },
        subtitle: { en: 'From scattered pilots to a shared route.', tr: 'Dağınık pilotlardan ortak bir rotaya.' },
        points: [
          { 
            en: 'Technology and AI maturity assessments and diagnostics', 
            tr: 'Teknoloji ve Yapay Zeka olgunluk değerlendirmeleri ve teşhisleri' 
          },
          { 
            en: 'Roadmaps aligned with business, societal, and public value', 
            tr: 'İş, toplumsal ve kamusal değerle uyumlu yol haritaları' 
          },
          { 
            en: 'Operating models, roles, and decision rights for responsible use of technology and AI', 
            tr: 'Teknoloji ve Yapay Zeka\'nın sorumlu kullanımı için işletme modelleri, roller ve karar hakları' 
          },
        ],
      },
      governance: {
        title: { en: 'AI Governance, Ethics & Literacy', tr: 'Yapay Zeka Yönetişimi, Etik & Okuryazarlık' },
        subtitle: { en: 'Turning principles into everyday decisions.', tr: 'İlkeleri günlük kararlara dönüştürmek.' },
        points: [
          { 
            en: 'Governance frameworks, principles, and processes for technology and AI', 
            tr: 'Teknoloji ve Yapay Zeka için yönetişim çerçeveleri, ilkeler ve süreçler' 
          },
          { 
            en: 'Ethical guidelines and review mechanisms across the full lifecycle', 
            tr: 'Tam yaşam döngüsü boyunca etik yönergeler ve inceleme mekanizmaları' 
          },
          { 
            en: 'Literacy and capability programs for leaders, boards, and teams', 
            tr: 'Liderler, yönetim kurulları ve ekipler için okuryazarlık ve yetenek programları' 
          },
        ],
      },
      research: {
        title: { en: 'Market & Policy Research', tr: 'Pazar & Politika Araştırması' },
        subtitle: { en: 'Making sense of shifting markets and rules.', tr: 'Değişen pazarları ve kuralları anlamlandırmak.' },
        points: [
          { 
            en: 'Research on technology and AI markets, trends, and use cases', 
            tr: 'Teknoloji ve Yapay Zeka pazarları, trendler ve kullanım alanları üzerine araştırmalar' 
          },
          { 
            en: 'Analysis of technology and AI policy and regulatory landscapes', 
            tr: 'Teknoloji ve Yapay Zeka politika ve düzenleyici manzaralarının analizi' 
          },
          { 
            en: 'Reports, explainers, briefings, and policy papers', 
            tr: 'Raporlar, açıklayıcılar, brifingler ve politika belgeleri' 
          },
        ],
      },
      policy: {
        title: { en: 'Policy & Government Affairs', tr: 'Politika & Kamu İşleri' },
        subtitle: { en: 'Engaging credibly with the public arena.', tr: 'Kamusal alanda güvenilir şekilde yer almak.' },
        points: [
          { 
            en: 'Advisory on technology and AI policy', 
            tr: 'Teknoloji ve Yapay Zeka politikası danışmanlığı' 
          },
          { 
            en: 'Stakeholder mapping and engagement strategies', 
            tr: 'Paydaş haritalama ve katılım stratejileri' 
          },
          { 
            en: 'Support for consultations, hearings, and multi-stakeholder processes', 
            tr: 'Danışmalar, oturumlar ve çok paydaşlı süreçler için destek' 
          },
        ],
      },
    },
  },
  howWeWork: {
    title: {
      en: 'How we work at the crossroads',
      tr: 'Kavşakta nasıl çalışıyoruz',
    },
    steps: [
      {
        title: { en: 'Recognize the junctions', tr: 'Kavşakları tanımak' },
        description: { 
          en: 'We start by surfacing where innovation actually lives in your organization. Not just in strategy decks, but in products, workflows, relationships, and quiet experiments.', 
          tr: 'İnovasyonun organizasyonunuzda gerçekte nerede yaşadığını ortaya çıkararak başlıyoruz. Sadece strateji sunumlarında değil, ürünlerde, iş akışlarında, ilişkilerde ve sessiz deneylerde.' 
        },
      },
      {
        title: { en: 'Design the stratum', tr: 'Stratumu tasarlamak' },
        description: { 
          en: 'Together, we build the strategic ground: governance structures, roles, workflows, and narratives that connect technology, policy, and society into one coherent route instead of three competing ones.', 
          tr: 'Birlikte stratejik zemini inşa ediyoruz: teknoloji, politika ve toplumu rekabet eden üç yol yerine tutarlı bir rotada birleştiren yönetişim yapıları, roller, iş akışları ve anlatılar.' 
        },
      },
      {
        title: { en: 'Embed and iterate', tr: 'Yerleştirmek ve tekrarlamak' },
        description: { 
          en: 'Governance only works if people use it. We stay close as you roll out, adjust to regulation and market pressure, and learn from real cases.', 
          tr: 'Yönetişim ancak insanlar kullanırsa işe yarar. Hayata geçirirken, düzenleme ve pazar baskısına ayak uydururken ve gerçek vakalardan öğrenirken yanınızdayız.' 
        },
      },
    ],
  },
  forTeams: {
    title: {
      en: 'For teams who cannot afford "wait and see"',
      tr: '"Bekleyip görelim" diyemeyecek ekipler için',
    },
    intro: {
      en: 'STRATRI works with organizations that move at the intersection of innovation, rules, and public expectation. That includes:',
      tr: 'STRATRI, inovasyon, kurallar ve kamu beklentilerinin kesişiminde hareket eden organizasyonlarla çalışır. Bunlar:',
    },
    items: [
      { 
        en: 'Technology companies moving from experiments to real products and platforms', 
        tr: 'Deneylerden gerçek ürünlere ve platformlara geçen teknoloji şirketleri' 
      },
      { 
        en: 'Organizations in retail technologies, industrial and manufacturing, AI, fintech, ecommerce, healthtech, and crypto that are reshaping their business through technology', 
        tr: 'Perakende teknolojileri, endüstriyel ve imalat, Yapay Zeka, fintech, e-ticaret, sağlık teknolojisi ve kripto alanlarında teknoloji ile işlerini yeniden şekillendiren organizasyonlar' 
      },
      { 
        en: 'Venture investors and platforms that need a grounded view on risk, governance, and public perception', 
        tr: 'Risk, yönetişim ve kamuoyu algısı konusunda temelli bir görüşe ihtiyaç duyan girişim yatırımcıları ve platformlar' 
      },
      { 
        en: 'Public institutions facing new obligations and scrutiny', 
        tr: 'Yeni yükümlülükler ve incelemelerle karşı karşıya kalan kamu kurumları' 
      },
      { 
        en: 'Civil society and ecosystem actors who help define the rules of the game', 
        tr: 'Oyunun kurallarını tanımlamaya yardımcı olan sivil toplum ve ekosistem aktörleri' 
      },
    ],
    conclusion: {
      en: 'If you sit somewhere between "we cannot ship this" and "we cannot stop now", you are in the right place.',
      tr: '"Bunu yayınlayamayız" ile "şimdi duramayız" arasında bir yerdeyseniz, doğru yerdesiniz.',
    },
    buttonText: {
      en: 'Get in touch',
      tr: 'İletişime geçin',
    },
  },
  trainings: {
    title: {
      en: 'AI LITERACY & TRAININGS',
      tr: 'YAPAY ZEKA OKURYAZARLIĞI & EĞİTİMLER',
    },
    items: [
      {
        title: { 
          en: 'AI Governance & Ethics for Boards', 
          tr: 'Yönetim Kurulları için Yapay Zeka Yönetişimi & Etik' 
        },
        outcome: { 
          en: 'Equip board members to ask the right questions.', 
          tr: 'Yönetim kurulu üyelerini doğru soruları sormaya hazırlayın.' 
        },
      },
      {
        title: { 
          en: 'AI Policy & Regulation for Product and Policy Teams', 
          tr: 'Ürün ve Politika Ekipleri için Yapay Zeka Politikası & Düzenlemeleri' 
        },
        outcome: { 
          en: 'Understand the rules shaping your roadmap.', 
          tr: 'Yol haritanızı şekillendiren kuralları anlayın.' 
        },
      },
      {
        title: { 
          en: 'AI Literacy for Non-Technical Leaders', 
          tr: 'Teknik Olmayan Liderler için Yapay Zeka Okuryazarlığı' 
        },
        outcome: { 
          en: 'Demystify AI to make better strategic decisions.', 
          tr: 'Daha iyi stratejik kararlar için Yapay Zeka\'yı gizeminden arındırın.' 
        },
      },
    ],
    buttonText: {
      en: 'See all trainings',
      tr: 'Tüm eğitimleri görün',
    },
  },
};