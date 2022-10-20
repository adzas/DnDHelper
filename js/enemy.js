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

    isCrit = false;
    
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

            this.str = Math.round((this.strength - 10) / 2);
            this.dex = Math.round((this.dexterity -10) / 2);
        }
    };
    render() {
        let html = `
        <div class="col-12 mb-1">
            <div class="btn-group w-100 mb-1" role="group" aria-label="t2">
                <div 
                    class="btn btn-warning my-collapse w-75" id="${this.getIdBaseElementDom()}"
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
                <div class="btn btn-primary move-up">^</div>
            </div>
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
            <div class="btn-group mb-1 w-100" role="group" aria-label="t1">
                <button type="button" class="action btn btn-secondary"
                    data-enemy-type="${this.type}"
                    data-attack-type="${type}"
                    data-attack-method="disadvantage"
                    data-parent-id="${this.getIdBaseElementDom()}"
                >
                    -
                </button>
                <button type="button" class="action btn btn-secondary"
                    data-enemy-type="${this.type}"
                    data-attack-type="${type}"
                    data-attack-method="normal"
                    data-parent-id="${this.getIdBaseElementDom()}"
                >
                    ${this.getAttackName(type)}
                </button>
                <button type="button" class="action btn btn-secondary"
                    data-enemy-type="${this.type}"
                    data-attack-type="${type}"
                    data-attack-method="advantage"
                    data-parent-id="${this.getIdBaseElementDom()}"
                >
                    +
                </button>
            </div>`;
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
                result += this.attackAxe();
                break;

            case 'short-bow':
                result += this.attackShortBow();
                break;

            case 'sword':
                result += this.attackSword();
                break;

            case 'smash':
                result += this.attackSmash();
                break;
    
            case 'throw-wood':
                result += this.attackThrowWood();
                break;
    
            case 'light-crossbow':
                result += this.attackLightCrossbow();
                break;
    
            case 'bite':
                result += this.attackBite();
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

            case 'light-crossbow':
                return 'Lekka kusza';

            case 'bite':
                return 'Ugryzienie';

        }
    };
    getTestResult(plus) {
        const t1 = this.k(20);
        const t2 = this.k(20);
        let value = t1;
        let html = 'test: ';
        if ('disadvantage' === this.attackMethod) {
            if (t1 > t2) {
                html += `${t1+plus}/<b>${t2+plus}</b>`;
                value = t2;
            } else {
                html += `<b>${t1+plus}</b>/${t2+plus}`;
                value = t1;
            }
        } else if ('advantage' === this.attackMethod) {
            if (t1 > t2) {
                html += `<b>${t1+plus}</b>/${t2+plus}`;
                value = t1;
            } else {
                html += `${t1+plus}/<b>${t2+plus}</b>`;
                value = t2;
            }
        } else {
            html += `<b>${t1+plus}</b>`;
            value = t1;
        }

        if (20 == value) {
            this.isCrit = true;
            html += `*`;
        }
        
        return {
            "html": html+'</br>',
            "value": value
        };
    };
    generateDmg(dieResult, plus, name) {
        let dmg = 0;
        if (this.isCrit) {
            dmg = (dieResult * 2) + plus;
        } else {
            dmg = dieResult + plus;
        }
        return `
            <button class="show-dmg btn btn-default" data-target=".dmg-${this.id}">
                ${name}
            </button>
            <b class="d-none dmg-${this.id}">${dmg} (${name})</b>
            <br/>
        `;
    }
}
