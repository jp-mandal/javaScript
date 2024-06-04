const back=document.querySelector("body");
back.style.backgroundColor="black";

const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");


//APIA(Application Programming Interface)


const URL="https://cat-fact.herokuapp.com/facts";

const getFacts=async()=>{
    console.log("Getting data...");
    let response=await fetch(URL);
    console.log(response);          //gives output in json format and we have to convert it to javascript format
    let data=await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].text);
    factPara.innerText=data[0].text;
    factPara.style.color="white";
};


btn.addEventListener("click",getFacts);

//Above code can also be done as

/*

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)={
        console.log(data);
        fetchPara.innerText=data[2].text;
    });
};

btn.addEventListner("click",getFacts);

*/