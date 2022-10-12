
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
        console.log(BFObjects);
        let html = '';
        $.each(BFObjects, function(k, obj) {
            /**
             * obj.type
             * bandit.render();
             */
            html += obj.name;
        });
        $('#battleField').html(html);
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
