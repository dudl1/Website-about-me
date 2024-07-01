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


    setTimeout(()=> {

        const letters = document.querySelectorAll('#valery_name .letter');
        const images = document.querySelectorAll('#valery_image .image');
    
        let previousIndex = -1;

        function animateLetterAndShowImage() {
            if (previousIndex !== -1) {
                // Восстановить предыдущую букву и изображение
                gsap.to(letters[previousIndex], { opacity: 1, duration: 1 });
                gsap.to(images[previousIndex], { opacity: 0, duration: 1 });
            }

            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * letters.length);
            } while (randomIndex === previousIndex); // Избегаем повторного выбора того же индекса

            const selectedLetter = letters[randomIndex];
            const correspondingImage = images[randomIndex];

            // Анимировать текущую букву и изображение
            gsap.to(selectedLetter, { opacity: 0, duration: 1, onComplete: () => {
                gsap.to(correspondingImage, { opacity: 1, duration: 1 });
            }});

            // Обновить индекс предыдущей анимации
            previousIndex = randomIndex;
        }

        setInterval(animateLetterAndShowImage, 2000);

    }, 1500)
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