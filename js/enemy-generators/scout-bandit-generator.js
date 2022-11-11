import RandomHelper from "../helpers/random-helper.js";

export default class ScoutBanditGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*2)+8;
        return {
            "type": "scout-bandit",
            "name": "Bandyta zwiadowca",
            "actions": ["sword","long-bow"],
            "statistics": {
                "xp": 100,
                "kp": 13,
                "currentHp": hp,
                "hp": hp, // 16
                "initiative": this.k(20)+2,
                'pp': 15,
                "strength": 11,
                "dexterity": 14,
                "condition": 12,
                "intelligence": 11,
                "wisdom": 13,
                "charisma": 11,
                "speed": "30ft (6[ ])",
                "i": "2x atak mele lub range; advantage w testach opartych na słuchu i wzroku; natura +4; percepcja +5; oszustwo +6 przetrwanie +5"
            }
        }
    };
}