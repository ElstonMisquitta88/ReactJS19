let arr =[10,20,30,40,50];

// (1) for of - Similar to forEach but it can be used with break and continue statements
for(let num of arr){
    console.log("Value : "+num);
}

// (2) for in - Get the Index of the array elements
for (let indx in arr) {
    console.log("Value at index " + indx + ": " + arr[indx]);
}

//(3) map - Create a new array by applying a function to each element of the original array
let newarr = arr.map((val,indx)=>{
    return val*2;
});
console.log("------------------------");
console.log("New Array : "+newarr);


// Spread operator to copy existing properties and add new property 'remarks'

let students = [
    {name:"John", marks:20},
    {name:"Jane", marks:22},
    {name:"Doe", marks:21}
];
let newstudents = students.map((student,indx)=>({
     ...student, remarks:'pass'  
                                
}));
console.log("------------------------");
console.log("New Students : ",newstudents);


// Rest operator to combine two arrays into one
let num1=[1,2,3];
let num2=[4,5,6];
let combined = [...num1,...num2]; 
console.log("------------------------");
console.log("Combined Array : ",combined);



// Destructuring assignment to extract values from the combined array
console.log("------------------------");
let[a,b,...rest] = combined;
console.log("a : "+a);
console.log("b : "+b);
console.log("rest : ",rest);


// Exmple of rest operator in function parameters to accept variable number of arguments
function add(a,b,...rest){
    let sum = a+b;
    for(let num of rest){
        sum+=num;
    }
    return sum;
}
console.log("------------------------");
console.log("Final Sum : "+add(1,2,3,4,5));
// String interpolation to create a formatted string with the result of the add function
console.log(`Result = ${add(1,2,3,4,5)} `);

