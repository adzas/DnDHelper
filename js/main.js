import App from './app.js';
import BattlefieldStorage from './battlefield-storage.js';
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

// slide down or slide up enemies actions content
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

// adding a enemies
$(document.body).on('click', '.js-enemy', function(e) {
    if (app.isManualMode()) {
        app.clickedElement(e.target);
        app.renderCache('Wyłącz tryb ręczny aby edytować listę przeciwników!');

        return false;
    }
    const enemyType = $(e.target).data('type');
    const customInitiative = parseInt($('#js-attributes__initiative--custom-value').val());
    const newEnemy = enemyHelper.getRandomEnemyObjectByType(enemyType, customInitiative);
    battlefield.store(newEnemy);
    const message = `Dodano ${enemyType} do pola bitwy.`;
    console.log(message);
});

// resolving a attack action
$('.js-actions__attack').on('click', function(e) {
    const target = $(e.target);
    app.clickedElement(target);
    const attackType = target.data('attack-type');
    const attackMethod = target.data('attack-method');
    const obj = enemyHelper.setObjArrayFromTarget(target);
    const enemy = enemyHelper.getEnemyObject(obj);
    enemy.setAttackType(attackType);
    enemy.setAttackMethod(attackMethod);
    const cache = enemy.attack();
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
        info = `Zapisano informację "${label}" dla elementu ${enemy_id}.`;
        const obj = battlefield.getElementById(enemy_id, battlefield.get());
        const enemy = enemyHelper.getEnemyObject(obj);
        enemy.changeLabel(label);
    } else {
        info = `WARNING: label: "${label}", id's element ${enemy_id}`;
    }
    app.showInfo(info);
})
