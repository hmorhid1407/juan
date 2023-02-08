input.onButtonPressed(Button.A, function () {
    numero_introducido += 10
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    numero_introducido = 0
    numero_a_adivinar = randint(1, 99)
})
input.onButtonPressed(Button.B, function () {
    numero_introducido += 1
})
let numero_a_adivinar = 0
let numero_introducido = 0
music.playMelody("C D E A D F G B ", 120)
basic.showIcon(IconNames.Happy)
numero_introducido = 0
basic.showString("" + (numero_introducido))
basic.forever(function () {
    basic.showString("" + (numero_introducido))
})
