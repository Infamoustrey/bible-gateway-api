import { flow } from './utils/flow';
import { BibleGatewayBase } from './BibleGatewayBase';

// Services
import { BibleGatewaySearch } from './services/BibleGatewaySearch';
import { BibleGatewayVersions } from './services/BibleGatewayVersions';

// Types
export { BibleResultType } from './types/BibleResultTypes';
export { BibleVersionType } from './types/BibleVersionTypes';

const mixer = flow(
    BibleGatewaySearch,
    BibleGatewayVersions
);
export class BibleGatewayAPI extends mixer(BibleGatewayBase) { }
