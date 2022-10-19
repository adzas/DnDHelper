import RandomHelper from "../helpers/random-helper.js";

export default class BanditGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "bandit",
            "name": "Bandyta",
            "actions": ["short-bow","sword"],
            "statistics": {
                "xp": 25,
                "kp": 12,
                "hp": (this.k(8)*2)+2,
                "initiative": this.k(20),
                'pp': 10,
                "strength": 11,
                "dexterity": 12,
                "condition": 12,
                "intelligence": 10,
                "wisdom": 10,
                "charisma": 10,
                "speed": "30ft (6[ ])",
                "i": ""
            }
        }
    };
}