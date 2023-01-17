import './scss/app.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


/***************Animation************ */

gsap.to(".column-1", {
    height: 700,
    scrollTrigger: {
        trigger: ".recom",
        start: "50",
        end: "+=50%",
        scrub: true,

    }
})

gsap.to(".column-2", {
    height: 500,
    scrollTrigger: {
        trigger: ".recom",
        start: "150",
        end: "+=50%",
        scrub: true,

    }
})

gsap.to(".column-3", {
    height: 300,
    scrollTrigger: {
        trigger: ".recom",
        start: "250",
        end: "+=50%",
        scrub: true,

    }
})