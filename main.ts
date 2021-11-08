let Photocell_Sensor = 0
basic.forever(function () {
    Photocell_Sensor = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Photocell_Sensor)
    if (Photocell_Sensor > 250) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # .
            . # # . .
            # # . . .
            `)
    }
})
