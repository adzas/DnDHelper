import EnemyHelper from "./helpers/enemy-helper.js";

export default class App {
    name = null;
    mainElementDomID = null;
    manualMode = false;
    configDefault = {
        'manualMode': false
    };
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
    renderBF(BFObjects) {
        let html = '';
        const enemyHelper = new EnemyHelper(this);
        html += '<div class="row">';
        $.each(BFObjects, function(k, obj) {
            let enemyObj = enemyHelper.getEnemyObject(obj);
            html += enemyObj.render();
        });
        html += '</div>';
        $('#battleField').html(html);
        $('.my-collapse-target').slideUp();
        $('.my-collapse').each(function(i, obj) {
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
        $('#cache').html(content);
    };
    clearCache() {
        $('#cache').html('');
    };
    getPlayersName() {
        return ['alsariph', 'hum', 'kreatura', 'omalen']
    };
    setConfig() {
        const config = this.getConfig();
        this.manualMode = config.manualMode; 
        if (true === this.manualMode) {
            $('#manualMode').prop('checked', true);
        } else {
            $('#manualMode').prop('checked', false);
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
    }
}
