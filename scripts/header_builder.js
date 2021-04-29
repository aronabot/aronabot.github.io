localHeader = [
    {
        "type": 0,
        "src": "./img/icons/logo.png",
        "dest": "./index.html"
    },
    {
        "type": 1,
        "name": "캐릭터",
        "dest": "./character.html"
    },
    {
        "type": 1,
        "name": "이벤트",
        "dest": "./ready.html"
    },
    {
        "type": 1,
        "name": "전술대항전",
        "dest": "./ready.html"
    },
    {
        "type": 1,
        "name": "가챠",
        "dest": "./gacha.html"
    }
];

function build_header(JSONObject){
    var structHTML =`
    <nav>
    <a class='logo' href='${JSONObject[0]["dest"]}'>
        <img id='logo-image' src='${JSONObject[0]["src"]}'>
    </a>

        <div class='item-container'>
            <a class='item' href='${JSONObject[1]["dest"]}'>${JSONObject[1]["name"]}</a>
            <a class='item' href='${JSONObject[2]["dest"]}'>${JSONObject[2]["name"]}</a>
            <a class='item' href='${JSONObject[3]["dest"]}'>${JSONObject[3]["name"]}</a>
            <a class='item' href='${JSONObject[4]["dest"]}'>${JSONObject[4]["name"]}</a>
            <div onclick='history.back();' class='button-cover'></div>
            <div class='mobile-nav-button'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>


    <div onclick="history.back();" class='page-cover'></div>
    <div class='mobile-nav'>
        <a class='item' href='${JSONObject[1]["dest"]}'>${JSONObject[1]["name"]}</a>
        <a class='item' href='${JSONObject[2]["dest"]}'>${JSONObject[2]["name"]}</a>
        <a class='item' href='${JSONObject[3]["dest"]}'>${JSONObject[3]["name"]}</a>
        <a class='item' href='${JSONObject[4]["dest"]}'>${JSONObject[4]["name"]}</a>
    </div>`

    var header = document.getElementsByTagName('header')[0];
    header.innerHTML = structHTML;
}

function build_footer(){
    var structHTML = `            
    <a class='footer-content' href='https://github.com/aronabot'>Contact</a>
    <a class='footer-content' href='https://docs.google.com/spreadsheets/d/e/2PACX-1vRT3vi_5B6tHsz0s9qGy13-chVMURiogsaz0XXDaGKHPPDok5fRezAoI8NvtHeRqBuvIzmQEMnGr-34/pubhtml'>Source From DC</a>
    <a class='footer-content' href='https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4u7GUMO52fMRY1Ndcjvo3MSRiG4FoAYfHzdKLQvVoMAm4wdCnTj-QGLMH2ypE-FRqXaQQLEBUHx4X/pubhtml'>Source From 나힝구</a>
    <div>published by github</div>
    `

    var footer = document.getElementsByTagName('footer')[0];
    footer.innerHTML = structHTML;
}

build_header(localHeader);