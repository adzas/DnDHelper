import Enemy from "../enemy.js";

export default class Player extends Enemy
{   
    render() {
        let html = super.render();
        const new_html = html.replace('btn-warning', 'btn-success');

        return new_html;
    };
    renderActions() {
        let returnHtmlActions = 'niezdefiniowano';
        switch (this.type) {
            case 'kreatura':
                returnHtmlActions = `
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
                break;

            case 'hum':
                returnHtmlActions = `
                ma cztery kości k6
                jeśli nie uda mu się test w jakiejś umiejętności w której ma biegłość
                może dorzucić wynik z kości k6
                jeśli będzie sukces to kość się marnuje, jeśli nie to nie.
                * magiczne ostrza (18m zasięgu) pojawiające się w ręku
                1k6 obrażeń psyhicznych obrażeń + bonusowe obrażenia i nie zostawiają śladów ataku
                ostrze znika zaraz po rzucie bez znaczenia czy trafi czy nie trafi
                jeśli atakujesz takim sztyletem w akcji dodatkowej, wtedy obrażeń jest 1k4 + bonusowe obrażenia
                nie można zrobić ataku okazyjnego bo nie ma broni w ręce

                telepatia z dwoma osobami w drużynie i mogą odpowiedać (1 mila odległości)
                Hum musi widzień cel aby nawiązać ten kontakt 
                Raz można tego użyć na długi odpoczynek chyba, że odrzuci kostki, które ma do obrażeń
                `;
                break;
        
            default:
                break;
        }

        return returnHtmlActions;
    };
}
