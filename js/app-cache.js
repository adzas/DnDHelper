export default class AppCache {
    setLastContent() {
        const content = $('#cache-last-hisotry-page').html();
        $('#cache').find('#cache-content').html(content);
    };
    setOldContent() {
        const content = $('#cache-old-history-page').html();
        $('#cache').find('#cache-content').html(content);
    };
    setActualContent() {
        const content = $('#cache-actual-content').html();
        $('#cache').find('#cache-content').html(content);
    };
    render(content) {
        const last2old = $('#cache-last-hisotry-page').html();
        console.log('last2old', last2old);
        $('#cache-old-history-page').html(last2old);
        const actual2last = $('#cache-actual-content').html();
        $('#cache-last-hisotry-page').html(actual2last);
        $('#cache-actual-content').html(content);
        $('#cache').find('#cache-content').html(content);
        this.show();
    };
    clearContent() {
        $('#cache').find('#cache-content').html('');
    };
    hidden(){
        $('#cache').css('display', 'none');
    };
    show(){
        $('#cache').css('display', 'block');
    };
}
