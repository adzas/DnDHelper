import RandomHelper from "../helpers/random-helper.js";

export default class DireWolfGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(10)*3)+21;
        return {
            "type": "dire-wolf",
            "name": "Straszny wilk",
            "actions": ["bite"],
            "statistics": {
                "xp": 200,
                "kp": 14,
                "currentHp": hp, // 37
                "hp": hp,
                "initiative": this.k(20)+5,
                'pp': 13,
                "strength": 17,
                "dexterity": 15,
                "condition": 15,
                "intelligence": 3,
                "wisdom": 12,
                "charisma": 7,
                "speed": "50ft (10[ ])",
                "i": "advantage w testach ataku z sojusznikiem obok; advantage w testach węchu i słuchu; percepcja +3; skradanie się +4"
            }
        }
    };
}