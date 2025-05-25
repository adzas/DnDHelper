import Enemy from "../enemy.js";

export default class RotMonster extends Enemy
{   
    shortInfo() {
        return `[+7/2k8+4(obuch)]x2 
        </br> pochłonięcie jeśli oba ataki się powiodły 
        <br/> 60ft [12] ślepowidzenia`;
    };
    // "actions": ["multiattack","smash","absorption"],
    attackMultiattack() {
        let html = 'Opis ataku wielokrotnego:';
        html += '<br/> 2x walnięcie. Jeśli trafi dwa razy średni lub mały cel cel jest pochwycony';
        html += '<br/> Cel może się próbować wysfobodzić o ST 14';
        html += '<br/> Jeśli gnilec ma pochwyconą ofiarę może użyć przeciw niej pochłonięcia';

        return html;
    };
    attackSmash() {
        const testResult = this.getTestResult(7);
        let html = testResult.html;
        html += this.generateDmg(this.k(8)*2, 4, 'Obrażenia obuchowe');

        return html;
    };
    attackAbsorption() {
        let html = 'Pochłonięta ustota (mała lub średnia) jest';
        html += 'oślepiona, unieruchomiona i nie może oddychać';
        html += '<br/> na początku każdej tury gnilca cel musi wykonać test obronny na kondycję';
        html += '<br/> ST 14. Jeśli nie zda otrzymuje obrażenia 2k8+4 obuchowe';
        html += '<br/> Gnilec może mieć tylko jedną wchłoniętą istotą w sobie';
        html += '<br/> Gnilec może się z nią przemieszczać';

        return html;
    }
}
