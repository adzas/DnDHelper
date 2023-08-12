import RandomHelper from "../helpers/random-helper.js";

export default class DwarfGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*2)+8;
        return {
            "type": "dwarf",
            "name": "Krasnolud Wojownik",
            "actions": ["axe","short-bow"],
            "statistics": {
                "xp": 100,
                "kp": 13,
                "currentHp": hp, // 16
                "hp": hp,
                "initiative": this.k(20)+1,
                'pp': 15,
                "strength": 11,
                "dexterity": 14,
                "condition": 12,
                "intelligence": 11,
                "wisdom": 13,
                "charisma": 11,
                "speed": "25ft",
                "i": "2x atak mele lub range; natura +4; Percepcja +5; Siła +6; Przetrwanie +5;"
            }
        }
    };
}