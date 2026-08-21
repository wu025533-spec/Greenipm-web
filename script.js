const DEFAULT_LANGUAGE = "zh-HK";
const LANGUAGE_STORAGE_KEY = "greenipm-language";

const translations = {
  "zh-HK": {
    ui: {
      homeAria: "GreenIPM HK 首頁",
      primaryNavigation: "主要導覽",
      languageSwitcher: "切換語言",
      openMenu: "開啟選單"
    },
    nav: {
      home: "首頁",
      about: "關於我們",
      ai: "AI研發",
      green: "綠色防控",
      esg: "ESG可持續發展",
      contact: "聯繫我們"
    },
    home: {
      meta: {
        title: "GreenIPM HK | 以 AI 驅動綠色蟲控未來",
        description:
          "GreenIPM HK 是立足香港科學園的綠色蟲害防控研發企業，專注於 AI 驅動監測、綠色防控產品及符合 ESG 理念的可持續蟲害管理方案。"
      }
    },
    hero: {
      badgeBrand: "香港品牌",
      badgeRd: "香港研發",
      badgeMade: "香港製造",
      title: "以 AI 驅動綠色蟲控未來",
      description:
        "GreenIPM HK 專注於智慧蟲害監測、綠色防控產品及綜合蟲害管理方案，服務農業、倉儲、林業與公共衛生等場景。",
      ctaExplore: "探索智慧蟲控",
      ctaProducts: "查看綠色防控產品"
    },
    about: {
      eyebrow: "關於 GreenIPM",
      titleLine1: "立足香港科學園",
      titleLine2: "綠色蟲害防控研發企業",
      titleLine1Prefix: "立足",
      titleLine1Accent: "香港科學園",
      titleLine2Prefix: "綠色蟲害防控",
      titleLine2Accent: "研發企業",
      body1: "GreenIPM HK 立足香港科學園，專注於綠色綜合蟲害管理技術的研發與商業化。",
      body2:
        "我們以香港作為研發與品質管控樞紐，結合國際成熟產品資源與策略製造夥伴，為農業、倉儲、林業及公共衛生提供 AI 化、綠色且可持續的蟲害管理方案。",
      imageAlt: "香港科學園城市景觀"
    },
    ai: {
      badge1: "研發中",
      badge2: "持續關注",
      badge3: "逐步推進",
      badge4: "未來應用",
      title: "AI蟲害識別與智能監測研發中",
      titlePrefix: "AI蟲害識別與",
      titleAccent: "智能監測研發中",
      description:
        "我們持續關注 AI 圖像識別、蟲害數據分析與智能監測技術，未來將逐步應用於蟲害識別、趨勢判斷與數據化管理場景。",
      card1: {
        title: "AI蟲害識別",
        body: "持續探索透過圖像識別協助判斷蟲害種類，提升識別效率與管理精度。"
      },
      card2: {
        title: "智能監測",
        body: "關注蟲害監測設備、數據採集及遠端管理方式，為未來產品升級做好準備。"
      },
      card3: {
        title: "數據化管理",
        body: "未來希望透過蟲害紀錄、趨勢分析與風險提示，協助客戶更清晰掌握蟲害變化。"
      },
      notice: "相關能力仍在研發與驗證階段，歡迎持續關注我們的後續進展。",
      cta: "查看 AI 研發進展"
    },
    green: {
      title: "綠色防控三大領域",
      description: "我們依不同場景需求，提供客製化、低毒性且更可持續的蟲害防控方案。",
      exploreAllProducts: "查看更多產品",
      carousel: {
        prev: "上一個產品",
        next: "下一個產品",
        region: "產品輪播",
        filters: "產品分類",
        pagination: "輪播分頁"
      },
      tabs: {
        agriculture: "農業防控",
        warehousing: "倉儲防控",
        publicHealth: "公共衛生防控"
      },
      learnMore: "了解更多 >",
      agriculture: {
        title: "農業防控",
        body:
          "針對作物蟲害、生產現場風險及田間生態壓力而設，兼顧產量品質、管理效率與長期可持續性，提供更低干預、更環境友善的管理方案。",
        alt: "農業蟲害防控"
      },
      warehouse: {
        title: "倉儲防控",
        body:
          "適用於中藥材、食品設施及物流倉儲空間，重視合規、衛生與持續監測，以降低蟲害風險與庫存損失。",
        alt: "倉儲蟲害防控"
      },
      publicHealth: {
        title: "公共衛生",
        body:
          "面向社區、公共機構及高密度環境，整合風險預防、資訊追蹤與低干預處理方式，支援公共衛生蟲害管理。",
        alt: "公共衛生蟲害防控"
      }
    },
    esg: {
      title: "以可持續發展作為核心使命",
      quote: "「我們相信，更好的當下來自更透明的管理，不是誇大的承諾，而是一步一步持續實踐的責任。」",
      intro:
        "GreenIPM HK 以研發為導向，專注綠色綜合蟲害管理技術的發展與商業化。我們希望協助客戶把可持續理念融入營運，透過技術提升蟲害防控效率，同時對環境、社會與治理影響承擔長期責任。",
      card1: {
        title: "生態優先，綠色防控",
        body: "我們把減少不必要的化學依賴視為長期目標，以更低風險、更低殘留及更可持續的方法應對蟲害問題。"
      },
      card2: {
        title: "守護健康，服務社會",
        body: "從食品安全到倉儲安全，我們希望以可靠、透明且可解釋的防控方式，提升健康風險管理品質。"
      },
      card3: {
        title: "完善治理，負責任營運",
        body: "透過更清晰的紀錄、更完善的流程與可驗證機制，我們協助客戶把蟲害防控從一次性處理提升為持續治理。"
      }
    },
    contact: {
      title: "聯繫與合作",
      titlePrefix: "聯繫與",
      titleAccent: "合作",
      intro:
        "歡迎尋求務實、具研發基礎且更綠色蟲害防控方案的機構與我們聯絡，一同優化設施與營運管理。",
      address: "地址：香港九龍塘達之路72號 INNOCENTRE 5樓 520-521號單位 06室",
      phone: "電話：+852 5786 9173",
      email: "電郵：info@greenipmhk.com",
      form: {
        title: "發送查詢",
        nameLabel: "姓名",
        namePlaceholder: "請輸入您的姓名",
        contactLabel: "聯絡方式",
        contactPlaceholder: "請輸入電郵或電話",
        areaLabel: "查詢範疇",
        areaDefault: "請選擇查詢類型",
        areaAgriculture: "農業防控",
        areaWarehouse: "倉儲防控",
        areaForestry: "林業防控",
        areaPublicHealth: "公共衛生",
        areaAi: "AI 技術合作",
        areaOther: "其他",
        contentLabel: "查詢內容",
        contentPlaceholder: "請簡述您的查詢內容",
        submit: "發送查詢 →"
      }
    },
    aiPage: {
      meta: {
        title: "AI研發 | GreenIPM HK",
        description:
          "GreenIPM HK 正在研發 AI 蟲害識別與智能監測相關能力，持續關注圖像識別、蟲害數據分析與智能監測技術，並將逐步應用於識別、趨勢判斷與數據化管理。"
      },
      badge1: "研發中",
      badge2: "持續關注",
      badge3: "逐步推進",
      badge4: "未來應用",
      title: "AI蟲害識別與智能監測研發中",
      titlePrefix: "AI蟲害識別與",
      titleAccent: "智能監測研發中",
      description:
        "我們正持續關注 AI 圖像識別、蟲害數據分析與智能監測技術的發展，未來將逐步應用於蟲害識別、趨勢判斷與數據化管理場景。",
      card1: {
        title: "AI蟲害識別",
        body: "持續探索透過圖像識別輔助判斷蟲害種類，提升識別效率與管理精度。"
      },
      card2: {
        title: "智能監測",
        body: "關注蟲害監測設備、數據採集與遠端管理方式，為未來產品升級做好準備。"
      },
      card3: {
        title: "數據化管理",
        body: "未來希望透過蟲害紀錄、趨勢分析與風險提示，協助客戶更清晰掌握蟲害變化。"
      },
      notice: "相關能力仍在研發與驗證階段，歡迎關注我們的後續進展。",
      ctaContact: "諮詢合作",
      ctaHome: "返回首頁"
    },
    footer: {
      copy: "© 2026 Green IPM Limited. 版權所有 · 香港研發。"
    }
  },
  en: {
    ui: {
      homeAria: "GreenIPM HK Home",
      primaryNavigation: "Primary navigation",
      languageSwitcher: "Switch language",
      openMenu: "Open menu"
    },
    nav: {
      home: "Home",
      about: "About Us",
      ai: "AI R&D",
      green: "Green IPM",
      esg: "ESG Sustainability",
      contact: "Contact Us"
    },
    home: {
      meta: {
        title: "GreenIPM HK | AI-Driven Future of Green Pest Control",
        description:
          "GreenIPM HK is a Hong Kong Science Park based green pest control R&D company focused on AI-driven monitoring, green IPM products, and ESG-aligned sustainable pest management."
      }
    },
    hero: {
      badgeBrand: "HK Brand",
      badgeRd: "HK R&D",
      badgeMade: "Made in HK",
      title: "AI-Driven Future of Green Pest Control",
      description: "GreenIPM HK specializes in smart pest monitoring, green pest control products and integrated pest management solutions.",
      ctaExplore: "Explore Smart Pest Control",
      ctaProducts: "View Green IPM Products"
    },
    about: {
      eyebrow: "ABOUT GREENIPM HK",
      titleLine1: "Based in Hong Kong Science Park",
      titleLine2: "Innovation-Driven Ecological IPM",
      titleLine1Prefix: "Based in Hong Kong",
      titleLine1Accent: "Science Park",
      titleLine2Prefix: "Innovation-Driven",
      titleLine2Accent: "Ecological IPM",
      body1:
        "GreenIPM HK is rooted in Hong Kong Science Park, focuses on the research, development and commercialization of green Integrated Pest Management technologies.",
      body2:
        "With Hong Kong as our hub for R&D and quality control, we combine proven international product resources and strategic manufacturing partners to deliver AI-enabled, green and sustainable pest management solutions for agriculture, warehousing and public health.",
      imageAlt: "Hong Kong Science Park urban scene"
    },
    ai: {
      badge1: "In R&D",
      badge2: "Ongoing Focus",
      badge3: "Step by Step",
      badge4: "Future Application",
      title: "AI Pest Identification and Smart Monitoring in Development",
      titlePrefix: "AI Pest Identification and",
      titleAccent: "Smart Monitoring in Development",
      description:
        "We continue to follow advances in AI image recognition, pest data analysis and smart monitoring technologies. With the goal of gradually applying them to pest identification, trend assessment and data-driven management scenarios.",
      card1: {
        title: "AI Pest Identification",
        body: "We are exploring how image recognition can assist in identifying pest species to improve recognition efficiency and management accuracy."
      },
      card2: {
        title: "Smart Monitoring",
        body: "We are paying attention to pest monitoring devices, data collection, and remote management methods to prepare for future product upgrades."
      },
      card3: {
        title: "Data-Driven Management",
        body: "In the future, we hope to use pest records, trend analysis, and risk alerts to help clients understand pest changes more clearly."
      },
      notice: "These capabilities are still in the R&D and validation stage. We welcome you to follow our future progress.",
      cta: "Follow AI R&D Progress"
    },
    green: {
      title: "Three Major Areas of Green Pest Control",
      description: "We provide customized, lower-toxicity, and more sustainable pest control solutions tailored to different operational scenarios.",
      exploreAllProducts: "Explore All Products",
      carousel: {
        prev: "Previous product",
        next: "Next product",
        region: "Product carousel",
        filters: "Product categories",
        pagination: "Carousel pagination"
      },
      tabs: {
        agriculture: "Agriculture Control",
        warehousing: "Warehousing Control",
        publicHealth: "Public Health Control"
      },
      learnMore: "Learn More >",
      agriculture: {
        title: "Agriculture Control",
        body:
          "Designed for crop pests, production-site risks, and field ecosystem pressures, this solution offers lower-intervention and environmentally responsible management while balancing yield quality, efficiency, and long-term sustainability.",
        alt: "Agriculture pest control"
      },
      warehouse: {
        title: "Warehousing Control",
        body:
          "Built for Chinese herbal materials, food facilities, and logistics storage spaces, this green control approach prioritizes compliance, hygiene, and continuous monitoring to reduce pest risk and inventory loss.",
        alt: "Warehousing pest control"
      },
      publicHealth: {
        title: "Public Health",
        body:
          "For communities, public institutions, and high-density environments, this solution combines risk prevention, information tracking, and lower-intervention treatment for public health pest management.",
        alt: "Public health pest control"
      }
    },
    esg: {
      title: "Sustainability as a Core Mission",
      quote:
        '"We believe a better present requires more transparent management, not inflated promises, but responsibility built step by step."',
      intro:
        "GreenIPM HK is research-led and focused on the development and commercialization of green integrated pest management technologies. Our goal is to help clients embed sustainability into operations, improving pest control efficiency through technology while taking long-term responsibility for environmental, social, and governance impact.",
      card1: {
        title: "Ecology First, Green Control",
        body: "We treat the reduction of unnecessary chemical dependence as a long-term priority, using lower-risk, lower-residue, and more sustainable methods to address pest problems."
      },
      card2: {
        title: "Protecting Health, Serving Society",
        body: "From food safety to storage safety, we aim to improve the quality of health risk management through reliable, transparent, and explainable pest control methods."
      },
      card3: {
        title: "Better Governance, Responsible Operations",
        body: "Through clearer records, stronger processes, and verifiable mechanisms, we help clients elevate pest control from one-off treatment to ongoing governance."
      }
    },
    contact: {
      title: "Contact & Collaboration",
      titlePrefix: "Contact &",
      titleAccent: "Collaboration",
      intro:
        "We welcome inquiries from organizations seeking practical, research-informed, and greener pest control solutions for their facilities and operations.",
      address: "Address: Units 520-521, 5th Floor, INNOCENTRE, No.72 Tat Chee Road, Kowloon Tong, Kowloon, Hong Kong",
      phone: "Phone:+852 5786 9173",
      email: "Email: info@greenipmhk.com",
      form: {
        title: "Send Inquiry",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        contactLabel: "Contact",
        contactPlaceholder: "Email or phone",
        areaLabel: "Inquiry Area",
        areaDefault: "Select enquiry type",
        areaAgriculture: "Agriculture Control",
        areaWarehouse: "Warehousing Control",
        areaForestry: "Forestry Control",
        areaPublicHealth: "Public Health",
        areaAi: "AI Technology Cooperation",
        areaOther: "Other",
        contentLabel: "Inquiry Content",
        contentPlaceholder: "Please describe your inquiry",
        submit: "Send Inquiry →"
      }
    },
    aiPage: {
      meta: {
        title: "AI R&D | GreenIPM HK",
        description:
          "GreenIPM HK is developing AI pest identification and smart monitoring capabilities, tracking image recognition, pest data analytics, and intelligent monitoring for future deployment."
      },
      badge1: "In R&D",
      badge2: "Ongoing Focus",
      badge3: "Step by Step",
      badge4: "Future Application",
      title: "AI Pest Identification and Smart Monitoring in Development",
      titlePrefix: "AI Pest Identification and",
      titleAccent: "Smart Monitoring in Development",
      description:
        "We continue to follow advances in AI image recognition, pest data analysis and smart monitoring technologies. With the goal of gradually applying them to pest identification, trend assessment and data-driven management scenarios.",
      card1: {
        title: "AI Pest Identification",
        body: "We continue exploring how image recognition can support pest species identification and improve both recognition efficiency and management precision."
      },
      card2: {
        title: "Smart Monitoring",
        body: "We are tracking pest monitoring devices, data collection, and remote management methods to prepare for future product upgrades."
      },
      card3: {
        title: "Data-Driven Management",
        body: "In the future, we hope pest records, trend analysis, and risk alerts will help clients understand pest changes more clearly."
      },
      notice: "These capabilities are still in the R&D and validation stage. We welcome you to follow our upcoming progress.",
      ctaContact: "Contact for Collaboration",
      ctaHome: "Back to Home"
    },
    footer: {
      copy: "© 2026 Green IPM Limited. All rights reserved. · Hong Kong R&D."
    }
  }
};

