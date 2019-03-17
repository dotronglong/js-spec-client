import {Method} from './spec';
import {Map} from 'gulp-typescript/release/utils';

export default class Request {
  public url: string;
  public method: Method;
  public headers: Map<string> = {};
  public query: Map<string> = {};
  public body: object;

  constructor(url: string, method: Method) {
    this.url = url;
    this.method = method;
  }

  public toString(): string {
    let url: string = this.url;
    let query: string = '';
    const keys = Object.keys(this.query);
    keys.forEach(key => {
      if (query !== '') {
        query += '&';
      }
      query += `${key}=${this.query[key]}`;
    });
    if (keys.length > 0) {
      query = url.indexOf('?') >= 0 ? `&${query}` : `?${query}`;
    }

    return `${url}${query}`;
  }
}