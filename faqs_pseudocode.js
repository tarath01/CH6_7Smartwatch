/*
=================================================
Title: Smart Watch FAQ's
Author: Taylor Rath
Date: 03/03/2026
GitHub: https://github.com/tarath01/CH6_7Smartwatch
Program Summary: FAQ and Image Swap to create a Smartwatch Pro FAQ
page that includes image swap.  It displays the correct image
based on the FAQ selected or reset to the default image when all
FAQ are closed.
===================================================
 */

"use strict"

// SETUP GLOBAL VARIABLES
//1. faqImage = Find the main FAQ image element and save it to a variable using querySelector
//2. faqImageOrigSrc = Save the main FAQ image's default 'src' to a variable using the src property
//3. faqImageOrigAtl = Save the main FAQ image's default 'alt' text to a variable using the alt property
//4. h2s = Find all the H2 elements inside the FAQ section and save them as a list using querySelectorAll "#faqs h2"

let faqImage = document.querySelector("#faq_image");
const h2s = document.querySelectorAll("#faqs h2");
const faqImageOrigSrc = faqImage.getAttribute("src");
const faqImageOrigAlt = faqImage.getAttribute("alt");


// SETUP THE EVENT HANDLER (When an H2 is clicked)
const toggleVisibility = evt => {

    /* 1. Figure out exactly which H2 heading the user just clicked and save it to a variable using*/
    const selectedH2 = evt.currentTarget;
    const div = selectedH2.nextElementSibling;

    let allClosed = false;
    /*   2. Create a variable called 'allClosed' and set it to FALSE
          this will be used to reset the default image if all FAQs are closed*/

    /* 3. LOOP through every H2 heading (h2s) in your saved list*/
    for (let h2 of h2s) {
        if (h2 === selectedH2) {
            if (h2.classList.contains("minus")) allClosed = true;

            h2.classList.toggle("minus");
            div.classList.toggle("open");

            let dataImg = h2.getAttribute("data-img");
            let dataAlt = h2.getAttribute("data-alt");

            faqImage.setAttribute("src", dataImg);
            faqImage.setAttribute("alt", dataAlt);
        } else {
            h2.classList.remove("minus");
            h2.classList.remove("open");
        }
    }
    if (allClosed === true) {
        faqImage.setAttribute("src", faqImageOrigSrc);
        faqImage.setAttribute("alt", faqImageOrigAlt);
    }
    evt.preventDefault();


    /*   IF the current heading in the loop is the one the user clicked:
           - Check if this heading already has the "minus" class.
             If it does, change your 'allClosed' tracker to TRUE.

           - Toggle the "minus" class on this clicked heading.
           - Toggle the "open" class on the answer element directly below it.*/

    /*           - Get the new image source stored in this heading's 'data-img' attribute.
               - Get the new alt text stored in this heading's 'data-alt' attribute.
               - Update the main FAQ image to show this new source and alt text.

       ELSE (it is a different heading):
               - Remove the "minus" class from this heading.
               - Remove the "open" class from the answer element directly below it.*

    /*  4. IF your 'allClosed' tracker is TRUE:
           - Change the main FAQ image's source back to the original default source.
          - Change the main FAQ image's alt text back to the original default alt text.*/
    /*  5. Prevent the browser's default click behavior.*/
    // prevents default click behavior
}

// INITIALIZATION - WHEN THE PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {
    for (let h2 of h2s) {
        h2.addEventListener("click", toggleVisibility);
    }

    h2s[0].focus();
});

//   1. LOOP through your saved list of all h2 headings (hs2).
//  2. For each heading, attach a "click" event listener that triggers the 'toggleVisibility' function.