const PRODUCT_IMAGE_PATHS = [
  "./image/防控产品图片/农业/Delta Trap.png",
  "./image/防控产品图片/农业/MothCatcher Trap.png",
  "./image/防控产品图片/农业/Optiroll Red.png",
  "./image/防控产品图片/农业/Thripnock GEL.png",
  "./image/防控产品图片/农业/Tutaroll Clear.png",
  "./image/防控产品图片/仓储/Xlure FIT 爱克丝洛 飞特.png",
  "./image/防控产品图片/仓储/Xlure HHB 爱克丝洛 克毙.png",
  "./image/防控产品图片/仓储/Xlure Inspector 爱克丝洛 监测者.png",
  "./image/防控产品图片/仓储/Xlure MST 爱克丝洛 美丝它.png",
  "./image/防控产品图片/仓储/Xlure RTU 爱克丝洛 莱特悠.png",
  "./image/防控产品图片/仓储/干扰交配器Dismate PE.png",
  "./image/防控产品图片/公共卫生/MosiX 絕蚊.png",
  "./image/防控产品图片/公共卫生/Mosqinok 諾克蚊.png",
  "./image/防控产品图片/公共卫生/MoziGuard 魔蚊衛.png",
  "./image/防控产品图片/公共卫生/OctiMax 八方滅.png",
  "./image/防控产品图片/公共卫生/SliMax 靜滅.png"
];

