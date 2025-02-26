let n=document.querySelector(".name");
let rbox=document.querySelector(".res");
n.addEventListener("input",function(){
    rbox.innerText=`Hello!! ${n.value}`;
})
