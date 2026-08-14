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
      title: "綠色防控四大領域",
      description: "我們依不同場景需求，提供客製化、低毒性且更可持續的蟲害防控方案。",
      tabs: {
        agriculture: "農業",
        warehousing: "倉儲",
        forestry: "林業",
        publicHealth: "公共衛生"
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
      forestry: {
        title: "林業防控",
        body:
          "以更尊重生態平衡的方式管理林木蟲害，協助主管單位與研究團隊建立長期預警、生態觀測與循證治理能力。",
        alt: "林業蟲害防控"
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
      intro:
        "歡迎尋求務實、具研發基礎且更綠色蟲害防控方案的機構與我們聯絡，一同優化設施與營運管理。",
      address: "地址：香港科學園創新大道 12 號",
      phone: "電話：+852 2233 4567",
      email: "電郵：info@greenipm.com",
      form: {
        title: "發送查詢",
        nameLabel: "姓名",
        namePlaceholder: "請輸入您的姓名",
        contactLabel: "聯絡方式",
        contactPlaceholder: "請輸入電郵或電話",
        areaLabel: "查詢範疇",
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
        title: "GreenIPM HK | Driving the Future of Sustainable Pest Control with AI",
        description:
          "GreenIPM HK is a Hong Kong Science Park based green pest control R&D company focused on AI-driven monitoring, green IPM products, and ESG-aligned sustainable pest management."
      }
    },
    hero: {
      badgeBrand: "HK Brand",
      badgeRd: "HK R&D",
      badgeMade: "Made in HK",
      title: "Driving the Future of Sustainable Pest Control with AI",
      description:
        "GreenIPM HK specializes in smart pest monitoring, green pest control products, and integrated pest management solutions for agriculture, warehousing, forestry, and public health scenarios.",
      ctaExplore: "Explore Smart Pest Control",
      ctaProducts: "View Green IPM Products"
    },
    about: {
      eyebrow: "About GreenIPM",
      titleLine1: "Based in Hong Kong Science Park",
      titleLine2: "A Green Pest Control R&D Company",
      body1:
        "GreenIPM HK is based in Hong Kong Science Park and focuses on the research, development, and commercialization of green integrated pest management technologies.",
      body2:
        "With Hong Kong as our hub for R&D and quality control, we combine proven international product resources and strategic manufacturing partners to deliver AI-enabled, green, and sustainable pest management solutions for agriculture, warehousing, forestry, and public health.",
      imageAlt: "Hong Kong Science Park urban scene"
    },
    ai: {
      badge1: "In R&D",
      badge2: "Ongoing Focus",
      badge3: "Step by Step",
      badge4: "Future Application",
      title: "AI Pest Identification and Smart Monitoring in Development",
      description:
        "We continue to follow advances in AI image recognition, pest data analysis, and smart monitoring technologies, with the goal of gradually applying them to pest identification, trend assessment, and data-driven management scenarios.",
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
      title: "Four Major Areas of Green Pest Control",
      description: "We provide customized, lower-toxicity, and more sustainable pest control solutions tailored to different operational scenarios.",
      tabs: {
        agriculture: "Agriculture",
        warehousing: "Warehousing",
        forestry: "Forestry",
        publicHealth: "Public Health"
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
      forestry: {
        title: "Forestry Control",
        body:
          "Managing forest pests with greater respect for ecological balance, this solution helps authorities and research teams establish long-term warning, ecological observation, and evidence-based governance.",
        alt: "Forestry pest control"
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
      intro:
        "We welcome inquiries from organizations seeking practical, research-informed, and greener pest control solutions for their facilities and operations.",
      address: "Address: 12 Innovation Avenue, Hong Kong Science Park",
      phone: "Phone: +852 2233 4567",
      email: "Email: info@greenipm.com",
      form: {
        title: "Send Inquiry",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        contactLabel: "Contact",
        contactPlaceholder: "Email or phone",
        areaLabel: "Inquiry Area",
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
      description:
        "We continue to follow advances in AI image recognition, pest data analysis, and smart monitoring technologies, and plan to gradually apply them to pest identification, trend assessment, and data-driven management scenarios.",
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

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOpenIcon = document.querySelector(".menu-open");
const menuCloseIcon = document.querySelector(".menu-close");
const navLinks = [...document.querySelectorAll(".nav-link, .mobile-link")];
const sections = [...document.querySelectorAll("main section[id], main[id]")];
const tabTriggers = [...document.querySelectorAll(".tab-trigger")];
const tabPanels = [...document.querySelectorAll(".tab-panel")];
const heroBanner = document.querySelector(".hero-banner");
const heroParticleCanvas = document.querySelector("#hero-particles");
const languageButtons = [...document.querySelectorAll(".lang-option")];
const currentPage = document.body?.dataset.page || "home";

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
  document.documentElement.lang = normalizedLanguage;
  applyTranslations(normalizedLanguage);
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

function setActiveTab(tabId) {
  tabTriggers.forEach((trigger) => {
    const isActive = trigger.dataset.tab === tabId;
    trigger.setAttribute("aria-selected", String(isActive));
    trigger.classList.toggle("bg-brand-600", isActive);
    trigger.classList.toggle("text-white", isActive);
    trigger.classList.toggle("border", !isActive);
    trigger.classList.toggle("border-black/10", !isActive);
    trigger.classList.toggle("bg-white", !isActive);
    trigger.classList.toggle("text-[#5d635c]", !isActive);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== tabId);
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

tabTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    setActiveTab(trigger.dataset.tab);
  });
});

window.addEventListener("scroll", resolveActiveSection, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

setActiveTab("agriculture");
switchLanguage(savedLanguage || DEFAULT_LANGUAGE);
resolveActiveSection();
initHeroParticles();

window.switchLanguage = switchLanguage;
