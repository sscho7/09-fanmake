basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 27) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
    } else {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
