'use strict'


var gBallSize = 100

function onBallClick(btn){
    if(gBallSize<400){
    gBallSize +=getRandomInt(20,60)
    }else gBallSize = 100

    var innerText=gBallSize

    btn.style.width = gBallSize+'px'
    btn.style.height = gBallSize+'px'
    
    btn.innerText=innerText

}