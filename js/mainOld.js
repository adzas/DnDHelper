import app from './app.js';
// import htmlHelper from './htmlHelper.js';
// import enemyHelper from './enemyHelper.js';

let html = '';
let enemy = [];


function action(typeEnemy, typeAction) {
    console.log('typeEnemy', typeEnemy);
    console.log('typeAction', typeAction);
}

$.ajaxSetup({
    async: false
});

$.getJSON( "../storage/enemyType.json", function( data ) {
    for (let k in data) {
        enemy[k] = enemyHelper.getEnemyObject(data[k].type);
        enemy[k].setData(data[k]);
    }
});

$.each(enemy, function(k, e) {
    html += htmlHelper.button({
        id: e.getID(),
        name: e.name,
        class: 'enemy',
        type: e.type
    });
});
// app.render(html);

$('#app').on('load', function() {
    //
});

$('.enemy').on('click', function (e){
    console.log('click enemy');
    app.clearCache();
    console.log('clear cache');
    const target = e.target;
    let type = $(target).data('type');
    const elem = enemyHelper.getEnemyObject(type);
    console.log(elem);
    let newHtml = '<br>';
    newHtml += elem.getActions();
    app.addHtml(newHtml); // to sprawia, że onclick jest uruchamiany tylko raz
});


// $('.actions').on('click', function (e){
//     console.log('click actions');
//     const target = e.target;
//     let type = $(target).data('type');
//     let typeAction = $(target).data('subtype');
//     const elem = enemyHelper.getEnemyObject(type);
//     elem.runAttack(typeAction);
//     let html = '<br>';
//     html += elem.getActions();
//     app.addHtml(html);
// });
