function editNav() {
    let x = document.getElementById("myTopnav");
    x.className === "topnav" ? x.className += " responsive" : x.className = "topnav";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");


// const for the elements inside the form
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const cityForm = document.querySelector("cityForm");

//create new elements in the DOM
const prenomErrorMessage = document.createElement("p");
const nomErrorMessage = document.createElement("p");
const emailErrorMessage = document.createElement("p");
const birthdateErrorMessage = document.createElement("p");
const quantityErrorMessage = document.createElement("p");

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

//PRENOM
prenom.addEventListener("keyup", validatePrenom);

function validatePrenom() {
  if (prenom.value.length < 2) {
    prenom.style.border = "3px solid red";
    prenomErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    //add error class
    prenomErrorMessage.classList.add("errorClass");
    prenom.parentElement.appendChild(prenomErrorMessage);
  } else {
    prenom.style.border = "3px solid green";
    // errorMessage.textContent = "";
    prenomErrorMessage.classList.remove("errorClass");
    prenom.parentElement.removeChild(prenomErrorMessage);
  }
}

//NOM
nom.addEventListener("keyup", validateNom);

  function validateNom() {
    if (nom.value.length < 2) {
      nom.style.border = "3px solid red";
      nomErrorMessage.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      //add error class
      nomErrorMessage.classList.add("errorClass");
      nom.parentElement.appendChild(nomErrorMessage);
    } else {
      nom.style.border = "3px solid green";
      // errorMessage.textContent = "";
      nomErrorMessage.classList.remove("errorClass");
      nom.parentElement.removeChild(nomErrorMessage);
    }
  }

//EMAIL
email.addEventListener("keyup", validateEmail);

  function validateEmail() {
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegExp.test(email.value)) {
    email.style.border = "3px solid red";
    emailErrorMessage.textContent = "Veuillez entrer une adresse email valide.";
    //add error class
    emailErrorMessage.classList.add("errorClass");
    email.parentElement.appendChild(emailErrorMessage);
  }
  else {
    email.style.border = "3px solid green";
    // errorMessage.textContent = "";
    emailErrorMessage.classList.remove("errorClass");
    email.parentElement.removeChild(emailErrorMessage);
  }
}

 // QUANTITY (e) => console.log(e.target.value)
 //adevent listener if you change the value with the button at the right of the input
quantity.addEventListener("change", validateUpDown);

  function validateUpDown() {
    //if e.target.value is >=0, then success message
    if (quantity.value >= 0) {
      quantity.style.border = "3px solid green";
      // errorMessage.textContent = "";
      quantityErrorMessage.classList.remove("errorClass");
      quantity.parentElement.removeChild(quantityErrorMessage);
    }
    //if e.target.value is undefined or <0, then error message
    else {
      quantity.style.border = "3px solid red";
      quantityErrorMessage.textContent = "Veuillez entrer une quantité positive.";
      //add error class
      quantityErrorMessage.classList.add("errorClass");
      quantity.parentElement.appendChild(quantityErrorMessage);
    }
  }



//event listener if you press a key inside the quantity input
quantity.addEventListener("keyup", validateQuantity);

  function validateQuantity() {
    //QUANTITY value has to be a number
    if (isNaN(quantity.value)) {
      quantity.style.border = "3px solid red";
      quantityErrorMessage.textContent = "Veuillez entrer un nombre pour le champ de la quantité.";
      //add error class
      quantityErrorMessage.classList.add("errorClass");
      quantity.parentElement.appendChild(quantityErrorMessage);
    }
    //else if quantity value is empty
    else if (quantity.value === "") {
      quantity.style.border = "3px solid red";
      quantityErrorMessage.textContent = "Veuillez entrer une quantité pour le champ de la quantité.";
      //add error class
      quantityErrorMessage.classList.add("errorClass");
      quantity.parentElement.appendChild(quantityErrorMessage);
    }
    else {
      quantity.style.border = "3px solid green";
      // errorMessage.textContent = "";
      quantityErrorMessage.classList.remove("errorClass");
      quantity.parentElement.removeChild(quantityErrorMessage);
    }
  }

//error message if none of the radio button are checked in the city form
// cityForm.addEventListener("click", validateCity);

//   function validateCity() {
//     if (!cityForm.checked) {
//       cityForm.style.border = "3px solid red";
//       cityErrorMessage.textContent = "Veuillez choisir une ville pour le champ de la ville.";
//       //add error class
//       cityErrorMessage.classList.add("errorClass");
//       cityForm.parentElement.appendChild(cityErrorMessage);
//     }
//     else {
//       cityForm.style.border = "3px solid green";
//       // errorMessage.textContent = "";
//       cityErrorMessage.classList.remove("errorClass");
//       cityForm.parentElement.removeChild(cityErrorMessage);
//     }
//   }
  

  
  
 