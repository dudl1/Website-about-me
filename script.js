const valery_photo = document.querySelector(".valery_photo");
const menu = document.querySelector(".menu");

const valery_burger = document.querySelector(".valery_burger"),
burder_close = document.querySelector(".burder_close");

const my_stack_json = [
    {
        img_url: "icons/web.png",
        title: "Вёрстка сайтов",
        more: "Занимаюсь вёрсткой сайтов – HTML (включая Pug и Haml) и CSS (включая SCSS; Bootstrap, Tailwind, UIKit и другие), Javascript."
    },
    {
        img_url: "icons/js.png",
        title: "Javascript",
        more: "Использую как чистый Javascript так и технологии на его основе: Vue.js, Nodejs, Mithril.js, Transformers.js, Playcanvas, Brain.js. Реже всего Assemblyscript (Webassembly)."
    },
    {
        img_url: "icons/dart.png",
        title: "Dart",
        more: "Использую Flutter для создания в первую очередь Android приложений, а также Web приложений."
    },
    {
        img_url: "icons/python.png",
        title: "Python",
        more: "В основном использую: Huggingface, Google colab, Pytorch, SpaCy. Точно настраивал - LLM модели (Mamba, Facebook, GPT) и NER модель (SpaCy)."
    },
    {
        img_url: "icons/supabase.png",
        title: "Supabase",
        more: "Настраиваю базу данных - регистрация пользователей, отправка сообщений и картинок в реальном времени, и так далее. Редко работаю с Firebase."
    },
    {
        img_url: "icons/figma.png",
        title: "Figma",
        more: "Создаю Web и Android интерфесы."
    },
    {
        img_url: "icons/github_light.png",
        title: "Github",
        more: "Использую для хранения проектов. Знаю базовые команды git. Иногда использую Github pages."
    }
];

const blok_stack = document.querySelector('.blok_stack');

my_stack_json.forEach(item => {
    blok_stack.innerHTML += `
        <div class="blok_stack-skill">
            <div class="header">
                <img class="image" src="${item.img_url}" alt="">
                <span class="title">${item.title}</span>
                <div class="svg_more">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>
                </div>
            </div>
            <div class="more">
                <span>${item.more}</span>
            </div>
        </div>
    `;
});


const blok_stack_skill = document.querySelectorAll(".blok_stack-skill .header");

blok_stack_skill.forEach(header => {

    header.addEventListener('click', () => {
        const blok = header.parentElement;
        
        document.querySelectorAll('.blok_stack-skill').forEach(item => {
            if (item !== blok) {
                item.classList.remove('active');
            }
        });

        blok.classList.toggle('active');
    });
});


const my_stack = document.querySelector(".menu > .my_stack");
const bloks = document.querySelector(".bloks");

const burger_svg = document.querySelector(".burger_svg");
const close_svg = document.querySelector(".close_svg");

my_stack.onclick = function() {
    menu.classList.remove("active");
    valery_burger.classList.remove("active");

    bloks.classList.add("active");

    burger_svg.classList.add("active");
    close_svg.classList.add("active");

    gsap.to(".blok_stack-skill", {
        y: 7,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.inOut"
    });
}


valery_burger.onclick = function() {
    if (!bloks.classList.contains("active")) {
        this.classList.add("active");
        menu.classList.add("active");
    } else {
        gsap.to(".blok_stack-skill", {
            y: 14,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.inOut"
        });

        setTimeout(() => {
            burger_svg.classList.remove("active");
            close_svg.classList.remove("active");
            bloks.classList.remove("active");
        }, 1300);
    }
}

burder_close.onclick = function()
{
    valery_burger.classList.remove("active");
    menu.classList.remove("active");
}