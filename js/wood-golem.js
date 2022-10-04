import Enemy from "./enemy.js";

export class WoodGolem extends Enemy {
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
    }
}
