/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Tom Kraus
      Date: 10/4/2024  

      Filename: project03-01.js
*/

// Get all items in the menuItem class
let menuItems = document.getElementsByClassName('menuItem');

// Loop through menuItems and attach and event listener to each item
for (let i = 0; i < menuItems.length; i++) {
    // Add an event listener that runs calcTotal() when an item is clicked
    menuItems[i].addEventListener('click', calcTotal);
}

// Function to calculate the total cost
function calcTotal() {
    let orderTotal = 0; // set initial value of order total to 0

    // Loop through the contents of the menuItems collection
    for (let i = 0; i < menuItems.length; i++) {
        // check if item is checked
        if (menuItems[i].checked ) {
            // add item value to order total
            orderTotal += Number(menuItems[i].value);
        }
    }

    // update 'billTotal' element with formatCurrency() & orderTotal
    document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }