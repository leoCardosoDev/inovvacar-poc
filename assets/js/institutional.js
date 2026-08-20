(() => {
  const body = document.body;
  const menu = document.querySelector("[data-mobile-menu]");
  const trigger = document.querySelector("[data-menu-trigger]");
  const hero = document.querySelector("[data-hero-stage]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const timers = [];

  const imageSets = {
    intro: [
      ["assets/images/vehicles/ferrari-portofino-vermelha.webp", "Ferrari Portofino vermelha"],
      ["assets/images/vehicles/mercedes-c180-prata.webp", "Mercedes-Benz C 180 prata"],
      ["assets/images/vehicles/mercedes-glb-200-2021.webp", "Mercedes-Benz GLB 200 2021"],
      ["assets/images/vehicles/bmw-x5.webp", "BMW X5"],
    ],
    main: [
      ["assets/images/vehicles/ferrari-portofino-vermelha.webp", "Ferrari Portofino vermelha"],
      ["assets/images/vehicles/land-rover-range-rover.webp", "Land Rover Range Rover"],
      ["assets/images/vehicles/hyundai-creta.webp", "Hyundai Creta"],
      ["assets/images/vehicles/fiat-strada-branca.webp", "Fiat Strada branca"],
    ],
    alt: [
      ["assets/images/vehicles/mercedes-c180-prata.webp", "Mercedes-Benz C 180 prata"],
      ["assets/images/vehicles/mercedes-glb-200-2021.webp", "Mercedes-Benz GLB 200 2021"],
      ["assets/images/vehicles/bmw-x5.webp", "BMW X5"],
      ["assets/images/vehicles/ferrari-portofino-vermelha.webp", "Ferrari Portofino vermelha"],
    ],
  };

  const labels = {
    intro: "Abertura · Inovva Car",
    main: "Mais do que um carro!",
    alt: "O seu próximo nível",
    resolve: "Resolução · Curadoria Inovva Car",
  };

  const cardCopy = {
    intro: [["01 / Signature", "Portofino"], ["02 / Signature", "C 180"], ["03 / Signature", "GLB 200"], ["04 / Histórico", "BMW X5"]],
    main: [["01 / Signature", "Portofino"], ["02 / Histórico", "Range Rover"], ["03 / Histórico", "Creta"], ["04 / Operação", "Strada"]],
    alt: [["01 / Signature", "C 180"], ["02 / Signature", "GLB 200"], ["03 / Histórico", "BMW X5"], ["04 / Signature", "Portofino"]],
  };

  const setMenu = (open) => {
    if (!menu || !trigger) return;
    menu.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", String(open));
    body.classList.toggle("menu-is-open", open);
  };

  const clearTimers = () => {
    timers.splice(0).forEach((timer) => window.clearTimeout(timer));
  };

  const setPhase = (phase) => {
    if (!hero) return;
    hero.classList.remove("is-intro", "is-main", "is-alt", "is-resolve", "is-flash");
    hero.classList.add(`is-${phase}`);
    const meta = hero.querySelector("[data-hero-meta] span:nth-child(2)");
    if (meta) meta.textContent = labels[phase] || labels.resolve;
  };

  const swapImage = (image, source, alt) => {
    if (!image) return;
    image.style.opacity = "0";
    window.setTimeout(() => {
      image.src = source;
      image.alt = alt;
      image.style.opacity = "1";
    }, 180);
  };

  const setImageSet = (phase) => {
    if (!hero || !imageSets[phase]) return;
    imageSets[phase].forEach(([source, alt], index) => {
      const image = hero.querySelector(`[data-hero-card-image="${index}"]`);
      swapImage(image, source, alt);
      const card = image?.closest(".hero__card");
      const [category, name] = cardCopy[phase][index];
      if (card) {
        card.querySelector("figcaption span").textContent = category;
        card.querySelector("figcaption strong").textContent = name;
      }
    });

    const [deviceSource, deviceAlt] = phase === "alt" ? imageSets.alt[0] : imageSets.intro[0];
    swapImage(hero.querySelector("[data-hero-device-image]"), deviceSource, deviceAlt);
  };

  const playHero = () => {
    if (!hero) return;
    clearTimers();
    setPhase("intro");
    setImageSet("intro");

    if (reducedMotion.matches) {
      setPhase("resolve");
      return;
    }

    timers.push(window.setTimeout(() => {
      setPhase("main");
      setImageSet("main");
    }, 1050));

    timers.push(window.setTimeout(() => {
      setPhase("alt");
      setImageSet("alt");
    }, 6200));

    timers.push(window.setTimeout(() => setPhase("resolve"), 10500));

    timers.push(window.setTimeout(() => {
      hero.classList.add("is-flash");
    }, 13700));

    timers.push(window.setTimeout(() => {
      hero.classList.remove("is-flash");
      playHero();
    }, 14300));
  };

  trigger?.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  document.querySelector("[data-hero-replay]")?.addEventListener("click", playHero);
  reducedMotion.addEventListener?.("change", playHero);
  playHero();
})();