const TRADITIONAL_PRODUCT_NAME_OVERRIDES = {
  "Delta Trap": "三角誘捕器",
  "MothCatcher Trap": "飛蛾捕捉器",
  "Optiroll Red": "紅色誘捕卷",
  "Thripnock GEL": "薊馬剋凝膠",
  "Tutaroll Clear": "圖塔透明卷",
  "Xlure FIT 爱克丝洛 飞特": "愛克絲洛 飛特",
  "Xlure HHB 爱克丝洛 克毙": "愛克絲洛 克斃",
  "Xlure Inspector 爱克丝洛 监测者": "愛克絲洛 監測者",
  "Xlure MST 爱克丝洛 美丝它": "愛克絲洛 美絲它",
  "Xlure RTU 爱克丝洛 莱特悠": "愛克絲洛 萊特悠",
  "干扰交配器Dismate PE": "干擾交配器 Dismate PE",
  MosiX: "滅蚊克",
  Mosqinok: "滅蚊諾克",
  MoziGuard: "莫茲防護",
  OctiMax: "奧提邁",
  SliMax: "斯萊邁"
};

const SIMPLIFIED_TO_TRADITIONAL_MAP = {
  爱: "愛",
  丝: "絲",
  飞: "飛",
  监: "監",
  测: "測",
  莱: "萊",
  扰: "擾",
  毙: "斃"
};

