let change=document.querySelector("h2");
console.dir(change.innerText);

change.innerText=change.innerText + " from Apna College!"

let divs=document.querySelectorAll(".cl");
divs[0].innerText="hello";
divs[1].innerText="from";
divs[2].innerText="Apna College";

//  OR
i=0;
for(let div of divs){
    div.innerText=`Div number is ${i}`;
    i++
}

let arr=document.querySelector("div");
let ar2=arr.getAttribute("class");
console.log(ar2);

console.log(arr.setAttribute("class","newClass"));

let new_H=document.createElement("h1");
new_H.innerHTML="<i>I need more learning</i>";
document.querySelector("body").prepend(new_H);

let new_r=document.createElement("h2")
new_r.innerHTML="I need you";
let ii=document.querySelector(".cl");
ii.prepend(new_r);

new_H.remove();

