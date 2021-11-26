function searchMessage(event){
    event.preventDefault();
    alert(`You are searching for "${searchtext.value}"`)
}
function liked(element){
    element.nextElementSibling.innerText++
}