function stripFileExtension(filePath) {
  return decodeURIComponent(filePath.split("/").pop() || "").replace(/\.[^.]+$/u, "");
}

function normalizeProductName(text) {
  return text.replace(/[_-]+/gu, " ").replace(/\s+/gu, " ").trim();
}

function extractEnglishProductSegment(baseName) {
  return normalizeProductName(
    baseName
      .replace(/[\u3400-\u9fff]+/gu, " ")
      .replace(/[^\w\s]+/gu, " ")
  );
}

function extractChineseProductSegment(baseName) {
  return normalizeProductName(
    baseName
      .replace(/[A-Za-z0-9]+/gu, " ")
      .replace(/[^\u3400-\u9fff\s]+/gu, " ")
  );
}

function hasBilingualProductName(baseName) {
  return Boolean(extractEnglishProductSegment(baseName) && extractChineseProductSegment(baseName));
}

function deriveEnglishProductName(baseName, category) {
  const englishSegment = extractEnglishProductSegment(baseName);

  if (category === "agriculture") {
    return englishSegment;
  }

  return englishSegment || normalizeProductName(
    baseName
    .replace(/[\u3400-\u9fff]+/gu, " ")
  );
}

function convertSimplifiedToTraditional(text) {
  return [...text].map((character) => SIMPLIFIED_TO_TRADITIONAL_MAP[character] || character).join("");
}

