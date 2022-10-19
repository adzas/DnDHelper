export class BattlefieldStorage {
    store(obj) {
        let bfStorage = [];
        const currentBfStorage = this.get();
        if (null === currentBfStorage) {
            obj.id = 1;
            bfStorage[0] = obj;
        } else {
            obj.id = currentBfStorage.length+1;
            bfStorage = currentBfStorage;
            bfStorage[currentBfStorage.length] = obj;
        }
        localStorage.setItem('gameStorage', JSON.stringify(bfStorage));
    };
    get() {
        const getStorageFB = JSON.parse(localStorage.getItem('gameStorage'));
        console.log('getStorageFB: ');
        console.log(getStorageFB);

        return getStorageFB;
    };
    clear() {
        localStorage.clear();
    }
}
