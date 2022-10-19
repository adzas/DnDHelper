import RandomHelper from "./helpers/random-helper.js";

export default class Enemy extends RandomHelper{
    id = null;
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

    attackType = null;
    attackMethod = null;

    str = null; // modify strength
    dex = null; // modify dexterity
    
    constructor(obj) {
        super(obj);
        if (obj !== typeof "undefined") {
            this.id = obj.id
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

            this.str = (this.strength - 10) / 2;
            this.dex = (this.dexterity -10) / 2;
        }
    };
    render() {
        let html = `
        <div class="col-12 mb-1">
            <div 
                class="btn btn-warning my-collapse" id="${this.getIdBaseElementDom()}"
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
            > ${this.name} - ${this.hp} hp [${this.initiative}] </div>
            ${this.renderActions()}
        </div>
        `;

        return html;
    };
    renderActions() {
        let html = `<div class="my-collapse-target" id="actions-${this.id}">`;
        for (let key in this.actions) {
            html += this.renderAction(this.actions[key]);
        }
        html += `</div>`;

        return html;
    };
    renderAction(type){
        return `
            <button
                class="btn btn-default action"
                data-enemy-type="${this.type}"
                data-attack-type="${type}"
                data-attack-method="ulatwienie"
                data-parent-id="${this.getIdBaseElementDom()}"
            >
                ${this.getAttackName(type)} ułatwienie
            </button>
            
            <button
                class="btn btn-default action"
                data-enemy-type="${this.type}"
                data-attack-type="${type}"
                data-attack-method="utrudnienie"
                data-parent-id="${this.getIdBaseElementDom()}"
            >
                ${this.getAttackName(type)} utrudnienie
            </button>`;
    };
    setAttackType(type) {
        this.attackType = type;
    };
    setAttackMethod(method) {
        this.attackMethod = method;
    };
    attack() {
        let result = '<div class="result-atack">';
        switch (this.attackType) {
            case 'axe':
                result += this.attackAxe(this.attackMethod);
                break;

            case 'short-bow':
                result += this.attackShortBow(this.attackMethod);
                break;

            case 'sword':
                result += this.attackSword(this.attackMethod);
                break;

            case 'smash':
                result += this.attackSmash(this.attackMethod);
                break;
    
            case 'throw-wood':
                result += this.attackThrowWood(this.attackMethod);
                break;
        
            default:
                console.log(`undefined attack '${this.attackType}' in Enemy class`);
                break;
        }
        result += '</div>';

        return result;
    };
    getIdBaseElementDom() {
        return 'id-'+this.id;
    };
    getAttackName(typeAction) {
        switch (typeAction) {
            case 'axe':
                return 'Topór';

            case 'short-bow':
                return 'Krótki łuk';

            case 'sword':
                return 'Krótki miecz';

            case 'smash':
                return 'Uderzenie';

            case 'throw-wood':
                return 'Rzut gałęzią';

        }
    };
    attackAxe() {
        const test = this.k(20)+this.str;
        const dmg =  2*this.k(6)+this.str;
        return `test: ${test} dmg: ${dmg}`;
    };
    attackShortBow() {
        const test = this.k(20)+this.dex;
        const dmg =  this.k(8)+this.dex;
        return `test: ${test} dmg: ${dmg}`;
    };
    attackSword() {
        const test = this.k(20)+this.str;
        const dmg =  this.k(6)+this.str;
        return `test: ${test} dmg: ${dmg}`;
    };
    attackSmash() {
        const test = this.k(20)+this.str;
        const dmg =  3*this.k(6)+this.str;
        return `test: ${test} dmg: ${dmg}`;
    };
    attackThrowWood() {
        const test = this.k(20)+this.str;
        const dmg =  3*this.k(6)+this.str;
        return `test: ${test} dmg: ${dmg}`;
    }
}
