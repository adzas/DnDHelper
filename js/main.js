import App from './app.js';
import BattlefieldStorage from './battlefield-storage.js';
import AlsariphGenerator from './enemy-generators/alsariph-generator.js';
import AnyoneGenerator from './enemy-generators/anyone-generator.js';
import BanditCaptainGenerator from './enemy-generators/bandit-captain-generator.js';
import BanditGenerator from './enemy-generators/bandit-generator.js';
import BarbarianGenerator from './enemy-generators/barbarian-generator.js';
import DarklingGenerator from './enemy-generators/darkling-generator.js';
import DireWolfGenerator from './enemy-generators/dire-wolf-generator.js';
import DogGenerator from './enemy-generators/dog-generator.js';
import DwarfExtraGenerator from './enemy-generators/dwarf-extra-generator.js';
import DwarfGenerator from './enemy-generators/dwarf-generator.js';
import GnollGenerator from './enemy-generators/gnoll-generator.js';
import GoblinGenerator from './enemy-generators/golbin-generator.js';
import HobgoblinCaptainGenerator from './enemy-generators/hobgoblin-captain-generator.js';
import HobgoblinGenerator from './enemy-generators/hobgoblin-generator.js';
import HumGenerator from './enemy-generators/hum-generator.js';
import KreaturaGenerator from './enemy-generators/kreatura-generator.js';
import OmalenGenerator from './enemy-generators/omalen-generator.js';
import ScoutBanditGenerator from './enemy-generators/scout-bandit-generator.js';
import ShadowGenerator from './enemy-generators/shadow-generator.js';
import ThugGenerator from './enemy-generators/thug-generator.js';
import WoodGolemGenerator from './enemy-generators/wood-golem-generator.js';
import EnemyHelper from './helpers/enemy-helper.js';
import HtmlHelper from './helpers/html-helper.js';
import Random from './random.js';

const app = new App;
const battlefield = new BattlefieldStorage(app);
const enemyHelper = new EnemyHelper(app);
// battlefield.clear();
const contentBF = battlefield.get();

// rendering enemies list
$('.js-battlefield__enemies-list').html('Loading ...');
enemyHelper.renderEnemyListTo('.js-battlefield__enemies-list');

if (null === contentBF || 0 == contentBF.length) {
    $('#js-battlefield__settings').click();
};

app.renderBF(contentBF);
$('#js-battlefield--refresh').on('click', function(){
    app.renderBF(battlefield.get());
    location.reload();
});

// actual not use:
$('#js-random-helper--characteristics').on('click', function(e){
    app.clickedElement(e.target);
    let characteristics = '';
    const random = new Random(app);
    const appearance = random.getRandomAppearance();
    const character = random.getRandomCharacterAttr();
    characteristics += `wygląd: ${appearance}<br>
    cechy charakteru: <ul>
        <li>${character.negative}</li>
        <li>${character.positive}</li>
    </ul>`;
    app.renderCache(characteristics);
});

// actual not use:
$('#js-random-helper--attack-description').on('click', function(e){
    app.clickedElement(e.target);
    const random = new Random(app);
    // random.resetRandomData();
    const description = random.getRandomAttackDescription('axe');
    app.renderCache(description);
});

// actual not use:
$('#js-battlefield--generate-a-characteristic-attribute').on('click', function(e){
    app.clickedElement(e.target);
    // battlefield.enterTheLabel();
});

$('#js-settings__manual-mode').on('click', function(){
    if (true === app.manualMode) {
        app.setManualMode(false);
    } else {
        app.setManualMode(true);
    }
    location.reload();
});

$(document.body).on('click', '.js-actions__collapse' ,function(e){
    const target = $(e.target);
    if ($(target.attr('data-collapse-target-id')).hasClass('js-actions__collapsed')) {
        $(target.attr('data-collapse-target-id')).slideUp();
        $(target.attr('data-collapse-target-id')).removeClass('js-actions__collapsed');
    } else {
        $(target.attr('data-collapse-target-id')).slideDown();
        $('.js-actions__collapsed').slideUp().removeClass('js-actions__collapsed');
        $(target.attr('data-collapse-target-id')).addClass('js-actions__collapsed');
    }
});

