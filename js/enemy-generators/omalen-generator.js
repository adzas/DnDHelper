import RandomHelper from "../helpers/random-helper.js";

export default class OmalenGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        return {
            "type": "omalen",
            "name": "Omalen",
            "actions": [],
            "statistics": {
                "xp": 999,
                "kp": 15,
                "currentHp": 16,
                "hp": 15,
                "initiative": initiative,
                'pp': 15,
                "strength": 12,
                "dexterity": 17,
                "condition": 13,
                "intelligence": 8,
                "wisdom": 16,
                "charisma": 8,
                "speed": "30ft (6[ ])",
                "i": "zasięg widzenia: 36m 120ft 24[ ]; widzenie w ciemności: ; intuicja pasywna: 13;"
            }
        }
    };
}