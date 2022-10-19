import RandomHelper from "../helpers/random-helper.js";

export default class DogGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "dog",
            "name": "Pies",
            "actions": ["bit"],
            "statistics": {
                "xp": 35,
                "kp": 10,
                "hp": (this.k(8)*2)+2,
                "initiative": this.k(20)+2,
                'pp': 13,
                "strength": 10,
                "dexterity": 15,
                "condition": 12,
                "intelligence": 3,
                "wisdom": 12,
                "charisma": 6,
                "speed": "40ft (8[ ])",
                "i": "advantage w testach ataku z sojusznikiem obok; advantage w testach węchu i słuchu; percepcja +3; skradanie się +4"
            }
        }
    };
}