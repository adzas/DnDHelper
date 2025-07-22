import App from "./app.js";
import RandomHelper from "./helpers/random-helper.js";

export default class Random {
    lists = "./storage/config/description-list.json";
    resultData = null;
    appClass = null;
    constructor(app) {
        let status = JSON.parse(localStorage.getItem('randomData'));
        console.log('status', status);
        if (null === status) {
            this.getDataFromListFile();
        }
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in Random class constructor');
    };
    resetRandomData() {
        localStorage.setItem('randomData', null);
        this.getDataFromListFile();
    }
    getDataFromListFile() {
        const path = this.lists + '?r=' + Math.random();
        $.getJSON(path, function(data){
            localStorage.setItem('randomData', JSON.stringify(data));
        }).fail(function(){
            console.log("cant load: "+this.lists);
        });
    };
    getAppearance() {
        const resultData = JSON.parse(localStorage.getItem('randomData'));

        return resultData.appearance.general;
    };
    getRandomAppearance() {
        const appearanceData = this.getAppearance();
        const randomHelper = new RandomHelper(this.appClass);
        const appearance = randomHelper.getRandomValueFromData(appearanceData);

        return appearance;
    };
    getCharacter() {
        const resultData = JSON.parse(localStorage.getItem('randomData'));

        return resultData.character;
    }
    getRandomCharacterAttr() {
        const characterData = this.getCharacter();
        const randomHelper = new RandomHelper(this.appClass);
        const negative = randomHelper.getRandomValueFromData(characterData.negative);
        const positive = randomHelper.getRandomValueFromData(characterData.positive);

        return {
            "positive": positive,
            "negative": negative
        };
    };
    getAttackDescription() {
        const resultData = JSON.parse(localStorage.getItem('randomData'));

        return resultData.attackDescription;
    }
    getRandomAttackDescription(type = 'sword') {
        const attackDesc = this.getAttackDescription();
        const randomHelper = new RandomHelper(this.appClass);
        
        return randomHelper.getRandomValueFromData(attackDesc[type]);
    }
    getCharacteristicsAttribute(type = 'general') {
        let result = '';
        const resultData = JSON.parse(localStorage.getItem('randomData'));
        console.log('resultData', resultData);
        switch (type) {
            case 'danger':
                result = resultData.characteristicsAttribute['general'][0];
                break;

            case 'easy':
                result = resultData.characteristicsAttribute['general'][1];
                break;

            case 'strange':
                result = resultData.characteristicsAttribute['general'][2];
                break;
        
            default:
                result = resultData.characteristicsAttribute[type];
                break;
        }

        return result;
    }
}
