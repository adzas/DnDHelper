import App from "./app.js";
import RandomHelper from "./helpers/random-helper.js";

export default class DieRoll extends RandomHelper {
    appClass = null
    constructor(app) {
        super(app);
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in DieRoll class constructor');
    };
    test(plus, attackMethod) {
        const t1 = this.k(20);
        const t2 = this.k(20);
        let value = t1;
        let html = 'test: ';
        if (this.appClass.isManualMode()) {
            html += 'k20+'+plus;
            value = null;
        } else if ('disadvantage' === attackMethod) {
            if (t1 > t2) {
                html += `${t1+plus}/<b>${t2+plus}</b>`;
                value = t2;
            } else {
                html += `<b>${t1+plus}</b>/${t2+plus}`;
                value = t1;
            }
        } else if ('advantage' === attackMethod) {
            if (t1 > t2) {
                html += `<b>${t1+plus}</b>/${t2+plus}`;
                value = t1;
            } else {
                html += `${t1+plus}/<b>${t2+plus}</b>`;
                value = t2;
            }
        } else {
            html += `${t1}+${plus} = <b>${t1+plus}</b>`;
            value = t1;
        }
        
        return {
            "html": html+'</br>',
            "value": value
        };
    }
}
