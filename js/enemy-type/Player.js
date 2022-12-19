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
                        <li>pasywna percepcja: ${this.pp}</li>
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
                ma cztery kości k6 <br>
                jeśli nie uda mu się test w jakiejś umiejętności w której ma biegłość
                może dorzucić wynik z kości k6 <br>
                jeśli będzie sukces to kość się marnuje, jeśli nie to nie.<br>
                * magiczne ostrza (18m zasięgu) pojawiające się w ręku<br>
                1k6 obrażeń psyhicznych obrażeń + bonusowe obrażenia <br>
                nie zostawiają śladów ataku <br>
                ostrze znika zaraz po rzucie bez znaczenia czy trafi czy nie trafi <br>
                jeśli atakujesz takim sztyletem w akcji dodatkowej, <br>
                wtedy obrażeń jest 1k4 + bonusowe obrażenia <br>
                Hum raz na krótki odpoczynek może odzyskać jedna kość <br>
                nie można zrobić ataku okazyjnego bo nie ma broni w ręce <br>
                <br>

                telepatia z dwoma osobami w drużynie i mogą odpowiadać (1 mila odległości) <br>
                Hum musi widzień cel aby nawiązać ten kontakt <br>
                Raz można tego użyć na długi odpoczynek chyba, że odrzuci kostki, <br>
                które ma do obrażeń
                `;
                break;

            case 'omalen':
                returnHtmlActions += `
                Rozpoznawanie ziół jest automatyczne <br>
                Może rozpoznawać rośliny ale nie koniecznie ich właściwości <br>
                <details>
                    <summary>Pijany mistrz:</summary>
                    <p>
                        <ul>
                            <li>Ma więcej ki </li>
                            <li>+10 ft ruchu po skorzystaniu z dodatkowego ataku pięścią oraz 
                                nie może dostać z ataku okazyjnego (wyjątek sentinel - atut)</li>
                            <li>+ruchu czyli nie 45 a 55ft ruchu</li>
                            <li>+latające w Omalena przedmioty mogą mieć odjęte obrażenia, 
                                a jeśli obrażeń nie dostanie to może odrzucić ten pocisk jeśli,
                                mieści mu się w ręce (test ataku) (1k6 obrażeń)
                            </li>
                        </ul>
                    </p>
                </details>
                `;
                break;
        
            default:
                break;
        }

        return returnHtmlActions;
    };
}
