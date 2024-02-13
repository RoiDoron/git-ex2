'use strict'


var gBallSize = 100

function onBallClick(btn){
    gBallSize +=50
    var innerText=gBallSize
    gBallSize +='px'
    btn.style.width = gBallSize
    btn.style.height = gBallSize
    btn.innerText=innerText

}