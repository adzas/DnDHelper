import RandomHelper from "../helpers/random-helper.js";

export default class DarklingGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(6))+9;
        return {
            "type": "darkling",
            "name": "Darkling",
            "actions": ["dagger"], // or range 20/60 ft. ({@damage 1d4 + 3}) piercing damage plus 7 ({@damage 2d6}) necrotic damage.
            "statistics": {
                "xp": 100,
                "kp": 14, // light armor
                "currentHp": hp, // 13hp (3d6+3)
                "hp": hp,
                "initiative": this.k(20)+1,
                'pp': 15,
                "strength": 9,
                "dexterity": 16,
                "condition": 12,
                "intelligence": 10,
                "wisdom": 12,
                "charisma": 10,
                "speed": "30ft (6[ ])",
                "i": "aktobatyka: +5, oszystwo: +2, percepcja: +5, podstęp: +7; ślepowidzenie 30 ft. 6[ ],darkvision 120 ft. 24 [ ]; języki: elfi, leśny; Light Sensitivity: While in bright light, the darkling has disadvantage on attack rolls, as well as on Wisdom ({@skill Perception}) checks that rely on sight.; Death Flash: Kiedy darkling umiera, niemagiczne światło wydobywa się z niego w promieniu 10 stóp, gdy jego ciało i dobytek, inne niż metalowe lub magiczne przedmioty, spalają się na popiół. Każda istota na tym obszarze musi wykonać {@dc 10} rzut obronny na Kondycję lub zostać {@condition zaślepiona} do końca swojej następnej tury."
            }
        }
    };
}