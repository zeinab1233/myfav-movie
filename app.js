  
// // i am consoling my name
// // console.log('hello baraah');
// // console.log('hello bashar');

// // single line of comment

// /*
// multiple lines of comments
// */

// /*
// Datatype:
// 1. Strings
//   - ==> text inside ' ' or " "
//   - what I write what I see

// 2. Numbers
//   - integers
//   - float .... etc

// 3. Boolean
//   - True
//   - False
// */

// // string
// console.log('my name is Riziq');
// console.log('Hello Heros 102d29 +*^$% 1224 عربي');

// // Numbers
// console.log(1);
// console.log(1+3+8);

// // Boolean
// console.log(true);
// console.log(false);

// /*
// Operators

// 1. Arithmetic Operators:
//   + (add)
//   - (subtract)
//   *(multiply)
//   /(divide)
//   % (mode, reminder)
//   ** (power to)

// Variable:
// var in js is used to store values
// var theName='Sanaa';
// */

// // addition
// console.log('adding',1+2+6+100);
// // subtract
// console.log('subtract',499-9-44);
// // multiply
// console.log(6*8);
// // divide
// console.log(500/10);
// // mode
// console.log(8%2);
// console.log(5%2);

// // power
// console.log(2**100);
// // concatenation ==> I will use it to add 2 strings together , add space btw the words
// console.log('hello' +' '+ 'Ibrahim');
// // , in the console to add strings with space

// // Variable
// var theName='Sultan';
// console.log(theName);
// // rule to name the var [start only with letters, underscore and $]
// var $sultanIdea='hello underscore';
// console.log( $sultanIdea);

// /*
// 1. Assignment Operators:
// = ==> assign the value to var
// += ==>
// -= ==>

// 2. Comparison Operators [True or False]
// == (the value)
// === (the value and the Datatype)
// <
// >
// <=
// >=
// !=
// !==
// */

// // =
// var $sultanIdea='hello underscore';

// // +=
// var theNumber=3;
// // console.log(theNumber+=theNumber);
// console.log(theNumber=theNumber + theNumber); //6

// // the value comparing
// console.log(34 == '34'); //true

// // the value and Datatype
// console.log(3 === '3'); // false
// console.log(3 === 3); // true

// // !=
// console.log(3 != '3'); //false
// console.log(3 !== '3'); //true

/*
If statement:
if(condition){
  the if block code
}
*/

// if

// if(8 == '8'){
//   console.log('the if block executed');
//   console.log('correct');
// }

// if else
// if(8 === '8'){
//   console.log('the if block executed');
//   console.log('correct');
// } else {
//   console.log('the else block executed');
//   console.log('not correct');
// }

// var numOne=12;
// if (numOne ===1){
//   console.log('the number is ', 1);
// }else{
//   console.log('the number is not', 1, 'it is ', numOne);
// }

// // alert
// alert('Hello Alert');

// // prompt
// var userName = prompt('please enter your name');
// console.log(userName);

// prompt, alert and if statement

 var moviepart=prompt('which part of this movie you want to watch');

if(moviepart >= 3){
 alert('sorry,not available yet');
 }else if (moviepart <= 2){
  alert('enjoy watching');
 }
var userage = prompt("please enter your age");

if (userage >= 18) {
  document.write("sorry,its childtype movie");
  document.write(
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSGLzyPSfbsIfp0lPDGDFOxdzsrFUWA1YIA&usqp=CAU">'
  );
} else if (userage <= 17) {
  document.write("welcome");
  document.write(
    '<img src="https://i.ebayimg.com/images/g/k0EAAOSwc9ZcmAvP/s-l300.jpg">'
  );

}  


var heroesName = prompt('Hello, please enter your fav char name from harrtypotter movie!');

// validator 
// i will use the and
while(heroesName !== 'harry'&& heroesName !== 'marie'){
  heroesName = prompt('Please enter the name harry or marie');
}

// var will save the image that the user choose
var userChoose;

if(heroesName === 'harry'){
userChoose='<img src="https://www.dailyhindnews.com/wp-content/uploads/2020/12/1608779400_Harry-Potter-2-who-other-actor-in-the-saga-could.jpg">';
}else if (heroesName === 'marie'){
  userChoose='<img src="https://i.pinimg.com/originals/25/f2/4c/25f24c8168d4fdae6f2ea325444cf3c3.jpg">';
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
