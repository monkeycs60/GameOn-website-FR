//HAMBURGER MENU

const hamburger = document.getElementById("hamburgerI");
hamburger.addEventListener("click", editNav);

function editNav() {
  let menuList = document.querySelectorAll(".menuList a");
  // create a toggle function for the menu : if it is display:none, then display:flex, else display:none
  for (let i = 0; i < menuList.length; i++) {
    let style = getComputedStyle(menuList[i]);
    menuList[i].style.display = style.display === "none" ? "flex" : "none";
  }
}

//Declare CONSTANTS

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelector(".close");
const modalConfirm = document.querySelector(".bg2");
const closeConfirm = document.querySelector(".close-confirm");
const formData = document.querySelectorAll(".formData");
const fullFormulaire = document.querySelector("#reserve");
const validation = document.querySelector("#validation");
const closeBtn = document.querySelector(".close-btn");

// const for the elements inside the form
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const cityForm = document.querySelector(".cityForm");
const conditions = document.querySelector("#checkbox1");

//create new elements in the DOM for error messages
const prenomErrorMessage = document.createElement("p");
const nomErrorMessage = document.createElement("p");
const emailErrorMessage = document.createElement("p");
const birthdateErrorMessage = document.createElement("p");
const quantityErrorMessage = document.createElement("p");
const cityFormErrorMessage = document.createElement("p");
const conditionsErrorMessage = document.createElement("p");

//MODAL JS

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}
// close modal
closeModal.addEventListener("click", closeModalFunc);
function closeModalFunc() {
  modalbg.style.display = "none";
}

//launch modal confirmation
function launchModalConfirmation() {
  modalConfirm.style.display = "block";
}

//close modal confirmation
closeBtn.addEventListener("click", closeModalConfirmation);
closeConfirm.addEventListener("click", closeModalConfirmation);

function closeModalConfirmation() {
  modalConfirm.style.display = "none";
  modalbg.style.display = "none";
}

//EVENT LISTENERS on the items of the form

prenom.addEventListener("keyup", validatePrenom);
nom.addEventListener("keyup", validateNom);
email.addEventListener("keyup", validateEmail);
birthdate.addEventListener("change", validateBirthdate);
quantity.addEventListener("change", validateUpDown);
quantity.addEventListener("keyup", validateQuantity);
cityForm.addEventListener("change", validateLocation);
conditions.addEventListener("change", validateConditions);

//List of the FUNCTIONS inside the listeners

function validatePrenom() {
  const prenomRegExp = /^[a-zA-ZÀ-ÿ-]+$/;

  if (prenom.value.length < 2) {
    //add red borders to the input when the value is not valid (i.e. <2 characters)
    prenom.style.border = "3px solid red";
    //add an error message if the value is not valid
    prenomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le prénom.";
    //apply the css "errorClass" to the error message
    prenomErrorMessage.classList.add("errorClass");
    //add the error message as child of the parent element of input (i.e. the div formData)
    prenom.parentElement.appendChild(prenomErrorMessage);
    //return false in order to impeed form validation
    return false;
  } else if (!prenomRegExp.test(prenom.value)) {
    //if the value written in the input doesn't match the regexp, add red borders, as above
    prenom.style.border = "3px solid red";
    //add en error message
    prenomErrorMessage.textContent =
      "Le prénom ne peut pas contenir de chiffres, de caractères spéciaux ni d'espace.";
    //apply the css "errorClass" to the error message
    prenomErrorMessage.classList.add("errorClass");
    //add the error message as child of the parent element of input (i.e. the div formData)
    prenom.parentElement.appendChild(prenomErrorMessage);
    //return false in order to impeed form validation
    return false;
  } else {
    //if none of the negative conditions above are met, it means that the value is valid
    //so that, add green borders to the input
    prenom.style.border = "3px solid green";
    //remove the error message
    prenomErrorMessage.classList.remove("errorClass");
    prenomErrorMessage.textContent = "";
    //return true in order to allow form validation
    return true;
  }
}

function validateNom() {
  const nomRegExp = /^[a-zA-ZÀ-ÿ- ]+$/;

  if (nom.value.length < 2) {
    nom.style.border = "3px solid red";
    nomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le nom.";
    nomErrorMessage.classList.add("errorClass");
    nom.parentElement.appendChild(nomErrorMessage);
    return false;
  } else if (!nomRegExp.test(nom.value)) {
    nom.style.border = "3px solid red";
    nomErrorMessage.textContent =
      "Le nom ne peut contenir ni des chiffres ni des caractères spéciaux";
    nomErrorMessage.classList.add("errorClass");
    nom.parentElement.appendChild(nomErrorMessage);
    return false;
  } else {
    nom.style.border = "3px solid green";
    nomErrorMessage.classList.remove("errorClass");
    nomErrorMessage.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegExp.test(email.value)) {
    email.style.border = "3px solid red";
    emailErrorMessage.textContent = "Veuillez entrer une adresse email valide.";
    emailErrorMessage.classList.add("errorClass");
    email.parentElement.appendChild(emailErrorMessage);
    return false;
  } else {
    email.style.border = "3px solid green";
    emailErrorMessage.classList.remove("errorClass");
    emailErrorMessage.textContent = "";
    return true;
  }
}

