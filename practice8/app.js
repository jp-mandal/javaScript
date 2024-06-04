const back=document.querySelector("body");
back.style.backgroundColor="black";

class Car{

    constructor(brand,milage){
        console.log("Creating new object from class.");
        this.brand=brand;
        this.milage=milage;
    }

    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName=brand;
    }

}

let fortuner = new Car("fortuner",10);
console.log(fortuner);

fortuner.setBrand("fortuner");
console.log(fortuner.brandName);

let safari=new Car("safari",20);
console.log(safari);

safari.setBrand("Safari");
console.log(safari.brandName);
console.log("\n \n \n \n \n ")
console.log("INHERITANCE STARTS FROM HERE.\n \n");

// INHERITANCE..........

class Parent{

    constructor(name){
        console.log("parent enter")
        this.name=name;
        console.log("parent exit")
        console.log(this.name);
    }
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
    constructor(age){
        console.log("child enter");
        super("hari");              // this will be passed to constructor at parent class and name will be hari.
        this.age=age;
        console.log("child exit");
        console.log(this.age);
    }

    work(){
        super.hello();            // accessing parent class function by using super keyword.
        console.log("solve problems and build something.")
    }

}

let child1=new Child(18);
child1.hello();

child1.work();