function deriveTraditionalProductName(baseName, category) {
  const englishName = deriveEnglishProductName(baseName, category);
  const override = TRADITIONAL_PRODUCT_NAME_OVERRIDES[baseName] || TRADITIONAL_PRODUCT_NAME_OVERRIDES[englishName];
  const chineseSegment = extractChineseProductSegment(baseName);
  const traditionalChineseSegment = chineseSegment ? convertSimplifiedToTraditional(chineseSegment) : "";

  if (category === "agriculture" && !hasBilingualProductName(baseName)) {
    return override || traditionalChineseSegment || englishName;
  }

  if ((category === "warehousing" || category === "publicHealth") && traditionalChineseSegment) {
    return traditionalChineseSegment;
  }

  if (override) {
    return override;
  }

  return traditionalChineseSegment || englishName;
}

const productCatalog = PRODUCT_IMAGE_PATHS.map((imagePath) => {
  const baseName = stripFileExtension(imagePath);
  const category = imagePath.includes("/农业/")
    ? "agriculture"
    : imagePath.includes("/仓储/")
      ? "warehousing"
      : "publicHealth";
  const englishName = deriveEnglishProductName(baseName, category);
  const traditionalName = deriveTraditionalProductName(baseName, category);

  return {
    imagePath,
    category,
    englishName,
    traditionalName
  };
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOpenIcon = document.querySelector(".menu-open");
const menuCloseIcon = document.querySelector(".menu-close");
const navLinks = [...document.querySelectorAll(".nav-link, .mobile-link")];
const sections = [...document.querySelectorAll("main section[id], main[id]")];
const heroBanner = document.querySelector(".hero-banner");
const heroParticleCanvas = document.querySelector("#hero-particles");
const languageButtons = [...document.querySelectorAll(".lang-option")];
const productFilterButtons = [...document.querySelectorAll("[data-product-filter]")];
const productCarouselWrapper = document.querySelector("[data-product-carousel-wrapper]");
const productCarouselViewport = document.querySelector("[data-product-carousel]");
const productCarouselTrack = document.querySelector("#product-carousel-track");
const productCarouselControls = [...document.querySelectorAll("[data-carousel-control]")];
const productCarouselDots = document.querySelector("[data-carousel-dots]");
const currentPage = document.body?.dataset.page || "home";
let activeLanguage = DEFAULT_LANGUAGE;
let activeProductFilter = "agriculture";
let activeProductIndex = 0;
let autoplayTimer = null;
let isCarouselPaused = false;
const AUTOPLAY_INTERVAL_MS = 4000;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getTranslation(lang, key) {
  const resolveKey = (source) =>
    key.split(".").reduce((value, segment) => (value && value[segment] !== undefined ? value[segment] : undefined), source);

  return resolveKey(translations[lang]) ?? resolveKey(translations[DEFAULT_LANGUAGE]) ?? "";
}

function updateMenuIcon(expanded) {
  menuOpenIcon?.classList.toggle("hidden", expanded);
  menuCloseIcon?.classList.toggle("hidden", !expanded);
}

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileMenu?.classList.add("hidden");
  updateMenuIcon(false);
}

function openMenu() {
  menuToggle?.setAttribute("aria-expanded", "true");
  mobileMenu?.classList.remove("hidden");
  updateMenuIcon(true);
}

function updateLanguageButtons(lang) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getTranslation(lang, key);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = getTranslation(lang, element.dataset.i18nContent);
    if (value) {
      element.setAttribute("content", value);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getTranslation(lang, element.dataset.i18nPlaceholder);
    if (value) {
      element.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getTranslation(lang, element.dataset.i18nAlt);
    if (value) {
      element.setAttribute("alt", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslation(lang, element.dataset.i18nAriaLabel);
    if (value) {
      element.setAttribute("aria-label", value);
    }
  });
}

function switchLanguage(lang) {
  const normalizedLanguage = translations[lang] ? lang : DEFAULT_LANGUAGE;
  activeLanguage = normalizedLanguage;
  document.documentElement.lang = normalizedLanguage;
  applyTranslations(normalizedLanguage);
  renderProductCarousel(normalizedLanguage);
  updateLanguageButtons(normalizedLanguage);
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
}

function setActiveLink(id) {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const targetHash = href.startsWith("#") ? href.slice(1) : href.split("#")[1];
    const isAiPageLink = currentPage === "ai-rd" && href.endsWith("ai-rd.html");
    const isActive = isAiPageLink || (currentPage === "home" && targetHash === id);
    link.classList.toggle("is-active", isActive);
  });
}

