import { BibleGatewayAPI } from '../src/index';


(async () => {
    const bibleAPI = new BibleGatewayAPI();
    const { verse, content } = await bibleAPI.search('John 3:16', 'DHH');
    console.log(verse, content);
})();