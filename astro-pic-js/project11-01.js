"use strict";
/*  JavaScript 7th Edition
    Chapter 11
    Project 11-01

    Project to retrieve the Astronomy Picture of the Day from NASA
    Author: Tom Kraus
    Date: 12/6/2024  

    Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {   
    // Declare the dateStr variable and set it equal to the value of the dateBox element
    let dateStr = dateBox.value;

    // Use a fetch to make a request to the NASA API with the selected date
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateStr}`)
    .then((response) => {
        // Parse the response JSON
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        // Pass the parsed JSON object to the showPicture function
        showPicture(json);
    })
    .catch((error) => {
        // Display the error in the debugger console
        console.error("Fetch error:", error.message);
    });
};

// Function to display the picture or video
function showPicture(json) {
    if (json.media_type === "video") {
        // Display video
        imageBox.innerHTML = `<iframe src="${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;
    } else if (json.media_type === "image") {
        //Display image
        imageBox.innerHTML = `<img src="${json.url}"><h1>${json.title}</h1><p>${json.explanation}</p>`;
    } else {
        // Handle unsupported media types
        imageBox.innerHTML = "Image not Available";
    }
}



