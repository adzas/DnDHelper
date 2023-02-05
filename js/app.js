import AppCache from "./app-cache.js";
import EnemyHelper from "./helpers/enemy-helper.js";

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
            html += enemyObj.render();
        });
        html += '</div>';
        $('#js-battlefield').html(html);
        $('.js-actions__collapse-target').slideUp();
        $('.js-actions__collapse').each(function(i, obj) {
            const target = $(obj);
            if ("true" === target.attr('data-collapse-show')) {
                $(target.attr('data-collapse-target-id')).slideDown();
            }
        });
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
        const minTopPositionValue = 30;
        const position = $(this.element).offset(); // position = { left: 42, top: 567 }
        let topPositionValue = minTopPositionValue;
        if (100 < position.top) {
            topPositionValue = position.top - minTopPositionValue;
        }
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
        return ['alsariph', 'hum', 'kreatura', 'omalen']
    };
    setConfig() {
        const config = this.getConfig();
        this.manualMode = config.manualMode; 
        if (true === this.manualMode) {
            $('#js-settings__manual-mode').prop('checked', true);
        } else {
            $('#js-settings__manual-mode').prop('checked', false);
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
    }
}
