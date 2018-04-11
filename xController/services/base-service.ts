import * as Bluebird from "bluebird";
import * as https from "https";

export class BaseService {
    public static DataEffectiveTime = 12000;
    public httpGet(host: string, path: string) {
        return new Bluebird<string>((resolve, reject) => {
            var options = {} as https.RequestOptions;
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
    public httpPostJson(host: string, path: string, data: string) {
        return new Bluebird<string>((resolve, reject) => {
            var options = {} as https.RequestOptions;
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