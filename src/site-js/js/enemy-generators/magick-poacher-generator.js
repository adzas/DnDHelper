import RandomHelper from "../helpers/random-helper.js";

export default class MagickPoacherGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(6)*4)+30;
        return {
            "type": "magick-poacher",
            "name": "Niesamowity łowca",
            "actions": ["dagger", "spells"],
            "spellLimit": [
                {
                    "spell-ring": 1,
                    "slots": 3
                },
                {
                    "spell-ring": 2,
                    "slots": 1
                },
                {
                    "spell-ring": 3,
                    "slots": 1
                },
                {
                    "spell-ring": 4,
                    "slots": 1
                }
            ],
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