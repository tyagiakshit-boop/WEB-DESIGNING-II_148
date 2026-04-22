// JSON get created
/*let person={
    name: "Jhonny",
    age : 30,
    city : "NY"
};
console.log(person);
typeof // used to check the datatype 
console.log(typeof(person));
let a=[1,2,'AT',5,];
console.log(typeof(a));

let mixedarray= [1,"AT", true, [2,3,4],{name: "Akshit", age: 19}]; 
console.log(mixedarray);
function sum(a,b){
    return a+b;
}
console.log(sum(10,20));
// normal function with expression
const m= function(a,b){
    return a*b;
} 
console.log(m(3,5));*/
// Arrow function with single parameter
let sq= (x) => x*x; // here (x)-> is parameter and '=>' after this we write return statement and if more than one and no parametr is there than parenthesis is there '{}'
console.log(sq(4));
// map on array it iterate the each element of the array and use to give new array on given arrow function condition
let newarray= [1,2,3,4,5];
let sqarray=  newarray.map((num)=> num*5);
console.log(sqarray);
console.log( newarray);
//Filter -> creates a new array with all elements that pass the test implemented by the provided function
let filterevenumber = newarray.filter((num)=> num%2=== 0); //'===' is used to get the strict equality even to check the datatype 
console.log(filterevenumber);
// Reduce -> use to reduce the array into a single number using a condition
// accumilator(a)-> is used to accumilate the previous value
let total= newarray.reduce((a,c)=>a+c,0);  // c=> current value
console.log(total);
let students = [
    {name:"Jhon",
    marks: 79},
    {name: "Anthony", marks: 90},
   { name: "James", marks: 97}
];
//filter
let topper = students.filter((s)=> s.marks>80);
console.log(topper);