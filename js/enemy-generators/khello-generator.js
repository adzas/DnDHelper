import RandomHelper from "../helpers/random-helper.js";

export default class KhelloGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*3)+20;
        return {
            "type": "khello",
            "name": "Khello",
            "actions": ["multiattack","claws","spikes", "scream"],
            "statistics": {
                "xp": 300,
                "kp": 18,
                "currentHp": hp,
                "hp": hp,
                "initiative": this.k(20)+10,
                'pp': 16,
                "strength": 12,
                "dexterity": 18,
                "condition": 8,
                "intelligence": 8,
                "wisdom": 14,
                "charisma": 10,
                "speed": "45ft",
                "i": "[+7/3k6+4(cięte)]x2;45ft[9];"
            }
        }
    };
}