 //IIFE - Immediately Invoke Function Expression 
( function(){

    function start()
{
    let firstHeading= document.getElementById("firstHeading");
    firstHeading.textContent="Good Bye";
    firstHeading.style.fontWeight= " bold";



}
window.addEventListener("load",start);


})();
