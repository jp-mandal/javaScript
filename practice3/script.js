/* 
let newButton = document.createElement("button");
newButton.innerText="click me!";
newButton.style.color="white";
newButton.style.backgroundColor="red";
document.querySelector("body").prepend(newButton);

let btn=document.querySelector(".btn");
btn.onclick=()=>{
    console.log("button was clicked!");
};

let divv=document.querySelector(".divv");
divv.onmouseover=()=>{
    console.log("hello!");
};
*/

let butt = document.querySelector(".but");
butt.addEventListener("click", (evt) => {
    console.log("btn was clicked.");
    console.log(evt);
    console.log(evt.type);
});
