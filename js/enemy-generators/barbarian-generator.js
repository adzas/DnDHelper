import RandomHelper from "../helpers/random-helper.js";

export default class BarbarianGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*4)+47; // 67
        return {
            "type": "barbarian",
            "name": "Barbarzyńca",
            "actions": ["greataxe", "spear"],
            "statistics": {
                "xp": 450,
                "kp": 14,
                "currentHp": hp,
                "hp": hp,
                "initiative": this.k(20)+3,
                'pp': 10,
                "strength": 16,
                "dexterity": 15,
                "condition": 17,
                "intelligence": 9,
                "wisdom": 11,
                "charisma": 9,
                "speed": "30ft",
                "i": "brawura: ułatwienie w testach ataku i ułatwienie dla przeciwników w testach ataku na nim;"
            }
        }
    };
}