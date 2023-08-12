import RandomHelper from "../helpers/random-helper.js";

export default class ThugGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*3)+20;
        return {
            "type": "thug",
            "name": "Zbir",
            "actions": ["mace","heavy-crossbow"],
            "statistics": {
                "xp": 100,
                "kp": 11,
                "currentHp": hp,
                "hp": hp, // 32
                "initiative": this.k(20),
                'pp': 10,
                "strength": 15,
                "dexterity": 11,
                "condition": 14,
                "intelligence": 10,
                "wisdom": 10,
                "charisma": 11,
                "speed": "30ft",
                "i": "2x atak mele; pack tactics;"
            }
        }
    };
}