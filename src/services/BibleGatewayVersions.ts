import { IBibleGatewayBase } from "../types/IBibleGatewayBase";
import { ExtendedConstructor } from "../utils/mixin";

export const BibleGatewayVersions = <TBase extends ExtendedConstructor<IBibleGatewayBase>>(Base: TBase) => {
    return class extends Base {
        async getVersions() {
            const response = await this.http.get('/versions');
            return response.data;
        }
    }
}