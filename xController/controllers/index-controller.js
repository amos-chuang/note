"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    index() {
        this.res.render("index", { searching: "???" });
    }
    search() {
        global.kibanaSearchKeyword = this.req.body;
    }
}
exports.Controller = Controller;
//# sourceMappingURL=index-controller.js.map