$(document.body).on('click', '.js-enemy', function(e) {
    if (app.isManualMode()) {
        app.clickedElement(e.target);
        app.renderCache('Wyłącz tryb ręczny aby edytować listę przeciwników!');

        return false;
    }
    const enemyType = $(e.target).data('type');
    const customInitiative = parseInt($('#js-attributes__initiative--custom-value').val());
    let message = '';
    switch (enemyType) {
        case 'bandit':
            const bandit = new BanditGenerator(app);
            battlefield.store(bandit.getRandomObject());
            message = 'Dodano Bandytę do listy';
            break;
        case 'scout-bandit':
            const scoutBandit = new ScoutBanditGenerator(app);
            battlefield.store(scoutBandit.getRandomObject());
            message = 'Dodano Bandytę Zwiadowcę do listy';
            break;

        case 'dog':
            const dog = new DogGenerator(app);
            battlefield.store(dog.getRandomObject());
            message = 'Dodano Psa do listy';
            break;

        case 'wood-golem':
            const wg = new WoodGolemGenerator(app);
            battlefield.store(wg.getRandomObject());
            message = 'Dodano Golema do listy';
            break;

        case 'goblin':
            const goblin = new GoblinGenerator(app);
            battlefield.store(goblin.getRandomObject());
            message = 'Dodano Goblina do listy';
            break;

        case 'hobgoblin':
            const hobgoblin = new HobgoblinGenerator(app);
            battlefield.store(hobgoblin.getRandomObject());
            message = 'Dodano Hobgoblina do listy';
            break;

        case 'dwarf':
            const dwarf = new DwarfGenerator(app);
            battlefield.store(dwarf.getRandomObject());
            message = 'Dodano Krasnoluda wojownika do pola bitwy!';
            break;

        case 'hum':
            const hum = new HumGenerator(app);
            battlefield.store(hum.getRandomObject(customInitiative));
            message = 'Dodano Huma do pola bitwy!';
            break;

        case 'kreatura':
            const kreatura = new KreaturaGenerator(app);
            battlefield.store(kreatura.getRandomObject(customInitiative));
            message = 'Dodano kreaturę do pola bitwy!';
            break;

        case 'omalen':
            const omalen = new OmalenGenerator(app);
            battlefield.store(omalen.getRandomObject(customInitiative));
            message = 'Dodano omalena do pola bitwy!';
            break;

        case 'alsariph':
            const alsariph = new AlsariphGenerator(app);
            battlefield.store(alsariph.getRandomObject(customInitiative));
            message = 'Dodano Alsaripha do pola bitwy!';
            break;

        case 'gnoll':
            const gnoll = new GnollGenerator(app);
            battlefield.store(gnoll.getRandomObject());
            message = 'Dodano Gnoll\'a do pola bitwy!';
            break;

        case 'shadow':
            const shadow = new ShadowGenerator(app);
            battlefield.store(shadow.getRandomObject());
            message = 'Dodano Cień do pola bitwy!';
            break;

        case 'thug':
            const thug = new ThugGenerator(app);
            battlefield.store(thug.getRandomObject());
            message = 'Dodano Zbira do pola bitwy!';
            break;

        case 'dwarf-extra':
            const dwarfExtra = new DwarfExtraGenerator(app);
            battlefield.store(dwarfExtra.getRandomObject());
            message = 'Dodano Krasnoluda wojownika + do pola bitwy!';
            break;

        case 'darkling':
            const darkling = new DarklingGenerator(app);
            battlefield.store(darkling.getRandomObject());
            message = 'Dodano Darklinga do pola bitwy!';
            break;

        case 'barbarian':
            const barbarian = new BarbarianGenerator(app);
            battlefield.store(barbarian.getRandomObject());
            message = 'Dodano Barbarzyńcę do pola bitwy!';
            break;

        case 'anyone':
            const anyone = new AnyoneGenerator(app);
            battlefield.store(anyone.getRandomObject());
            message = 'Dodano Przeciwnika typu "ktokolwiek" do pola bitwy!';
            break;

        case 'bandit-captain':
            const banditCaptain = new BanditCaptainGenerator(app);
            battlefield.store(banditCaptain.getRandomObject());
            message = 'Dodano Kapitana bandytów do pola bitwy!';
            break;

        case 'dire-wolf':
            const direWolf = new DireWolfGenerator(app);
            battlefield.store(direWolf.getRandomObject());
            message = 'Dodano Strasznego wilka do pola bitwy!';
            break;

        case 'hobgoblin-captain':
            const hobgoblinCaptainGenerator = new HobgoblinCaptainGenerator(app);
            battlefield.store(hobgoblinCaptainGenerator.getRandomObject());
            message = 'Dodano Hobgoblina Przywódcę do pola bitwy!';
            break;
    
        default:
            console.log('enemyType: '+enemyType+' is ubdefined');
            break;
    }
    console.log(message);
});

