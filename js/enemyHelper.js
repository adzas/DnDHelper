import htmlHelper from "./htmlHelper.js";

class Enemy {
    setSuperData(data) {
        this.name = data.name;
        this.die = data.die;
    };
    getRandom(min, max) {
        let results = [];
        let k = 0;
        for (let i=min; i<=max; i++) {
            results[k++] = i;
        }
        results.sort();

        return results[Math.floor(Math.random() * results.length)];
    };
    getID() {
        return this.type + '-' + this.id;
    };
    setDetails(obj) {
        this.strength = obj.strength;
        this.dexterity = obj.dexterity;
        this.wisdom = obj.wisdom;
        this.intelligence = obj.intelligence;
        this.charisma = obj.charisma;
        this.condition = obj.condition;
    };
    getDetails() {
        return [
            'strength: ' + this.strength,
            'dexterity: ' + this.dexterity,
            'wisdom: ' + this.wisdom,
            'intelligence: ' + this.intelligence,
            'charisma: ' + this.charisma,
            'condition: ' + this.condition
        ];
    };
    getActions() {
        return htmlHelper.button({
            id: 'action-bandit',
            name: 'krótki miecz',
            class: 'actions',
            type: 'bandit',
            subtype: 'sword',
            onclickFunction: 'action'
        });
    };
    runAttack(attackType) {
        switch (attackType) {
            case 'sword':
                // htmlHelper.prepareContent();
                let result = '<div class="cache">';
                result += '<br>';
                result += 'test ataku: ';
                result += this.getRandom(1, 30);
                result += '<br>';
                result += 'obrażenia: ';
                result += this.getRandom(1, 6) + 2;
                result += '</div>';
                break;
        
            default:
                break;
        }
    }
}

class Bandit extends Enemy {
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
    }
}

class EnemyHelper {
    counterId = 0;
    getEnemyObject(type) {
        switch (type) {
            case 'bandit':
                return new Bandit(this.counterId++);
        
            default:
                break;
        }
    }
}

const enemyHelper = new EnemyHelper;

export default enemyHelper;