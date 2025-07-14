import AppCache from "./app-cache.js";
import EnemyHelper from "./helpers/enemy-helper.js";
import QuestLevelHelper from "./helpers/quest-level-helper.js";

export default class App {
    name = null;
    mainElementDomID = null;
    manualMode = false;
    cache = new AppCache;
    configDefault = {
        'manualMode': false
    };
    element = null;
    constructor() {
        this.name = 'DnDMpHepler';
        this.mainElementDomID = 'app';
        this.setConfig();
    };
    getMyDom() {
        return $('#'+this.mainElementDomID);
    };
    render(html) {
        this.getMyDom().html(html);
    };
    clickedElement(target) {
        this.element = target;
    };
    renderBF(BFObjects) {
        let html = '';
        const enemyHelper = new EnemyHelper(this);
        html += '<div class="row">';
        $.each(BFObjects, function(k, obj) {
            let enemyObj = enemyHelper.getEnemyObject(obj);
            if (typeof enemyObj === "undefined" || enemyObj === null) {
                console.log('Enemy object is undefined for: ', obj);
            } else {
                html += enemyObj.render();
            }
        });
        html += '</div>';
        $('#js-battlefield').html(html);
        $('.js-actions__collapse-target').slideUp();
        $('.js-actions__collapse').each(function(i, obj) {
            const target = $(obj);
            if ($(target.attr('data-collapse-target-id')).hasClass('js-actions__collapsed')) {
                $(target.attr('data-collapse-target-id')).slideDown();
            }
        });

        const questLevelHelper = new QuestLevelHelper();
        questLevelHelper.setPlayersName(this.getPlayersName());
        questLevelHelper.setBFObjects(BFObjects);
        const questLevel = questLevelHelper.getQuestLevel();
        this.renderQuestLevel(questLevel);

        // this.renderQuestLevel("test");
    };
    getHtml() {
        return this.getMyDom().html();
    };
    d(msg) {
        console.log(msg);
    };
    addHtml(html) {
        let oldContent = this.getHtml();
        this.getMyDom().html(oldContent+html);
    };
    renderCache(content) {
        const topPositionValue = this.getTopPositionValueFromCurrentElement();
        this.cache.setCssProperty({"top": topPositionValue});
        if (typeof content === "undefined") {
            this.cache.show();
        } else {
            this.cache.render(content);
        }
    };
    clearCache() {
        this.cache.clearContent(content);
    };
    getPlayersName() {
        return ['player-2', 'player-3', 'player-1', 'player-4']
    };
    setConfig() {
        const config = this.getConfig();
        this.manualMode = config.manualMode; 
        if (true === this.manualMode) {
            $('#js-settings__manual-mode').prop('checked', true);
            $('#js-info__manualmode').html('manual mode');
        } else {
            $('#js-settings__manual-mode').prop('checked', false);
            $('#js-info__manualmode').html('');
        }
    };
    getConfig() {
        const config = JSON.parse(localStorage.getItem('config'));
        if (null === config) {
            localStorage.setItem('config', JSON.stringify(this.configDefault));
            return this.configDefault;
        }
            
        return config;
    };
    setManualMode(value) {
        // TODO: Change a idea in future
        localStorage.setItem('config', JSON.stringify({'manualMode': value}));
    };
    isManualMode() {
        return this.manualMode;
    };
    getTopPositionValueFromCurrentElement() {
        const minTopPositionValue = 37;
        const position = $(this.element).offset();
        let topPositionValue = minTopPositionValue;
        if (100 < position.top) {
            topPositionValue = position.top - minTopPositionValue;
        }

        return topPositionValue;
    };
    async showInfo(text) {
        const topPositionValue = this.getTopPositionValueFromCurrentElement();
        const informationsPopup = $('#js-informations-popup');
        informationsPopup.css({"top": topPositionValue});
        informationsPopup.html(text);
        informationsPopup.slideDown();
    };
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    renderQuestLevel(text) {
        const expCounter = $('#js-exp-counter');
        if (text === null || text === '') {
            expCounter.html('');
            return;
        }
        expCounter.html(text);
    };
}
