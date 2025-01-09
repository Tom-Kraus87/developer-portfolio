"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Tom Kraus
      Date: 11/9/2024  

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

/* Object defining the container box */
let box = {
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
    xPos: 0,
    yPos: 0
};

/* Constructor function for the Ball class */
function Ball(size) {
    this.radius = size;
    this.xPos = null;
    this.yPos = null;
    this.xVelocity = null;
    this.yVelocity = null;
}

/* Method to move the ball within a container, bouncing off the sides */
Ball.prototype.moveWithin = function(container) {
    // Set the current position boundarues of the ball
    let ballTop = this.yPos;
    let ballLeft = this.xPos;
    let ballBottom = this.yPos + this.radius;
    let ballRight = this.xPos + this.radius;

    // Check for vertical bounce
    if (ballTop < 0 || ballBottom > container.height) {
        container.yPos += this.yVelocity;
        this.yVelocity = -this.yVelocity; // Reverses horizontal direction 
    }

    // Check for horizontal bounce
    if (ballLeft < 0 || ballRight > container.width) {
        container.xPos += this.xVelocity;
        this.xVelocity = -this.xVelocity; // Reverse horizontal direction
    }

    // Move the ball within the container
    this.yPos += this.yVelocity;
    this.xPos += this.xVelocity;
};



/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
    
    let ballImage = document.createElement("div");
    ballImage.className = "ball";
    ballImage.style.width = BALL_RADIUS + "px";
    ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
    ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";

    // Create an instance of the Ball object with the specified radius
    let newBall = new Ball(BALL_RADIUS);

    // Center the newBall within the container
    newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
    newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;

    // Assign a random initial velocity
    newBall.yVelocity = rand(-10, 10);
    newBall.xVelocity = rand(-10, 10);

    // Position the ball within the container
    ballImage.style.left = newBall.xPos + "px";
    ballImage.style.top = newBall.yPos + "px";

    // Append the ball image to the box
    boxImage.appendChild(ballImage);

    // Animate the ball's movement within the box
    window.setInterval(function() {
    // Move the ball within the box
    newBall.moveWithin(box);

    // Update the position of the ball on screen
    ballImage.style.top = newBall.yPos + "px";
    ballImage.style.left = newBall.xPos + "px";

        // Apply a shake effect to the container box
        boxImage.style.top = box.yPos + "px";
        boxImage.style.left = box.xPos + "px";
    }, 25); // Update every 25 milliseconds
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}