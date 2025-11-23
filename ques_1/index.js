//part1 ques1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined=[...arr1,...arr2];
console.log(combined)

//part1 ques2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let combined={...person,...extra};
console.log(combined)

//part1 ques3
function sumAll(...args){
return args.reduce((sum,num)=>sum+num);
}
console.log(sumAll(1, 2, 3, 4) )

//part1 ques4
let numbers = [10, 20, 30, 40, 50];
let[a,...remaining]=numbers;
console.log(a)
console.log(remaining)

//part1 ques5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let{
  address:{city,geo:{lat,lng}}
}=user
console.log(city)
console.log(lat)
console.log(lng)

//part1 ques6
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4,9))


//part1 ques7
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp.details?.profile?.role)