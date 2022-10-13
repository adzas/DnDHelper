import Enemy from "../enemy.js";

export default class Dwarf extends Enemy
{
    type = null;
    name = null;
    actions = null;
    xp = null;
    kp = null;
    hp = null;
    initiative = null;
    pp = null;
    strength = null;
    dexterity = null;
    condition = null;
    intelligence = null;
    wisdom = null;
    charisma = null;
    speed = null;
    i = null;
    
    constructor(obj) {
        super(obj);
        if (obj !== typeof "undefined") {
            this.type = obj.type
            this.name = obj.name
            this.actions = obj.actions
            this.xp = obj.statistics.xp
            this.kp = obj.statistics.kp
            this.hp = obj.statistics.hp
            this.initiative = obj.statistics.initiative
            this.pp = obj.statistics.pp
            this.strength = obj.statistics.strength
            this.dexterity = obj.statistics.dexterity
            this.condition = obj.statistics.condition
            this.intelligence = obj.statistics.intelligence
            this.wisdom = obj.statistics.wisdom
            this.charisma = obj.statistics.charisma
            this.speed = obj.statistics.speed
            this.i = obj.statistics.i
        }
    };
    render() {
        let html = `
        <div class="btn btn-warning"
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
        > ${this.name} - ${this.hp} hp [${this.initiative}] </div>
        `;

        return html;
    }
}
