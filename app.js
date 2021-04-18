var heroesName;

// functio expression
var favFav = function () {
  heroesName = prompt('Hello, please enter your fav char name from harrypotter movie!');

  // validator 
  // i will use the and
  while (heroesName !== 'harry' && heroesName !== 'marrie') {
    heroesName = prompt('Please enter the name harry or marrie');
  }

}
//  the call of the function [invoking the function]
favFav();

// var will save the image that the user choose
// global variable
var userChoose;

// function declaration

function showImages() {

  if (heroesName === 'harry') {
    userChoose = '<img src="https://www.dailyhindnews.com/wp-content/uploads/2020/12/1608779400_Harry-Potter-2-who-other-actor-in-the-saga-could.jpg">';
  } else if (heroesName === 'marrie') {
    userChoose = '<img src="https://i.pinimg.com/originals/25/f2/4c/25f24c8168d4fdae6f2ea325444cf3c3.jpg">';
  }

  var imagesNumber = prompt('How many image do you want???');

  for (var i = 0; i < imagesNumber; i++) {
    document.write(userChoose);
  }

}

showImages();