function resolveActiveSection() {
  if (currentPage === "ai-rd") {
    setActiveLink("ai-rd");
    return;
  }

  let activeId = "home";
  const offset = window.scrollY + 150;

  sections.forEach((section) => {
    if (section.id && section.offsetTop <= offset) {
      activeId = section.id;
    }
  });

  setActiveLink(activeId);
}

function getLocalizedProductName(product, lang) {
  return lang === "en" ? product.englishName : product.traditionalName;
}

function getFilteredProducts() {
  return productCatalog.filter((product) => product.category === activeProductFilter);
}

function updateProductFilterButtons() {
  productFilterButtons.forEach((button) => {
    const isActive = button.dataset.productFilter === activeProductFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderCarouselDots(products) {
  if (!productCarouselDots) {
    return;
  }

  const fragment = document.createDocumentFragment();

  products.forEach((product, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "product-carousel-dot";
    dot.dataset.carouselDot = String(index);
    dot.setAttribute("aria-label", `${getLocalizedProductName(product, activeLanguage)} (${index + 1})`);
    dot.setAttribute("aria-pressed", String(index === activeProductIndex));
    if (index === activeProductIndex) {
      dot.classList.add("is-active");
    }
    fragment.append(dot);
  });

  productCarouselDots.replaceChildren(fragment);
}

function updateCarouselDots() {
  if (!productCarouselDots) {
    return;
  }

  [...productCarouselDots.querySelectorAll(".product-carousel-dot")].forEach((dot, index) => {
    const isActive = index === activeProductIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", String(isActive));
  });
}

function updateProductCarouselControls() {
  if (!productCarouselViewport || !productCarouselControls.length) {
    return;
  }

  const filteredProducts = getFilteredProducts();

  if (filteredProducts.length <= 1) {
    productCarouselControls.forEach((control) => {
      control.disabled = true;
    });
    return;
  }

  const maxScrollLeft = Math.max(0, productCarouselViewport.scrollWidth - productCarouselViewport.clientWidth - 2);
  const currentScrollLeft = productCarouselViewport.scrollLeft;

  productCarouselControls.forEach((control) => {
    const isPrev = control.dataset.carouselControl === "prev";
    control.disabled = isPrev ? currentScrollLeft <= 4 : currentScrollLeft >= maxScrollLeft;
  });
}

function getProductCarouselStep() {
  const firstCard = productCarouselTrack?.querySelector(".product-card");

  if (!firstCard || !productCarouselTrack) {
    return productCarouselViewport ? productCarouselViewport.clientWidth * 0.84 : 0;
  }

  const gap = parseFloat(window.getComputedStyle(productCarouselTrack).gap || "0");
  return firstCard.getBoundingClientRect().width + gap;
}

function updateActiveProductIndexFromScroll() {
  if (!productCarouselViewport) {
    return;
  }

  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    activeProductIndex = 0;
    updateCarouselDots();
    updateProductCarouselControls();
    return;
  }

  const step = getProductCarouselStep();
  if (step <= 0) {
    return;
  }

  activeProductIndex = Math.max(0, Math.min(filteredProducts.length - 1, Math.round(productCarouselViewport.scrollLeft / step)));
  updateCarouselDots();
  updateProductCarouselControls();
}

function scrollToProduct(index, behavior = "smooth") {
  if (!productCarouselViewport) {
    return;
  }

  const filteredProducts = getFilteredProducts();
  if (!filteredProducts.length) {
    return;
  }

  activeProductIndex = Math.max(0, Math.min(filteredProducts.length - 1, index));
  productCarouselViewport.scrollTo({
    left: getProductCarouselStep() * activeProductIndex,
    behavior
  });
  updateCarouselDots();
  updateProductCarouselControls();
}

function stopProductAutoplay() {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function startProductAutoplay() {
  stopProductAutoplay();

  if (isCarouselPaused || getFilteredProducts().length <= 1) {
    return;
  }

  autoplayTimer = window.setInterval(() => {
    const filteredProducts = getFilteredProducts();
    const nextIndex = filteredProducts.length ? (activeProductIndex + 1) % filteredProducts.length : 0;
    scrollToProduct(nextIndex);
  }, AUTOPLAY_INTERVAL_MS);
}

function resetProductAutoplay() {
  startProductAutoplay();
}

function setActiveProductFilter(filterKey) {
  activeProductFilter = filterKey;
  activeProductIndex = 0;
  updateProductFilterButtons();
  renderProductCarousel(activeLanguage, { preserveIndex: false });
  resetProductAutoplay();
}

function renderProductCarousel(lang = activeLanguage, { preserveIndex = true } = {}) {
  if (!productCarouselTrack || !productCarouselViewport) {
    return;
  }

  const filteredProducts = getFilteredProducts();
  activeProductIndex = preserveIndex ? Math.min(activeProductIndex, Math.max(filteredProducts.length - 1, 0)) : 0;
  const fragment = document.createDocumentFragment();

  filteredProducts.forEach((product) => {
    const article = document.createElement("article");
    article.className = "product-card";

    const image = document.createElement("img");
    image.className = "product-card-image";
    image.src = encodeURI(product.imagePath);
    image.alt = getLocalizedProductName(product, lang);
    image.loading = "lazy";

    const body = document.createElement("div");
    body.className = "product-card-body";

    const title = document.createElement("h3");
    title.className = "product-card-title";
    title.textContent = getLocalizedProductName(product, lang);

    body.append(title);
    article.append(image, body);
    fragment.append(article);
  });

  productCarouselTrack.replaceChildren(fragment);
  renderCarouselDots(filteredProducts);
  updateProductFilterButtons();

  window.requestAnimationFrame(() => {
    productCarouselViewport.scrollLeft = getProductCarouselStep() * activeProductIndex;
    updateCarouselDots();
    updateProductCarouselControls();
    startProductAutoplay();
  });
}

function prepareRevealElement(element, type = "fade-up", delaySeconds = 0) {
  if (!element || element.dataset.revealPrepared === "true") {
    return;
  }

  element.classList.add(type === "scale-up" ? "reveal-scale-up" : "reveal-fade-up", "reveal-delay");

  if (delaySeconds > 0) {
    element.style.setProperty("--reveal-delay", `${delaySeconds}s`);
  }

  element.dataset.revealPrepared = "true";
}

function revealElement(element) {
  if (!element) {
    return;
  }

  element.classList.add("reveal-visible");
}

function initHeroEntranceAnimations() {
  const heroRevealElements = [...document.querySelectorAll("[data-hero-reveal]")];

  if (!heroRevealElements.length) {
    return;
  }

  heroRevealElements.forEach((element) => {
    prepareRevealElement(element, element.dataset.heroReveal || "fade-up", Number(element.dataset.revealDelay || 0));
  });

  if (prefersReducedMotion) {
    heroRevealElements.forEach(revealElement);
    return;
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      heroRevealElements.forEach(revealElement);
    });
  });
}

