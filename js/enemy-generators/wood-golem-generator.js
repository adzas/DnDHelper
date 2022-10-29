import RandomHelper from "../helpers/random-helper.js";

export default class WoodGolemGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*6)+12;
        return {
            "type": "wood-golem",
            "name": "Golem drzewny",
            "actions": ["smash","throw-wood"],
            "statistics": {
                "xp": 500,
                "kp": 8,
                "currentHp": hp,
                "hp": hp,
                "initiative": this.k(20)-1,
                'pp': 8,
                "strength": 15,
                "dexterity": 6,
                "condition": 14,
                "intelligence": 1,
                "wisdom": 6,
                "charisma": 1,
                "speed": "10ft (2[ ])",
                "i": "3x atak mele lub range; odporny na zmiany kształtu; podatny na ogień, obrażenia toporem i srebro; ślepowidzenie do 60ft (6[ ])"
            }
        }
    };
}