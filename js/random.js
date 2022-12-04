import RandomHelper from "./helpers/random-helper.js";

export default class Random {
    lists = "./storage/lists.json";
    resultData = null;
    constructor() {
        let status = JSON.parse(localStorage.getItem('randomData'));
        console.log('status', status);
        if (null === status) {
            this.getDataFromListFile();
        }
    };
    getDataFromListFile() {
        $.getJSON(this.lists, function(data){
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
        const randomHelper = new RandomHelper();
        const appearance = randomHelper.getRandomValueFromData(appearanceData);

        return appearance;
    };
    getCharacter() {
        const resultData = JSON.parse(localStorage.getItem('randomData'));

        return resultData.character;
    }
    getRandomCharacterAttr() {
        const characterData = this.getCharacter();
        const randomHelper = new RandomHelper();
        const negative = randomHelper.getRandomValueFromData(characterData.negative);
        const positive = randomHelper.getRandomValueFromData(characterData.positive);

        return {
            "positive": positive,
            "negative": negative
        };
    };
    getAttackDescription () {
        const resultData = JSON.parse(localStorage.getItem('randomData'));
        console.log('resultData', resultData);
        console.log('resultData.attackDescription', resultData.attackdescription);

        return resultData.attackdescription;
    }
    getRandomAttackDescription() {
        const attackDesc = this.getAttackDescription();
        const randomHelper = new RandomHelper();
        
        return randomHelper.getRandomValueFromData(attackDesc.sword);
    }
}