function validateBirthdate() {
  const birthdateRegExp =
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  //convert the input value to a date value, then reconvert it to a string value, so that you can use the regexp
  const date = new Date(birthdate.value);
  const dateString = date.toLocaleDateString();

  if (!birthdateRegExp.test(dateString)) {
    birthdate.style.border = "3px solid red";
    birthdateErrorMessage.textContent =
      "Veuillez entrer une date de naissance valide.";
    birthdateErrorMessage.classList.add("errorClass");
    birthdate.parentElement.appendChild(birthdateErrorMessage);
    return false;
    //the date has to be in the past
  } else if (date > new Date()) {
    birthdate.style.border = "3px solid red";
    birthdateErrorMessage.textContent = "Veuillez entrer une date passée.";
    birthdateErrorMessage.classList.add("errorClass");
    birthdate.parentElement.appendChild(birthdateErrorMessage);
    return false;
  } else {
    birthdate.style.border = "3px solid green";
    birthdateErrorMessage.classList.remove("errorClass");
    birthdateErrorMessage.textContent = "";
    return true;
  }
}

//this function only applies to the up and down arrows of the quantity input
function validateUpDown() {
  //if e.target.value is >=0, then success message
  if (quantity.value >= 0 && quantity.value <= 99) {
    quantity.style.border = "3px solid green";
    quantityErrorMessage.classList.remove("errorClass");
    quantityErrorMessage.textContent = "";
  }
  //if e.target.value is undefined or <0, then error message
  else {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent =
      "Veuillez entrer un nombre entre 1 et 99.";
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage);
  }
}

function validateQuantity() {
  //QUANTITY value has to be a number
  if (isNaN(quantity.value)) {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent = "Veuillez entrer un nombre.";
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage);
    return false;
  } else if (quantity.value > 99) {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent =
      "Vous ne pouvez pas entrer de nombre supérieur à 99.";
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage);
    return false;
    //Quantity input cannot be left empty
  } else if (quantity.value === "") {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent = "Veuillez entrer un chiffre.";
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage);
    return false;
  } else {
    quantity.style.border = "3px solid green";
    quantityErrorMessage.classList.remove("errorClass");
    quantityErrorMessage.textContent = "";
    return true;
  }
}

//check if any radio button is checked
function validateLocation() {
  if (document.querySelector("input[name='location']:checked") === null) {
    cityFormErrorMessage.textContent = "Veuillez sélectionner une ville.";
    cityFormErrorMessage.classList.add("errorClass");
    cityForm.appendChild(cityFormErrorMessage);
  } else {
    cityFormErrorMessage.classList.remove("errorClass");
    cityFormErrorMessage.textContent = "";
  }
}

//check if CGU are checked
function validateConditions() {
  if (document.querySelector("input[id='checkbox1']:checked") === null) {
    conditionsErrorMessage.textContent =
      "Veuillez accepter les conditions générales.";
    conditionsErrorMessage.classList.add("errorClass");
    conditions.parentElement.appendChild(conditionsErrorMessage);
  } else {
    conditionsErrorMessage.classList.remove("errorClass");
    conditionsErrorMessage.textContent = "";
  }
}

//FORM VALIDATION

// LISTENER of the submit button
validation.addEventListener("click", (e) => {
  //impeed the page to reload
  e.preventDefault();
  validateForm();
});

// FUNCTION that checks if all the inputs are valid - associated to the previous listener
function validateForm() {
  //if only one of the inputs is invalid, then the whole form is invalid
  if (
    validatePrenom() === false ||
    validateNom() === false ||
    validateEmail() === false ||
    validateBirthdate() === false ||
    validateQuantity() === false ||
    validateLocation() === false ||
    validateConditions() === false ||
    document.querySelector("input[name='location']:checked") === null ||
    document.querySelector("input[id='checkbox1']:checked") === null
  ) {
    //if the form is invalid, then display an alert and display the error messages corresponding
    alert("Veuillez remplir tous les champs du formulaire.");
    validatePrenom();
    validateNom();
    validateEmail();
    validateBirthdate();
    validateQuantity();
    validateLocation();
    validateConditions();
  } else {
    //i.e. the form is VALID

    //remove border color
    prenom.style.border = "";
    nom.style.border = "";
    email.style.border = "";
    birthdate.style.border = "";
    quantity.style.border = "";
    //close the current modal
    closeModalFunc();
    //send datas to sessionStorage
    sessionStorage.setItem("prenom", prenom.value);
    sessionStorage.setItem("nom", nom.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("birthdate", birthdate.value);
    sessionStorage.setItem("quantity", quantity.value);
    sessionStorage.setItem("location", location.value);
    sessionStorage.setItem("conditions", conditions.value);
    //then send the form with a get method (i.e. => to the url)
    fullFormulaire.submit();
  }
}

//Just after the form is submitted, the page reloads. 
//When the page reloads, it checked if sessionStorage has received the datas submitted (8 datas).
//if it is the case, it confirms that the form has been sent. 
//so that is displays thanks modale and reset the form inputs and clear sessionStorage.
window.onload = function () {
  if (sessionStorage.length > 7) {
    //set timeout to wait for the page to reload
    setTimeout(function () {
      launchModalConfirmation();
      fullFormulaire.reset();
      sessionStorage.clear();
      
    }, 3000);
  }
};
