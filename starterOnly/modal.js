function editNav() {
    let x = document.getElementById("myTopnav");
    x.className === "topnav" ? x.className += " responsive" : x.className = "topnav";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");

const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");

//create new elements in the DOM
const errorMessage = document.createElement("p");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.addEventListener("click", closeModalFunc);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal 
function closeModalFunc() {
  modalbg.style.display = "none";
}

//event listener on the items of the form
prenom.addEventListener("keyup", validatePrenom);

function validatePrenom() {
  if (prenom.value.length < 2) {
    prenom.style.border = "1px solid red";
  } else {
    prenom.style.border = "1px solid green";
  }
}

//create a regexp for an email
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//create a function that adds two numbers
function add(a, b) {
  return a + b;
}


