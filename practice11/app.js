const back=document.querySelector("body");
back.style.backgroundColor="black";

/*
function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },2000);
    });
}

let ace1=getData(123);



//for condition of resolve, we use promise.then

const getPromise=()=>{
   return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
    })
};

let promise=getPromise();
promise.then((res)=>{
    console.log("result:",res);
})




//for condition of reject, we use promise.catch

const getPromise2=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am another Promise");
        reject("failed");
    });
};

let promise2=getPromise2();
promise2.catch((err)=>{
    console.log("Error:",err);
});

*/

/*
//promise with delay

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("success");
        },1000)
    });
};

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("success");
        },1000)
    });
};

console.log("Fetching Data1:");
const p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("Fetching Data2....")
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });

});

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Call Back",dataId);
            resolve("call success");
        },5000)
    });
};

*/

/*
let a1=getData(1);
a1.then((res)=>{
    console.log(res);
});

*/

/*
getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
    });
});

getData(1)
.then((res)=>{
    console.log(res);
    return getData(2);
})
.then((res)=>{
    console.log(res,"2");
});

*/

//Aaync and await

function gett(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{        
            console.log("Iam async",data);
            resolve("await");
    },5000);
    })
};

/*
async function getWeatherData(){
    await gett(1);
    await gett(2);
};

getWeatherData();

*/

// In order to auto execute the above code using async we use IIFE
//IIFE: Immediately Invoked Function Expression....(function)();

(async function getWeatherData(){
    await gett(1);
    await gett(2);
})();