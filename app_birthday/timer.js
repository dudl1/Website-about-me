function startCountdown(targetTime) {
    const timerElement = document.querySelector("#timer .count")

    const timerDiv = document.getElementById('timer')
    const Layers_Main = document.querySelector('.Layers_Main')

    let previousText = ""
    
    function updateTimer() {
        const currentTime = new Date()
        const remainingTime = targetTime - currentTime

        if (remainingTime <= 0) {
            timerElement.textContent = "Время истекло"
            timerDiv.classList.add('active')
            Layers_Main.classList.add('active')
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
targetTime.setHours(0, 30, 0, 0) // 20 30
startCountdown(targetTime)