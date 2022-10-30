import Enemy from "../enemy.js";

export default class Player extends Enemy
{   
    constructor(obj) {
        super(obj);
    };
    render() {
        let html = super.render();
        const new_html = html.replace('btn-warning', 'btn-success');

        return new_html;
    };
}
