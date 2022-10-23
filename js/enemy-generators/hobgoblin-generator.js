import RandomHelper from "../helpers/random-helper.js";

export default class HobgoblinGenerator extends RandomHelper {
    getRandomObject(){
        return {
            "type": "hobgoblin",
            "name": "Hobgoblin",
            "actions": ["sword","longbow"],
            "statistics": {
                "xp": 100,
                "kp": 18,
                "hp": (this.k(8)*2)+2,
                "initiative": this.k(20),
                'pp': 10,
                "strength": 13,
                "dexterity": 12,
                "condition": 12,
                "intelligence": 10,
                "wisdom": 10,
                "charisma": 9,
                "speed": "30ft (6[ ])",
                "i": "dodatkowe 2k6 obrażeń w istotę obok hobgoblina, którą atakował w tej turze i znajduje się przy sojuszniku;"
            }
        }
    };
}