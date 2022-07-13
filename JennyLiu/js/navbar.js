/* sticky navbar and got to top button */
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

//Get the button:
mybutton = document.getElementById("myBtn");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function scrollFunction() {
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

    // When the user scrolls down 20px from the top of the document, show the button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/* responsive navbar */
// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon //
function responsiveFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/* back to top button */

// When the user clicks on the top button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}