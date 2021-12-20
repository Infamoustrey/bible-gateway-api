import axios, { AxiosInstance } from "axios";

export class BibleGatewayBase {
    http: AxiosInstance;
    parse: Function;

    constructor() {
        this.http = axios.create({
            baseURL: 'https://www.biblegateway.com',
        });

        if (typeof DOMParser !== "undefined") {
            this.parse = (content: string) =>
                new DOMParser().parseFromString(content, "text/html");
        } else {
            this.parse = (content: string) => {
                const { JSDOM } = require("jsdom");
                const { document } = new JSDOM(content).window;
                return document;
            };
        }
    }
}