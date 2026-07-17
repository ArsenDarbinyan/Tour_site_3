const toursData = window.toursData;
const translations = window.translations;
let currentLang = window.currentLang; 
const landmarksLibrary = window.landmarksLibrary;
const defaultLandmarkPhotos = window.defaultLandmarkPhotos;
const getStopsForTour = window.getStopsForTour;




window.handleBookingTelegram = function() {
    const message = generateBookingMessage();
    const encodedText = encodeURIComponent(message);
    const tgUrl = `https://t.me/itsanoush?text=${encodedText}`;

    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.openTelegramLink) {
        window.Telegram.WebApp.openTelegramLink(tgUrl);
    } else {
        window.open(tgUrl, '_blank');
    }
}




window.generateBookingMessage = function() {
    const dateInput = document.getElementById('calc-date')?.value || 'Не указана';
    const peopleInput = document.getElementById('calc-people')?.value || '1';
    

    const tourTitle = document.getElementById('calc-tour-title')?.innerText?.trim() || 'Премиум-тур';
    const isGuideSelected = document.getElementById('calc-guide-toggle')?.checked || false;
    const guideStatus = {
        ru: isGuideSelected ? 'Да' : 'Нет',
        en: isGuideSelected ? 'Yes' : 'No',
        hy: isGuideSelected ? 'Այո' : 'Ոչ'
    };

    let formattedDate = dateInput;
    if (dateInput && dateInput !== 'Не указана') {
        const parts = dateInput.split('-');
        if (parts.length === 3) formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
    }

    const messages = {
        ru: `Здравствуйте! Хочу забронировать тур "${tourTitle}".\nДата: ${formattedDate}\nКоличество человек: ${peopleInput}\nНужен гид: ${guideStatus.ru}`,
        en: `Hello! I would like to book the tour "${tourTitle}".\nDate: ${formattedDate}\nNumber of people: ${peopleInput}\nGuide needed: ${guideStatus.en}`,
        hy: `Բարև ձեզ: Ցանկանում եմ ամրագրել "${tourTitle}" տուրը:\nԱմսաթիվ: ${formattedDate}\nԱնձանց քանակը: ${peopleInput}\nԳիդի անհրաժեշտություն: ${guideStatus.hy}`
    };

    const currentLang = document.documentElement.lang || 'ru';
    return messages[currentLang] || messages['ru'];
}





