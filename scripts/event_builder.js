function buildEventSlider(eventDirectory){
    var fs = new ActiveXObject("scripting.FileSystemObject");
    var filelist = new Enumerator(fs.GetFolder(eventDirectory));

    var slickSlider = document.getElementsByClassName("slick-slider")

    for(;!filelist.atEnd(); filelist.moveNext()){
        var eventDiv = document.createElement("div"); 
        eventDiv.setAttribute('class', 'event');

        var eventImage = document.createElement("img");
        eventImage.setAttribute('class', 'event');
        eventImage.setAttribute('src', `${eventDirectory}/${filelist.item().name}`);
        
        eventDiv.appendChild(eventImage);
        slickSlider.appendChild(eventDiv);
    }

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