'use strict'


var gBallSize = 100

function onBallClick(btn){
    const maxDiameter = btn.dataset.size
    
    if(gBallSize<maxDiameter){
    gBallSize +=getRandomInt(20,60)
    }else gBallSize = 100

    var innerText=gBallSize

    btn.style.width = gBallSize+'px'
    btn.style.height = gBallSize+'px'
    btn.style.backgroundColor = getRandomColor()
    
    btn.innerText=innerText

}