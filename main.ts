let ir = 0
BitIR.IR_callbackUserV2(function (message) {
    ir = message
    if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Up)) {
        ir = 1
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Down)) {
        ir = 2
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Left)) {
        ir = 3
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Right)) {
        ir = 4
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.SpinLeft)) {
        ir = 5
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.SpinRight)) {
        ir = 6
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Beep)) {
        ir = 7
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Power)) {
        ir = 8
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Add)) {
        ir = 9
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Zero)) {
        ir = 10
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Minus)) {
        ir = 11
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.One)) {
        ir = 12
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Two)) {
        ir = 13
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Three)) {
        ir = 14
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Four)) {
        ir = 15
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Five)) {
        ir = 16
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Six)) {
        ir = 17
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Seven)) {
        ir = 18
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Eight)) {
        ir = 19
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Nine)) {
        ir = 20
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Light)) {
        ir = 21
    }
})
basic.forever(function () {
    if (ir == 1) {
        ir = 0
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 150)
        basic.pause(100)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    } else if (ir == 2) {
        ir = 0
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Back, 150)
        basic.pause(100)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    } else if (ir == 3) {
        ir = 0
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Left, 150)
        basic.pause(100)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    } else if (ir == 4) {
        ir = 0
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Right, 150)
        basic.pause(100)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    } else if (ir == 5) {
        ir = 0
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinLeft, 150)
        basic.pause(100)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    } else if (ir == 6) {
        ir = 0
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinRight, 150)
        basic.pause(100)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    } else if (ir == 7) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (ir == 8) {
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.OFF)
    } else if (ir == 9) {
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Red)
    } else if (ir == 10) {
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Green)
    } else if (ir == 11) {
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Blue)
    } else if (ir == 12) {
        basic.showNumber(1)
    } else if (ir == 13) {
        basic.showNumber(2)
    } else if (ir == 14) {
        basic.showNumber(3)
    } else if (ir == 15) {
        basic.showNumber(4)
    } else if (ir == 16) {
        basic.showNumber(5)
    } else if (ir == 17) {
        basic.showNumber(6)
    } else if (ir == 18) {
        basic.showNumber(7)
    } else if (ir == 19) {
        basic.showNumber(8)
    } else if (ir == 20) {
        basic.showNumber(9)
    } else if (ir == 21) {
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.White)
    }
})
