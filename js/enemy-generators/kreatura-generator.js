import RandomHelper from "../helpers/random-helper.js";

export default class KreaturaGenerator extends RandomHelper {
    getRandomObject(customInitiative){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }
        const hp = 25;
        return {
            "type": "kreatura",
            "name": "Kreatura",
            "actions": ['runs'],
            "statistics": {
                "xp": 999,
                "kp": 19,
                "currentHp": hp,
                "hp": hp,
                "initiative": initiative,
                'pp': 13,
                "strength": 16,
                "dexterity": 12,
                "condition": 17,
                "intelligence": 8,
                "wisdom": 13,
                "charisma": 8,
                "speed": "30ft (6[ ])",
                "i": "136kg; 210cm wzrostu; 21lat; (78rok urodzenia); zasięg widzenia: 36m 120ft 24[ ]; intuicja pasywna: 13 (18 z runy)"
            }
        }
    };
}