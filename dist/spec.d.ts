import Replacer from './replacer';
import Transporter from './transporter';
export declare class Spec {
    private readonly _endpoints;
    private readonly _parameters;
    private readonly _middlewares;
    private readonly _replacer;
    private readonly _transporter;
    constructor(endpoints?: object, parameters?: object, middlewares?: Function[], transporter?: Transporter);
    readonly endpoints: object;
    readonly parameters: object;
    readonly middlewares: Function[];
    readonly replacer: Replacer;
    readonly transporter: Transporter;
    /**
     * Executes a request
     * @param name
     * @param middleware
     * @param parameters
     */
    call(name: string, middleware?: Function, parameters?: object): Promise<object>;
}
export interface Endpoint {
    url: string;
    method: Method;
}
export declare enum Method {
    GET = 0,
    POST = 1,
    PUT = 2,
    PATCH = 3,
    DELETE = 4,
    OPTIONS = 5,
    HEAD = 6
}
