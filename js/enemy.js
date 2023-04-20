import App from "./app.js";
import DieRoll from "./die-roll.js";
import EnemyHelper from "./helpers/enemy-helper.js";
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
        super(app);
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in Enemy class constructor');
        if (typeof obj !== "undefined") {
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
            if (typeof obj.label === "undefined") {
                this.label = '---';
            } else {
                this.label = obj.label;
            }

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
    renderHeader() {
        let label = '<br>';
        if (this.appClass.getPlayersName().includes(this.type)) {
            label += ``;
        } else {
            label += `${this.label}`;
        }
        
        return `
            ${this.name}
            <i style="font-size: 0.7em" id="${this.getIdBaseElementDom()}--label">${label}</i>
            <div class="js-battlefield__enemy--hp-bar-by-id-${this.id}">
            ${this.renderHpBar()}
            </div>
        `;
    };
    renderHpBar() {
        const percentHP = Math.round(100*(this.currentHp/this.hp));
        let w3color = 'w3-green';
        if (15 > percentHP) {
            w3color = 'w3-red';
        } else if (35 > percentHP) {
            w3color = 'w3-orange';
        }
        let label = `${this.currentHp}/${this.hp}`;
        if (this.appClass.getPlayersName().includes(this.type)) {
            // It is a player
            label = this.currentHp;
        }
        
        return `<div class="w3-light-gray w3-round w3-tiny">
            <div class="w3-container w3-round w3-left ${w3color}" style="width:${percentHP}%">${label}</div>
        </div>`;
    }
    getLP() {
        if (this.appClass.getPlayersName().includes(this.type)) {
            return '';
        } else {
            return `${this.lp}.`;
        }
    }
    render() {
        let html = `
        <div class="col-12 mb-1" ${this.style()}>
            <div class="btn-group w-100 mb-1" role="group" aria-label="t2">
                <button class="btn btn-danger js-battlefield__enemy--delete" data-id="${this.id}">
                    -<i class="ra ra-skull" data-id="${this.id}"></i>-
                    <br>
                    ${this.getLP()}
                </button>
                <div 
                    class="btn ${this.getMyCssClass()} js-actions__collapse w-75" id="${this.getIdBaseElementDom()}"
                    data-collapse-target-id="#js-battlefield__enemy--show-actions-${this.id}" 
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
                    data-label="${this.label}"
                >
                    ${this.renderHeader()}
                </div>
                <div class="btn btn-primary">
                    <button class="btn btn-default js-battlefield__enemy--actions__show-statisticks" data-id="${this.id}">
                        -<i class="ra ra-player" data-id="${this.id}"></i>-
                        <br>
                        ${this.initiative}
                    </button> 
                </div>
            </div>
            <div class="js-actions__collapse-target" id="js-battlefield__enemy--show-actions-${this.id}">
                <div class="row">
                    <div class="col-12">
                        <div class="w-100 btn btn-default border-default">
                            <div class="row">
                                <div class="col-3">
                                    <i style="font-size:0.75em" class="ra ra-eye-shield"></i>${this.kp}
                                </div>
                                <div class="col-4 text-center">
                                    ${this.hpChangeButton()}
                                </div>
                                <div class="col-5 text-end">
                                    <i style="font-size:0.75em" class="ra ra-rabbit"></i> ${this.speed}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-8">
                        <input type="text" placeholder="note" id="js-battlefield__enemy--label-${this.id}" 
                            class="btn btn-default border-info form-control" />
                    </div>
                    <div class="col-4">
                        <button 
                            data-target="#js-battlefield__enemy--label-${this.id}"
                            data-base-id="${this.id}"
                            class="btn btn-default btn-success
                            form-control js-battlefield__enemy--store-label"
                        >Zapisz</button>
                    </div>
                </div>
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
        const enemyHelper = new EnemyHelper(this.appClass);
        
        return `
            <div class="btn-group mb-1 w-100" role="group" aria-label="t1">
                <button type="button" class="js-actions__attack btn btn-secondary"
                    data-enemy-type="${this.type}"
                    data-attack-type="${type}"
                    data-attack-method="disadvantage"
                    data-parent-id="${this.getIdBaseElementDom()}"
                >
                    -
                </button>
                <button type="button" class="js-actions__attack btn btn-secondary"
                    data-enemy-type="${this.type}"
                    data-attack-type="${type}"
                    data-attack-method="normal"
                    data-parent-id="${this.getIdBaseElementDom()}"
                >
                    ${enemyHelper.getAttackName(type)}
                </button>
                <button type="button" class="js-actions__attack btn btn-secondary"
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
        const enemyHelper = new EnemyHelper(this.appClass);
        
        let result = '<div class="result-atack">';
        result += this[enemyHelper.getAttackFunction(this.attackType)]();
        result += '</div>';

        return result;
    };
    getIdBaseElementDom() {
        return 'id-'+this.id;
    };
    getTestResult(plus) {
        const dieRollHelper = new DieRoll(this.appClass);
        const result = dieRollHelper.test(plus, this.attackMethod);
        let value = result.value;
        let html = result.html;

        if (20 == value) {
            this.isCrit = true;
            html += `*`;
        }
        
        return {
            "html": html,
            "value": value
        };
    };
    generateDmg(dieResult, plus, name) {
        let dmg = 0;
        if (this.appClass.isManualMode()) {
            return `${dieResult}+${plus} (${name})`;            
        }
        if (this.isCrit) {
            dmg = (dieResult * 2) + plus;
        } else {
            dmg = dieResult + plus;
        }
        return `
            <button class="js-dmg--show btn btn-default" data-target=".js-dmg-${this.id}">
                ${name}
            </button>
            <b class="d-none js-dmg-${this.id}">${dmg} (${name})</b>
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
    hpChangeButton() {
        return `
        <div class="btn-group" role="group" aria-label="t3">
            <button class="btn btn-sm btn-default border border-success js-actions__hp-changed"
                data-minus-value="-5"
                data-id="${this.id}"
            >-5</button>
            <button class="btn btn-sm btn-default border border-success js-actions__hp-changed"
                data-minus-value="-1"
                data-id="${this.id}"
            >-1</button>
            <button class="btn btn-sm btn-default border border-success js-actions__hp-changed"
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
    };
    /** return better bonus */
    bonus() {
        if (this.str > this.dex) {
            return this.str;
        }

        return this.dex;
    };
    changeLabel(text) {
        $(`#${this.getIdBaseElementDom()}--label`).html(text);
    }
}
