import Enemy from "../enemy.js";

export default class Player extends Enemy
{   
    constructor(obj) {
        super(obj);
    };
    renderActions() {
        return `
        <div class="my-collapse-target" id="actions-${this.type}">
            Decyzja gracza
        </div>
        `;
    };
    render() {
        let html = `
        <div class="col-12 mb-1">
            <div class="btn-group w-100 mb-1" role="group" aria-label="t2">
                <div class="btn btn-danger delete" data-id="${this.id}">
                    <i class="ra ra-skull"></i>
                </div>
                <div 
                    class="btn btn-success my-collapse w-75" id="${this.getIdBaseElementDom()}"
                    data-collapse-target-id="#actions-${this.id}" 
                    data-collapse-show="false"
                    data-type="${this.type}"
                    data-actions="${this.actions}"
                    data-name="${this.name}"
                    data-xp="${this.xp}"
                    data-kp="${this.kp}"
                    data-hp="${this.hp}"
                    data-initiative="${this.initiative}"
                    data-pp="${this.pp}"
                    data-strength="${this.strength}"
                    data-dexterity="${this.dexterity}"
                    data-condition="${this.condition}"
                    data-intelligence="${this.intelligence}"
                    data-wisdom="${this.wisdom}"
                    data-charisma="${this.charisma}"
                    data-speed="${this.speed}"
                    data-i="${this.i}"
                > ${this.name} </div>
                <div class="btn btn-primary move-up" data-id="${this.id}">
                    <i class="ra ra-underhand"></i> 
                </div>
            </div>
            <div class="my-collapse-target" id="actions-${this.id}">
                ${this.renderActions()}
                <br/>
                ${this.i}
            </div>
        </div>
        `;

        return html;
    };
}
