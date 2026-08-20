(() => {
  const body = document.body;
  const menu = document.querySelector("[data-mobile-menu]");
  const menuTrigger = document.querySelector("[data-menu-trigger]");
  const menuLinks = document.querySelectorAll("[data-mobile-menu] a");

  const setMenu = (open) => {
    if (!menu || !menuTrigger) return;
    menu.classList.toggle("is-open", open);
    menuTrigger.setAttribute("aria-expanded", String(open));
    body.classList.toggle("menu-is-open", open);
  };

  menuTrigger?.addEventListener("click", () => {
    setMenu(!menu.classList.contains("is-open"));
  });

  menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  const revealItems = document.querySelectorAll(".js-reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-accordion-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = trigger.nextElementSibling;
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      panel?.classList.toggle("is-open", !expanded);
    });
  });

  document.querySelectorAll("[data-glow-grid]").forEach((grid) => {
    grid.addEventListener("pointermove", (event) => {
      grid.querySelectorAll("[data-glow-card]").forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
      });
    });
  });

  document.querySelectorAll("[data-sequence-demo]").forEach((demo) => {
    const range = demo.querySelector("[data-sequence-range]");
    const frames = [...demo.querySelectorAll("[data-sequence-frame]")];
    const output = demo.querySelector("[data-sequence-output]");
    const labels = (demo.dataset.sequenceLabels || "Frame 01 · abertura|Frame 02 · detalhe").split("|");

    const setFrame = (value) => {
      const index = Number(value);
      frames.forEach((frame, frameIndex) => frame.classList.toggle("is-active", frameIndex === index));
      if (output) output.textContent = labels[index] || labels[0];
    };

    range?.addEventListener("input", (event) => setFrame(event.target.value));
    setFrame(range?.value || 0);
  });

  document.querySelectorAll("[data-entry-replay]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const demo = trigger.closest("[data-entry-demo]");
      if (!demo) return;
      const lines = demo.querySelectorAll(".entry-demo__line");
      lines.forEach((line) => { line.style.animation = "none"; });
      void demo.offsetWidth;
      lines.forEach((line) => { line.style.animation = ""; });
    });
  });

  const sonicHero = document.querySelector("[data-sonic-hero]");
  const sonicStage = sonicHero?.querySelector("[data-sonic-stage]");
  const sonicMeta = sonicHero?.querySelector("[data-sonic-meta]");
  const sonicReplay = sonicHero?.querySelector("[data-sonic-replay]");

  if (sonicStage) {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers = [];
    const phaseLabels = {
      intro: "Abertura · Inovva Car",
      main: "Sistema para conduzir",
      alt: "Clareza em movimento",
      resolve: "Resolução · Design System v0",
    };

    const clearTimers = () => timers.splice(0).forEach((timer) => window.clearTimeout(timer));

    const setPhase = (phase) => {
      sonicStage.classList.remove("is-intro", "is-main", "is-alt", "is-resolve", "is-flash");
      sonicStage.classList.add(`is-${phase}`);
      if (sonicMeta) sonicMeta.textContent = phaseLabels[phase] || phaseLabels.intro;
    };

    const playSonicHero = () => {
      clearTimers();
      sonicStage.classList.remove("is-intro", "is-main", "is-alt", "is-resolve", "is-flash");
      void sonicStage.offsetWidth;
      setPhase(prefersReduced ? "main" : "intro");
      if (prefersReduced) return;

      timers.push(window.setTimeout(() => setPhase("main"), 1050));
      timers.push(window.setTimeout(() => setPhase("alt"), 6200));
      timers.push(window.setTimeout(() => setPhase("resolve"), 10500));
      timers.push(window.setTimeout(() => {
        sonicStage.classList.add("is-flash");
        timers.push(window.setTimeout(playSonicHero, 650));
      }, 14500));
    };

    sonicReplay?.addEventListener("click", playSonicHero);
    playSonicHero();
  }
})();
