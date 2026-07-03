/* Scroll progress bar */
const progressBar = document.getElementById('progress-bar');

/* Scroll Parallax Effects */
const avatar = document.querySelector('.avatar-wrap');
const heroText = document.querySelector('.hero-text');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollTop / scrollHeight * 100) + '%';

  /* Subtle parallax on hero elements */
  if(scrollTop < window.innerHeight) {
    if(avatar) avatar.style.transform = `translateY(${scrollTop * 0.15}px)`;
    if(heroText) heroText.style.transform = `translateY(${scrollTop * 0.08}px)`;
  }
});

/* Intersection Observer — fade-in / slide-in sections */
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('section').forEach(s => observer.observe(s));

/* Active nav highlight on scroll */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id === 'hero' ? 'hero' : entry.target.id;
        navItems.forEach(item => {
          item.classList.toggle(
            'active',
            item.getAttribute('href') === '#' + id ||
            (id === 'leadership' && item.getAttribute('href') === '#education')
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(s => navObserver.observe(s));

/* On page load, make hero visible immediately */
document.querySelector('#hero').classList.add('visible');

/* tsParticles Interactive Background */
tsParticles.load({
  id: "tsparticles",
  options: {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interact: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true
      },
      modes: { grab: { distance: 160, links: { opacity: 0.6 } } }
    },
    particles: {
      color: { value: "#6366f1" },
      links: {
        color: "#6366f1",
        distance: 140,
        enable: true,
        opacity: 0.15,
        width: 1.2
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out"
      },
      number: { density: { enable: true, width: 800, height: 800 }, value: 70 },
      opacity: { value: 0.3 },
      size: { value: 1.5 }
    },
    detectRetina: true
  }
});
