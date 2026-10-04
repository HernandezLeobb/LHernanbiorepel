const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

// Animación suave al aparecer las tarjetas.
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
},{threshold:.12});
document.querySelectorAll('.card,.plant,.lab,.evidence').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
document.addEventListener('scroll',()=>{
  document.querySelectorAll('.show').forEach(el=>{el.style.opacity='1';el.style.transform='translateY(0)'});
});
