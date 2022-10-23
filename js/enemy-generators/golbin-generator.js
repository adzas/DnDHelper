import RandomHelper from "../helpers/random-helper.js";

export default class GoblinGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "goblin",
            "name": "Goblin",
            "actions": ["short-bow","scimitar"],
            "statistics": {
                "xp": 50,
                "kp": 15,
                "hp": (this.k(6))+5,
                "initiative": this.k(20)+2,
                'pp': 9,
                "strength": 8,
                "dexterity": 14,
                "condition": 10,
                "intelligence": 10,
                "wisdom": 8,
                "charisma": 8,
                "speed": "30ft (6[ ])",
                "i": "+6 do kradzieży/podstępu; bonusową akcją może się ukryć albo odstąpić; ; widzenie w ciemności do 60ft (6[ ])"
            }
        }
    };
}