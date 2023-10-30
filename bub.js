function make_bubble()
{
    var clutter="";
for(var i=1;i<=85;i++){
    var run=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${run}</div>`;
}
document.querySelector("#bottom").innerHTML=clutter;
}
var time=60;
function timer(){
    var t= setInterval(function()
    {
        if(time>0){
            time--;
            document.querySelector("#timing").textContent=time;
            
        }
        else{
            
            document.querySelector("#bottom").textContent=`Game over\n Final Score ${score}`;
            clearInterval(t);
        }
       
    },400)}
var h=0;
function hitting(){
     h=Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent=h;

}
var score=0;
function scoring(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#bottom").addEventListener('click',function(dets){
    var click=Number(dets.target.textContent);
    // console.log(click)
    if(click==h){
        make_bubble();
        scoring();
        hitting();
    }
})
make_bubble();
timer();
hitting();

