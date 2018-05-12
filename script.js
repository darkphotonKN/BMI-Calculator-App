/* Form and Stage Selectors */

let button1 = document.querySelector(".step-circle");
let button2 = document.querySelector(".step-circle-2");
let button3 = document.querySelector(".step-circle-3");

let form = document.querySelector(".modal-body");
let form2 = document.querySelector(".modal-body-2");
let form3 = document.querySelector(".modal-body-3");



/* Buttons */

let startButton = document.getElementById("start-btn");
let nextButton = document.getElementById("nxt-btn");
let doneButton = document.getElementById("done-btn");


/* functions */

// activate form styles


function secondForm() {

  button2.classList.toggle('is-active');
  button1.classList.remove('is-active');
  button3.classList.remove('is-active');
  // animation removing / adding classes
  // delay showing form 2 until animation of form 1 has been played out
  setTimeout(function() {
    form2.classList.toggle('is-showing');
  }, 300);

  form.classList.toggle('animate-out');
  form.classList.remove('is-showing');

  setTimeout(function() {
    form.classList.remove('animate-out');
  }, 600);

  form3.classList.remove('is-showing');

}

function thirdForm() {
  // Calculating BMI
  // Selectors
  let height_input = document.getElementById("height-inp").value;
  let weight_input = document.getElementById("weight-inp").value;
  let output = document.querySelector(".modal-body-3 .output");
  output.innerHTML = "Your BMI is: " + calcBMI(height_input, weight_input);

  button3.classList.toggle('is-active');
  button2.classList.remove('is-active');
  button1.classList.remove('is-active');

  setTimeout(function() {
    form3.classList.toggle('is-showing');
  }, 300);
  form2.classList.toggle('animate-out');

  setTimeout(function() {
    form2.classList.remove('animate-out');
  }, 600);

  form2.classList.remove('is-showing');
  form.classList.remove('is-showing');
}

/* Finished Form */
let overallForm = document.querySelector('.modal-wrap');
let endFormBtn = document.querySelector('.end-btn');

function formDone() {
  // delay form dispearance for exit animation to play
  setTimeout(function() {
    overallForm.style.display = "none";
    endFormBtn.classList.add('');
  }, 300);
  // add class for the entire form to animate it's exit
  overallForm.classList.add('animate-out');
  document.querySelector('.end-message').innerHTML = "Thank you for using the calculator! Check your email for your BMI and some tips for a healthier life style.";
}



/* Calculating BMI functions */

function calcBMI(height, weight) {
  return weight/(height*height);
}



// init

// bind event listeners to the form buttons to activate the
// next form to appear using ES6 arrow functions

function init() {
  startButton.addEventListener("click", () => secondForm());
  nextButton.addEventListener("click", () => thirdForm());
  doneButton.addEventListener("click", () => formDone());



}

// launh web site js functionality
init();

















/* */
