let aa=document.querySelector("#clk");
let color="dark";
aa.addEventListener("click",()=>{
    if (color==="dark"){
        color="white";
        console.log("dark");
        document.querySelector("body").style.backgroundColor="red";
    }
    else{
        color="dark";
        console.log("white");
        document.querySelector("body").style.backgroundColor="white";
    }
});