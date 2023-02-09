import App from "./app.js";
import EnemyHelper from "./helpers/enemy-helper.js";
import Random from "./random.js";

export class BattlefieldStorage {
    appClass = null;
    constructor (app) {
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in BattlefieldStorage class constructor');
    }
    store(obj) {
        let bfStorage = [];
        const currentBfStorage = this.get();
        const players = this.appClass.getPlayersName();
        const isPlayer = players.includes(obj.type);
        obj.lp = 0;
        if (null === currentBfStorage) {
            obj.id = 1;
            bfStorage[0] = obj;
        } else {
            obj.id = parseInt(currentBfStorage.length+1);
            bfStorage = currentBfStorage;
            bfStorage[currentBfStorage.length] = obj;
        }
        const newBfStorage = this.reindexContent(bfStorage);
        const counterLpEnemys = this.getEnemyCounter(newBfStorage);
        if (!isPlayer) {
            obj.lp = counterLpEnemys;
        }
        this.saveAll(newBfStorage);
    };
    get() {
        const getStorageFB = JSON.parse(localStorage.getItem('gameStorage'));
        console.log('getStorageFB: ');
        console.log(getStorageFB);

        return getStorageFB;
    };
    clear() {
        localStorage.clear();
    };
    moveUp(element_id) {
        let new_content = [];
        if (1 === parseInt(element_id)) {
            const content = this.get();
            let new_first_element = this.getElementById(element_id, content);
            new_first_element.id = 0;
            new_content[0] = new_first_element;
            let i = 1;
            const reindex_content = this.reindexContent(content, 1);
            for(let k in reindex_content) {
                if (parseInt(new_first_element.id) === parseInt(reindex_content[k].id)) {
                    console.log('pomiń: ');
                    console.log(reindex_content[k]);
                } else {
                    new_content[i++] = reindex_content[k];
                }
            }
        } else if (1 < parseInt(element_id)) {
            const content = this.get();
            const target = this.getElementById(element_id, content);
            let i = 0;
            for(let k in content) {
                if (parseInt(target.id) === parseInt(content[k].id)) {
                    console.log('pomiń: ');
                    console.log(content[k]);
                } else {
                    if (parseInt(content[k].id) === parseInt(target.id-1)) {
                        new_content[i++] = target;
                    }
                    new_content[i++] = content[k];
                }
            }
        }
        if (0 < new_content.length) {
            this.clear();
            let new_indexint_content = this.reindexContent(new_content);
            new_indexint_content.sort(this.sortById);
            this.saveAll(new_indexint_content);
        }
    };
    sortById (a, b) {
        if ( a.id < b.id ){
          return -1;
        }
        if ( a.id > b.id ){
          return 1;
        }
        return 0;
    };
    sortByIni(a, b) {
        if ( a.statistics.initiative < b.statistics.initiative ){
          return 1;
        }
        if ( a.statistics.initiative > b.statistics.initiative ){
          return -1;
        }
        return 0;
    };
    saveAll(data) {
        localStorage.setItem('gameStorage', JSON.stringify(data));
    };
    deleteElement(id) {
        const content = this.get();
        this.clear();
        let new_contetnt = [];
        let i = 0;
        for (let k in content) {
            if (parseInt(id) !== parseInt(content[k].id)) {
                new_contetnt[i++] = content[k];
            }
        }
        this.saveAll(this.reindexContent(new_contetnt));
    }
    reindexContent(objects, plus = 0) {
        let content = [];
        for (let k in objects) {
            objects[k].id = parseInt(k) + parseInt(plus);
            content[k] = objects[k];
        }
        return content;
    };
    getElementById(id, from) {
        const target = from.filter(obj => {
            return obj.id == id;
        });
        return target[0];
    };
    changeHpElementById(id, value) {
        let actualValue = 0;
        let content = this.get();
        this.clear();
        let hpBar = '';
        let object = {};
        const enemyHelper = new EnemyHelper(this.appClass);
        for (let k in content) {
            if (parseInt(id) === parseInt(content[k].id)) {
                actualValue = parseInt(content[k].statistics.currentHp) + value;
                content[k].statistics.currentHp = actualValue;
                object = enemyHelper.getEnemyObject(content[k]);
                hpBar = object.renderHpBar();
                $('.js-battlefield__enemy--hp-bar-by-id-'+object.id).html(hpBar);
            }
        }
        this.saveAll(this.reindexContent(content));

        return actualValue;
    };
    getEnemyCounter(data) {
        let counter = 0;
        const players = this.appClass.getPlayersName();
        for (let i in data) {
            if (!players.includes(data[i].type)) {
                counter++;
            }
        }
        return counter;
    };
    enterTheLabel() {
        const random = new Random(this.appClass);
        // random.resetRandomData();
        let bfContent = this.get();
        // this.clear();
        console.log('bfContent', bfContent);
        let minHpValueId = 0;
        let maxHpValueId = 0;
        for (let k in bfContent) {
            if (parseInt(id) === parseInt(content[k].id)) {
                actualValue = parseInt(content[k].statistics.currentHp) + value;
                content[k].statistics.currentHp = actualValue;
                object = enemyHelper.getEnemyObject(content[k]);
                hpBar = object.renderHpBar();
                $('.js-battlefield__enemy--hp-bar-by-id-'+object.id).html(hpBar);
            }
        }
        let newBfContent = bfContent.sort(this.sortByHpDesc);
        newBfContent[0].label = random.getCharacteristicsAttribute('danger');
        console.log('newBfContent', newBfContent);
        // newBfContent = newBfContent.sort(this.sortByHpAsc);
        // newBfContent[0].label = random.getCharacteristicsAttribute('easy');
        // this.saveAll(newBfContent);
        
    }
}
