 //console.log('hello');
 //console.log('hello');
 //alert('siemaaa')

 //variables

 var b = 'something'; //string
 console.log(b);

 var someNumber = 45;
 console.log(someNumber);


 // var age = prompt('What is your age?');

 // document.getElementById('someText').innerHTML = age;


 //Numbers 

 var num1 = 5;
 console.log(num1 / 4);

 //Functions

 function fun() {
     console.log('this is a func');
 }

 fun();
 //var name = prompt('What is your name');

 function greeting(yourName) {

     var result = 'Hello ' + yourName;
     console.log(result);
 }
 //greeting(name);

 //Function with arguments 
 function sumNumbers(num1, num2) {
     var result = num1 + num2;
     console.log(result)
 }
 //sumNumbers(15, 33);

 //While loops
 var number = 0;

 while (number < 10) {
     number += 1;
     console.log(number)
 }

 //For loop
 for (let num = 0; num <= 20; num++) {
     console.log(num);
 }

 //Data types
 var yourAge = 18; //number
 let yourName = "Pawcio"; //string
 let Naaame = { first: "Pawcio", last: "Gladysz" }; //object
 let truth = false; //boolean
 let list = ['book', 'table', 'eloo']; //aray
 let random; //undefined
 let nothing = null; //value null

 //String in JS
 let Fruits = 'banana\nApple';
 console.log(Fruits);
 console.log(Fruits.length);
 console.log(Fruits.indexOf('an'));
 console.log(Fruits.slice(2, 4));
 console.log(Fruits.replace("bana", '123'));
 console.log(Fruits.toUpperCase());
 console.log(Fruits.toLowerCase());
 console.log(Fruits.charAt(2));
 console.log(Fruits[2]);
 console.log(Fruits.split(','));

 //Arrays
 let something = ['ala', 'ma', 'kota', 'a', 'kot', 'ma', 'ale']
 let sth = new Array('ala', 'ma', 'kota', 'a', 'kot', 'ma', 'ale')

 //alert(sth[1]);

 let student = {
     first: 'Pawel',
     last: 'Gladysz',
     age: 25,
     height: 175,
     studentInfo: function() {
         return this.first + '\n' + this.last + '\n' + this.age;
     }
 };
 //console.log(student.first);
 //console.log(student.last);
 student.first = 'notPawel';
 //console.log(student.first);
 console.log(student.studentInfo());