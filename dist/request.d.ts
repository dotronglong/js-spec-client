import { Method } from './spec';
import { Map } from 'gulp-typescript/release/utils';
export default class Request {
    url: string;
    method: Method;
    headers: Map<string>;
    query: Map<string>;
    body: object;
    constructor(url: string, method: Method);
    toString(): string;
}
