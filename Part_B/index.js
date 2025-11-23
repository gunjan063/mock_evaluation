////2.1
let nums = [10, 3, 7, 20, 13, 2];
//use map
let square=nums.map(num=>num*num)
console.log(square)

// //use filter
// function isPrime(num){
//   if(num<2)return false;
//   for(let i=0;i<num;i++)
  
// }

///use reduce
let sum=nums.reduce((acc, num)=>acc+num);
console.log(sum)
//descending
let descending=nums.slice().sort((a,b)=>b-a)
console.log(descending)



//2.2
function displayCar(){
  console.log("this is my car");
}
function displayTruck(){
  console.log("this is my truck");
}
function displayBike(){
  console.log("this is my bike");
}

function vehicleInfo(vehicleCategory, callbackFn){
  console.log("Category:", vehicleCategory);
  callbackFn();
}

vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)


