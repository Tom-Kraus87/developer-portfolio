"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Tom Kraus
      Date: 10/19/2024   

      Filename: project05-02.js
*/

// Declare variable for the collection of img elements
let images = document.getElementsByTagName("img");

// Declare the photo bucket variable
let photoBucket = document.getElementById("photo_bucket");

// Declare the photo list variable
let photoList = document.getElementById("photo_list");

// Loop through items in the images collection
for (let i = 0; i < images.length; i++) {
    
    // Event handler to run anonymous function when image is clicked
    images[i].onclick = function() {
        
        /* Check if parent element of clicked image id === "photo_bucket" 
        (use "this" to reference image clicked)*/
        if (this.parentElement.id === "photo_bucket") {

            // Process for adding image to photoList object
            // Create an element node for the li element named "newItem"
            let newItem = document.createElement("li");

            // Append newItem to the photolist
            photoList.appendChild(newItem);

            // Append the clicked image to the newItem
            newItem.appendChild(this);
        } else {
            // Process for moving image from the PhotoList object, back to the photo bucket
            // Declare variable equal to the parent element of the clicked image
            let oldItem = this.parentElement;

            // Append clicked image to photoBucket object
            photoBucket.appendChild(this);

            // Remove oldItem from the parent element
            oldItem.parentElement.removeChild(oldItem);

        }
    };
}