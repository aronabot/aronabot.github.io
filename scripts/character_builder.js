function buildCharacterIcon(JSONObject){
    var characterContainer = document.getElementById('character-icon-container');
    for(var idx in JSONObject){
        var character = JSONObject[idx];

        var characterPortrait = document.createElement("a");
        characterPortrait.setAttribute('class', 'character-portrait');
        //href append later
        characterPortrait.setAttribute('href', `characters/${character['info']}`);

        var characterIcon = document.createElement("div");
        characterIcon.setAttribute('class', 'character-icon');

        var characterImage = document.createElement("img");
        characterImage.setAttribute('class', 'character-image');
        characterImage.setAttribute('src', character['icon']);

        var characterRarity = document.createElement("div");
        characterRarity.setAttribute('class', 'character-rarity');

        for(var i = 0; i < character['rarity']; i ++){
            var characterRartiyImage = document.createElement('img');
            characterRartiyImage.setAttribute('class', 'character-rarity-image');
            characterRartiyImage.setAttribute('src', 'img/icons/icon-rarity.png');
            characterRartiyImage.setAttribute('alt', 'Character Rarity');

            characterRarity.appendChild(characterRartiyImage);
        }

        var characterName = document.createElement("h2");
        characterName.setAttribute('class', 'character-name');
        characterName.innerHTML = character['name'];

        var characterRole = document.createElement("h3");
        characterRole.setAttribute('class', 'character-role');
        characterRole.innerHTML = character['role'];
        
        //construct character icon
        characterIcon.appendChild(characterImage);
        characterIcon.appendChild(characterRarity);
        characterIcon.appendChild(characterName);
        characterIcon.appendChild(characterRole);

        //construct character portrait
        characterPortrait.appendChild(characterIcon);
        
        characterContainer.appendChild(characterPortrait);
    }
}

function loadJSON(requestURL){
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var result = request.response;
        buildCharacterIcon(result);
    }
}

loadJSON('data/character.json');