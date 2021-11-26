const value = []
var operator = 0
var moreNumbers = 0
function press(element){
    if(display.innerText == 0){
        display.innerText = element
    }else if(moreNumbers != 0){
        value.push(Number(display.innerText))
        display.innerText = element
        moreNumbers = 0
    }
    else{
        display.innerText += element
    }
}
function setOP(element){
    operator = element
    moreNumbers = element
}
function calculate(){
    var answer = value[0]
    value.push(Number(display.innerText))
    for(var i = 1; i < value.length; i++){
        if(operator == `+`) {
            answer += value[i]
        }
        if(operator == `-`) {
            answer -= value[i]
        }
        if(operator == `/`) {
            answer = answer/value[i]
        }
        if(operator == `*`) {
            answer = answer*value[i]
        }
    }
    display.innerText = answer
}
function clr(){
    operator = 0
    display.innerText = 0
    moreNumbers = 0
    answer = 0
    while(value.length > 0){
        value.pop()
    }
}