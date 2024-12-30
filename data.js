document.addEventListener('DOMContentLoaded', function () {
    // URL вашего локального сервера
    const serverUrl = 'http://localhost:3000/data';

    // Запрашиваем данные с сервера
    fetch(serverUrl)
        .then(response => response.json())
        .then(data => {
            // Вставляем данные в нужный блок
            const portfolioBlock = document.querySelector('.blok_stack.my_portfolio');
            if (portfolioBlock) {
                portfolioBlock.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Ошибка при получении данных с сервера:', error);
        });
});
