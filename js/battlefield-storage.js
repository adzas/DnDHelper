export class BattlefieldStorage {
    store(obj) {
        let bfStorage = [];
        const currentBfStorage = this.get();
        if (null === currentBfStorage) {
            bfStorage[0] = obj;
        } else {
            // for (currentBfStorage in k) {
            //     bfStorage[k] = currentBfStorage[k]
            // }
            bfStorage = currentBfStorage;
            bfStorage[currentBfStorage.length] = obj;
        }
        console.log('bfStorage:');
        console.log(bfStorage);
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
