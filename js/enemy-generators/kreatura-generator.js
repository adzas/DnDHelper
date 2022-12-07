import RandomHelper from "../helpers/random-helper.js";

export default class KreaturaGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        return {
            "type": "kreatura",
            "name": "Kreatura",
            "actions": ['runs'],
            "statistics": {
                "xp": 999,
                "kp": 19,
                "currentHp": 20,
                "hp": 22,
                "initiative": initiative,
                'pp': 13,
                "strength": 16,
                "dexterity": 12,
                "condition": 17,
                "intelligence": 8,
                "wisdom": 13,
                "charisma": 8,
                "speed": "30ft (6[ ])",
                "i": "zasięg widzenia: 36m 120ft 24[ ]; intuicja pasywna: 13 (18 z runy); pasywna percepcja: ? Rona miecza i kamienia (podwójna biegłość czyli ekspertyza w narzędziach, które zna oraz widzenie w czemności na 120ft i stałe ułatwienie w rzutach na intuicję; Zwiększenie rozmiaru (duży rozmiar) (trwa minutę dwa razy na długi odpoczynek, przewaga w testach na siłę i rzutach obronnych na siłę +1k6 do obrażeń raz na turę; "
            }
        }
    };
}