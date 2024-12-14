const envelope = document.querySelector('.envelope');
const svgElement = document.querySelector('.envelope .top svg');
let startY = 0;
let scale = 1;

const information_text = document.querySelector('.information_text')
const information_swipe = document.querySelector('.information_swipe')

const Layers_Main = document.querySelector('.Layers_Main')
const Open_Envelope = document.querySelector('.Open_Envelope')

envelope.style.transition = 'transform 0.3s ease-out';
svgElement.style.transition = 'bottom 0.3s ease, opacity 0.3s ease, transform 0.3s ease';

document.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    envelope.style.transition = 'none';
    svgElement.style.transition = 'none'; // Отключаем анимацию для svg на время перемещения
});

document.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY;
    const deltaY = startY - currentY;
    let newScale = 1 + deltaY / 300;

    if (newScale < 1) newScale = 1;
    if (newScale > 1.2) newScale = 1.2;

    if (newScale >= 1.15) {
        Layers_Main.classList.add('active2')

        setTimeout(()=> {
            Open_Envelope.classList.add('active')
        }, 2000)
    }

    envelope.style.transform = `scale(${newScale})`;

    // Для svg элементы теперь ограничим движение в пределах определенного диапазона
    const maxBottom = 105;
    const minBottom = 90;
    const minOpacity = 0;
    const maxOpacity = 1;
    const minRotateX = 30;

    const newBottom = Math.min(maxBottom, Math.max(minBottom, 90 + deltaY / 5));
    const newOpacity = Math.min(maxOpacity, Math.max(minOpacity, deltaY / 100));
    const newRotateX = Math.min(minRotateX, Math.max(2));

    svgElement.style.bottom = `${newBottom}px`;
    svgElement.style.opacity = `${newOpacity}`;
    svgElement.style.transform = `rotateX(${newRotateX}deg)`;
});

document.addEventListener('touchend', () => {
    envelope.style.transition = 'transform 0.3s ease-out'; // Включаем плавную анимацию для envelope
    envelope.style.transform = 'scale(1)'; // Возвращаем изначальный размер

    // Завершаем анимацию для svg
    svgElement.style.transition = 'bottom 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
    svgElement.style.bottom = '80px';  // Исходное положение
    svgElement.style.opacity = '0';     // Исходная непрозрачность
    svgElement.style.transform = 'rotateX(30deg)'; // Исходное вращение

    // Включаем плавную анимацию для svg
    svgElement.style.transition = 'bottom 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
});
