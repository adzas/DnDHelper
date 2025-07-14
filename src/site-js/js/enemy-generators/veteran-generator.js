import RandomHelper from "../helpers/random-helper.js";

export default class VeteranGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*9)+18;
        return {
            "type": "veteran",
            "name": "Weteran",
            "actions": [
                "multiattack",
                "long-sword",
                "dagger",
                "long-sword-both-hands",
                "heavy-crossbow"
            ],
            "statistics": {
                "xp": 700,
                "kp": 17,
                "currentHp": hp,
                "hp": hp,
                "initiative": this.k(20)+1,
                'pp': 12,
                "strength": 16,
                "dexterity": 13,
                "condition": 14,
                "intelligence": 10,
                "wisdom": 11,
                "charisma": 8,
                "speed": "30ft",
                "i": "2xLongSword+sztylet;"
            }
        }
    };
}