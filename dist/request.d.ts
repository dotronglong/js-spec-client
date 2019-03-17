import { Method } from './spec';
export default class Request {
    url: string;
    method: Method;
    headers: object;
    query: object;
    body: object;
    constructor(url: string, method: Method);
    toString(): string;
}
