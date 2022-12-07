import Enemy from "../enemy.js";

export default class Player extends Enemy
{   
    render() {
        let html = super.render();
        const new_html = html.replace('btn-warning', 'btn-success');

        return new_html;
    };
    renderActions() {
        if (this.type === 'kreatura') {
            return `
                <ul>
                    <li>zasięg widzenia: 36m 120ft 24[ ];</li>
                    <li>intuicja pasywna: 13 (18 z runy);</li>
                    <li>pasywna percepcja: ?</li>
                    <li>Zwiększenie rozmiaru (duży rozmiar) trwa minutę dwa razy na długi odpoczynek,</li>
                </ul>
                info:<br>
                <details>
                    <summary>Runa miecza i kamienia </summary> 
                    <p>
                        podwójna biegłość czyli ekspertyza w narzędziach, 
                        które zna oraz widzenie w czemności na 120ft 
                        i stałe ułatwienie w rzutach na intuicję;
                    </p>
                </details>
                <details>
                    <summary>*jeśli duży rozmiar:</summary> 
                    <p>
                        <ul>
                        <li>przewaga w testach na siłę i rzutach obronnych na siłę</li> 
                        <li>+1k6 do obrażeń raz na turę;</li> 
                    </p>
                </details>                 
            `;
        }

        return 'decyzja bracza';
    };
}
