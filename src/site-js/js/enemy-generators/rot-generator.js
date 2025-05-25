import RandomHelper from "../helpers/random-helper.js";

export default class RotMonsterGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(10)*16)+48;
        return {
            "type": "rot-monster",
            "name": "Gnilec",
            "actions": ["multiattack","smash","absorption"],
            "statistics": {
                "xp": 1800,
                "kp": 15,
                "currentHp": hp,
                "hp": hp, // 136
                "initiative": this.k(20),
                'pp': 10,
                "strength": 18,
                "dexterity": 8,
                "condition": 16,
                "intelligence": 5,
                "wisdom": 10,
                "charisma": 5,
                "speed": "20ft",
                "i": "[+7/2k8+4(obuch)]x2;jeśli oba ataki się powiodą dla małego lub średniego celu następnuje pochłonięcie;60ft [12] ślepowidzenia;"
            }
        }
    };
}