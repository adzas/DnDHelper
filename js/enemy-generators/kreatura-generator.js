import RandomHelper from "../helpers/random-helper.js";

export default class KreaturaGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "kreatura",
            "name": "Kreatura",
            "actions": [],
            "statistics": {
                "xp": 75,
                "kp": 10,
                "currentHp": null,
                "hp": 12,
                "initiative": 20,
                'pp': 10,
                "strength": 10,
                "dexterity": 15,
                "condition": 12,
                "intelligence": 3,
                "wisdom": 12,
                "charisma": 6,
                "speed": "30ft (6[ ])",
                "i": ""
            }
        }
    };
}