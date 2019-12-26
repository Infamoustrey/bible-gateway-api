import axios from "axios";

interface BibleGatewayResult {
  verse: string;
  content: Array<string>;
}

export class BibleGatewayAPI {
  constructor() {}

  private parse(content: string) {
    return new DOMParser().parseFromString(content, "text/html");
  }

  async search(
    query = "John 3:16",
    version: string = "ESV"
  ): Promise<BibleGatewayResult> {
    let encodedSearch = encodeURIComponent(query);
    let encoodedVersion = encodeURIComponent(version);

    const url = `https://www.biblegateway.com/passage?search=${encodedSearch}&version=${encoodedVersion}`;

    const result = await axios.get(url);

    const document = this.parse(result.data);

    const verse = document.querySelector(".bcv").textContent;

    let elements = [].slice.call(document.querySelectorAll(".text"));

    let content: Array<string> = [];
    for (let i = 0; i < elements.length; i++) {
      let text = elements[i].textContent;
      if (text.substr(0, 4) != "Back") content.push(text);
    }

    if (content.length === 0) throw new Error("Could not find verse");

    return Promise.resolve({ verse, content });
  }
}
