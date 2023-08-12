import RandomHelper from "../helpers/random-helper.js";

export default class BanditCaptainGenerator extends RandomHelper {
    getRandomObject(){
        const hp = (this.k(8)*6)+38;
        return {
            "type": "bandit-captain",
            "name": "Przywódca bandytów",
            "actions": ["scimitar","dagger","reaction"],
            "statistics": {
                "xp": 450,
                "kp": 15,
                "currentHp": hp,
                "hp": hp, // 65
                "initiative": this.k(20)+2,
                'pp': 10,
                "strength": 15,
                "dexterity": 16,
                "condition": 14,
                "intelligence": 14,
                "wisdom": 11,
                "charisma": 14,
                "speed": "30ft",
                "i": "Rzuty obronne na siłę +4, zręczność +5, wiedzę +2; atletyka +4, Oszustwo +4; elfi i wspólny; atakuje 2razy bułatem i raz sztyletem; lub dwa razy rzuca sztyletem; Reakcje: opisane w akcjach"
            }
        }
    };
}