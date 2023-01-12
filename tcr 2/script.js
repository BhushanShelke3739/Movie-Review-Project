//=====>>>> outputs
document.getElementById('demo').innerHTML='hello world'
console.log('hello world');
alert('hello')
console.error('hello')
console.warn('hello');




//=====>>>> let, const
    const age = 55
    
    console.log(age)



//=====>>>>> primitive Datatype 
// string, numbers, boolean, null , undefined
 
//  const Name='azex102'
//  const age=45
//  const rating=4.8;
//  const iscool=true;
//  const x=null;
//  const y=undefined;
//  let z;

//  console.log(typeof age)




 ///======>>>>STRINGS
 const name='azex'
 const age=45
console.log(name,age);
 //==>>concatenation
 console.log('my name is '+  name + ' and I am '+ age );

 //==>>template String
 console.log(`my name is ${name} and I am ${age}`);



 /////======>>>>String, properties, methods.
  const s='hello world';
console.log(s.length);
console.log(s.toLocaleUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(0,3).toLocaleUpperCase());

console.log(s.split('l'));


  ////====>>>Array=> variable that holds multiple values

const fruits = ['apples', 'oranges', 'pears', 'grapes'];
   fruits=[]
console.log(fruits[1]);

fruits[3]='grapes'
fruits.push('mango')
fruits.pop();

console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('grapes'));


 // ====>>>>lets talk about  OBJECT LITERALS
const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
   street: 'palm beach road',
   city: 'navi mumbai',
   state: 'MAHA'
  }
}

console.log(person.firstName,person.age);
console.log(person.hobbies[2]);
console.log(person.address.city);

// //advance
const {firstName,age,address:{city}}=person;

console.log(firstName);
console.log(city);

person.email='john@gmail.com'
console.log(person);



//===>>Array of object
const todos = [
  {
    id: 10,
    text: 'is he workin',
    isComplete: false
  },
  {
    id: 20,
    text: 'Dinner with wife',
    isComplete: true
  },
  {
    id: 30,
    text: 'Meeting with abc',
    isComplete: true
  }
];

console.log(todos[2].text);

const todosJson=JSON.stringify(todos);
console.log(todosJson);





//LOOPS

For Loop
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}


// While
let i = 10
while(i <= 20) {
  console.log(`While Loop Number: ${i}`);
  i++;
}


// CONDITIONALS

// Simple If/Else Statement
const x = '10';

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}





//===>> ternary operator
const y=11;

const color=y > 10 ? 'xyz' :'red'

console.log(color);



// Switch
color = 'xyz';

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue')
    break;
}







//===>>Function
function AddNums(num1, num2){
    console.log(num1 + num2)
}
AddNums(5,90);  

function AddNums(num1=5, num2=15){
    console.log(num1 + num2)
}
AddNums();

function AddNums(num1, num2=5){
    console.log(num1 + num2)
}
AddNums(70);




//====>>>>return
function AddNums(num1=5, num2=5){
    return num1 + num2;
}
console.log(AddNums());





//===>>arrow function
const AddNums=num1  => num1 + 10
console.log( AddNums(51)); 

const  AddNums=(num1, num2) => console.log(num1 + num2)
AddNums(5,90);  










// //===>>>constructor function

function Person(firstname,lastname,dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=dob;
}
// intantiate object
const person1= new Person( 'john','sharma','4-3-1980');
const person2= new Person( 'johny','patel','4-5-1940');
const person3= new Person( 'ram','patil','7-15-1950');



console.log(person2.firstname);
console.log(person3.firstname);