window.handleBookingWhatsApp = function() {
    const message = generateBookingMessage();
    const encodedText = encodeURIComponent(message);
    const whatsappNumber = "37498064617";  
    
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    let waUrl;
    if (isMobile) {
        waUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodedText}`;
    } else {
        waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    }

    if (isMobile) {
        window.location.href = waUrl;
    } else {
        window.open(waUrl, '_blank');
    }
} 


document.addEventListener("DOMContentLoaded", () => {
  if (typeof ParticlesModule !== "undefined") {
    ParticlesModule.init();
  }

  let activeFilterRegion = "All";
  let activeFilterDuration = "All";
  let activeFilterPrice = "All";
  let currentDetailStopIndex = 0;
  let detailAutoplayTimer = null;
  let isAutoplayPaused = false;
  let activeSelectedTour = toursData[0];
  let activeViewMode = "carousel"; 
  let activeGridCols = 3; 

  const navbar = document.getElementById("main-navbar");
  const langSwitchers = document.querySelectorAll("[data-lang]");
  const toursMarquee = document.getElementById("tours-marquee");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const durationFilter = document.getElementById("duration-filter");
  const priceFilter = document.getElementById("price-filter");
  const detailsPanel = document.getElementById("details-panel");
  const closeDetailsBtn = document.getElementById("close-details-btn");

  function changeLanguage(lang) {
    if (!translations[lang]) return;

    document.documentElement.setAttribute("lang", lang);
    document.body.classList.add("fade-hidden");

    setTimeout(() => {
      currentLang = lang;
      localStorage.setItem("armenia_tour_lang", lang);

      document.querySelectorAll("[data-lang]").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
          el.innerHTML = translations[lang][key];
        }
      });

      handleArmenianLigatures();

      renderTourCards();
      updateCalculator();
      renderTeamBento();
      renderTestimonials();

      if (detailsPanel.classList.contains("open")) {
        renderTourDetails(activeSelectedTour);
      }

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }

      document.body.classList.remove("fade-hidden");
    }, 250);
  }

  langSwitchers.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang !== currentLang) {
        changeLanguage(selectedLang);
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

 
  function initScrollAnimations() {
    const sections = Array.from(document.querySelectorAll(".scroll-animate"));

    if (!sections.length) return null;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      sections.forEach(section => section.classList.add("is-visible"));
      return null;
    }

    const revealSection = (section) => {
      if (section.dataset.revealed === "true") return;
      section.dataset.revealed = "true";
      section.classList.add("is-visible");

      const children = Array.from(section.children);
      children.forEach((child, index) => {
        child.style.transitionDelay = `${Math.min(index * 0.06, 0.3)}s`;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealSection(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px 140px 0px",
      threshold: 0.12
    });

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;

      if (alreadyVisible) {
        requestAnimationFrame(() => revealSection(section));
      } else {
        observer.observe(section);
      }
    });

    return observer;
  }

  const scrollAnimObserver = initScrollAnimations();

  function renderTourCards() {
    if (!toursMarquee) return;

    const filteredTours = toursData.filter(tour => {
      const regionMatch = activeFilterRegion === "All" ||
        tour.region.split(",").map(r => r.trim()).includes(activeFilterRegion);

      let durationMatch = true;
      if (activeFilterDuration !== "All") {
        if (activeFilterDuration === "1") durationMatch = tour.duration === 1;
        else if (activeFilterDuration === "2") durationMatch = tour.duration === 2;
        else if (activeFilterDuration === "3") durationMatch = tour.duration >= 3;
      }

      let priceMatch = true;
      if (activeFilterPrice !== "All") {
        if (activeFilterPrice === "low") priceMatch = tour.price <= 60000;
        else if (activeFilterPrice === "med") priceMatch = tour.price > 60000 && tour.price <= 120000;
        else if (activeFilterPrice === "high") priceMatch = tour.price > 120000;
      }

      return regionMatch && durationMatch && priceMatch;
    });

    toursMarquee.innerHTML = "";

    if (filteredTours.length === 0) {
      toursMarquee.className = activeViewMode === "carousel" ? "marquee-container" : "w-full";
      toursMarquee.innerHTML = `
        <div class="text-center py-12 text-gray-400 font-display w-full">
          <i data-lucide="compass" class="w-12 h-12 mx-auto mb-4 stroke-emerald-500 animate-bounce"></i>
          <p class="text-lg">No tours match your criteria.</p>
        </div>
      `;
      if (typeof lucide !== "undefined") lucide.createIcons();
      return;
    }

    function createTourCardElement(tour, isCarousel) {
      const card = document.createElement("div");
      const widthClass = isCarousel ? "flex-shrink-0 w-[320px] md:w-[380px]" : "w-full";
      const paddingClass = isCarousel ? "p-4" : "p-2.5 sm:p-4";
      const imgHeightClass = isCarousel ? "h-[200px]" : "h-[90px] sm:h-[155px]";
      const titleClass = isCarousel ? "text-xl" : "text-xs sm:text-base md:text-lg";
      const descHeightClass = isCarousel ? "h-[40px]" : "min-h-[32px] sm:min-h-[44px]";

      card.className = `tour-card liquid-glass flex flex-col justify-between cursor-pointer group ${widthClass} ${paddingClass} glass-reflection`;
      card.setAttribute("data-tour-id", tour.id);

      const title = tour.title[currentLang];
      const desc = tour.description[currentLang];
      const daysText = translations[currentLang].tour_days;
      const detailsBtnText = translations[currentLang].tour_details_btn;

      card.innerHTML = `
        <div class="relative w-full ${imgHeightClass} rounded-xl overflow-hidden mb-2 sm:mb-3">
          <img src="${tour.image}" alt="${title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer">
          <div class="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent"></div>
          <div class="card-duration-badge absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-[#0d4d3c]/80 backdrop-blur-md border border-white/10 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full flex items-center gap-1">
            <i data-lucide="clock" class="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-emerald-400"></i>
            <span class="text-[8px] sm:text-xs font-mono font-bold">${tour.duration} ${daysText}</span>
          </div>
          <div class="card-region-badge absolute bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 bg-emerald-light/20 backdrop-blur-md px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-neon-accent/30 text-[8px] sm:text-xs text-neon-accent font-mono">
            ${tour.region.split(',')
          .map(reg => {
            const cleanRegion = reg.trim().toLowerCase().replace(/\s+/g, '_');
            const translationKey = "filter_region_" + cleanRegion;
            return translations[currentLang][translationKey] || reg.trim();
          })
          .join(', ')
        }

          </div>
        </div>
        <div class="flex-grow flex flex-col justify-between">
          <div>
            <h3 class="${titleClass} font-bold tracking-tight text-white mb-1 line-clamp-1 group-hover:text-neon-accent transition-colors">${title}</h3>
            <p class="text-[10px] sm:text-xs text-gray-300 line-clamp-2 mb-1.5 sm:mb-2 ${descHeightClass} leading-relaxed">${desc}</p>
          </div>
          <div class="flex items-center justify-between pt-1.5 border-t border-white/5">
            <div>
              <span class="text-[8px] sm:text-[9px] text-emerald-400 block tracking-wider font-mono">${translations[currentLang].price_from_label || 'FROM (1-3)'}</span>
              <span class="text-[10px] sm:text-sm font-mono font-bold text-white">${(tour.priceSmall || tour.price).toLocaleString()} ${translations[currentLang].tour_amd}</span>
            </div>
            <button class="btn-neon px-1.5 py-0.5 sm:px-3 sm:py-1.5 text-[8px] sm:text-xs flex items-center gap-0.5 sm:gap-1">
              <span>${detailsBtnText}</span>
              <i data-lucide="arrow-right" class="w-2.5 h-2.5 sm:w-3 sm:h-3"></i>
            </button>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        openTourDetails(tour);
      });

      return card;
    }

    if (activeViewMode === "carousel") {
      toursMarquee.className = "marquee-container";
      toursMarquee.style.opacity = "0";
      const doubleTours = [...filteredTours, ...filteredTours, ...filteredTours];
      const containerMarquee = document.createElement("div");
      containerMarquee.className = "marquee-content";

      doubleTours.forEach((tour) => {
        const card = createTourCardElement(tour, true);
        containerMarquee.appendChild(card);
      });

      toursMarquee.appendChild(containerMarquee);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          toursMarquee.style.transition = "opacity 0.5s ease";
          toursMarquee.style.opacity = "1";
        });
      });
    } else {
      toursMarquee.className = `grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-7xl mx-auto px-0 w-full`;
      toursMarquee.style.opacity = "0";

      filteredTours.forEach((tour) => {
        const card = createTourCardElement(tour, false);
        toursMarquee.appendChild(card);
      });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          toursMarquee.style.transition = "opacity 0.5s ease";
          toursMarquee.style.opacity = "1";
        });
      });
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  const viewToggleCarouselBtn = document.getElementById("view-toggle-carousel");
  const viewToggleGridBtn = document.getElementById("view-toggle-grid");

  function setViewMode(mode) {
    activeViewMode = mode;

    if (mode === "carousel") {
      viewToggleCarouselBtn?.classList.add("active");
      viewToggleGridBtn?.classList.remove("active");
    } else {
      viewToggleGridBtn?.classList.add("active");
      viewToggleCarouselBtn?.classList.remove("active");
    }

    renderTourCards();
  }

  viewToggleCarouselBtn?.addEventListener("click", () => setViewMode("carousel"));
  viewToggleGridBtn?.addEventListener("click", () => setViewMode("grid"));

  const customDropdowns = document.querySelectorAll(".custom-dropdown");

  customDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const selectedSpan = dropdown.querySelector(".dropdown-selected");
    const options = dropdown.querySelectorAll(".dropdown-option");

    trigger?.addEventListener("click", (e) => {
      e.stopPropagation();
      customDropdowns.forEach(other => {
        if (other !== dropdown) other.classList.remove("open");
      });
      dropdown.classList.toggle("open");
    });

    options.forEach(option => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();

        options.forEach(opt => {
          opt.classList.remove("active", "text-white");
          opt.classList.add("text-gray-300");
        });

        option.classList.add("active", "text-white");
        option.classList.remove("text-gray-300");

        const val = option.getAttribute("data-value");
        const i18nKey = option.getAttribute("data-i18n");
        selectedSpan.setAttribute("data-value", val);
        selectedSpan.setAttribute("data-i18n", i18nKey);
        selectedSpan.innerHTML = option.innerHTML;

        if (dropdown.id === "duration-dropdown") {
          activeFilterDuration = val;
        } else if (dropdown.id === "price-dropdown") {
          activeFilterPrice = val;
        } else if (dropdown.id === "region-dropdown") {
          activeFilterRegion = val;
        }

        dropdown.classList.remove("open");
        renderTourCards();
      });
    });
  });

  document.addEventListener("click", () => {
    customDropdowns.forEach(dropdown => dropdown.classList.remove("open"));
  });

  function handleArmenianLigatures() {
    if (currentLang === "hy") {
      document.querySelectorAll(".uppercase, .tracking-wider, .tracking-widest, h1, h2, h3, h4, button").forEach(el => {
        if (el.textContent.includes("և")) {
          el.innerHTML = el.innerHTML.replace(/և/g, "եվ");
        }
        if (el.textContent.includes("ԵՒ")) {
          el.innerHTML = el.innerHTML.replace(/ԵՒ/g, "ԵՎ");
        }
      });
    }
  }

  const burgerMenuBtn = document.getElementById("burger-menu-btn");
  const burgerDrawer = document.getElementById("burger-drawer");
  const burgerDrawerOverlay = document.getElementById("burger-drawer-overlay");
  const burgerDrawerClose = document.getElementById("burger-drawer-close");

  function openBurgerDrawer() {
    if (!burgerDrawer || !burgerDrawerOverlay) return;
    burgerDrawerOverlay.classList.remove("pointer-events-none", "opacity-0");
    burgerDrawerOverlay.classList.add("opacity-100");
    burgerDrawer.classList.remove("-translate-x-full");
    document.body.style.overflow = "hidden"; 
  }

  function closeBurgerDrawer() {
    if (!burgerDrawer || !burgerDrawerOverlay) return;
    burgerDrawerOverlay.classList.remove("opacity-100");
    burgerDrawerOverlay.classList.add("pointer-events-none", "opacity-0");
    burgerDrawer.classList.add("-translate-x-full");
    const detailsPanel = document.getElementById("details-panel");
    if (!detailsPanel || !detailsPanel.classList.contains("open")) {
      document.body.style.overflow = ""; 
    }
  }

  burgerMenuBtn?.addEventListener("click", openBurgerDrawer);
  burgerDrawerOverlay?.addEventListener("click", closeBurgerDrawer);
  burgerDrawerClose?.addEventListener("click", closeBurgerDrawer);

  document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href');
    if (targetId === '#' || !targetId) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();

      closeBurgerDrawer();

      const navbarEl = document.getElementById("main-navbar");
      const navbarHeight = navbarEl ? navbarEl.offsetHeight : 80;
      const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = Math.max(0, elementTop - navbarHeight - 20);

      const startY = window.scrollY;
      const distance = scrollTarget - startY;
      const duration = 700; 
      let startTime = null;

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(scrollStep);
      }

      requestAnimationFrame(scrollStep);
    }
  });

  function openTourDetails(tour) {
    activeSelectedTour = tour;

    const guideToggle = document.getElementById("calc-guide-toggle");
    if (guideToggle) guideToggle.checked = false;
    const guideCard = document.getElementById("guide-service-card");
    if (guideCard) guideCard.classList.remove("guide-active");

    renderTourDetails(tour);
    detailsPanel?.classList.add("open");
    document.body.style.overflow = "hidden"; 

    const floatingCloseWrapper = document.getElementById("close-details-floating-wrapper");
    if (floatingCloseWrapper) {
      floatingCloseWrapper.classList.remove("hidden");
      floatingCloseWrapper.classList.add("flex");
    }
  }

  function closeTourDetails() {
    detailsPanel?.classList.remove("open");

    const burgerDrawer = document.getElementById("burger-drawer");
    if (!burgerDrawer || burgerDrawer.classList.contains("-translate-x-full")) {
      document.body.style.overflow = "auto";
    }

    clearInterval(detailAutoplayTimer);

    const floatingCloseWrapper = document.getElementById("close-details-floating-wrapper");
    if (floatingCloseWrapper) {
      floatingCloseWrapper.classList.remove("flex");
      floatingCloseWrapper.classList.add("hidden");
    }
  }

  const closeDetailsBtnFloating = document.getElementById("close-details-btn-floating");
  closeDetailsBtn?.addEventListener("click", closeTourDetails);
  closeDetailsBtnFloating?.addEventListener("click", closeTourDetails);

  function renderTourDetails(tour) {
    const stops = getStopsForTour(tour.id, tour.stops);
    currentDetailStopIndex = 0;
    isAutoplayPaused = false;

    document.getElementById("detail-title").innerHTML = tour.title[currentLang];
    document.getElementById("detail-desc").innerHTML = tour.description[currentLang];
    const startingPrice = tour.priceSmall || tour.price;
    document.getElementById("detail-price").innerHTML = `${startingPrice.toLocaleString()} ${translations[currentLang].tour_amd}`;

    const stopsCountFloating = document.getElementById("detail-stops-count-floating");
    if (stopsCountFloating) {
      stopsCountFloating.innerHTML = `${stops.length} ${translations[currentLang].details_route_stops}`;
    }

    document.getElementById("detail-image").src = tour.image;

    document.getElementById("calc-tour-title").innerHTML = tour.title[currentLang];
    updateCalculator();

    const timelineProgress = document.getElementById("detail-timeline-progress");
    const stopsContainer = document.getElementById("detail-stops-list");
    stopsContainer.innerHTML = "";

    stops.forEach((stop, index) => {
      const stopNode = document.createElement("div");
      stopNode.className = `timeline-stop flex items-start gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${index === 0 ? "active" : ""}`;
      stopNode.setAttribute("data-stop-idx", index);

      stopNode.innerHTML = `
        <div class="timeline-dot w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-emerald-mid font-mono text-xs ${index === 0 ? "active" : "text-gray-400"}">
          ${index + 1}
        </div>
        <div>
          <h4 class="timeline-title font-display font-medium transition-colors text-sm">${stop.title[currentLang]}</h4>
          <p class="text-xs text-gray-400 mt-1 line-clamp-1">${stop.desc[currentLang]}</p>
        </div>
      `;

      stopNode.addEventListener("click", () => {
        isAutoplayPaused = true; 
        document.getElementById("autoplay-indicator")?.classList.remove("animate-pulse");
        document.getElementById("autoplay-indicator")?.classList.add("bg-red-500");
        showStop(index, stops);
      });

      stopsContainer.appendChild(stopNode);
    });

    showStop(0, stops);

    clearInterval(detailAutoplayTimer);
    detailAutoplayTimer = setInterval(() => {
      if (!isAutoplayPaused) {
        currentDetailStopIndex = (currentDetailStopIndex + 1) % stops.length;
        showStop(currentDetailStopIndex, stops);
      }
    }, 5000);
  }

  function showStop(index, stops) {
    currentDetailStopIndex = index;
    const stop = stops[index];

    const detailImage = document.getElementById("detail-image");
    if (detailImage) {
      detailImage.style.opacity = "0.3";
      detailImage.style.transform = "scale(0.98)";
      setTimeout(() => {
        detailImage.src = stop.photo;
        detailImage.style.opacity = "1";
        detailImage.style.transform = "scale(1)";
      }, 200);
    }

    const mainTitleEl = document.getElementById("detail-title");
    const mainDescEl = document.getElementById("detail-desc");
    if (mainTitleEl && stop.title) {
      mainTitleEl.innerHTML = stop.title[currentLang];
    }
    if (mainDescEl && stop.desc) {
      mainDescEl.innerHTML = stop.desc[currentLang];
    }

    const stopNodes = document.querySelectorAll(".timeline-stop");
    stopNodes.forEach((node, idx) => {
      const dot = node.querySelector(".timeline-dot");

      if (idx === index) {
        node.classList.add("active");
        dot?.classList.add("active");
        const detailStopsList = document.getElementById("detail-stops-list");
        if (detailStopsList) {
          const containerHeight = detailStopsList.clientHeight;
          const nodeTop = node.offsetTop;
          const nodeHeight = node.clientHeight;
          detailStopsList.scrollTo({
            top: nodeTop - (containerHeight / 2) + (nodeHeight / 2),
            behavior: "smooth"
          });
        }
      } else {
        node.classList.remove("active");
        dot?.classList.remove("active");
      }
    });

    const landmarkBox = document.getElementById("landmark-box");
    if (stop.hasLandmark && landmarkBox) {
      landmarkBox.classList.remove("opacity-0", "translate-y-4");
      landmarkBox.classList.add("opacity-100", "translate-y-0");

      const lm = stop.landmark || stop;
      const lmTitle = (lm.title && lm.title[currentLang]) ? lm.title[currentLang] : (stop.title ? stop.title[currentLang] : "");
      const lmDesc = (lm.desc && lm.desc[currentLang]) ? lm.desc[currentLang] : (stop.desc ? stop.desc[currentLang] : "");
      const lmPhoto = lm.photo || stop.photo;

      document.getElementById("landmark-title").innerHTML = lmTitle;
      document.getElementById("landmark-desc").innerHTML = lmDesc;
      document.getElementById("landmark-photo").src = lmPhoto;
    } else if (landmarkBox) {
      landmarkBox.classList.add("opacity-0", "translate-y-4");
      landmarkBox.classList.remove("opacity-100", "translate-y-0");
    }

    const progressFill = document.getElementById("timeline-progress-fill");
    if (progressFill) {
      const percentage = ((index + 1) / stops.length) * 100;
      progressFill.style.width = `${percentage}%`;
    }
  }

  document.getElementById("btn-stop-prev")?.addEventListener("click", () => {
    isAutoplayPaused = true;
    document.getElementById("autoplay-indicator")?.classList.add("bg-red-500");
    const stops = getStopsForTour(activeSelectedTour.id, activeSelectedTour.stops);
    let prevIdx = currentDetailStopIndex - 1;
    if (prevIdx < 0) prevIdx = stops.length - 1;
    showStop(prevIdx, stops);
  });

  document.getElementById("btn-stop-next")?.addEventListener("click", () => {
    isAutoplayPaused = true;
    document.getElementById("autoplay-indicator")?.classList.add("bg-red-500");
    const stops = getStopsForTour(activeSelectedTour.id, activeSelectedTour.stops);
    let nextIdx = (currentDetailStopIndex + 1) % stops.length;
    showStop(nextIdx, stops);
  });

  document.getElementById("btn-stop-play")?.addEventListener("click", () => {
    isAutoplayPaused = !isAutoplayPaused;
    const indicator = document.getElementById("autoplay-indicator");
    if (isAutoplayPaused) {
      indicator?.classList.remove("bg-emerald-400", "animate-pulse");
      indicator?.classList.add("bg-red-500");
    } else {
      indicator?.classList.add("bg-emerald-400", "animate-pulse");
      indicator?.classList.remove("bg-red-500");
    }
  });

  const bookingToggleBtn = document.getElementById("booking-toggle-btn");
  const bookingSocialsGroup = document.getElementById("booking-socials-group");

  bookingToggleBtn?.addEventListener("click", () => {
    bookingSocialsGroup?.classList.toggle("hidden");
    bookingSocialsGroup?.classList.toggle("flex");

    if (bookingSocialsGroup && !bookingSocialsGroup.classList.contains("hidden")) {
      bookingSocialsGroup.style.opacity = "0";
      setTimeout(() => {
        bookingSocialsGroup.style.opacity = "1";
        bookingSocialsGroup.style.transform = "scale(1)";
      }, 50);
    }
  });

  document.getElementById("book-wa-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    const tourName = activeSelectedTour.title[currentLang];
    const msg = encodeURIComponent(`${translations[currentLang].book_msg}"${tourName}"`);
    window.open(`https://wa.me/37493000000?text=${msg}`, "_blank");
  });

  const calcPeopleInput = document.getElementById("calc-people");
  const calcDateInput = document.getElementById("calc-date");
  const calcTotalText = document.getElementById("calc-total");
  const calcPricePerPersonText = document.getElementById("calc-price-person");
  const calcTypeLabel = document.getElementById("calc-type-label");

  function updateCalculator() {
    if (!calcPeopleInput || !calcTotalText) return;

    const peopleCount = parseInt(calcPeopleInput.value) || 1;
    const tour = activeSelectedTour;
    const priceSmall = tour.priceSmall || tour.price; // 1-3 people
    const priceLarge = tour.priceLarge || tour.price; // 4-7 people
    const hasAgreement8plus = tour.priceGroup8plus === "agreement";
    const isAgreement = peopleCount >= 8;

    let finalPricePerPerson = priceSmall;
    let labelKey = "calc_type_private";

    if (isAgreement) {
      labelKey = "calc_type_agreement";
    } else if (peopleCount >= 4 && peopleCount <= 7) {
      finalPricePerPerson = priceLarge;
      labelKey = "calc_type_group";
    }

    const guideToggle = document.getElementById("calc-guide-toggle");
    const hasGuide = guideToggle && guideToggle.checked;

    const guideCard = document.getElementById("guide-service-card");
    if (guideCard) {
      if (hasGuide) {
        guideCard.classList.add("guide-active");
      } else {
        guideCard.classList.remove("guide-active");
      }
    }

    if (isAgreement) {
      const agreementText = translations[currentLang].calc_by_agreement || "By Agreement";
      if (calcPricePerPersonText) {
        calcPricePerPersonText.innerHTML = agreementText;
        calcPricePerPersonText.removeAttribute("data-val");
      }
      if (calcTotalText) {
        calcTotalText.innerHTML = agreementText;
        calcTotalText.removeAttribute("data-val");
      }
      const detailPriceText = document.getElementById("detail-price");
      if (detailPriceText) {
        detailPriceText.innerHTML = agreementText;
        detailPriceText.removeAttribute("data-val");
      }
    } else {
      let totalPrice = finalPricePerPerson;// * peopleCount;
      if (hasGuide) {
        totalPrice += 20000;
      }
      const displayedPricePerPerson = finalPricePerPerson;

      animateNumber(calcPricePerPersonText, displayedPricePerPerson);
      animateNumber(calcTotalText, totalPrice);

      const detailPriceText = document.getElementById("detail-price");
      if (detailPriceText) {
        animateNumber(detailPriceText, totalPrice);
      }
    }

    if (calcTypeLabel) {
      calcTypeLabel.innerHTML = translations[currentLang][labelKey];
    }
  }

  calcPeopleInput?.addEventListener("input", updateCalculator);
  calcPeopleInput?.addEventListener("change", updateCalculator);
  document.getElementById("calc-guide-toggle")?.addEventListener("change", updateCalculator);

  function animateNumber(element, target) {
    if (!element) return;
    const currentVal = parseInt(element.getAttribute("data-val") || "0");
    const diff = target - currentVal;
    if (diff === 0) return;

    let start = null;
    const duration = 400; // ms

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const val = Math.floor(currentVal + diff * progress);
      element.innerHTML = `${val.toLocaleString()} ${translations[currentLang].tour_amd}`;
      element.setAttribute("data-val", val);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  if (calcDateInput) {
    const today = new Date().toISOString().split("T")[0];
    calcDateInput.min = today;
    calcDateInput.value = today;
  }

  const teamContainer = document.getElementById("team-bento-container");
  const teamData = [
    {
    id: "Marat",
    name: { hy: "Մարատ Հարությունյան", ru: "Марат Арутюнян", en: "Marat Harutyunyan" },
    role: { hy: "Վարորդ", ru: "Водитель", en: "Driver" },
    funnyDesc: {
      hy: "Ունի 10+ տարվա փորձ և ճանապարհների գերազանց իմացություն: Նրանից անպակաս են քաղցր հումորն ու դառը շոկոլադը: Կանգ կառնի առաջին իսկ պահանջով, մեքենայում միշտ ունի գլխացավի դեղ, իսկ բարձր երաժշտությունն ու թեժ ռիթմերը երբեք չեն խանգարում նրա հանգիստ ու վստահ վարելուն:",
      ru: "Водитель с опытом 10+ лет и отличным знанием дорог. Всегда при нем искрометный юмор и горький шоколад. Остановит машину при первом же намеке на укачивание, найдет таблетку от головы, а громкая музыка и бешеные ритмы никогда не отвлекут его от уверенного вождения.",
      en: "A driver with 10+ years of experience and excellent road knowledge. Always equipped with sweet humor and dark chocolate. Will pull over at the first sign of motion sickness, always has a headache pill ready, and loud music or intense rhythms will never distract him from smooth driving."
    },
    image: "./img/driver_0.jpg" 
  },
  // {
  //   id: "Arthur",
  //   name: { hy: "Արթուր Հովհաննիսյան", ru: "Артур Оганесян", en: "Arthur Hovhannisyan" },
  //   role: { hy: "Վարորդ", ru: "Водитель", en: "Driver" },
  //   funnyDesc: {
  //     hy: "Ավելի քան 10 տարվա փորձով պատասխանատու և անվտանգ վարորդ: Ծայրահեղ կոկիկ է և սիրում է կատարյալ հարմարավետություն. միակ բանը, որ կարող է իրոք բարկացնել նրան՝ շոգն ու քրտնելն է:",
  //     ru: "Ответственный и безопасный водитель с опытом более 10 лет. Невероятно опрятен и ценит идеальный комфорт: единственное, что может по-настоящему его разозлить — это жара и духота.",
  //     en: "A responsible and safe driver with over 10 years of experience. Extremely neat and loves perfect comfort: the only thing that can truly annoy him is the heat and getting sweaty."
  //   },
  //   image: "/img/driver_1.jpg" 
  // }

  ];

  function renderTeamBento() {
    if (!teamContainer) return;
    teamContainer.innerHTML = "";

    teamData.forEach((member, index) => {
      const colClass = "bg-[#0d4d3c]/20";
      const bentoCard = document.createElement("div");
      bentoCard.className = `bento-item liquid-glass p-6 flex flex-col justify-between cursor-pointer border border-white/5 relative group transition-all duration-300 ${colClass}`;

      bentoCard.innerHTML = `
        <div class="flex flex-col gap-4">
          <div class="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-light/40 group-hover:border-neon-accent transition-all">
            <img src="${member.image}" alt="${member.name[currentLang]}" class="w-full h-full object-cover">
          </div>
          <div>
            <h3 class="text-2xl font-bold font-display text-white group-hover:text-neon-accent transition-colors">${member.name[currentLang]}</h3>
            <span class="text-xs text-emerald-light uppercase font-mono tracking-wider">${member.role[currentLang]}</span>
          </div>
          <p class="text-sm text-gray-300 leading-relaxed">${member.funnyDesc[currentLang]}</p>
        </div>
        <div class="mt-6 flex items-center justify-between text-xs text-neon-accent font-mono opacity-60 group-hover:opacity-100 transition-opacity">
          <span data-i18n="team_highlight">TAP TO HIGHLIGHT</span>
          <i data-lucide="sparkles" class="w-4 h-4"></i>
        </div>
      `;

      bentoCard.addEventListener("click", () => {
        bentoCard.classList.toggle("ring-2");
        bentoCard.classList.toggle("ring-neon-accent");
        bentoCard.classList.toggle("scale-[1.03]");
        bentoCard.classList.toggle("shadow-[0_0_30px_var(--neon-glow)]");
      });

      teamContainer.appendChild(bentoCard);
    });

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    const teamSection = document.getElementById("team");
    if (teamSection && !teamSection.classList.contains("is-visible")) {
      const rect = teamSection.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (alreadyVisible) {
        requestAnimationFrame(() => teamSection.classList.add("is-visible"));
      }
    }
  }

  const achievementsSection = document.getElementById("achievements-section");
  const counters = [
    { id: "counter-travelers", target: 4850, suffix: "+" },
    { id: "counter-tours", target: 1240, suffix: "" },
    { id: "counter-experience", target: 9, suffix: "" },
    { id: "counter-rating", target: 5.0, suffix: "/5" }
  ];

  let countersAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  if (achievementsSection) {
    observer.observe(achievementsSection);
  }

  function animateCounters() {
    counters.forEach(c => {
      const el = document.getElementById(c.id);
      if (!el) return;

      let startVal = 0;
      const duration = 2000; // ms
      const startTime = performance.now();

      function update(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeProgress = 1 - (1 - progress) * (1 - progress);

        const currentVal = c.id === "counter-rating"
          ? (easeProgress * c.target).toFixed(1)
          : Math.floor(easeProgress * c.target);

        el.innerHTML = `${currentVal}${c.suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    });
  }

  const testimonialsContainer = document.getElementById("testimonials-container");
  const reviewsData = [
    {
    name: "Aram Grigoryan",
    country: "Armenia, Yerevan",
    review: {
      hy: "Շատ շնորհակալություն Մարատին գերազանց սպասարկման համար: Մաքուր մեքենա, զգույշ վարում և հաճելի մթնոլորտ ճանապարհին: Անպայման կրկին կդիմենք:",
      ru: "Огромное спасибо Марату за отличный сервис! Чистый автомобиль, аккуратное вождение и приятная атмосфера в дороге. Обязательно обратимся снова.",
      en: "Many thanks to Marat for the excellent service! Clean car, careful driving, and a pleasant atmosphere on the road. We will definitely contact him again."
    },
    stars: 5,
    avatar: "/img/man1.jpg"
  },
  {
    name: "Karen Sargsyan",
    country: "Armenia, Gyumri",
    review: {
      hy: "Մարատի հետ ճանապարհին քեզ հանգիստ ու վստահ ես զգում: Ամեն ինչ կազմակերպված էր բարձր մակարդակով: Շնորհակալություն:",
      ru: "С Маратом чувствуешь себя спокойно и уверенно в дороге. Всё было организовано на высшем уровне. Спасибо!",
      en: "With Marat, you feel calm and confident on the road. Everything was organized at the highest level. Thank you!"
    },
    stars: 5,
    avatar: "/img/man2.jpg"
  },
  {
    name: "Anahit Avetisyan",
    country: "Armenia, Dilijan",
    review: {
      hy: "Անվտանգ վարում, հիանալի վերաբերմունք և բացառիկ սպասարկում: Շնորհակալություն, Մարատ, մեր ուղևորությունը հաճելի և առանց սթրեսի դարձնելու համար: Հինգ աստղ:",
      ru: "Безопасное вождение, отличное отношение и исключительный сервис. Спасибо, Марат, за то, что сделали нашу поездку приятной и безմտահոգությունների. Пять звезд!",
      en: "Safe driving, great attitude, and exceptional service. Thank you, Marat, for making our trip enjoyable and stress-free. Five stars! 🌟"
    },
    stars: 5,
    avatar: "/img/woman1.jpg"
  },
  {
    name: "Hayk & Elen",
    country: "Armenia, Goris",
    review: {
      hy: "Արթուրը մեր ճանապարհորդությունը առավելագույնս հարմարավետ դարձրեց։ Իր գործի իսկական պրոֆեսիոնալ։ Միանշանակ խորհուրդ ենք տալիս: Հիանալի փորձ ունեցանք, մաքուր մեքենա և բարձրակարգ սպասարկում: Շատ քաղավարի ու փորձառու վարորդ է:",
      ru: "Артур сделал наше путешествие максимально комфортным. Настоящий профессионал своего дела. Однозначно рекомендуем! Чистый автомобиль, аккуратное вождение и отличный сервис. Очень вежливый и опытный водитель.",
      en: "Arthur made our trip as comfortable as possible. A true professional. Highly recommended! We had a wonderful experience: clean vehicle, safe driving, and outstanding customer service. Very polite and experienced driver."
    },
    stars: 5,
    avatar: "/img/couple.jpg"
  }
  ];

  let currentReviewIdx = 0;
  let reviewTimer = null;

  function renderTestimonials() {
    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = "";

    const review = reviewsData[currentReviewIdx];
    const card = document.createElement("div");
    card.className = "liquid-glass p-8 flex flex-col md:flex-row gap-6 items-center transition-all duration-500 transform scale-100 opacity-100";

    let starsHtml = "";
    for (let i = 0; i < review.stars; i++) {
      starsHtml += `<i data-lucide="star" class="w-4 h-4 fill-amber-400 stroke-amber-400"></i>`;
    }

    card.innerHTML = `
      <div class="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-neon-accent/30">
        <img src="${review.avatar}" alt="${review.name}" class="w-full h-full object-cover">
      </div>
      <div class="flex-grow text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-1 mb-2">
          ${starsHtml}
        </div>
        <p class="text-base text-gray-200 italic mb-4 leading-relaxed">"${review.review[currentLang]}"</p>
        <div>
          <h4 class="text-lg font-bold text-white font-display">${review.name}</h4>
          <span class="text-xs text-emerald-light uppercase font-mono tracking-wider">${review.country}</span>
        </div>
      </div>
    `;

    testimonialsContainer.appendChild(card);
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  function startReviewRotation() {
    clearInterval(reviewTimer);
    reviewTimer = setInterval(() => {
      currentReviewIdx = (currentReviewIdx + 1) % reviewsData.length;

      if (testimonialsContainer) {
        testimonialsContainer.style.opacity = "0";
        testimonialsContainer.style.transform = "scale(0.98)";

        setTimeout(() => {
          renderTestimonials();
          testimonialsContainer.style.opacity = "1";
          testimonialsContainer.style.transform = "scale(1)";
        }, 300);
      }
    }, 6000);
  }

  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  const savedTheme = localStorage.getItem("armenia_tour_theme") || "dark";
  applyTheme(savedTheme);

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      if (themeIcon) {
        themeIcon.setAttribute("data-lucide", "moon");
      }
      localStorage.setItem("armenia_tour_theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      if (themeIcon) {
        themeIcon.setAttribute("data-lucide", "sun");
      }
      localStorage.setItem("armenia_tour_theme", "dark");
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.documentElement.classList.contains("light");
      applyTheme(isLight ? "dark" : "light");
    });
  }

  let isDragging = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let velX = 0;
  let lastX = 0;
  let lastTime = 0;
  let lastInteractionTime = Date.now();
  let currentSpeed = 1.0;
  const targetSpeed = 1.0;

  function initCarouselInteraction() {
    const marquee = document.getElementById("tours-marquee");
    if (!marquee) return;

    marquee.addEventListener("mousedown", (e) => {
      if (activeViewMode !== "carousel") return;
      isDragging = true;
      startX = e.pageX - marquee.offsetLeft;
      scrollLeftStart = marquee.scrollLeft;
      velX = 0;
      lastX = e.pageX;
      lastTime = Date.now();
      lastInteractionTime = Date.now();
      currentSpeed = 0;
      marquee.style.scrollBehavior = "auto";
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        lastInteractionTime = Date.now();
      }
    });

    marquee.addEventListener("mouseleave", () => {
      if (isDragging) {
        isDragging = false;
        lastInteractionTime = Date.now();
      }
    });

    marquee.addEventListener("mousemove", (e) => {
      if (!isDragging || activeViewMode !== "carousel") return;
      e.preventDefault();
      const x = e.pageX - marquee.offsetLeft;
      const walk = (x - startX) * 1.5;
      marquee.scrollLeft = scrollLeftStart - walk;

      const now = Date.now();
      const elapsed = now - lastTime;
      if (elapsed > 0) {
        velX = (e.pageX - lastX) / elapsed * 15;
      }
      lastX = e.pageX;
      lastTime = now;
      lastInteractionTime = Date.now();
    });

    marquee.addEventListener("touchstart", (e) => {
      if (activeViewMode !== "carousel") return;
      isDragging = true;
      startX = e.touches[0].pageX - marquee.offsetLeft;
      scrollLeftStart = marquee.scrollLeft;
      velX = 0;
      lastX = e.touches[0].pageX;
      lastTime = Date.now();
      lastInteractionTime = Date.now();
      currentSpeed = 0;
      marquee.style.scrollBehavior = "auto";
    }, { passive: true });

    marquee.addEventListener("touchend", () => {
      if (isDragging) {
        isDragging = false;
        lastInteractionTime = Date.now();
      }
    });

    marquee.addEventListener("touchmove", (e) => {
      if (!isDragging || activeViewMode !== "carousel") return;
      const x = e.touches[0].pageX - marquee.offsetLeft;
      const walk = (x - startX) * 1.5;
      marquee.scrollLeft = scrollLeftStart - walk;

      const now = Date.now();
      const elapsed = now - lastTime;
      if (elapsed > 0) {
        velX = (e.touches[0].pageX - lastX) / elapsed * 15;
      }
      lastX = e.touches[0].pageX;
      lastTime = now;
      lastInteractionTime = Date.now();
    }, { passive: true });

    function animateCarousel() {
      if (activeViewMode === "carousel" && marquee.children.length > 0) {
        const timeSinceInteraction = Date.now() - lastInteractionTime;

        if (!isDragging) {
          if (Math.abs(velX) > 0.1) {
            marquee.scrollLeft -= velX;
            velX *= 0.94;  
          } else {
            if (timeSinceInteraction > 6000) {
              currentSpeed = Math.min(targetSpeed, currentSpeed + 0.02);
            } else {
              currentSpeed = Math.max(0, currentSpeed - 0.05);
            }

            if (currentSpeed > 0) {
              marquee.scrollLeft += currentSpeed;
            }
          }

          const maxScroll = marquee.scrollWidth / 3;
          if (marquee.scrollLeft >= maxScroll * 2) {
            marquee.scrollLeft -= maxScroll;
          } else if (marquee.scrollLeft <= 0) {
            marquee.scrollLeft += maxScroll;
          }
        }
      }
      requestAnimationFrame(animateCarousel);
    }
    animateCarousel();
  }

  renderTourCards();
  initCarouselInteraction();
  renderTeamBento();
  renderTestimonials();
  startReviewRotation();

  window.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".glass-shape");
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    shapes.forEach((shape, idx) => {
      const speed = (idx + 1) * 35;
      shape.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px) rotate(${mouseX * 20}deg)`;
    });
  });


  changeLanguage(currentLang);
});
