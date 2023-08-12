import RandomHelper from "../helpers/random-helper.js";

export default class HillGiantGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(12)*10)+40;
        return {
            "type": "hill-giant",
            "name": "Gigant wzgórzowy",
            "actions": ["rock","greatclub"],
            "statistics": {
                "xp": 1800,
                "kp": 13,
                "currentHp": hp, // 105
                "hp": hp,
                "initiative": this.k(20),
                'pp': 12,
                "strength": 21,
                "dexterity": 8,
                "condition": 19,
                "intelligence": 5,
                "wisdom": 9,
                "charisma": 6,
                "speed": "40ft",
                "i": "może wykonać dwa ataki maczugą; percepcja +2; jezyk giganci; "
            }
        }
    };
}