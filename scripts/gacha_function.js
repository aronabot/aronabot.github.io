let testPool = [
    {   
        "pickup": true,
        "name": "a",
        "icon": "img/character/Arisu.png",
        "rarity": 3
    },
    {   
        "pickup": true,
        "name": "a2",
        "icon": "img/character/Midori.png",
        "rarity": 3
    },
    {   
        "pickup": false,
        "name": "b",
        "icon": "img/character/Momoi.png",
        "rarity": 2
    },
    {   
        "pickup": false,
        "name": "c",
        "icon": "img/character/Mutsuki.png",
        "rarity": 2,
    },
    {   
        "pickup": false,
        "name": "c2",
        "icon": "img/character/Chise.png",
        "rarity": 2
    },
    {   
        "pickup": false,
        "name": "d",
        "icon": "img/character/Juri.png",
        "rarity": 1,
    },
    {   
        "pickup": false,
        "name": "e",
        "icon": "img/character/Fina.png",
        "rarity": 1,
    },
    {   
        "pickup": false,
        "name": "f",
        "icon": "img/character/Asuna.png",
        "rarity": 1,
    },
    {   
        "pickup": false,
        "name": "f2",
        "icon": "img/character/Kotama.png",
        "rarity": 1,
    }
]

function loadJSON(requestURL){
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var result = request.response;
        characterPool = result;
        buildPickupInfo(characterPool);
    }
}

function calculatePickupPool(JSONObject){
    return JSONObject.filter(function(e){
        return e.pickup == true;
    });
}

function calculateSSRPool(JSONObject){
    return JSONObject.filter(function(e){
        return e.rarity == 3;
    });
}

function calculateSRPool(JSONObject){
    return JSONObject.filter(function(e){
        return e.rarity == 2;
    });
}

function calculateRPool(JSONObject){
    return JSONObject.filter(function(e){
        return e.rarity == 1;
    });
}
function randomItem(array){
    return array[Math.floor(Math.random() * array.length)];
}

function calculateGacha(){
    var decisionConst = Math.floor(Math.random() * maxProbability);
    if(pickupPool != [] && pickProbability >= decisionConst){
        return randomItem(pickupPool);
    }
    else if(ssrProbability >= decisionConst){
        return randomItem(ssrPool);
    }
    else if(srProbability >= decisionConst){
        return randomItem(srPool);
    }
    else {
        return randomItem(rPool);
    }
}

function buildPickupInfo(JSONObject){
    var pickupPool = calculatePickupPool(JSONObject);
    var gachaPickupContianer = document.getElementById('gacha-pickup-container');

    var structHTML = '';

    for(var idx in pickupPool){
        var character = pickupPool[idx];
        var structRarity = '';
        for(var i = 0; i < character["rarity"]; i ++){
            structRarity += "<img class='character-rarity-image' src='img/icons/icon-rarity.png'>"
        }

        structHTML += `
        <div class='character-portrait'>
            <div class='character-icon'>
                <img class='character-image' src='${character["icon"]}'>
                <div class='character-rarity'>
                    ${structRarity}
                </div>
                <h2 class='character-name'>${character["name"]}</h2>
            </div>
        </div>`
    }
    gachaPickupContianer.innerHTML = structHTML;
}

function buildGachaResult(gachaResult){

    var showCountBlue = document.getElementById('show-count-bluepyroxene');
    showCountBlue.innerHTML = `<p>사용한 청휘석 수: \t${gachaCount*120}(개)</p>`;

    var structHTML = ''
    for(var idx in gachaResult){
        var character = gachaResult[idx];
        var structRarity = '';
        for(var i = 0; i < character["rarity"]; i ++){
            structRarity += "<img class='character-rarity-image' src='img/icons/icon-rarity.png'>"
        }
        htmlClass = 'character-portrait';
        if(character["pickup"]){
            htmlClass += ' is-pickup'
            pickupCount += 1;
        }
        structHTML += `
        <div class='${htmlClass}'>
            <div class='character-icon'>
                <img class='character-image' src='${character["icon"]}'>
                <div class='character-rarity'>
                    ${structRarity}
                </div>
            </div>
        </div>`
    }
    var characterGachaContainer = document.getElementById('character-gacha-container');
    characterGachaContainer.innerHTML = structHTML;
}
let characterPool = [];
loadJSON("data/character.json")

let gachaCount = 0;
let pickupCount = 0;

let maxProbability = 10000
let pickProbability = 0.007 * maxProbability
let ssrProbability = 0.025 * maxProbability //2.5
let srProbability = 0.185 * maxProbability  //18.5

let pickupPool = calculatePickupPool(characterPool);
let ssrPool = calculateSSRPool(characterPool);
let srPool = calculateSRPool(characterPool);
let rPool = calculateRPool(characterPool);



$('.one-gacha-button').click(function(){
    var result = []
    var character = calculateGacha();
    result.push(character);
    gachaCount += 1;
    buildGachaResult(result);
})

$('.ten-gacha-button').click(function(){
    var result = []
    for(var i = 0; i < 10; i ++){
        var character = calculateGacha();
        result.push(character);
    }
    gachaCount += 10;
    buildGachaResult(result);
})

