
const back=document.querySelector("body");
back.style.backgroundColor="black";
/*
// Asynchronous
console.log("didn't wait");
function hello(){
    console.log("hello");
}

setTimeout(hello,1000);   // 4 sec delay this is also a callback
setTimeout(hello,1000);


setTimeout(()=>{
    console.log("Hi");f
},1000);

console.log("didn't wait");

//nested loop means loop inside loop

//CallBack

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b)
}

calculator(3,5,sum);

//callback hell

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,()=>{            //this is call back hell,dificlt to understand and mange.
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5);
            });
        });
    });
});


// in order to solve callBack hell, we use promices
//PROMICES

// promice state pending,fulfilled and rejected

let promise = new Promise((resolve,reject)=>{
    console.log("I am electrical and electronics engineer,");
    resolve(123);
})

*/

function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },10000);
    });
}

let ace1=getData(123);
let ace2=getData(45678);











 