$('.js-actions__attack').on('click', function(e) {
    const target = $(e.target);
    app.clickedElement(target);
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

$('#js-battlefield--clear').on('click', function(){
    battlefield.clear();
    app.renderBF(battlefield.get());
});

$('#js-battlefield--sort-by-initiative').on('click', function(){
    let bfContent = battlefield.get();
    battlefield.clear();
    let newBfContent = bfContent.sort(battlefield.sortByIni);
    battlefield.saveAll(newBfContent);
    app.renderBF(battlefield.get());
    // battlefield.enterTheLabel();
});

$(document.body).on('click', '.js-dmg--show', function(e){
    const target = $(e.target);
    const data_target = target.data('target');
    $(data_target).removeClass('d-none');
    $(`[data-target="${data_target}"]`).remove();
});

/* $(document.body).on('click', '.js-battlefield__enemy--actions__move-up', function(e){
    const id_element = $(e.target).data('id');
    battlefield.moveUp(id_element);
    app.renderBF(battlefield.get());
}); */

$(document.body).on('click', '.js-battlefield__enemy--delete', function(e){
    const id_element = $(e.target).data('id');
    battlefield.deleteElement(id_element);
    app.renderBF(battlefield.get());
});

$(document.body).on('click', '.js-actions__hp-changed', function(e){
    const target = $(e.target);
    const id = parseInt(target.data('id'));
    const value = parseInt(target.data('minus-value'));
    const newHp = battlefield.changeHpElementById(id, value);
    target.parent().find('.current-hp').html(newHp);
});

$(document.body).on('click', '.js-battlefield__enemy--actions__show-statisticks', function(e){
    app.clickedElement(e.target);
    const target = $(e.target);
    const id = parseInt(target.data('id'));
    const bfItems = battlefield.get();
    const obj = battlefield.getElementById(id, bfItems);
    const enemy = enemyHelper.getEnemyObject(obj);
    app.renderCache(enemy.renderStatisticks());
});

$('.js-actions__click--clear-value').on('click', function(e) {
    $(e.target).val('');
});

$('#js-players__statistics--show').on('click', function(e) {
    app.clickedElement(e.target);
    const htmlHelper = new HtmlHelper(app);
    const html = htmlHelper.renderPlayersAttribute();
    app.renderCache(html);
});

$('#js-cache__actions--show-last-cache-history-page').on('click',function() {
    app.cache.setLastContent();
});
$('#js-cache__actions--show-old-cache-history-page').on('click',function() {
    app.cache.setOldContent();
});
$('#js-cache__actions--show-actual-cache-history-page').on('click',function() {
    app.cache.setActualContent();
});
$('.js-cache--hidden').on('click',function() {
    app.cache.hidden();
});
$('#js-cache--show').on('click',function(e) {
    app.clickedElement(e.target);
    app.renderCache();
});

$('.js-battlefield__enemy--store-label').on('click', function(e) {
    const target = $(e.target);
    app.clickedElement(target);
    const destination_target = $(target.data('target'));
    const label = destination_target.val();
    const enemy_id = target.data('base-id');
    const result = battlefield.storeLabelElementValue(enemy_id, label);
    let info = "";
    if (result) {
        info = `stored "${label}" value in ${enemy_id} element`;
        const obj = battlefield.getElementById(enemy_id, battlefield.get());
        const enemy = enemyHelper.getEnemyObject(obj);
        enemy.changeLabel(label);
    } else {
        info = `WARNING: label: "${label}", id's element ${enemy_id}`;
    }
    app.showInfo(info);
})
