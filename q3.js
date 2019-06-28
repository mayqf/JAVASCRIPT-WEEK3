function sumOfThree(a,b,c) {
    return a+b+c;
  }
console.log(sumOfThree(1,2,3));

const colorCar = color => console.log(`a ${color} car`);
colorCar("red");

const myObject={
    audi:2013,
    mercedes:2015,
    renault:2010,
    all:["audi","mercedes","renault"],
     
}
//function for printing key-value pair

const objectPrinter = obj => {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`key: ${key} ---value: ${value}\n`); 
      });
    };

objectPrinter(myObject);

//function for vehicle info
const vehicleType=(color,type)=> {
    const myVehicles={ 1: "car", 2:  "motorbike" }

    console.log(`a ${color} ${myVehicles[type]}`);
}


vehicleType("blue", 2);

//if&else in console.log()
console.log((3 === 3) ? "yes" : "no");

//vehicle info with situation
const vehicleType2=(color,age,type)=> {
    const myVehicles={ 1: "car", 2:  "motorbike" };
    const situOfveh={ 0: "new", 1:" used" };

    console.log(`a ${color} ${situOfveh[age]} ${myVehicles[type]}`);
}

vehicleType2("blue", 1, 2)

// vehicle list and 3rd element of list
var newVehicles = ["motorbike", "caravan", "bike","car","truck"];
console.log(newVehicles);
console.log(newVehicles[2]);

//garage information with function

var str="Amazing Joe's Garage, we service "
const garageInfo=(obj)=>{
for (var property in obj) {
    str+=obj[property]+',';
    
  };
console.log(str.slice(0, -1)+".");
}
garageInfo(newVehicles);

//Add new vehicles to array
newVehicles.push("train");
garageInfo(newVehicles);
  
// my mentors with languages
const myNewobject={
    
};
console.log(myNewobject);
const myMentors={
    rob:'',
    nick:'',
    jash:'',
    igor:''
};
console.log(myMentors);
myMentors["rob"]="html";
myMentors["nick"]="css";
myMentors["jash"]="js2";
myMentors["igor"]="CLI";
console.log(myMentors);


//checking equality
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

const equalcheck1=(a,b)=> {
console.log((a==b) ? "True" : "False");};
const equalcheck2=(a,b)=> {
    console.log((a===b) ? "True" : "False");};
equalcheck1(x,y);
equalcheck2(x,y);
equalcheck1(z,y);
equalcheck1(z,x);

//

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log("o1:", o1,'\n',"o2:",o2,'\n',"o3:",o3);
o1.foo1='1';
o2.foo2='2';
console.log("Newo1:",o1,'\n',"Newo2:",o2,'\n',"Newo3:",o3);