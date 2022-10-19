import App from './app.js';
import Bandit from "./enemy-type/bandit.js";
import { BattlefieldStorage } from './battlefield-storage.js';
import AlsariphGenerator from './enemy-generators/alsariph-generator.js';
import BanditGenerator from './enemy-generators/bandit-generator.js';
import DogGenerator from './enemy-generators/dog-generator.js';
import DwarfGenerator from './enemy-generators/dwarf-generator.js';
import HumGenerator from './enemy-generators/hum-generator.js';
import KreaturaGenerator from './enemy-generators/kreatura-generator.js';
import OmalenGenerator from './enemy-generators/omalen-generator.js';
import ScoutBanditGenerator from './enemy-generators/scout-bandit-generator.js';
import WoodGolemGenerator from './enemy-generators/wood-golem-generator.js';
import { WoodGolem } from './wood-golem.js';
import EnemyHelper from './helpers/enemy-helper.js';

const app = new App;
const battlefield = new BattlefieldStorage;

app.renderBF(battlefield.get());
$('#refreshBF').on('click', function(){
    app.renderBF(battlefield.get());
});

$(document.body).on('click', '.my-collapse' ,function(e, t){
    const target = $(e.target);
    if ("false" === target.attr('data-collapse-show')) {
        target.attr('data-collapse-show', "true");
        $(target.attr('data-collapse-target-id')).slideDown();
    } else {
        target.attr('data-collapse-show', "false");
        $(target.attr('data-collapse-target-id')).slideUp();
    }
});

$('.enemy').on('click', function(e) {
    const enemyType = $(e.target).data('type');
    let message = '';
    switch (enemyType) {
        case 'bandit':
            const bandit = new BanditGenerator;
            battlefield.store(bandit.getRandomObject());
            message = 'Dodano Bandytę do listy';
            break;

        case 'scout-bandit':
            const scoutBandit = new ScoutBanditGenerator;
            battlefield.store(scoutBandit.getRandomObject());
            message = 'Dodano Bandytę Zwiadowcę do listy';
            break;

        case 'dog':
            const dog = new DogGenerator;
            battlefield.store(dog.getRandomObject());
            message = 'Dodano Psa do listy';
            break;

        case 'wood-golem':
            const wg = new WoodGolemGenerator;
            battlefield.store(wg.getRandomObject());
            message = 'Dodano Golema do listy';
            break;

        case 'dwarf':
            const dwarf = new DwarfGenerator;
            battlefield.store(dwarf.getRandomObject());
            message = 'Dodano Krasnoluda wojownika do pola bitwy!';
            break;

        case 'hum':
            const hum = new HumGenerator;
            battlefield.store(hum.getRandomObject());
            message = 'Dodano Huma do pola bitwy!';
            break;

        case 'kreatura':
            const kreatura = new KreaturaGenerator;
            battlefield.store(kreatura.getRandomObject());
            message = 'Dodano kreaturę do pola bitwy!';
            break;

        case 'omalen':
            const omalen = new OmalenGenerator;
            battlefield.store(omalen.getRandomObject());
            message = 'Dodano omalena do pola bitwy!';
            break;

        case 'alsariph':
            const alsariph = new AlsariphGenerator;
            battlefield.store(alsariph.getRandomObject());
            message = 'Dodano Alsaripha do pola bitwy!';
            break;
    
        default:
            break;
    }
    app.renderCache(message);
});

$('.action').on('click', function(e) {
    const target = $(e.target);
    const attackType = target.data('attack-type');
    const attackMethod = target.data('attack-method');
    let cache = '';
    const enemyHelper = new EnemyHelper;
    const obj = enemyHelper.setObjArrayFromTarget(target);
    const enemy = enemyHelper.getEnemyObject(obj);
    enemy.setAttackType(attackType);
    enemy.setAttackMethod(attackMethod);
    cache = enemy.attack();
    app.renderCache(cache);
});

$('#clearBF').on('click', function(){
    battlefield.clear();
    app.renderBF(battlefield.get());
});
