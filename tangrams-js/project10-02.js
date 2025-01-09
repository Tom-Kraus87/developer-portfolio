"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-02

      Project to create a drag and drop tangram puzzle
      Author: Tom Kraus
      Date: 11/21/2024  

      Filename: project10-02.js
*/

// Reference to the tangram puzzle board
let puzzleBoard = document.getElementById("puzzle");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
let eventX, eventY, tanX, tanY;

// Node list representing the tangram pieces
let tans = document.querySelectorAll("div#puzzle > img");

// Function to rotate a tan by a specified number of degrees
function rotateTan(elem, deg) {
    const obj = window.getComputedStyle(elem, null);
    const matrix = obj.getPropertyValue("transform");
    let angle = 0;
    if (matrix !== "none") {
        const values = matrix.split('(')[1].split(')')[0].split(',');
        const a = values[0];
        const b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180/Math.PI));      
    }

    if (angle < 0) {
        angle += 360;
    }

    let newAngle = angle + deg;

    elem.style.transform = "rotate(" + newAngle + "deg)";
}

// Add event listeners to each tangram piece
for (let tan of tans) {
    tan.addEventListener("pointerdown", (e) =>
        grabTan(e, (event) => {
            rotateTan(event.target, 15);
        })
    );
}

// Grab the tangram piece
function grabTan(e) {
    // check if Shift key is pressed
    if(e.shiftKey) {
        rotateTan(e.target, 15);
    } else {
        // Store initial pointer position
        eventX = e.clientX;
        eventY = e.clientY;
        tanX = e.target.offsetLeft || 0;
        tanY = e.target.offsetTop || 0;

        // Disable default touch actions
        e.target.style.touchAction = "none";

        // Increment z-index to bring the piece to the front
        zCounter++;
        e.target.style.zIndex = zCounter;

        // Add pointermove and pointerup listeners
        e.target.addEventListener("pointermove", moveTan);
        e.target.addEventListener("pointerup", dropTan);
    }
}

        // Move the tangram piece
        function moveTan(e) {
            // Calculate movement distances
            let deltaX = e.clientX - eventX;
            let deltaY = e.clientY - eventY;

            // Update the position of the piece
            e.target.style.left = tanX  + deltaX + "px";
            e.target.style.top = tanY + deltaY + "px";
        }

        function dropTan(e) {
            // Remove event listeners
            e.target.removeEventListener("pointermove", moveTan);
            e.target.removeEventListener("pointerup", dropTan);
        }