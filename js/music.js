alert('点击确定后再次点击屏幕任意处收听音乐')
function toggleSound() {
    var music = document.getElementById('touchstart')
    if (music.paused) {
        music.paused = false
        music.play()
    }
}
setInterval('toggleSound()', 1)
