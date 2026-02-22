# ReactJS19
ReactJS

### Day 1

Javascript is a dynamic scripting language
Interpreted at client side by V8 engine

JS - ES - Ecmascript  - Standard for scripting langauge
HTML - W3C

var i = 10;
i = 'pradeep';
i = true;
let i =1;

NodeJs
- Javascript runtime environment 
- Cross platform
- Open source
- Tool with node js - npm

var- global /function scope, supports hoisting
let - blocked scope, doesnt support hoisting

Hoisting
Scan the code & move the declaration on the top

console.log(i);
var i = 10;

ReactJs
- Library used for developing reusable UI component
- Known for speed, scalability, simplicity
- Developed by FB

map() - Transforming each item in the array,  Can be used for modifying objects
spread operator - expanding an array
rest operator - collect in to a array

### Day 2

//arguments - inbuild object that contains array of args passed
function callFn(){
    console.log(arguments[0]);
}

//reduce - iterates through the array and return single value
let numbers = [2,4,5,6,7,7];
const sum = numbers.reduce((result, current) => {
    return result + current;
});

Modules allow you to break up your code into separate files
	import {Person, add} from "./person.js";
	class Employee
	{
		constructor(eid){
			this.EmployeeId = eid;
		}

		showEmployeeInfo(){
			let person = new Person(101,'test person');
			person.personId = 102;
			person.showInfo();

			alert('Hello');
			add(1,2);
		}
	}
	export default Employee;


Evolution of ReactJs
0.3.0-0.8.0 - 2013
v15 - 2016
v16- 2017
v17- 2020
v18- 2022
v19 - 5Dec2024


vite
- A build tool for faster development
-Create a scaffolded project
-Spin up dev server faster, HMR (Hot module replacement)
-bundles the code in to es standard

>npm create vite@latest  myapp -- --template react
>cd myapp
>npm install
>npm run dev

NPM (Node Package Manager)
- Used for downloading or sharing the js/css package from public respository
- It resolves inter dependencies 
- It can read package.json