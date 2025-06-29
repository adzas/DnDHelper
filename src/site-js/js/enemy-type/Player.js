import Enemy from "../enemy.js";

export default class Player extends Enemy
{   
    render() {
        let html = super.render();
        const new_html = html.replace('btn-warning', 'btn-success');

        return new_html;
    };
    renderActions() {
        let returnHtmlActions = 'niezdefiniowano';
        
        returnHtmlActions = super.renderActions();

        return returnHtmlActions;
    };
}
