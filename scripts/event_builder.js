let fs = require('fs');

function buildEventSlider(eventDirectory){
    var slickSlider = document.getElementsByClassName("slick-slider")
    fs.readdir(eventDirectory, function(error, filelist){
        for(var item in filelist){
            var eventDiv = document.createElement("div"); 
            eventDiv.setAttribute('class', 'event');

            var eventImage = document.createElement("img");
            eventImage.setAttribute('class', 'event');
            eventImage.setAttribute('src', `${eventDirectory}/${item}`);
            
            eventDiv.appendChild(eventImage);
            slickSlider.appendChild(eventDiv);
        }
    });
}

buildEventSlider('img/event')

$('.slick-slider').slick({
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    //auto play property
    autoplay: true,
    autoplaySpeed: 5000,
    infinity: true,
    pauseOnHover: true
});