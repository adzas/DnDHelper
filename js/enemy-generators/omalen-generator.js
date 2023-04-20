import RandomHelper from "../helpers/random-helper.js";

export default class OmalenGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        const hp = 25;
        return {
            "type": "omalen",
            "name": "Omalen",
            "actions": [],
            "statistics": {
                "xp": 999,
                "kp": 15,
                "currentHp": hp,
                "hp": hp,
                "initiative": initiative,
                'pp': 15,
                "strength": 12,
                "dexterity": 17,
                "condition": 13,
                "intelligence": 8,
                "wisdom": 16,
                "charisma": 8,
                "speed": "30ft (6[ ])",
                "i": "80kg; 200cm wzrostu; 157 lat; zasięg widzenia w ciemności: 18m 60ft 12[ ]; intuicja pasywna: 13"
            }
        }
    };
}