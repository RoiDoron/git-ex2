'use strict'


var gBallSize = 100

function onBallClick(ball){
    const maxDiameter = ball.dataset.size
    
    if(gBallSize<maxDiameter){
    gBallSize +=getRandomInt(20,60)
    }else gBallSize = 100

    var innerText=gBallSize

    ball.style.width = gBallSize+'px'
    ball.style.height = gBallSize+'px'
    ball.style.backgroundColor = getRandomColor()
    
    ball.innerText=innerText

}

function onBallClick2(ball){
const elBall1 = document.querySelector('div.ball')
const elBall2 = document.querySelector('div.ball2')
onBallClick(elBall1)
onBallClick(elBall2)
}