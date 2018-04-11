"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bluebird = require("bluebird");
const https = require("https");
class BaseService {
    httpGet(host, path) {
        return new Bluebird((resolve, reject) => {
            var options = {};
            options.host = host;
            options.path = path;
            options.method = "GET";
            var output = "";
            var req = https.request(options, (res) => {
                res.setEncoding("utf8");
                res.on("data", (chunk) => {
                    output += chunk;
                });
                res.on("end", () => {
                    resolve(output);
                });
            });
            req.on("error", (err) => {
                reject(err);
            });
            req.end();
        });
    }
    httpPostJson(host, path, data) {
        return new Bluebird((resolve, reject) => {
            var options = {};
            options.host = host;
            options.path = path;
            options.method = "POST";
            options.headers = {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            };
            var output = "";
            var req = https.request(options, (res) => {
                res.setEncoding("utf8");
                res.on("data", (chunk) => {
                    output += chunk;
                });
                res.on("end", () => {
                    resolve(output);
                });
            });
            req.on("error", (err) => {
                reject(err);
            });
            req.write(data);
            req.end();
        });
    }
}
BaseService.DataEffectiveTime = 12000;
exports.BaseService = BaseService;
//# sourceMappingURL=base-service.js.map