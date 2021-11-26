function changeUser(){
  var name = document.querySelector(".user h1")
  name.innerHTML = `Jack Skeleton`
}
function nameRemove(element){
    element.parentNode.remove()
    numberOfConnectionRequest.innerHTML--
}
function addConnection(element){
    element.parentNode.remove()
    numberOfConnectionRequest.innerHTML--
    numberOfConnections.innerHTML++
}