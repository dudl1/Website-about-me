document.addEventListener("DOMContentLoaded", function()
{
    gsap.from("header", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        stagger: 0,
        ease: "power2.inOut"
    });

    setTimeout(()=> {
        gsap.from(".letter", {
            y: -10,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.inOut"
        });
    
        gsap.to(".letter", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.inOut"
        });
    }, 600)
})


const menu = document.querySelector(".menu");

const valery_burger = document.querySelector(".valery_burger"),
burder_close = document.querySelector(".burder_close");


valery_burger.onclick = function()
{
    this.classList.add("active");
    menu.classList.add("active");
}

burder_close.onclick = function()
{
    valery_burger.classList.remove("active");
    menu.classList.remove("active");
}