const page_loading = document.querySelector(".page_loading");

document.addEventListener("DOMContentLoaded", function()
{
    page_loading.remove();

    gsap.from("header", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        stagger: 0,
        ease: "power2.inOut"
    });

    setTimeout(()=> {
        gsap.from(".letter-img", {
            y: -8,
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

        const letterImages = document.querySelectorAll('#valery_name .letter-img');

        let previousIndex = -1;

        function animateLetterAndShowImage() {
            if (previousIndex !== -1) {
                // Восстановить предыдущую букву и изображение
                const previousLetter = letterImages[previousIndex].querySelector('.letter');
                const previousImage = letterImages[previousIndex].querySelector('.image');
                gsap.to(previousLetter, { opacity: 1, duration: 1 });
                gsap.to(previousImage, { opacity: 0, duration: 1 });
            }

            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * letterImages.length);
            } while (randomIndex === previousIndex); // Избегаем повторного выбора того же индекса

            const selectedLetter = letterImages[randomIndex].querySelector('.letter');
            const correspondingImage = letterImages[randomIndex].querySelector('.image');

            gsap.to(selectedLetter, { opacity: 0, duration: 1, onComplete: () => {
                gsap.to(correspondingImage, { opacity: 1, duration: 1 });
            }});

            // Обновить индекс предыдущей анимации
            previousIndex = randomIndex;
        }

        setInterval(animateLetterAndShowImage, 2200);

    }, 500)
})