import App from './app.js';
import { BattlefieldStorage } from './battlefield-storage.js';
import AlsariphGenerator from './enemy-generators/alsariph-generator.js';
import BanditGenerator from './enemy-generators/bandit-generator.js';
import DarklingGenerator from './enemy-generators/darkling-generator.js';
import DogGenerator from './enemy-generators/dog-generator.js';
import DwarfExtraGenerator from './enemy-generators/dwarf-extra-generator.js';
import DwarfGenerator from './enemy-generators/dwarf-generator.js';
import GnollGenerator from './enemy-generators/gnoll-generator.js';
import GoblinGenerator from './enemy-generators/golbin-generator.js';
import HobgoblinGenerator from './enemy-generators/hobgoblin-generator.js';
import HumGenerator from './enemy-generators/hum-generator.js';
import KreaturaGenerator from './enemy-generators/kreatura-generator.js';
import OmalenGenerator from './enemy-generators/omalen-generator.js';
import ScoutBanditGenerator from './enemy-generators/scout-bandit-generator.js';
import ShadowGenerator from './enemy-generators/shadow-generator.js';
import ThugGenerator from './enemy-generators/thug-generator.js';
import WoodGolemGenerator from './enemy-generators/wood-golem-generator.js';
import EnemyHelper from './helpers/enemy-helper.js';

const app = new App;
const battlefield = new BattlefieldStorage;
const enemyHelper = new EnemyHelper;
// battlefield.clear();

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
            BattlefieldStorage
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

        case 'goblin':
            const goblin = new GoblinGenerator;
            battlefield.store(goblin.getRandomObject());
            message = 'Dodano Goblina do listy';
            break;

        case 'hobgoblin':
            const hobgoblin = new HobgoblinGenerator;
            battlefield.store(hobgoblin.getRandomObject());
            message = 'Dodano Hobgoblina do listy';
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

        case 'gnoll':
            const gnoll = new GnollGenerator;
            battlefield.store(gnoll.getRandomObject());
            message = 'Dodano Gnoll\'a do pola bitwy!';
            break;

        case 'shadow':
            const shadow = new ShadowGenerator;
            battlefield.store(shadow.getRandomObject());
            message = 'Dodano Cień do pola bitwy!';
            break;

        case 'thug':
            const thug = new ThugGenerator;
            battlefield.store(thug.getRandomObject());
            message = 'Dodano Zbira do pola bitwy!';
            break;

        case 'dwarf-extra':
            const dwarfExtra = new DwarfExtraGenerator;
            battlefield.store(dwarfExtra.getRandomObject());
            message = 'Dodano Krasnoluda wojownika + do pola bitwy!';
            break;

        case 'darkling':
            const darkling = new DarklingGenerator;
            battlefield.store(darkling.getRandomObject());
            message = 'Dodano Darklinga do pola bitwy!';
            break;
    
        default:
            console.log('enemyType: '+enemyType+' is ubdefined');
            break;
    }
    app.renderCache(message);
});

$('.action').on('click', function(e) {
    const target = $(e.target);
    const attackType = target.data('attack-type');
    const attackMethod = target.data('attack-method');
    let cache = '';
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

$('#sortByIniBF').on('click', function(){
    let bfContent = battlefield.get();
    battlefield.clear();
    let res = bfContent.sort(battlefield.sortByIni);
    battlefield.saveAll(bfContent);
    app.renderBF(battlefield.get());
});

$(document.body).on('click', '.show-dmg', function(e){
    const target = $(e.target);
    const data_target = target.data('target');
    $(data_target).removeClass('d-none');
    $(`[data-target="${data_target}"]`).remove();
});

$(document.body).on('click', '.move-up', function(e){
    const id_element = $(e.target).data('id');
    battlefield.moveUp(id_element);
    app.renderBF(battlefield.get());
});

$(document.body).on('click', '.delete', function(e){
    const id_element = $(e.target).data('id');
    battlefield.deleteElement(id_element);
    app.renderBF(battlefield.get());
});

$(document.body).on('click', '.hp-changed', function(e){
    const target = $(e.target);
    const id = parseInt(target.data('id'));
    const value = parseInt(target.data('minus-value'));
    const newHp = battlefield.changeHpElementById(id, value);
    target.parent().find('.current-hp').html(newHp);
});

$(document.body).on('click', '.show-statisticks', function(e){
    const target = $(e.target);
    const id = parseInt(target.data('id'));
    const bfItems = battlefield.get();
    const obj = battlefield.getElementById(id, bfItems);
    const enemy = enemyHelper.getEnemyObject(obj);
    app.renderCache(enemy.renderStatisticks());
});
