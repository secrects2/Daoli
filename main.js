import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // 1. Fix hidden elements: remove inline opacity:0 / transform / clip-path
  //    These were set as GSAP animation initial states but GSAP is not loaded
  // ============================================================
  const allElements = document.querySelectorAll('[style]');
  allElements.forEach(el => {
    const style = el.getAttribute('style') || '';

    // Skip the mobile menu overlay (it should stay hidden)
    if (el.closest('.fixed.inset-0.z-40.lg\\:hidden')) return;

    // Check if this element has opacity:0 or clip-path:circle(0%) in inline style
    const hasHiddenOpacity = /opacity:\s*0[;\s]/.test(style) || style.endsWith('opacity: 0');
    const hasClipPath = /clip-path:\s*circle\(0%/.test(style);
    const hasHiddenTransform = /transform:\s*translate\(/.test(style) || /rotateX\(90deg\)/.test(style) || /rotateY\(/.test(style);

    if (hasHiddenOpacity || hasClipPath) {
      // Add CSS class for scroll animation
      el.classList.add('scroll-reveal');
      // Clean inline styles that hide the element
      let cleanStyle = style
        .replace(/opacity:\s*0[^;]*/g, 'opacity: 0')
        .replace(/clip-path:\s*circle\([^)]*\)/g, 'clip-path: circle(100% at 50% 50%)')
        .replace(/transform:\s*[^;]*/g, 'transform: none');

      // Keep only non-animation styles, remove the problematic inline styles entirely
      el.removeAttribute('style');

      // Preserve font-family if it was set
      if (/font-family/.test(style)) {
        const fontMatch = style.match(/font-family:\s*[^;]+/);
        if (fontMatch) {
          el.style.cssText = fontMatch[0] + ';';
        }
      }
    }
  });

  // ============================================================
  // 2. Intersection Observer for scroll reveal animation
  // ============================================================
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el, index) => {
    // Add stagger delay based on sibling position
    const parent = el.parentElement;
    if (parent) {
      const siblings = Array.from(parent.querySelectorAll(':scope > .scroll-reveal'));
      const siblingIndex = siblings.indexOf(el);
      if (siblingIndex > 0) {
        el.style.transitionDelay = `${siblingIndex * 0.1}s`;
      }
    }
    revealObserver.observe(el);
  });

  // ============================================================
  // 3. Mobile Menu Toggle
  // ============================================================
  const menuBtn = document.querySelector('button.lg\\:hidden');
  const mobileMenu = document.querySelector('.fixed.inset-0.z-40.lg\\:hidden');
  const menuPanel = mobileMenu?.querySelector('.absolute.top-20');
  let isMenuOpen = false;

  if (menuBtn && mobileMenu && menuPanel) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove('opacity-0', 'invisible');
        menuPanel.classList.remove('-translate-y-4', 'opacity-0');
      } else {
        mobileMenu.classList.add('opacity-0', 'invisible');
        menuPanel.classList.add('-translate-y-4', 'opacity-0');
      }
    });

    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('opacity-0', 'invisible');
        menuPanel.classList.add('-translate-y-4', 'opacity-0');
      });
    });
  }

  // ============================================================
  // 4. Navbar Scroll Effect
  // ============================================================
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.remove('bg-transparent', 'py-4');
        nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
      } else {
        nav.classList.add('bg-transparent', 'py-4');
        nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
      }
    });
  }

  // ============================================================
  // 5. Animated counters for stats
  // ============================================================
  const counters = document.querySelectorAll('[style*="font-family: Fraunces"]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        // Only animate number-like content
        const numMatch = text.match(/^([\d,]+)/);
        if (numMatch) {
          const targetNum = parseInt(numMatch[1].replace(/,/g, ''), 10);
          if (targetNum > 0 && targetNum <= 100000) {
            animateCounter(el, targetNum, text.replace(numMatch[1], ''));
          }
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  function animateCounter(el, target, suffix) {
    const duration = 1500;
    const start = performance.now();
    const format = target >= 1000;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = (format ? current.toLocaleString() : current) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ============================================================
  // 6. SVG Line Chart Animation
  // ============================================================
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const svg = entry.target;
        const area = svg.querySelector('.chart-area');
        const line = svg.querySelector('.chart-line');
        const points = svg.querySelectorAll('.chart-point');

        if (area) area.style.opacity = '1';
        if (line) line.style.strokeDashoffset = '0';
        points.forEach(point => {
          point.style.transform = 'scale(1)';
        });

        chartObserver.unobserve(svg);
      }
    });
  }, { threshold: 0.5 });

  const chartSvg = document.querySelector('.chart-line')?.closest('svg');
  if (chartSvg) {
    chartObserver.observe(chartSvg);
  }
});
