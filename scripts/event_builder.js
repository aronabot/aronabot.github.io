function buildEventSlider(requestURL){
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var result = request.response;
        var slickSlider = document.getElementsByClassName("slick-slider")
        for(var idx in result){
            var eventDiv = document.createElement("div"); 
            eventDiv.setAttribute('class', 'event');
    
            var eventImage = document.createElement("img");
            eventImage.setAttribute('class', 'event');
            eventImage.setAttribute('src', result[idx]);
            
            eventDiv.appendChild(eventImage);
            slickSlider.appendChild(eventDiv);
        }

    }
}

buildEventSlider('data/event.json')

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