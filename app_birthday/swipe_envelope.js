const envelope = document.querySelector('.envelope');
let startY = 0; // Начальная позиция касания
let scale = 1; // Стартовый масштаб

// Добавляем плавную анимацию через CSS
envelope.style.transition = 'transform 0.3s ease-out';

// Начало касания
document.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY; // Запоминаем начальную позицию по Y
    envelope.style.transition = 'none'; // Отключаем анимацию на время свайпа
});

// Движение пальца
document.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY; // Текущая позиция пальца по Y
    const deltaY = startY - currentY; // Разница в движении
    let newScale = 1 + deltaY / 300; // Рассчитываем новый scale (делим на 300 для плавности)

    // Ограничиваем scale в пределах 1 и 2
    if (newScale < 1) newScale = 1;
    if (newScale > 2) newScale = 1.;

    // Применяем новый scale с помощью CSS transform
    envelope.style.transform = `scale(${newScale})`;
});

// Завершение касания
document.addEventListener('touchend', () => {
    envelope.style.transition = 'transform 0.3s ease-out'; // Включаем плавную анимацию
    envelope.style.transform = 'scale(1)'; // Возвращаем изначальный размер
});
