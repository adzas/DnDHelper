import RandomHelper from "../helpers/random-helper.js";

export default class DwarfExtraGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*2)+12;
        return {
            "type": "dwarf-extra",
            "name": "Krasnolud Wojownik+",
            "actions": ["battleaxe","heavy-crossbow"],
            "statistics": {
                "xp": 150,
                "kp": 15,
                "currentHp": hp, // 16
                "hp": hp,
                "initiative": this.k(20),
                'pp': 12,
                "strength": 14,
                "dexterity": 13,
                "condition": 16,
                "intelligence": 10,
                "wisdom": 11,
                "charisma": 10,
                "speed": "25ft (5[ ])",
                "i": "2x atak mele; ;"
            }
        }
    };
}