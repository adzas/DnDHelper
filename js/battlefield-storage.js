export class BattlefieldStorage {
    store(obj) {
        let bfStorage = [];
        const currentBfStorage = this.get();
        if (null === currentBfStorage) {
            obj.id = 1;
            bfStorage[0] = obj;
        } else {
            obj.id = parseInt(currentBfStorage.length+1);
            bfStorage = currentBfStorage;
            bfStorage[currentBfStorage.length] = obj;
        }
        this.saveAll(this.reindexContent(bfStorage));
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
            console.log('new_indexint_content: ');
            console.log(new_indexint_content);
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
    sortByIdDesc (a, b) {
        if ( a.id < b.id ){
            return 1;
          }
          if ( a.id > b.id ){
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
        console.log('id', id);
        console.log('from', from);
        const target = from.filter(obj => {
            return obj.id == id;
        });
        console.log('target', target);
        console.log('target[0]', target[0]);
        return target[0];
    }
}
