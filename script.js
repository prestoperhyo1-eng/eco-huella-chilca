// Navegación entre secciones
document.querySelectorAll('.nav-btn, .cta-row button, .card .primary').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const target = btn.dataset.target;
    if(target) showPage(target);
  })
});

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(n=>n.classList.toggle('active', n.dataset.target===id));
  window.scrollTo({top:0,behavior:'smooth'});
}

// CTA buttons inside cards (some have same data-target)
document.querySelectorAll('button[data-target]').forEach(b=>{
  b.addEventListener('click', ()=> showPage(b.dataset.target));
});

// Accordion behavior
document.querySelectorAll('.acc-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const panel = btn.nextElementSibling;
    const isOpen = panel.style.display === 'block';
    document.querySelectorAll('.acc-panel').forEach(p=>p.style.display='none');
    panel.style.display = isOpen ? 'none' : 'block';
  })
});

// Gallery modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.querySelector('.modal-caption');
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click', ()=> openModal(img));
  img.addEventListener('keydown', (e)=>{ if(e.key==='Enter') openModal(img); });
});
function openModal(img){
  modalImg.src = img.src;
  modalCaption.textContent = img.alt || '';
  modal.classList.remove('hidden');
}
document.querySelector('.modal .close').addEventListener('click', ()=> modal.classList.add('hidden'));
modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.classList.add('hidden'); });

// Service worker registration for PWA
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js')
    .then(()=>console.log('Service Worker registrado.'))
    .catch(err=>console.warn('SW error', err));
}

// Small accessibility: allow nav via keyboard
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') document.querySelectorAll('.modal').forEach(m=>m.classList.add('hidden'));
});
