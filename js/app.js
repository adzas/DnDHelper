import EnemyHelper from "./helpers/enemy-helper.js";

export default class App {
    constructor() {
        this.name = 'DnDMpHepler';
        this.mainElementDomID = 'app';
    };
    getMyDom() {
        return $('#'+this.mainElementDomID);
    };
    render(html) {
        this.getMyDom().html(html);
    };
    renderBF(BFObjects) {
        let html = '';
        const enemyHelper = new EnemyHelper();
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
    }
}
