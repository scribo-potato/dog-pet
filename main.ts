input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    record.startRecording(record.BlockingState.Blocking)
    basic.showIcon(IconNames.Heart)
    record.playAudio(record.BlockingState.Blocking)
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
input.onButtonPressed(Button.A, function () {
    soundExpression.yawn.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Heart)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
soundExpression.yawn.playUntilDone()
basic.showIcon(IconNames.Asleep)
