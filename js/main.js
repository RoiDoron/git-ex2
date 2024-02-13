'use strict'


var gBallSize = 100

function onBallClick(ball) {
    const maxDiameter = ball.dataset.size

    if (gBallSize < maxDiameter) {
        gBallSize += getRandomInt(20, 60)
    } else gBallSize = 100


    ball.style.width = gBallSize + 'px'
    ball.style.height = gBallSize + 'px'
    ball.style.backgroundColor = getRandomColor()

    ball.innerText = gBallSize

}

function onBallClick2() {
    const elBall1 = document.querySelector('div.ball')
    const elBall2 = document.querySelector('div.ball2')

    onBallClick(elBall1)
    onBallClick(elBall2)
}

function onBallClick3() {
    const elBall1 = document.querySelector('div.ball')
    const elBall2 = document.querySelector('div.ball2')

    BallShrink(elBall1)
    BallShrink(elBall2)

}

function BallShrink(ball) {

    if (gBallSize > 100) {
        gBallSize -= getRandomInt(20, 60)
        if (gBallSize < 100) gBallSize = 100
    }

    ball.style.width = gBallSize + 'px'
    ball.style.height = gBallSize + 'px'

    ball.innerText = gBallSize

}

function onBallClick4(){
    const color = getRandomColor()
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = color

}