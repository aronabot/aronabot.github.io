let characterInfoList = [
    {
        "impl": true,
        "pickup": false,
        "info": "characters/Arisu.html",
        "name": "아리스",
        "role": "어태커",
        "icon": "img/character/Arisu.png",
        "rarity": 3,
        "property": {
            "school": "밀레니엄",
            "role": "어태커",
            "position": "후위",
            "weapon": "RG",
            "attackType": "신비",
            "defenceType": "특수장갑",

            "HP": 2142,
            "ATK": 514,
            "DEF": 68,
            "HEAL": 1892,
            "skill": {
                "EX": {
                    "name": "세계의 법칙이 붕괴합니다!",
                    "cost": 6,
                    "describe": "직선 범위 내 적에게 공격력 311% 피해</br>에너지 충전 단계에 따라 1.5배 혹은 2배 증가</br>(발사 후 에너지 충전 단계는 초기화)"
                },
                "normal": {
                    "name": "빛이여!",
                    "describe": "25초마다 회심율 17% 증가(20초)</br>에너지 1단계 충전 (최대 2단계)"
                },
                "passive": {
                    "name": "강화마법입니다!",
                    "describe": "자신의 공격력 14% 증가"
                },
                "sub": {
                    "name": "각성하라, 슈퍼노바!",
                    "describe": "EX 스킬 발동과 동시에 회심률 12.1% 증가(20초)</br>에너지 충전 단계에 따라 1.5배 혹은 2배 증가"
                }
            },
            "equipment": [
                "Hat", "Hairpin", "Charm"
            ]
        }
    },
    {
        "impl": true,
        "pickup": false,
        "info": "characters/Midori.html",
        "name": "미도리",
        "role": "어태커",
        "icon": "img/character/Midori.png",
        "rarity": 3,
        "property": {
            "school": "밀레니엄",
            "role": "어태커",
            "position": "후위",
            "weapon": "SR",
            "attackType": "관통",
            "defenceType": "경장갑",

            "HP": 2489,
            "ATK": 385,
            "DEF": 19,
            "HEAL": 1665,
            "skill": {
                "EX": {
                    "name": "드로잉 아트",
                    "cost": 3,
                    "describe": "둘 이상의 적에게 공격력 119%의 피해</br>만약, 모모이가 같은 부대에 있을 경우</br>공격력 39.8% 중독 지속 데미지 부여(20초)"
                },
                "normal": {
                    "name": "갈고 닦는 센스",
                    "describe": "25초마다 자신을 제외한 HP가 가장 낮은 아군에게 회복력 77.5%만큼 회복"
                },
                "passive": {
                    "name": "아티스트의 영감",
                    "describe": "회심율 14% 증가"
                },
                "sub": {
                    "name": "개발자 시너지: 모모이",
                    "describe": "공격속도 15% 증가</br>만약, 같은 부대에 모모이가 있을 경우</br>공격속도 18.1%로 증가"
                }
            },
            "equipment": [
                "Gloves", "Hairpin", "Watch"
            ]
        }
    },
    {
        "impl": true,
        "pickup": false,
        "info": "characters/Momoi.html",
        "name": "모모이",
        "role": "어태커",
        "icon": "img/character/Momoi.png",
        "rarity": 2,
        "property": {
            "school": "밀레니엄",
            "role": "어태커",
            "position": "중위",
            "weapon": "AR",
            "attackType": "관통",
            "defenceType": "경장갑",

            "HP": 2426,
            "ATK": 233,
            "DEF": 20,
            "HEAL": 1465,
            "skill": {
                "EX": {
                    "name": "창작의 고통",
                    "cost": 3,
                    "describe": "범위 내의 적에게 공격력 338%의 피해</br>만약, 미도리가 같은 부대에 있을 경우</br>공격력 72% 화상 지속 피해 부여(20초)"
                },
                "normal": {
                    "name": "마감 엄수",
                    "describe": "30초 마다 명중률 22.3% 증가 (20초)"
                },
                "passive": {
                    "name": "크리에이티브 센스",
                    "describe": "회심율 14% 증가"
                },
                "sub": {
                    "name": "개발자 시너지: 미도리",
                    "describe": "공격력 15.1% 증가</br>만약, 같은 부대에 미도리가 있을 경우</br>공격력 18.1%로 증가"
                }
            },
            "equipment": [
                "Shoes", "Hairpin", "Watch"
            ]
        }
    },
    {
        "impl": true,
        "pickup": false,
        "info": "characters/Airi.html",
        "name": "아이리",
        "role": "서포터",
        "icon": "img/character/Airi.png",
        "rarity": 2,
        "property": {
            "school": "트리니티",
            "role": "서포터",
            "position": "후위",
            "weapon": "SMG",
            "attackType": "폭발",
            "defenceType": "경장갑",

            "HP": 2368,
            "ATK": 183,
            "DEF": 20,
            "HEAL": 1725,
            "skill": {
                "EX": {
                    "name": "아쉽지만...... 에잇!",
                    "cost": 5,
                    "describe": "원형 범위 내 적에 대해 공격력 265%의 피해 및</br>이동속도 22.8% 감소(20초)"
                },
                "normal": {
                    "name": "머리가 띵- 할지도...",
                    "describe": "25초 마다 적 1명에 대해 공격속도 18.4% 감소 (30초)"
                },
                "passive": {
                    "name": "디저트의 힘",
                    "describe": "공격력 14% 증가"
                },
                "sub": {
                    "name": "아이리의 성원",
                    "describe": "아군 공격속도 9.1% 증가"
                }
            },
            "equipment": [
                "Shoes", "Hairpin", "Necklace"
            ]
        }
    }
]

let rarityDelta = [
    {
        "from": 1,
        "to": 2,
        "ATK": 0.1,
        "HP": 0.05,
        "HEAL": 0.075
    },
    {
        "from": 2,
        "to": 3,
        "ATK": 0.12,
        "HP": 0.07,
        "HEAL": 0.1
    },
    {
        "from": 3,
        "to": 4,
        "ATK": 0.14,
        "HP": 0.09,
        "HEAL": 0.12
    },
    {
        "from": 4,
        "to": 5,
        "ATK": 0.17,
        "HP": 0.14,
        "HEAL": 0.15
    }
]

function findCharacter(characterName, JSONObject){
    return JSONObject.filter(function(e){
        return e.name == characterName;
    });
}

function calculateCharacterStatus(level, rarity, characterINFO){
    var property = characterINFO['property'];

    var delta = 1.0;
    for(var i = 0; i < level-1; i ++){
        delta *= 1.0/(i+23.4) + 1.0;
    }
    property['HP'] *= delta;
    property['ATK'] *= delta;
    property['DEF'] *= delta;
    property['HEAL'] *= delta;

    console.log(property)
}

calculateCharacterStatus(57, 3, findCharacter("아리스", characterInfoList)[0]);