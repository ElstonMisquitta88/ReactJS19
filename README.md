> [!NOTE]
> List To be Completed

  - [x] Day 1 :- Introduction to ReactJS, ReactJS VS Other frameworks and understanding Virtual DOM 
  - [x] Day 2 :- ES6 Concept and Creating and understanding react app. 
  - [x] Day 3 :- Understanding project structure & Databinding. 
  - [x] Day 4 :- Understanding Demo on VirtualDOM, useRef() & useEffect() lifecycle hook. 
  - [ ] Day 5 :- Class Components and Routing in Reactjs 
  - [ ] Day 6 :- Implement Lazy Loading in Routing 
  - [ ] Day 7 :- Mutable/Immutable object in ES, Uncontrolled and Controlled forms 
  - [ ] Day 8 :- Implementing Formik form with YUP 
  - [ ] Day 9 :- Consuming WEB API in React using Axios 
  - [ ] Day 10 :- Eliminating prop drilling using Context API. 
  - [ ] Day 11 :- Functional Component vs Class Component vs Functional Typescript Component. 
  - [ ] Day 12 :- Implementation of Redux with React. 
  - [ ] Day 13 :- Redux Implementation (continuation). 
  - [ ] Day 14 :- Enabling JWT authentication with React. 
  - [ ] Day 15 :- Implementing axios interceptor and understanding Memorization. 
 

### Day1

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

### Day2

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

### Day3

npm run dev => start a live development server => dynamically transform your jsx in to es modules

JSX 
-Mix of HTML & Javascript
-It is type safe 
-it follow camelCasing convention
-It helps to create virtual DOM & render html

React Fragment - React needs to render only one element
<div></div>
<></>
<React.Fragment></React.Fragment>
<StrictMode></StrictMode> - A helper component that helps to write better react code providing warning for any deprecated code or identifying risk, it works in development case

   

Databinding
-Mechanism to bind the data values into html element
-Support one way binding
- Types of binding 
  One way binding  {}
  Event Binding 
   <input type="button" value="Click Me" onClick={(e) => handleClick(e, 'Hello')} />
 Two way binding 
	const [fullName, setFullName] = useState('pradeep shet');
	
useState()
- Used to maintain state 	of object

Virtual DOM 
- It is a lightweight memory representation of your REAL DOM tree
- Maintain 2 DOM & based on comparison, it will sync changes in Real DOM

Component
- A reusable code having some html & javascript that defines specific part of user interface
- Two approaches of designing components
  Function Component
  Class Component
  
### Day4

useRef
- Its is a React Hook that lets you reference a value from DOM element 
- refs are used to getting the reference to a DOM node or an instance of a component
  <input type="text" ref={addressRef} />
  addressRef.current.value="Mumbai";

useEffect
- A function that runs code at specific time, based on dependencies provided. It will automatically trigger based on state changed
	useEffect(()=>{
	}, [dependencies]);


### Day5

Bootstrap
>npm install bootstrap@5.4  --save
- A framework for desigining responsive UI
 container, row, col, table, form-select, form-group, form-control, btn

Steps to pass data from parent to child
-Add a parent component <Search /> 
-Add a child component  <ProductList/> with in parent <Search />
-If you want to pass any data from parent to child, set the attribute of child component
  <ProductList selectedCat={selectedCategory} myname="pradeep" />
-In child component, you can read the data using "props" keyword passed in argument to functional component
  function ProductList(props) {
    const cat = props.selectedCat;
  }
  
Steps to pass data rom child to parent
- Add a method in the parent <Search/>
     const onUpdateCount = (message) => {
        setTotalRecords('Total Count:'+ message);
    }
-Pass the event to child component 
  <ProductList  onNotify={(event)=>onUpdateCount(event)}  />
-Access the onNotify event from props in child <ProductList/> & pass the data
   onNotify(filtered.length);


Routing
- Serving a web page/ component based on request url (matching)
>npm install react-router-dom --save

Steps to implement Routing 
- Create a component <Layout/>, add the <BrowserRouter> component 
  This is the router component that keeps track of the history and location of your app. It enables navigation between different routes
- Define all the routes with in BrowserRouter
  <Routes>  --This container holds all the Route elements. It ensures that only one route is rendered at a time 
                    <Route path="/databinding/:id" element={<Databinding />} /> 
	</Routes>
- Create a component  for Navbar and add <NavLink /> 
	Eg: <NavLink to="/databinding">Databinding</NavLink>
	
### Day6

useParams()
- Used to read the route parameter
  const {id} = useParams();

useNavigate()
-Used to navigate from one route to another
  const navigate = useNavigate();

useLocation()
- Used to read the querystring parameter
	const loc = useLocation();
    const queryParam = new URLSearchParams(loc.search);
    const city = queryParam.get('city');
    const country = queryParam.get('country');

Lazy loading
-Download the component on demand based on requested url
- Add a  <Suspense fallback={<div>Loading......</div>}> component which will nake sure untill component is downloaded will show fallback element
-Define the route using lazy() method
   const Databinding = lazy(()=> import('./Databinding'));
 
### Day7
