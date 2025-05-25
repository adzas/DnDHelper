export default class AppCache {
    setLastContent() {
        const content = $('#js-cache__hisotry-page--show-last').html();
        $('#js-cache').find('#js-cache__content').html(content);
    };
    setOldContent() {
        const content = $('#js-cache__hisotry-page--show-old').html();
        $('#js-cache').find('#js-cache__content').html(content);
    };
    setActualContent() {
        const content = $('#js-cache__hisotry-page--show-actual').html();
        $('#js-cache').find('#js-cache__content').html(content);
    };
    render(content) {
        const last2old = $('#js-cache__hisotry-page--show-last').html();
        $('#js-cache__hisotry-page--show-old').html(last2old);
        const actual2last = $('#js-cache__hisotry-page--show-actual').html();
        $('#js-cache__hisotry-page--show-last').html(actual2last);
        $('#js-cache__hisotry-page--show-actual').html(content);
        $('#js-cache').find('#js-cache__content').html(content);
        this.show();
    };
    clearContent() {
        $('#js-cache').find('#js-cache__content').html('');
    };
    hidden(){
        $('#js-cache').css('display', 'none');
        $('#gray-panel').css('z-index', '-1');
    };
    show(){
        $('#js-cache').css('display', 'block');
        $('#gray-panel').css('z-index', '1');
    };
    setCssProperty (property) {
        $('#js-cache').css(property);
    };
}
