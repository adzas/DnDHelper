import App from './app.js';
import {Bandit} from "./bandit.js";

const app = new App;

$('.action').on('click', function(e) {
    const attackType = $(e.target).data('attack-type');
    const enemyType = $(e.target).data('enemy-type');
    let cache = '';
    switch (enemyType) {
        case 'bandit':
            const bandit = new Bandit;
            bandit.setAttackType(attackType);
            cache = bandit.attack();
            app.renderCache(cache);
            break;

        case 'wood-golem':
            const wg = new WoodGolem;
            wg.setAttackType(attackType);
            cache = wg.attack();
            app.renderCache(cache);
            break;
    
        default:
            break;
    }
});
