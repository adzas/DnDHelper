import Enemy from "./enemy.js";

export class Bandit extends Enemy {
    constructor(id) {
        super();
        this.id = id;
    };
    setData(data) {
        this.type = 'bandit';
        this.strength = this.getRandom(10, 14);
        this.dexterity = this.getRandom(10, 14);
        this.wisdom = this.getRandom(8, 10);
        this.intelligence = this.getRandom(6, 9);
        this.charisma = this.getRandom(6, 14);
        this.condition = this.getRandom(8, 14);
        this.setSuperData(data);
        this.setDetails(this);
    };
    setAttackType(type) {
        this.attackType = type;
    };
    attack() {
        let result = '';
        switch (this.attackType) {
            case 'short-bow':
                result += '<div class="cache">';
                result += '<br>';
                result += 'test ataku: ';
                result += this.getRandom(1, 20);
                result += '<br>';
                result += 'obrażenia: ';
                result += this.getRandom(1, 6) + 2;
                result += '</div>';
                break;

            case 'sword':
                result += '<div class="cache">';
                result += '<br>';
                result += 'test ataku: ';
                result += this.getRandom(1, 20);
                result += '<br>';
                result += 'obrażenia: ';
                result += this.getRandom(1, 6) + 2;
                break;
        
            default:
                console.log('bandit attack ...');
                break;
        }
        result += '</div>';

        return result;
    };
    getRandomObject() {
        return {
            name: "bandyta"
        };
    };
    render() {
        return 'bandit <br/>';
    }
}