function initScrollRevealAnimations() {
  const revealConfigs = [
    { selector: "#about .max-w-\\[430px\\]", type: "fade-up" },
    { selector: "#about img", type: "scale-up", delay: 0.08 },
    { selector: "#ai-rd .mb-6, #ai-rd .mb-5", type: "fade-up" },
    { selector: "#ai-rd .section-title", type: "fade-up", delay: 0.06 },
    { selector: "#ai-rd p[data-i18n='ai.description'], #ai-rd p[data-i18n='aiPage.description'], .ai-rd-page-section p[data-i18n='aiPage.description']", type: "fade-up", delay: 0.12 },
    { selector: "#ai-rd article, .ai-rd-page-section article", type: "scale-up", stagger: 0.08 },
    { selector: "#ai-rd [data-i18n='ai.notice'], #ai-rd [data-i18n='aiPage.notice'], .ai-rd-page-section [data-i18n='aiPage.notice']", type: "fade-up", delay: 0.12 },
    { selector: "#ai-rd a[data-i18n='ai.cta'], #ai-rd .mt-10.flex.flex-wrap.gap-3, .ai-rd-page-section .mt-10.flex.flex-wrap.gap-3", type: "fade-up", delay: 0.16 },
    { selector: "#green-control .max-w-\\[720px\\]", type: "fade-up" },
    { selector: "#green-control .product-filter-tabs", type: "fade-up", delay: 0.08 },
    { selector: "#green-control [data-product-carousel-wrapper]", type: "scale-up", delay: 0.12 },
    { selector: "#green-control [data-carousel-dots], #green-control .product-carousel-cta", type: "fade-up", delay: 0.16 },
    { selector: "#esg h2[data-i18n='esg.title']", type: "fade-up" },
    { selector: "#esg p[data-i18n='esg.quote']", type: "fade-up", delay: 0.15 },
    { selector: "#esg [data-i18n='esg.intro']", type: "fade-up", delay: 0.3 },
    { selector: "#esg article", type: "scale-up", delay: 0.45, stagger: 0.15 },
    { selector: "#contact .contact-section-copy", type: "fade-up" },
    { selector: "#contact .contact-form-card", type: "scale-up", delay: 0.08 }
  ];

  const revealElements = [];

  revealConfigs.forEach(({ selector, type, delay = 0, stagger = 0 }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (element.hasAttribute("data-hero-reveal")) {
        return;
      }

      prepareRevealElement(element, type, delay + index * stagger);
      revealElements.push(element);
    });
  });

  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(revealElement);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        revealElement(entry.target);
        instance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

