/* document.querySelector("button").addEventListener("click",function (){
    alert("click")
});
 */
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    alert("click")
});
}