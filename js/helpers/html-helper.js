import App from "../app.js";
import AlsariphGenerator from "../enemy-generators/alsariph-generator.js";
import HumGenerator from "../enemy-generators/hum-generator.js";
import KreaturaGenerator from "../enemy-generators/kreatura-generator.js";
import OmalenGenerator from "../enemy-generators/omalen-generator.js";

export default class HtmlHelper {
    app = null;
    constructor(app) {
        if (app instanceof App) {
            this.app = app;
        } else console.log('Not Defined appClass in HtmlHelper class constructor');
    }
    renderPlayersAttribute() {
        let html = '';
        
        const players = this.app.getPlayersName();
        let head = '';
        let body = '';
        let body_2 = '';
        let playerObj = {};
        let generator = {};

        let strength = '<th class="tg-0pky">str</th>';
        let dexterity = '<th class="tg-0pky">dex</th>';
        let condition = '<th class="tg-0pky">con</th>';
        let intelligence = '<th class="tg-0pky">int</th>';
        let wisdom = '<th class="tg-0pky">wis</th>';
        let charisma = '<th class="tg-0pky">chr</th>';

        let pp = '<th class="tg-0pky">pp</th>';
        let pi = '<th class="tg-0pky">pi</th>';

        let passiveIntuition = 10;

        players.forEach(player => {
            if ('kreatura' === player) {
                generator = new KreaturaGenerator(this.app);
                passiveIntuition = 18;
            } else if ('omalen' === player) {
                generator = new OmalenGenerator(this.app);
                passiveIntuition = 13;
            } else if ('hum' === player) {
                generator = new HumGenerator(this.app);
                passiveIntuition = 9;
            } else if ('alsariph' === player) {
                generator = new AlsariphGenerator(this.app);
                passiveIntuition = 11;
            }
            playerObj = generator.getRandomObject();

            head += `<th class="tg-0pky">${playerObj.name}</th>`;

            strength += `<th class="tg-0pky">${playerObj.statistics.strength}</th>`;
            dexterity += `<th class="tg-0pky">${playerObj.statistics.dexterity}</th>`;
            condition += `<th class="tg-0pky">${playerObj.statistics.condition}</th>`;
            intelligence += `<th class="tg-0pky">${playerObj.statistics.intelligence}</th>`;
            wisdom += `<th class="tg-0pky">${playerObj.statistics.wisdom}</th>`;
            charisma += `<th class="tg-0pky">${playerObj.statistics.charisma}</th>`;

            pp += `<th class="tg-0pky">${playerObj.statistics.pp}</th>`;
            pi += `<th class="tg-0pky">${passiveIntuition}</th>`;
        });


        body += `
        <tr>
            ${strength}
        </tr>
        <tr>
            ${dexterity}
        </tr>
        <tr>
            ${condition}
        </tr>
        <tr>
            ${intelligence}
        </tr>
        <tr>
            ${wisdom}
        </tr>
        <tr>
            ${charisma}
        </tr>`;

        body_2 += `
        <tr>
            ${pp}
        </tr>
        <tr>
            ${pi}
        </tr>`;

        html += `
        <div class="row">
            <div class="col-12">
                <table class="tg">
                    <thead>
                        <tr>
                            <th class="tg-0pky">---</th>
                            ${head}
                        </tr>
                    </thead>
                    <tbody>
                        ${body}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="tg">
                    <thead>
                        <tr>
                            <th class="tg-0pky">---</th>
                            ${head}
                        </tr>
                    </thead>
                    <tbody>
                        ${body_2}
                    </tbody>
                </table>
            </div>
        </div>
        `;

        return html;
    };
    renderBattlefieldSetsPopupContent() {
        const html = `
            <div class="row">
                <div class="col-12">
                    <a href="#" class="btn btn-default pt-4 text-success" rel="noopener noreferrer" id="js-battlefield--preview-set-1">
                        <i class="ra ra-anchor"></i> Podgląd set 1
                    </a>
                    <a href="#" class="btn btn-default pt-4 text-success" rel="noopener noreferrer" id="js-battlefield--preview-set-2">
                        <i class="ra ra-anchor"></i> Podgląd set 2
                    </a>
                    <a href="#" class="btn btn-default pt-4 text-success" rel="noopener noreferrer" id="js-battlefield--save-set-1">
                        <i class="ra ra-anchor"></i> Zapisz set 1
                    </a>
                    <a href="#" class="btn btn-default pt-4 text-success" rel="noopener noreferrer" id="js-battlefield--save-set-2">
                        <i class="ra ra-anchor"></i> Zapisz set 2
                    </a>
                    <a href="#" class="btn btn-default pt-4 text-primary" rel="noopener noreferrer" id="js-battlefield--load-set-1">
                        <i class="ra ra-anchor"></i> Załaduj set 1
                    </a>
                    <a href="#" class="btn btn-default pt-4 text-primary" rel="noopener noreferrer" id="js-battlefield--load-set-2">
                        <i class="ra ra-anchor"></i> Załaduj set 2
                    </a>
                </div>
            </div>
        `;

        return html;
    }
}