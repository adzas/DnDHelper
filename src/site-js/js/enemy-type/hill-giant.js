import Enemy from "../enemy.js";

export default class HillGiant extends Enemy {
    shortInfo() {
        return `2x[+8/3k8+5(obuch)]
        <br/> lub rzuca głazem na 18m/72m`;
    };
    // "actions": ["greatclub","rock"],
    attackRock() {
        const testResult = this.getTestResult(8);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia kłute');
        html += '<br/>zasięg 80/320 ft (18[ ]/72[ ])';

        return html;
    };
    attackGreatclub() {
        const testResult = this.getTestResult(8);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 4, 'Obrażenia obuchowe');

        return html;
    }
}
