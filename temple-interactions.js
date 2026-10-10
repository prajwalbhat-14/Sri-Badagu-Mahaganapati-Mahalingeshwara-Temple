const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateNavigationLanguage = () => {
  const language = document.documentElement.lang;
  document.querySelectorAll('.temple-nav a').forEach(link => {
    link.textContent = link.dataset[language] || link.dataset.en;
  });
};

updateNavigationLanguage();
document.documentElement.classList.add('reveal-ready');

if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section > *').forEach((element, index) => {
    element.classList.add('reveal');
    element.style.animationDelay = `${Math.min(index * 55, 220)}ms`;
    revealObserver.observe(element);
  });

} else {
  document.querySelectorAll('.section > *').forEach(element => {
    element.classList.add('is-visible');
  });
}

let navigationUpdatePending = false;
const updateActiveNavigation = () => {
  navigationUpdatePending = false;
  const threshold = Math.min(window.innerHeight * 0.38, 120);
  let activeSection = null;

  document.querySelectorAll('main section[id]').forEach(section => {
    if (section.getBoundingClientRect().top <= threshold) activeSection = section;
  });

  document.querySelectorAll('.temple-nav a').forEach(link => {
    if (link.hash === `#${activeSection?.id}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const scheduleNavigationUpdate = () => {
  if (navigationUpdatePending) return;
  navigationUpdatePending = true;
  window.requestAnimationFrame(updateActiveNavigation);
};

window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
window.addEventListener('resize', scheduleNavigationUpdate);
scheduleNavigationUpdate();

document.addEventListener('click', event => {
  const button = event.target.closest('.btn');
  if (!button) return;

  button.classList.remove('is-activated');
  void button.offsetWidth;
  button.classList.add('is-activated');

  if (!reducedMotion) {
    const bounds = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${event.clientX ? event.clientX - bounds.left : bounds.width / 2}px`;
    ripple.style.top = `${event.clientY ? event.clientY - bounds.top : bounds.height / 2}px`;
    button.append(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }

  window.setTimeout(() => button.classList.remove('is-activated'), 220);
});

document.getElementById('language')?.addEventListener('change', () => {
  updateNavigationLanguage();
  document.body.classList.remove('language-changed');
  void document.body.offsetWidth;
  document.body.classList.add('language-changed');
  window.setTimeout(() => document.body.classList.remove('language-changed'), 520);
});
