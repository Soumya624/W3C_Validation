const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

// registering scroll trigger plugin
gsap.registerPlugin(ScrollTrigger)

// Defining a scroll trigger based timeline to animate the fading in and out of the gallery tiles
gsap.timeline({ scrollTrigger: {
    trigger: '.scroll-fade-in-out',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play complete none reverse'
}})
.from('.img', { 
    opacity: 0,
    scale: 0.9,
    stagger: 0.3
})

// defining a scroll based trigger timeline to animate the rolling of the services icons
gsap.timeline({ scrollTrigger: {
    trigger: '.clearfix',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play reverse play reverse'
}})
.fromTo('.icon', {
    opacity: 0,
    x: 600,
}, {
    opacity: 1,
    rotation: 360,
    x: 'auto',
    ease: 'power2.inOut',
    stagger: 0.3
})
.fromTo('.service--name', { opacity:0 }, { opacity: 1 }, "<")