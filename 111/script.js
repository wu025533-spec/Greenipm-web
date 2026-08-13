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

const sectionById = new Map(sections.map((section) => [section.id, section]));

function setActiveLink(id) {
  navLinks.forEach((link) => {
    const target = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("is-active", target === id);
  });
}

function resolveActiveSection() {
  let activeId = "home";
  const offset = window.scrollY + 150;

  for (const section of sectionById.values()) {
    if (section.offsetTop <= offset) {
      activeId = section.id;
    }
  }

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

tabTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    setActiveTab(trigger.dataset.tab);
  });
});

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

window.addEventListener("scroll", resolveActiveSection, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

setActiveTab("agriculture");
resolveActiveSection();
initHeroParticles();
