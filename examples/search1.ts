import { BibleGatewayAPI } from '../src/index';


(async () => {
    const bibleAPI = new BibleGatewayAPI();
    const { verse, content } = await bibleAPI.search('Filipenses 4:6-8', 'DHH');
    console.log(verse, content);
})();
