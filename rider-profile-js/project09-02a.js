"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Tom Kraus
      Date: 11/14/2024  

      Filename: project09-02a.js
*/

/* Page Objects */
let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

// Function to store form data in session storage and navigate to project09-02b.html
function showData() {
      // Store each value in session storage
      sessionStorage.setItem("riderName", riderName.value);
      sessionStorage.setItem("ageGroup", ageGroup.value);
      sessionStorage.setItem("bikeOption", bikeOption.value);
      sessionStorage.setItem("routeOption", routeOption.value);
      sessionStorage.setItem("accOption", accOption.value);
      sessionStorage.setItem("region", region.value);
      sessionStorage.setItem("miles", miles.value);
      sessionStorage.setItem("comments", comments.value);

      // Redirect to the project09-02b.html
      location.href = "project09-02b.html";
}

// Attach the showData function to the Submit button click
document.getElementById("submitButton").onclick = showData;