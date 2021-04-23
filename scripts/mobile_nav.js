$(".mobile-nav-button").click(function(){
    $(".mobile-nav,.mobile-nav-button,.page-cover,.button-cover,html").addClass("open-mobile-nav");
    window.location.hash = ".open-mobile-nav";
});

window.onhashchange = function(){
    if(location.hash != ".open-mobile-nav"){
        $(".mobile-nav,.mobile-nav-button,.page-cover,.button-cover,html").removeClass("open-mobile-nav");
    }
};