import RandomHelper from "../helpers/random-helper.js";

export default class HobgoblinCaptainGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*3)+25;
        return {
            "type": "hobgoblin-captain",
            "name": "Hobgoblin Przywódca",
            "actions": ["javelin","greatsword","leadership"],
            "statistics": {
                "xp": 700,
                "kp": 17, // zbroja płytowa
                "currentHp": hp, // 39
                "hp": hp,
                "initiative": this.k(20),
                'pp': 10,
                "strength": 15,
                "dexterity": 14,
                "condition": 12,
                "intelligence": 12,
                "wisdom": 10,
                "charisma": 13,
                "speed": "30ft",
                "i": "zbroja płytowa; Dwa ataki wielkim mieczem; Przewaga bojowa: raz na turę może walnąć 3k6 obrażeń w istotę obok niego, którą atakował w tej turze i znajduje się przy sojuszniku;"
            }
        }
    };
}