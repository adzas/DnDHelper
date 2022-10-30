import RandomHelper from "../helpers/random-helper.js";

export default class AlsariphGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "alsariph",
            "name": "Alsariph",
            "actions": [],
            "statistics": {
                "xp": 999,
                "kp": 12,
                "currentHp": 16,
                "hp": 16,
                "initiative": 99,
                'pp': 11,
                "strength": 8,
                "dexterity": 14,
                "condition": 16,
                "intelligence": 10,
                "wisdom": 12,
                "charisma": 16,
                "speed": "30ft (6[ ])",
                "i": "zasięg widzenia: 36m 120ft 24[ ]; widzenie w ciemności: ; intuicja pasywna: 13;"
            }
        }
    };
}