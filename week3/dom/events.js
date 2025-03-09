//Eventistener VS eventHandler
//eventHandler
let btn = document.getElementById("btn")
btn.onclick = function(){
    console.log("button clicked")
}
//element.onClick/ .onEvent= function
//eventListener
let btn = document.getElementById("btn")
btn.addEventListener("click",function (){
    console.log("button clicked")
})
//addEventListener(event,function)

function ninah(){
    console.log("hello")
};

