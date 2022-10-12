import Enemy from "./enemy.js";

export class WoodGolem extends Enemy {
    setAttackType(type) {
        this.attackType = type;
    };
    attack() {
        let result = '';
        switch (this.attackType) {
            case 'mele':
                result += '<div class="cache">';
                result += '<br>';
                result += 'test ataku: ';
                result += this.getRandom(1, 20);
                result += '<br>';
                result += 'obrażenia obuchowe: ';
                result += this.getRandom(1, 6) + 2;
                result += 'obrażenia magiczne: ';
                result += this.getRandom(1, 4);
                result += '</div>';
                break;

            case 'branch-throw':
                result += '<div class="cache">';
                result += '<br>';
                result += 'test ataku: ';
                result += this.getRandom(1, 20);
                result += '<br>';
                result += 'obrażenia obuchowe: ';
                result += (this.getRandom(1, 6));
                result += 'obrażenia magiczne: ';
                result += (this.getRandom(1, 4));
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
            name: "golem"
        };
    };
    render() {
        return 'wood golem <br/>';
    }
}
