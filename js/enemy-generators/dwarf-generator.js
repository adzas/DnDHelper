import RandomHelper from "../helpers/random-helper.js";

export default class DwarfGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "dwarf",
            "name": "Krasnolud Wojownik",
            "actions": ["axe","short-bow"],
            "statistics": {
                "xp": 100,
                "kp": 13,
                "hp": (this.k(8)*3)+3,
                "initiative": this.k(20)+1,
                'pp': 15,
                "strength": 11,
                "dexterity": 14,
                "condition": 12,
                "intelligence": 11,
                "wisdom": 13,
                "charisma": 11,
                "speed": "25ft (5[ ])",
                "i": "2x atak mele lub range"
            }
        }
    };
}