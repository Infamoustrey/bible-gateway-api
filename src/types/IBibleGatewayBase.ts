import { AxiosInstance } from "axios";

export type IBibleGatewayBase = {
    http: AxiosInstance;
    parse: Function;
}
