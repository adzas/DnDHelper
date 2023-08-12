import RandomHelper from "../helpers/random-helper.js";

export default class AlsariphGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        const hp = 25;
        return {
            "type": "alsariph",
            "name": "Alsariph",
            "actions": [],
            "statistics": {
                "xp": 999,
                "kp": 12,
                "currentHp": hp,
                "hp": hp,
                "initiative": initiative,
                'pp': 11,
                "strength": 8,
                "dexterity": 14,
                "condition": 16,
                "intelligence": 10,
                "wisdom": 12,
                "charisma": 16,
                "speed": "30ft",
                "i": "76kg; 185cm; 22lata; zasięg widzenia: 36m 120ft 24[ ]; widzenie w ciemności: ; intuicja pasywna: 11"
            }
        }
    };
}