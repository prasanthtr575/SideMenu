/* Side Menu */
var currentElement = null;

var moveDetail = function() {
   var detail = document.querySelector('.detail');
   
   if(detail.dataset.sidemenu === "close") {
       detail.style.setProperty("-webkit-animation", "moveRight 0.5s");
       detail.style.left = "320px";
       detail.dataset.sidemenu = "open";
   } else {
       detail.style.setProperty("-webkit-animation", "moveLeft 0.5s");
       detail.style.left = "0px";
       detail.dataset.sidemenu = "close";
   }
}

var pickColor = function(element) {
    currentElement.style.setProperty("background-color", "");
    element.style.setProperty("background-color", "#800000");
    document.querySelector('.detail').style.setProperty("background-color", '#'+element.lastChild.id.substring(3,9));
    currentElement = element;
}