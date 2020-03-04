const scene1 = document.getElementById('scene1');
const headerEmpArg = document.querySelector(".empanadas-argentinas");
const nav = document.querySelector("nav");
const logo = document.querySelector(".argentina");
const bgBlue = document.querySelector(".argentina2");
const empSubTitle = document.querySelector(".emp-sub-title");
const empTitle = document.querySelector(".emp-tipo-title");
var parallaxInstance = new Parallax(scene1);


let mainPage = gsap.timeline();
mainPage.add(gsap.from(headerEmpArg, {
    duration: 1,
    x: 500,
    ease: "power1.out"
}));
mainPage.from(nav, {
    duration: 1,
    y: -10,
    ease: "power1.out"
}, "-=1");
mainPage.fromTo(logo, {
    duration: 4,
    opacity: 0,
    ease: "power1.out"
}, {
    duration: 4,
    opacity: 1,
    ease: "power1.out"
}, "-=2");
mainPage.fromTo(bgBlue, {
    duration: 3,
    opacity: 0,
    ease: "power1.in"
}, {
    duration: 3,
    opacity: 1,
    ease: "power1.in"
}, "-=4");

const controller = new ScrollMagic.Controller();


const scene = new ScrollMagic.Scene({
    triggerElement: ".scene-1",
    duration: "1000",
    triggerHook: 0.9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".scene-2",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".scene-3",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".scene-4",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".scene-5",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
    triggerElement: ".scene-6",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene7 = new ScrollMagic.Scene({
    triggerElement: ".scene-7",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene8 = new ScrollMagic.Scene({
    triggerElement: ".scene-8",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene9 = new ScrollMagic.Scene({
    triggerElement: ".scene-9",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene10 = new ScrollMagic.Scene({
    triggerElement: ".scene-10",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene11 = new ScrollMagic.Scene({
    triggerElement: ".scene-11",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene12 = new ScrollMagic.Scene({
    triggerElement: ".scene-12",
    duration: "1000",
    triggerHook: .9
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

const scene13 = new ScrollMagic.Scene({
    triggerElement: ".scene-13",
    duration: "1400",
    triggerHook: 1
})
    .setClassToggle("#tipo-empanadas", "move")
    .addTo(controller);

