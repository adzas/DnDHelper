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
                <details>
                    <summary>ma cztery kości k6</summary>
                    <p>
                        jeśli nie uda mu się test w jakiejś umiejętności w której ma biegłość
                        może dorzucić wynik z kości k6
                        jeśli będzie sukces to kość się marnuje, jeśli nie to kość się nie marnuje.
                    </p>
                </details>
                <details>
                    <summary>magiczne ostrza (18m zasięgu) pojawiające się w ręku</summary>
                    <p>
                        1k6 obrażeń psyhicznych obrażeń + bonusowe obrażenia
                        nie zostawiają śladów ataku
                        ostrze znika zaraz po rzucie bez znaczenia czy trafi czy nie trafi
                        <br><br>
                        jeśli atakujesz takim sztyletem w akcji dodatkowej,
                        wtedy obrażeń jest 1k4 + bonusowe obrażenia
                        <br><br>
                        Hum raz na krótki odpoczynek może odzyskać jedna kość
                        <minus> nie można zrobić ataku okazyjnego bo nie ma broni w ręce
                    </p>
                </details>
                <details>
                    <summary>telepatia</summary>
                    <p>
                        telepatia z dwoma osobami w drużynie i mogą odpowiadać (1 mila odległości)
                        Hum musi widzień cel aby nawiązać ten kontakt
                        Raz można tego użyć na długi odpoczynek chyba, że odrzuci kostki,
                        które ma do obrażeń
                    </p>
                </details>
                <details>
                    <summary>Wie gdzie szukać informacji</summary>
                    <p>
                        Kiedy Hum chce się dowiedzieć jakiejś informacji, często wie skąd ją uzyskać.
                    </p>
                </details>
                `;
                break;

            case 'omalen':
                returnHtmlActions = `
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

            case 'alsariph':
                returnHtmlActions = `
                nie krwawi; ma czarny tatuaż na ciele wychodzący od serca na wszystkie strony
                widać go na szyi.
                `;
                break;
        
            default:
                break;
        }

        return returnHtmlActions;
    };
}
