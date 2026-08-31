const progress = document.querySelector('.scroll-progress');
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.product-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity .7s ease, transform .7s ease, box-shadow .4s';
  observer.observe(card);
});

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('transitionend', () => {
    if (card.classList.contains('in-view')) card.style.transform = '';
  });
});

const style = document.createElement('style');
style.textContent = '.product-card.in-view{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
