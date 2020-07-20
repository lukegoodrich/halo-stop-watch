input.onButtonPressed(Button.A, function () {
    startMillis = input.runningTime()
    started = true
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    started = false
})
let currentTime = 0
let started = false
let startMillis = 0
let seconds = 0
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(10)
haloDisplay.clear()
haloDisplay.show()
basic.forever(function () {
    if (started) {
        currentTime = input.runningTime() - startMillis
        haloDisplay.clear()
        haloDisplay.setZipLedColor(Math.floor(60 * (currentTime % 1000) / 1000), kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay.setZipLedColor(Math.floor(currentTime / 1000) % 60, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
    } else {
        basic.showNumber(currentTime / 1000)
    }
})
