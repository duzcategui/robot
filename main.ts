function algo6 () {
    robotbit.Servo(robotbit.Servos.S7, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S7, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S7, 0)
}
function algo4 () {
    robotbit.Servo(robotbit.Servos.S5, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S5, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S5, 0)
}
function ManoDerecha () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S1, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S1, 0)
}
input.onButtonPressed(Button.A, function () {
	
})
function algo () {
    robotbit.Servo(robotbit.Servos.S2, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S2, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S2, 0)
}
function algo2 () {
    robotbit.Servo(robotbit.Servos.S3, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S3, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S3, 0)
}
function algo3 () {
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S4, 0)
}
function algo7 () {
    robotbit.Servo(robotbit.Servos.S8, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S8, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S8, 0)
}
function algo5 () {
    robotbit.Servo(robotbit.Servos.S6, 0)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S6, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S6, 0)
}
ManoDerecha()
algo()
algo2()
algo3()
algo4()
algo5()
algo6()
algo7()
basic.forever(function () {
	
})