function initHeroParticles() {
  if (!heroBanner || !heroParticleCanvas) {
    return;
  }

  const context = heroParticleCanvas.getContext("2d");

  if (!context) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particles = [];
  let animationFrameId = null;
  let width = 0;
  let height = 0;
  let devicePixelRatio = 1;

  const particlePalette = [
    "rgba(157, 234, 191, 0.55)",
    "rgba(165, 235, 226, 0.48)",
    "rgba(214, 252, 229, 0.42)"
  ];

  function createParticle() {
    const rightBiasStart = width < 768 ? 0.18 : 0.26;
    return {
      x: width * (rightBiasStart + Math.random() * (1 - rightBiasStart)),
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.09,
      radius: 0.8 + Math.random() * 1.8,
      color: particlePalette[Math.floor(Math.random() * particlePalette.length)],
      pulse: Math.random() * Math.PI * 2
    };
  }

  function resizeHeroParticles() {
    const bounds = heroBanner.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    heroParticleCanvas.width = Math.round(width * devicePixelRatio);
    heroParticleCanvas.height = Math.round(height * devicePixelRatio);
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    const particleCount = Math.max(16, Math.min(30, Math.round((width * height) / 42000)));
    particles = Array.from({ length: particleCount }, createParticle);
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const particleA = particles[i];
        const particleB = particles[j];
        const dx = particleA.x - particleB.x;
        const dy = particleA.y - particleB.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 132) {
          continue;
        }

        const visibilityBias = Math.min(1, Math.max(particleA.x, particleB.x) / width);
        const opacity = (1 - distance / 132) * 0.18 * visibilityBias;

        context.strokeStyle = `rgba(122, 213, 171, ${opacity.toFixed(3)})`;
        context.lineWidth = 0.55;
        context.beginPath();
        context.moveTo(particleA.x, particleA.y);
        context.lineTo(particleB.x, particleB.y);
        context.stroke();
      }
    }
  }

  function drawParticles(timestamp) {
    context.clearRect(0, 0, width, height);
    drawConnections();

    particles.forEach((particle) => {
      const xVisibility = 0.2 + 0.8 * (particle.x / width);
      const pulse = 0.78 + Math.sin(timestamp * 0.0011 + particle.pulse) * 0.18;

      context.beginPath();
      context.fillStyle = particle.color.replace(/[\d.]+\)$/u, `${(0.32 + 0.28 * xVisibility * pulse).toFixed(3)})`);
      context.arc(particle.x, particle.y, particle.radius * pulse, 0, Math.PI * 2);
      context.fill();
    });
  }

  function step(timestamp) {
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < width * 0.14 || particle.x > width + 12) {
        particle.vx *= -1;
        particle.x = Math.min(width + 10, Math.max(width * 0.14, particle.x));
      }

      if (particle.y < -10 || particle.y > height + 10) {
        particle.vy *= -1;
        particle.y = Math.min(height + 10, Math.max(-10, particle.y));
      }
    });

    drawParticles(timestamp);

    if (!prefersReducedMotion) {
      animationFrameId = window.requestAnimationFrame(step);
    }
  }

  resizeHeroParticles();
  drawParticles(0);

  if (!prefersReducedMotion) {
    animationFrameId = window.requestAnimationFrame(step);
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      resizeHeroParticles();
      drawParticles(0);
    }, 120);
  });

  window.addEventListener("beforeunload", () => {
    if (animationFrameId) {
      window.cancelAnimationFrame(animationFrameId);
    }
  });
}

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  if (expanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchLanguage(button.dataset.langOption);
  });
});

productCarouselControls.forEach((control) => {
  control.addEventListener("click", () => {
    const direction = control.dataset.carouselControl === "prev" ? -1 : 1;
    const filteredProducts = getFilteredProducts();
    if (!filteredProducts.length) {
      return;
    }

    const nextIndex =
      direction === -1
        ? (activeProductIndex - 1 + filteredProducts.length) % filteredProducts.length
        : (activeProductIndex + 1) % filteredProducts.length;

    scrollToProduct(nextIndex);
    resetProductAutoplay();
  });
});

productFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.productFilter) {
      setActiveProductFilter(button.dataset.productFilter);
    }
  });
});

productCarouselDots?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement) || target.dataset.carouselDot === undefined) {
    return;
  }

  scrollToProduct(Number(target.dataset.carouselDot));
  resetProductAutoplay();
});

productCarouselViewport?.addEventListener("scroll", updateActiveProductIndexFromScroll, { passive: true });

productCarouselWrapper?.addEventListener("mouseenter", () => {
  isCarouselPaused = true;
  stopProductAutoplay();
});

productCarouselWrapper?.addEventListener("mouseleave", () => {
  isCarouselPaused = false;
  startProductAutoplay();
});

productCarouselWrapper?.addEventListener("focusin", () => {
  isCarouselPaused = true;
  stopProductAutoplay();
});

productCarouselWrapper?.addEventListener("focusout", (event) => {
  const nextFocusedElement = event.relatedTarget;
  if (nextFocusedElement instanceof Node && productCarouselWrapper.contains(nextFocusedElement)) {
    return;
  }

  isCarouselPaused = false;
  startProductAutoplay();
});

document.addEventListener("visibilitychange", () => {
  isCarouselPaused = document.hidden;
  if (isCarouselPaused) {
    stopProductAutoplay();
  } else {
    startProductAutoplay();
  }
});

window.addEventListener("scroll", resolveActiveSection, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }

  scrollToProduct(activeProductIndex, "auto");
});

const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

switchLanguage(savedLanguage || DEFAULT_LANGUAGE);
resolveActiveSection();
initHeroEntranceAnimations();
initScrollRevealAnimations();
initHeroParticles();

window.switchLanguage = switchLanguage;
