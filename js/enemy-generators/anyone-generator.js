import RandomHelper from "../helpers/random-helper.js";
// import Random from "../random.js";

export default class AnyoneGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = this.getRandom(3, 23);
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        const hp = this.getRandom(30, 60);
        // const random = new Random();
        // const appearance = random.getRandomAppearance();
        // const character = random.getRandomCharacterAttr();

        return {
            "type": "anyone",
            "name": "Ktokolwiek",
            "actions": ['all'],
            "statistics": {
                "xp": 999,
                "kp": this.getRandom(10, 18),
                "currentHp": hp,
                "hp": hp,
                "initiative": initiative,
                'pp': this.getRandom(8, 18),
                "strength": this.getRandom(8, 18),
                "dexterity": this.getRandom(8, 18),
                "condition": this.getRandom(8, 18),
                "intelligence": this.getRandom(8, 18),
                "wisdom": this.getRandom(8, 18),
                "charisma": this.getRandom(8, 18),
                "speed": "30ft",
                "i": ''//`wygląd: ${appearance}; cechy: ${character.positive} lub ${character.negative}`
            }
        }
    };
}