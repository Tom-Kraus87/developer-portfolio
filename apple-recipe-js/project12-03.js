"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Tom Kraus
      Date: 12/9/2024 

      Filename: project12-03.js
*/

// $ indicates a jQuery command
// => indicates anonymous function that is run when page is ready
// Run once the page is loaded and ready
// $(document).ready(function() { jQuery statements }
$( () => {

    // Apply click event to article > h2
    $("article > h2").click(function() {
        // Declare the heading variable referencing the clicked h2 element
        var heading = $(this);

        // Declare the list variable referencing the next sibling element of the heading
        var list = heading.next();
        
        // Declare the headingImage variable referencing the img child of the heading
        var headingImage = heading.find("img");

        // Alternate between hiding and showing the content of the list with slideToggle
        list.slideToggle(500); // 500ms interval for the sliding effect

        // Check the current src of the image and toggle it
        var currentSrc = headingImage.attr("src");

        // If the src attributes is "plus.png", change it to "minus.png", otherwise set the src attribute value to “plus.png”.
        if (currentSrc === "plus.png") {
            headingImage.attr("src", "minus.png");
        } else {
            headingImage.attr("src", "plus.png")
        }
    });

});

