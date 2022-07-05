function editNav() {
  let x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? (x.className += " responsive")
    : (x.className = "topnav");
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");

const modalConfirm = document.querySelector(".bg2");
const closeConfirm = document.querySelector(".close-confirm");

// const for the elements inside the form
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const cityForm = document.querySelector(".cityForm");
const conditions = document.querySelector("#checkbox1");

const validation = document.querySelector("#validation");

const closeBtn = document.querySelector(".close-btn");

//create new elements in the DOM
const prenomErrorMessage = document.createElement("p");
const nomErrorMessage = document.createElement("p");
const emailErrorMessage = document.createElement("p");
const birthdateErrorMessage = document.createElement("p");
const quantityErrorMessage = document.createElement("p");
const cityFormErrorMessage = document.createElement("p");
const conditionsErrorMessage = document.createElement("p");


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




//event listener on the items of the form

//PRENOM
prenom.addEventListener("keyup", validatePrenom);

function validatePrenom() {

  const prenomRegExp = /^[a-zA-ZÀ-ÿ-]+$/;

  if (prenom.value.length < 2) {
    prenom.style.border = "3px solid red";
    prenomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le prénom.";
    //add error class
    prenomErrorMessage.classList.add("errorClass");
    prenom.parentElement.appendChild(prenomErrorMessage);
    return false;
  }  else if (!prenomRegExp.test(prenom.value)) {
    prenom.style.border = "3px solid red";
    prenomErrorMessage.textContent = "Le prénom ne peut pas contenir de chiffres, de caractères spéciaux ni d'espace.";
    prenomErrorMessage.classList.add("errorClass");
    prenom.parentElement.appendChild(prenomErrorMessage);
    return false;
  }
  else {
    prenom.style.border = "3px solid green";
    prenomErrorMessage.classList.remove("errorClass");
    prenomErrorMessage.textContent = "";
    return true;
  }
}



//NOM
nom.addEventListener("keyup", validateNom);

function validateNom() {

  const nomRegExp = /^[a-zA-ZÀ-ÿ- ]+$/;

  if (nom.value.length < 2) {
    nom.style.border = "3px solid red";
    nomErrorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le nom.";
    //add error class
    nomErrorMessage.classList.add("errorClass");
    nom.parentElement.appendChild(nomErrorMessage);
    return false;
  } else if (!nomRegExp.test(nom.value)) {
    nom.style.border = "3px solid red";
    nomErrorMessage.textContent = "Le nom ne peut contenir ni des chiffres ni des caractères spéciaux";
    nomErrorMessage.classList.add("errorClass");
    nom.parentElement.appendChild(nomErrorMessage);
    return false;
  }
  else {
    nom.style.border = "3px solid green";
    nomErrorMessage.classList.remove("errorClass");
    nomErrorMessage.textContent = "";
    return true;
  }
}

//EMAIL
email.addEventListener("keyup", validateEmail);

function validateEmail() {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegExp.test(email.value)) {
    email.style.border = "3px solid red";
    emailErrorMessage.textContent = "Veuillez entrer une adresse email valide.";
    //add error class
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

//BIRTHDATE

birthdate.addEventListener("change", validateBirthdate);

function validateBirthdate() {
  const birthdateRegExp =
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  const date = new Date(birthdate.value);
  const dateString = date.toLocaleDateString();

  if (!birthdateRegExp.test(dateString)) {
    birthdate.style.border = "3px solid red";
    birthdateErrorMessage.textContent =
      "Veuillez entrer une date de naissance valide.";
    birthdateErrorMessage.classList.add("errorClass");
    birthdate.parentElement.appendChild(birthdateErrorMessage);
    return false;
  }
  //if e.target.value is undefined or <0, then error message
  else {
    birthdate.style.border = "3px solid green";
    birthdateErrorMessage.classList.remove("errorClass");
    birthdateErrorMessage.textContent = "";
    return true;
  }
}

// QUANTITY (e) => console.log(e.target.value)
//adevent listener if you change the value with the button at the right of the input
quantity.addEventListener("change", validateUpDown);

function validateUpDown() {
  //if e.target.value is >=0, then success message
  if (quantity.value >= 0 && quantity.value <= 99) {
    quantity.style.border = "3px solid green";
    quantityErrorMessage.classList.remove("errorClass");
    quantityErrorMessage.textContent = "";
    // return true;
  } 
  //if e.target.value is undefined or <0, then error message
  else {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent = "Veuillez entrer un nombre entre 1 et 99.";
    //add error class
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage); 
    // return false;
  }
}

//event listener if you press a key inside the quantity input
quantity.addEventListener("keyup", validateQuantity);

function validateQuantity() {
  //QUANTITY value has to be a number
  if (isNaN(quantity.value)) {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent =
      "Veuillez entrer un nombre.";
    //add error class
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
  }
  //else if quantity value is empty
  else if (quantity.value === "") {
    quantity.style.border = "3px solid red";
    quantityErrorMessage.textContent =
      "Veuillez entrer un chiffre.";
    //add error class
    quantityErrorMessage.classList.add("errorClass");
    quantity.parentElement.appendChild(quantityErrorMessage);
    return false;
  } else {
    quantity.style.border = "3px solid green";
    // errorMessage.textContent = "";
    quantityErrorMessage.classList.remove("errorClass");
    quantityErrorMessage.textContent = "";
    return true;
  }
}

//LOCATION
cityForm.addEventListener("change", validateLocation);


  function validateLocation() {
    if (document.querySelector("input[name='location']:checked") === null) {
        cityFormErrorMessage.textContent = "Veuillez sélectionner une ville.";
        cityFormErrorMessage.classList.add("errorClass");
        cityForm.appendChild(cityFormErrorMessage);
      }
      else {

        cityFormErrorMessage.classList.remove("errorClass");
        cityFormErrorMessage.textContent = "";
      }
  }

// CONDITIONS GENERALES
conditions.addEventListener("change", validateConditions);

function validateConditions() {
  if (document.querySelector("input[id='checkbox1']:checked") === null) {
    conditionsErrorMessage.textContent = "Veuillez accepter les conditions générales.";
    conditionsErrorMessage.classList.add("errorClass");
    conditions.parentElement.appendChild(conditionsErrorMessage);
  } else {
    conditionsErrorMessage.classList.remove("errorClass");
    conditionsErrorMessage.textContent = "";
  }
}



//SUBMIT BUTTON
validation.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {

  if  (
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
    alert("Veuillez remplir tous les champs du formulaire.");
    validatePrenom();
    validateNom();
    validateEmail();
    validateBirthdate();
    validateQuantity();
    validateLocation();
    validateConditions();
    
  }
  
  else {
    document.getElementById("form").reset();
    //remove all border color
    prenom.style.border = "";
    nom.style.border = "";
    email.style.border = "";
    birthdate.style.border = "";
    quantity.style.border = "";
    closeModalFunc();
    launchModalConfirmation()
  }

}