import App from './app.js';
import { Bandit } from "./bandit.js";
import { BattlefieldStorage } from './battlefield-storage.js';
import DwarfGenerator from './enemy-generators/dwarf-generator.js';
import { WoodGolem } from './wood-golem.js';

const app = new App;
const battlefield = new BattlefieldStorage;

$('#app').on('click', function(){
    app.renderBF(battlefield.get());
});

$('.enemy').on('click', function(e) {
    const enemyType = $(e.target).data('type');
    let message = '';
    switch (enemyType) {
        case 'bandit':
            const bandit = new Bandit;
            battlefield.store(bandit.getRandomObject());
            message = 'Dodano Bandytę do listy';
            break;

        case 'wood-golem':
            const wg = new WoodGolem;
            battlefield.store(wg.getRandomObject());
            message = 'Dodano Golema do listy';
            break;

        case 'dwarf':
            const dwarf = new DwarfGenerator;
            battlefield.store(dwarf.getRandomObject());
            message = 'Dodano Krasnoluda wojownika do pola bitwy!';
            break;
    
        default:
            break;
    }
    app.renderCache(message);
});

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

$('#clearBF').on('click', function(){
    battlefield.clear();
});
