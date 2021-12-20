import { IBibleGatewayBase } from "../types/IBibleGatewayBase";
import { ExtendedConstructor } from "../utils/mixin";

export const BibleGatewaySearch = <TBase extends ExtendedConstructor<IBibleGatewayBase>>(Base: TBase) => {
    return class extends Base {
        async search(
            query: string = "John 3:16",
            version: string = "ESV"
        ) {
            let encodedSearch = encodeURIComponent(query);
            let encoodedVersion = encodeURIComponent(version);

            const result = await this.http.get(`/passage?search=${encodedSearch}&version=${encoodedVersion}`);

            const document = this.parse(result.data);

            const verse = document.querySelector(".bcv").textContent;

            let elements = [].slice.call(document.querySelectorAll(".text"));

            let content: Array<string> = [];
            for (let i = 0; i < elements.length; i++) {
                let text = (elements[i] as any).textContent as string;
                if (text.substr(0, 4) != "Back") content.push(text);
            }

            if (content.length === 0) throw new Error("Could not find verse");

            return Promise.resolve({ verse, content });
        }
    }
}