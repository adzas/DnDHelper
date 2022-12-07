import App from "./app.js";
import RandomHelper from "./helpers/random-helper.js";

export default class Enemy extends RandomHelper{
    id = null;
    lp = null;
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
    currentHp = null;

    appClass = null;
    
    constructor(obj, app) {
        super(obj);
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in Enemy class constructor');
        if (obj !== typeof "undefined") {
            this.id = obj.id;
            this.lp = obj.lp;
            this.type = obj.type;
            this.name = obj.name;
            this.actions = obj.actions;
            this.xp = obj.statistics.xp;
            this.kp = obj.statistics.kp;
            this.hp = obj.statistics.hp;
            this.initiative = obj.statistics.initiative;
            this.pp = obj.statistics.pp;
            this.strength = obj.statistics.strength;
            this.dexterity = obj.statistics.dexterity;
            this.condition = obj.statistics.condition;
            this.intelligence = obj.statistics.intelligence;
            this.wisdom = obj.statistics.wisdom;
            this.charisma = obj.statistics.charisma;
            this.speed = obj.statistics.speed;
            this.i = obj.statistics.i;

            this.str = Math.round((this.strength - 10) / 2);
            this.dex = Math.round((this.dexterity -10) / 2);
            
            if (null === obj.statistics.currentHp) {
                this.currentHp = this.hp;
            } else {
                this.currentHp = obj.statistics.currentHp;
            }
        }
    };
    style() {
        if (0 < this.currentHp) {
            return '';
        }

        return 'style="opacity: 0.5"';
    };
    getMyCssClass() {
        if (0 < this.currentHp) {
            return 'btn-warning';
        }

        return 'btn-danger';
    };
    render() {
        let html = `
        <div class="col-12 mb-1" ${this.style()}>
            <div class="btn-group w-100 mb-1" role="group" aria-label="t2">
                <div class="btn btn-danger delete" data-id="${this.id}">
                    <i class="ra ra-skull" data-id="${this.id}"></i>
                </div>
                <div 
                    class="btn ${this.getMyCssClass()} my-collapse w-75" id="${this.getIdBaseElementDom()}"
                    data-collapse-target-id="#actions-${this.id}" 
                    data-collapse-show="false"
                    data-type="${this.type}"
                    data-actions="${this.actions}"
                    data-name="${this.name}"
                    data-xp="${this.xp}"
                    data-kp="${this.kp}"
                    data-currentHp="${this.currentHp}"
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
                >
                    ${this.renderHeader()}
                </div>
                <div class="btn btn-primary">
                    <button class="btn btn-default move-up" data-id="${this.id}">
                        <i class="ra ra-underhand" data-id="${this.id}"></i>
                    </button>
                    <br/>
                    <button class="btn btn-default show-statisticks" data-id="${this.id}">
                        <i class="ra ra-player" data-id="${this.id}"></i>
                    </button> 
                </div>
            </div>
            <div class="my-collapse-target" id="actions-${this.id}">
                ${this.renderActions()}
                <br/>
                ${this.renderInformation()}
            </div>
        </div>
        `;

        return html;
    };
    renderActions() {
        let html = ``;
        for (let key in this.actions) {
            html += this.renderAction(this.actions[key]);
        }
        html += ``;

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

            case 'scimitar':
                result += this.attackScimitar();
                break;

            case 'long-bow':
                result += this.attackLongBow();
                break;

            case 'spear':
                result += this.attackSpear();
                break;

            case 'strength-drain':
                result += this.attackStrengthDrain();
                break;

            case 'mace':
                result += this.attackMace();
                break;

            case 'heavy-crossbow':
                result += this.attackHeavyCrossbow();
                break;

            case 'battleaxe':
                result += this.attackBattleaxe();
                break;

            case 'dagger':
                result += this.attackDagger();
                break;

            case 'greataxe':
                result += this.attackGreataxe();
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

            case 'scimitar':
                return 'Bułat';

            case 'long-bow':
                return 'Długi łuk';

            case 'spear':
                return 'Włócznia';

            case 'strength-drain':
                return 'Wysysanie sił';

            case 'mace':
                return 'Buzdygan';

            case 'heavy-crossbow':
                return 'Ciężka kusza';

            case 'battleaxe':
                return 'Topór bojowy';

            case 'dagger':
                return 'Sztylet';

            case 'greataxe':
                return 'Topór bojowy'
        
            default:
                console.log(`nieokreślono typeAction: '${typeAction}'`);
                return 'nieokreślono';

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
    };
    renderInformation() {
        let html = '';
        const informations = this.i.split(';');
        for (let k in informations) {
            html += informations[k]+'</br>';
        }
        html += `pasywna percepcja: ${this.pp}</br>`;
        html += `szybkość: ${this.speed}</br>`;

        return html;
    };
    renderHeader() {
        let title = '';
        if (this.appClass.getPlayersName().includes(this.type)) {
            title = `${this.name}`;
        } else {
            title = `${this.lp}. ${this.name} `;
        }
        
        return `${title} <br/>
        ${this.hpChangeButton()} <br/>
        [<i style="font-size:0.75em" class="ra ra-eye-shield"></i>${this.kp}] - 
        <i style="font-size:0.75em" class="ra ra-rabbit d-none"></i>${this.speed} - 
        ${this.initiative} <i style="font-size:0.75em" class="ra ra-bottom-right"></i>`;
    };
    hpChangeButton() {
        return `
        <div class="btn-group" role="group" aria-label="t3">
            <button class="btn btn-sm btn-default border border-success hp-changed"
                data-minus-value="-5"
                data-id="${this.id}"
            >-5</button>
            <button class="btn btn-sm btn-default border border-success hp-changed"
                data-minus-value="-1"
                data-id="${this.id}"
            >
                (<span class="current-hp">${this.currentHp}</span>/${this.hp}<i style="font-size:0.75em" class="ra ra-hearts"></i>)
            </button>
            <button class="btn btn-sm btn-default border border-success hp-changed"
                data-minus-value="5"
                data-id="${this.id}"
            >+5</button>
        </div>`;
    };
    renderStatisticks(){
        return `
        <div class="row">
        <div class="col-12">
            <table class="tg">
                <thead>
                    <tr>
                        <th class="tg-0pky">str</th>
                        <th class="tg-0pky">dex</th>
                        <th class="tg-0pky">con</th>
                        <th class="tg-0pky">int</th>
                        <th class="tg-0pky">wis</th>
                        <th class="tg-0pky">chr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0pky">${this.strength}</td>
                        <td class="tg-0pky">${this.dexterity}</td>
                        <td class="tg-0pky">${this.condition}</td>
                        <td class="tg-0pky">${this.intelligence}</td>
                        <td class="tg-0pky">${this.wisdom}</td>
                        <td class="tg-0pky">${this.charisma}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12">
            ${this.renderInformation()}
        </div>
        </div>
        `;
    }
}
