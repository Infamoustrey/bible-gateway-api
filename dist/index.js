"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class BibleGatewayAPI {
    constructor() {
        this.parse = null;
        if (typeof DOMParser !== "undefined") {
            this.parse = (content) => new DOMParser().parseFromString(content, "text/html");
        }
        else {
            this.parse = (content) => {
                const { JSDOM } = require("jsdom");
                const { document } = new JSDOM(content).window;
                return document;
            };
        }
    }
    search(query = "John 3:16", version = "ESV") {
        return __awaiter(this, void 0, void 0, function* () {
            let encodedSearch = encodeURIComponent(query);
            let encoodedVersion = encodeURIComponent(version);
            const url = `https://www.biblegateway.com/passage?search=${encodedSearch}&version=${encoodedVersion}`;
            const result = yield axios_1.default.get(url);
            const document = this.parse(result.data);
            const verse = document.querySelector(".bcv").textContent;
            let elements = [].slice.call(document.querySelectorAll(".text"));
            let content = [];
            for (let i = 0; i < elements.length; i++) {
                let text = elements[i].textContent;
                if (text.substr(0, 4) != "Back")
                    content.push(text);
            }
            if (content.length === 0)
                throw new Error("Could not find verse");
            return Promise.resolve({ verse, content });
        });
    }
}
exports.BibleGatewayAPI = BibleGatewayAPI;
exports.default = BibleGatewayAPI;
