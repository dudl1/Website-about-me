const video_mini = document.querySelector('.video_mini')
const video = document.querySelector('video')

const play = document.querySelector('.play')

video_mini.onclick = function() {
    this.classList.toggle('active')
    video.classList.toggle('active')

    play.classList.toggle('active')

    if (video.paused) {
        video.play() // Воспроизводим видео
    } else {
        video.pause() // Ставим на паузу
    }
}