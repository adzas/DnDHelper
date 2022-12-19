import RandomHelper from "../helpers/random-helper.js";

export default class HumGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        return {
            "type": "hum",
            "name": "Hum",
            "actions": [],
            "statistics": {
                "xp": 999,
                "kp": 14,
                "hp": 17,
                "currentHp": 14,
                "initiative": initiative,
                'pp': 9,
                "strength": 8,
                "dexterity": 17,
                "condition": 14,
                "intelligence": 15,
                "wisdom": 8,
                "charisma": 12,
                "speed": "30ft (6[ ])",
                "i": "16kg; 62cm wzrostu; 16 lat; zasięg widzenia: 18m 60ft 12[ ]; widzenie w ciemności: ; intuicja pasywna: 9;"
            }
        }
    };
}