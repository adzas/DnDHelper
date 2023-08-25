import RandomHelper from "../helpers/random-helper.js";

export default class ShadowGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8))+12;
        return {
            "type": "shadow",
            "name": "Cień",
            "actions": ["strength-drain"],
            "statistics": {
                "xp": 100,
                "kp": 12,
                "currentHp": hp,
                "hp": hp, // 16
                "initiative": this.k(20)+2,
                'pp': 10,
                "strength": 6,
                "dexterity": 14,
                "condition": 13,
                "intelligence": 6,
                "wisdom": 10,
                "charisma": 8,
                "speed": "40ft",
                "i": `Po udanym ataku, cel ataku traci 1d4 statyskyki siły. Jeśli spadnie do zera - umiera 
                (statystyki wracają po ukończeniu długiego lub krutkiego odpoczynku). 
                Jeśli jakiś humanoid sojusznik umrze od ataku cienia, to po 1d4 hodzin powstaje nad jego ciałem nowy cień.; 
                Widzenie w ciemności 60ft (12 [ ]]); ukrycie się +4; wrażliwy na światło (dmg); 
                odporość na: kwas, zimno, ogień, błyskawica, grzmot; odporny na obrażenia: obuchowe, cięte i kłute od niemagicznych ataków; 
                całkowicie niewrażliwy na obrażenia nekrotyczne i trucizny; 
                odporny na efekty: wyczerpanie, przestraszony, zmagany, sparaliżowany, skamieniały, zatruty, podatny, powściągliwy; 
                <b>nie można się z nim porozumieć</b>; amorficzny - może przemieszczać się przez dziurki od klucza; 
                jeśli jest słabe światło albo ciemno - może się schować z bonusem +6 w akcji dodatkowej; 
                jeśli jest światło słoneczne, cień ma utrudnienia w testach ataku i testach cech i obnonnych;`
            }
        }
    };
}