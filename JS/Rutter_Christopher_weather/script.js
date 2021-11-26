function removeCookie(){
    var cookie = document.querySelector('.cookie')
    cookie.remove()
}
function convert(){
    var redvalue = document.querySelectorAll(".red")
    var bluevalue = document.querySelectorAll('.blue')
    if(temperatureUnits.value == `F`){
        for(var i = 0; i<redvalue.length; i++){
            redvalue[i].innerText = (redvalue[i].innerText * 1.8 + 32).toFixed(2)
        }
        for(var l = 0; l<bluevalue.length; l++){
            bluevalue[l].innerText = (bluevalue[l].innerText * 1.8 + 32).toFixed(2)
        }
    }else{
        for(var j = 0; j<redvalue.length; j++){
            redvalue[j].innerText = ((redvalue[j].innerText-32) * 5/9 ).toFixed(2)
        }
        for(var k = 0; k<bluevalue.length; k++){
            bluevalue[k].innerText = ((bluevalue[k].innerText - 32) * 5/9).toFixed(2)
        }
    }
}