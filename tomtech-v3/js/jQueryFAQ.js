"use strict";

// $ indicates a jQuery command
// => indicates anonymous function that is run when page is ready
// Run once the page is loaded and ready
// $(document).ready(function() { jQuery statements })
$( () => {

    // Animate the h1 heading
    // Set the intial font size and opacity of heading to 0
    $("section > h1").css({
        fontSize: 0,
        opacity: 0
    })
    // Increase the font size and opacity over a 0.6 sec interval
    .animate({
        fontSize: "2.3em",
        opacity: 1
    }, 600);

    // Reveal the question when the page opens
    $("dl#faq")
    .hide()
    .effect("clip", {
        mode: "show",
        direction: "horizontal"
    }, 600);


    // Add a click event for every question
    // Select all dt elements nested with "dl#faq" element
    // e = event object for click() nethod
    // $("h1").click(e => { console.log($e.target).next().text()); });
    $("dl#faq dt").click( e => {

        // The question is the target of the click event
        // The answer follows the question in the DOM
        // Alternate between deleting and adding adding the "hiddenAnswer" class to the question
        let question = $(e.target);
        let answer = $(question.next());
        
        $(question).toggleClass("hiddenAnswer");

        if ($(question).hasClass("hiddenAnswer")) {
            // Hide the answer on the page
            $(answer).slideUp(600); // Sets duration of effects to 0.6 seconds
        } else {
            //Display the answer on the page
            $(answer).slideDown(600); // Sets duration of effects to 0.6 seconds
        }

    });

});