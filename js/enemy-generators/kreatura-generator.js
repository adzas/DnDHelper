import RandomHelper from "../helpers/random-helper.js";

export default class KreaturaGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "kreatura",
            "name": "Kreatura",
            "actions": [],
            "statistics": {
                "xp": 999,
                "kp": 19,
                "currentHp": 20,
                "hp": 22,
                "initiative": 99,
                'pp': 13,
                "strength": 16,
                "dexterity": 12,
                "condition": 17,
                "intelligence": 8,
                "wisdom": 13,
                "charisma": 8,
                "speed": "30ft (6[ ])",
                "i": "zasięg widzenia: 36m 120ft 24[ ]; intuicja pasywna: 13;"
            }
        }
    };
}