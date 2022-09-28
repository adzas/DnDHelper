
class App {
    constructor() {
        this.name = 'DnDMpHepler';
        this.mainElementDomID = 'app';
    };
    getMyDom() {
        return $('#'+this.mainElementDomID);
    };
    helloWorl() {
        this.getMyDom().html('Hello World!');
    }
}

let app = new App();

export default app;