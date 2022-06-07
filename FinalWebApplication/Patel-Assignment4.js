//Apurva Patel - Javascript file

//XMLHTTPRequest(Ajax) to grab the iformation from the therapist.html file and upload it to about.html
const about = new XMLHttpRequest();
about.onload = function() {
    document.getElementById("infoContainer").innerHTML = about.responseText;
};
about.open('get', 'ajaxfiles/therapistInfo.html');
about.send();

//XMLHTTPRequest(Ajax) to grab the iformation from the contactBoxForm.html file and upload it to contact.html
const contact = new XMLHttpRequest();
contact.onload = function() {
    document.getElementById("contactContainer").innerHTML = contact.responseText;
};
contact.open('get', 'ajaxfiles/contactBoxForm.html');
contact.send();

// wait for the DOM to be loaded
$(document).ready(function() {

    //Jquery UI widget to show the services
    $("#slider").bxSlider({
        // randomStart: true,
        autoControls: true,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1800,
        slideMargin: 15,
        adaptiveHeight: true,
        shrinkItems: false,
        pause: 5000,
        captions: false,
        pagerType: 'short',
        tickerHover: true,
        randomStart: false,
    });

    //Whent he book appointment button is clicked, takes the user to the contact page
    $("#book-appointment").click(function() {
        location.href = "contact.html";
    });


});

//Jquery Plugin to have the heading fade it slowly when the page is loaded
$(function() {
    $("#header").hide().fadeIn(3000);
});

//Jquery plugin to have the text area resize
document.addEventListener('DOMContentLoaded', function() {
    autosize(document.querySelectorAll('#message'));
}, false);