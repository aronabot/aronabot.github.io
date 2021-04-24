function buildCharacterInfo(JSONObject, characterName){
    var character = JSONObject.filter(function(e){
        return e.name == characterName;
    })[0];
    var property = character["property"]
    var structHTML = `
        <div class='character-info'>
        <div class='character-name'>
            <p>${character["name"]}</p>
        </div>
        <div class='character-image-div'>
            <img class='character-image' src='../${character["icon"]}'>
        </div>
        

        <div class='character-rarity'>
        </div>

        <table class='character-profile-table'>
            <th colspan='2'>프로필</th>
            <tr>
                <td>학교</td>
                <td>${property["school"]}</td>
            </tr>
            <tr>
                <td>역할</td>
                <td>${property["role"]}</td>
            </tr>
            <tr>
                <td>위치</td>
                <td>${property["position"]}</td>
            </tr>
            <tr>
                <td>무기</td>
                <td>${property["weapon"]}</td>
            </tr>
            <tr>
                <td>공격타입</td>
                <td>${property["attackType"]}</td>
            </tr>
            <tr>
                <td>방어타입</td>
                <td>${property["defenceType"]}</td>
            </tr>
        </table>
        <table class='character-profile-table'>
            <th colspan='2'>스테이터스</th>
            <tr>
                <td>HP</td>
                <td>${property["HP"]}</td>
            </tr>
            <tr>
                <td>공격력</td>
                <td>${property["ATK"]}</td>
            </tr>
            <tr>
                <td>방어력</td>
                <td>${property["DEF"]}</td>
            </tr>
            <tr>
                <td>치유력</td>
                <td>${property["HEAL"]}</td>
            </tr>
        </table>
    </div>

    <div class='character-info'>
        <div class='character-name dummy'></div>
        <table class='character-skill-table'>
            <th colspan="2">스킬목록</th>
            <tr>
                <td>EX</td>
                <td>${property["skill"]["EX"]["name"]}</td>
            </tr>
            <tr>
                <td>Cost</td>
                <td>${property["skill"]["EX"]["cost"]}</td>
            </tr>
            <tr>
                <td colspan="2">
                    ${property["skill"]["EX"]["describe"]}
                </td>
            </tr>
            <tr>
                <td>일반</td>
                <td>${property["skill"]["normal"]["name"]}</td>
            </tr>
            <tr>
                <td colspan='2'>
                    ${property["skill"]["normal"]["describe"]}
                </td>
            </tr>
            <tr>
                <td>패시브</td>
                <td>${property["skill"]["passive"]["name"]}</td>
            </tr>
            <tr>
                <td colspan='2'>
                    ${property["skill"]["passive"]["describe"]}
                </td>
            </tr>
            <tr>
                <td>서브</td>
                <td>${property["skill"]["sub"]["name"]}</td>
            </tr>
            <tr>
                <td colspan='2'>
                    ${property["skill"]["sub"]["describe"]}
                </td>
            </tr>
        </table>
        <div class='character-name dummy'></div>
        <table class='character-equipment-table'>
            <th colspan="3">장비목록</th>
            <tr>
                <td><img class ='equipment' src='../img/icons/${property['equipment'][0]}.png'></td>
                <td><img class ='equipment' src='../img/icons/${property['equipment'][1]}.png'></td>
                <td><img class ='equipment' src='../img/icons/${property['equipment'][2]}.png'></td>
            </tr>
        </table>
    </div>
    `;

    var characterInfoContainer = document.getElementById('character-info-container');
    characterInfoContainer.innerHTML = structHTML;

    var characterRarity = document.getElementsByClassName('character-rarity')[0];
    for(var i = 0; i < character['rarity']; i ++){
        var characterRartiyImage = document.createElement('img');
        characterRartiyImage.setAttribute('class', 'character-rarity-image');
        characterRartiyImage.setAttribute('src', '../img/icons/icon-rarity.png');
        characterRartiyImage.setAttribute('alt', 'Character Rarity');

        characterRarity.appendChild(characterRartiyImage);
    }
}

function loadJSON(requestURL, characterName){
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var result = request.response;
        buildCharacterInfo(result, characterName);
    }
}