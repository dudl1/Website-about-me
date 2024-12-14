function startCountdown(targetTime) {
    const timerElement = document.querySelector("#timer .count")
    let previousText = ""
    
    function updateTimer() {
        const currentTime = new Date()
        const remainingTime = targetTime - currentTime

        if (remainingTime <= 0) {
            timerElement.textContent = "Время истекло"
            clearInterval(timerInterval)
            return
        }

        const hours = Math.floor(remainingTime / (1000 * 60 * 60))
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

        const newText = `${hours} ч ${minutes} мин ${seconds} сек`
        if (newText !== previousText) {
            timerElement.style.opacity = "0"
            setTimeout(() => {
                timerElement.textContent = newText
                timerElement.style.opacity = "1"
            }, 200)
            previousText = newText
        }
    }
    
    updateTimer()
    const timerInterval = setInterval(updateTimer, 1000)
}

const targetTime = new Date()
targetTime.setHours(20, 30, 0, 0) // Установить цель на 20:30
startCountdown(targetTime)