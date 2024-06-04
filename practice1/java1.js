/* let size=0;
let str="Apple"
for(let i of str){
    console.log(i);
    size ++;
}
console.log(size);

let student={
    name:"Rahul",
    age:18,
    Sex:"Male"
};

for(let key in student){
    console.log("key=",key,"value=",student[key]);
}

let num=5;

let guess_num=prompt("Guess the wright number.")

while(guess_num != num){
    guess_num = prompt("try again.")
}
alert("You won the game.");

let str1="My name is jp mandal";
console.log(str1[3]);

let state={
    name:"haari",
    age:34

};

console.log(`My name is ${state.name} and \n age is ${state.age-10}.`);

let str3="ball";
str3=str3.toUpperCase();
console.log(str3);
console.log(str3.slice(0,3));

let str5="hellololo";
console.log(str5.replace("lo","p"));
console.log(str5.replaceAll("lo","p"));
console.log(str5);
console.log(str5.charAt(2));
str5=str5.replace("l","p");
console.log(str5);

let nemee="JAY Praksash";
let nam="Mandal";
console.log(nemee + nam);
let combo=nemee.concat(nam);
let com=nemee.trim();
console.log(com);

let num22=[250,645,300,900,50];
for(let arr of num22){
    console.log(0.9*arr);
}

let arr2=["apple","ball","cat"];
arr2.push("elephant");
console.log(arr2);
arr2.pop();
console.log(arr2);
let arr3=arr2.slice(0,2);
console.log(arr3);
arr2.splice(1,2,"applee","ball");
console.log(arr2);

let mul=(a,b)=>{
    return a*b;
}
let arrow_fun=mul(3,2.5);
console.log(arrow_fun);     

function countVowels(val){
let count=0;
for(let check of val){
    if(check=="a"|| check=="e" || check=="i"|| check=="o"|| check=="u"){
        count++;
    }
}
console.log(count);
}

countVowels("apple"); 

arr=["apple","ball","cat","dog"];
arr.forEach(function vall(value){
    console.log(value);
});
arr.forEach((val,idx,arrr) => {
    console.log(val,idx,arrr);
});  

let arr=["apple","ball","cat","dog"];
arr.forEach((val, indx, arrr)=>{
    console.log(val,indx,arrr);
})  

let num=[1,2,3,4,5,6,7,8];
let sqr=(numm)=>{
    console.log(numm*numm);
};

num.forEach(sqr); 

let arr=[1,2,3,4,5,6];
let ar=arr.filter((n)=>{
    return n % 2 === 0;
});
console.log(ar); 

let arr=[1,2,3,4,5,6,7];
let ar=arr.filter((num)=>{
    return num>3;
});

console.log(ar);  

let arr=[1,2,3,4,5,6];
let ar=arr.reduce((res,current)=>{
    return res+current;
});
console.log(ar);; 

let arr=[1,2,3,4,5,6,7,8];
let ar=arr.reduce((prev,current)=>{
    return prev>current?prev:current;
})
console.log(ar);

let n = prompt("enter number :");
let arr=[];

for(i=1;i<=n;i++){
    arr[i-1]=i;
}

let sum=arr.reduce((res,curr)=>{
    return res+curr;
});

let fact=arr.reduce((res,curr)=>{
    return res*curr;
});

console.log("sum =",sum,"\n facteriol=",fact); */