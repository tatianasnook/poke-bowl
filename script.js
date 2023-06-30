gsap.from('.photo', {xPercent: -100, duration: 3, opacity: 0})
gsap.from('.text', {xPercent: 100, duration: 3, opacity: 0})
gsap.from('.header', {y: -100, ease:"bounce", duration: 2, delay: 1.5, opacity: 0})

gsap.registerPlugin(ScrollTrigger);

gsap.from(".item", {
  scrollTrigger: {
    trigger: ".item",
    toggleActions: "restart reset restart reset"
},
  duration: 1,
  opacity: 0,
  stagger: 1
})

gsap.from(".arrow", {
  scrollTrigger: {
    trigger: ".arrow",
    toggleActions: "restart reset restart reset"
  },
  delay: 1,
  duration: 0.5,
  opacity: 0,
  stagger: 1
})

gsap.from('.contact h2', {
  scrollTrigger: {
    trigger: ".contact h2",
    start: "top 70%",
    toggleActions: "restart reset restart reset"
  },
  opacity: 0,
  duration: 1,
  rotation: 360
})


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.link').forEach((n) => {
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
})

let links = document.querySelectorAll('.link')
for(let i = 0; i < links.length; i++){
  links[i].onclick = function(){
    document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
  }
}