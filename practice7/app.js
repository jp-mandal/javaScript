const bodyy=document.querySelector("body");
bodyy.style.backgroundColor="black";
const student={
    neme:"Rahul",
    Roll_No:57,
    clas:function(){
        console.log("My name is Rahul and I read in class 9.");
        console.log(this.Roll_No);  // Here this represent student
    }
}; 

const employee={
    calcTax(){
        console.log("Tax rate is 10%.")
    },
    calctax2:function(){
        console.log("Your tax is 12%.");
    }
};

const karanArjun={
    salary:5000
};

karanArjun.__proto__=employee;
console.log(karanArjun.calcTax());
