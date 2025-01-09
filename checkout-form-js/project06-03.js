"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Tom Kraus
      Date: 10/22/2024

      Filename: project06-03.js
*/

// Declare useShip variable to call id "useShip"
const useShip = document.getElementById("useShip");
// Add event listener to useShip to run copyShippingToBilling() when clicked
useShip.addEventListener("click", copyShippingToBilling);

// Define copyShippingToBilling()
function copyShippingToBilling() {
    // Check if useShip() is checked
    if (useShip.checked) {
        // Copy values from shipping address fields to billing address fields
        document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
        document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
        document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
        document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
        document.getElementById("cityBill").value = document.getElementById("cityShip").value;
        document.getElementById("countryBill").value = document.getElementById("countryShip").value;
        document.getElementById("codeBill").value = document.getElementById("codeShip").value;
        
        // Copy selectedIndex from state dropdown shipping to state dropdown billing
        document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;

    }
}

// Declare formElements variable, use querySelectorAll() to store all input elements of input type "text"
const formElements = document.querySelectorAll("input[type='text']");
// Declare fieldCount variable equal to length of formElements
const fieldCount = formElements.length;

// Declare errorBox variable to call id "errorBox"
const errorBox = document.getElementById("errorBox");

// Iterate through each element in formElements
for (let i =0; i < fieldCount; i++) {
    // Add event listener to each element for showValidatonError() in respone to the invalid event
    formElements[i].addEventListener("invalid", showValidationError);
}

// Define showValidationError(evt)
function showValidationError(evt) {
    // Prevent default invalid response
    evt.preventDefault();
    // Display custom error message set to errorBox
    errorBox.textContent = "Complete all highlighted fields";
}