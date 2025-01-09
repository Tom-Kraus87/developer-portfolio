/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Tom Kraus
      Date: 09/29/2024  

      Filename: project02-04.js
 */
 
// declare global constants for the lunch selections
const CHICKEN_PRICE = 10.95; //cost of chicken
const HALIBUT_PRICE = 13.95; // cost of halibut
const BURGER_PRICE = 9.95; // cost of burgers
const SALMON_PRICE = 18.95 // cost of salmon
const SALAD_PRICE = 7.95 // cost of salad
const SALES_TAX = 0.07 // cost of sales tax

// load event listeners when page loads
window.addEventListener("load", calcTotal); 

// Event listener for checked items
document.getElementById("chicken").addEventListener("change", calcTotal);
document.getElementById("halibut").addEventListener("change", calcTotal);
document.getElementById("burger").addEventListener("change", calcTotal);
document.getElementById("salmon").addEventListener("change", calcTotal);
document.getElementById("salad").addEventListener("change", calcTotal);


// calculate the total of the lunch selections
function calcTotal() {
   let cost = 0;

   // Get checked property of checkboxes
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   // update totalCost based on checked items
   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   // Display food total
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   // Calculate and display tax
   let tax = cost * SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   // Calculate and display total cost
   let totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}
