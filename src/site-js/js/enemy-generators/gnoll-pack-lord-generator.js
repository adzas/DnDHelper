import RandomHelper from "../helpers/random-helper.js";

export default class GnollPackLordGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*7)+18;
        return {
            "type": "gnoll-pack-lord",
            "name": "Gnoll przywódca watachy",
            "actions": ["bite", "glaive", "long-bow"],
            "statistics": {
                "xp": 450,
                "kp": 15,
                "currentHp": hp, // 49
                "hp": hp,
                "initiative": this.k(20)+2,
                'pp': 10,
                "strength": 16,
                "dexterity": 14,
                "condition": 13,
                "intelligence": 8,
                "wisdom": 11,
                "charisma": 9,
                "speed": "30ft",
                "i": "",
                "informations": [
                    {
                        "name": "Szał",
                        "content": [
                            "Jeśli gnoll zmniejszy hp przeciwnika do 0hp atakiem z bliska otrzymuje dodatkową akcją z połową szybkości i może wykonać atak ugryzienia"
                        ]
                    },
                    {
                        "name": "Multiatak",
                        "content": [
                            "Może wykonać multiatak kżadą bronią, lub użyć 'podżegania do szału'"
                        ]
                    },
                    {
                        "name": "Podżeganie do szału",
                        "content": [
                            "Może w ramach akcji zakomenderować innemu gnollowi, żeby wykonał akcję ugryzienia.",
                            "Pod warunkiem, że ten gnoll go widzi i słyszy i jest w zasięgu 30ft"
                        ]
                    },
                    {
                        "name": "widzenie w ciemności",
                        "content": [
                            "60ft widzenia w ciemności, czyli widzi odcienie szarości i ma utrudnienie w testach percepcji"
                        ]
                    }
                ]
            }
        }
    };
}