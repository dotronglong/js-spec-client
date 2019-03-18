import * as EventEmitter from 'events';
import Replacer from './replacer';
import Request from './request';
import Transporter from './transporter';
import AxiosTransporter from './transporter/axios';

export class Spec extends EventEmitter {
  private readonly _endpoints: object = {};
  private readonly _parameters: object = {};
  private readonly _middlewares: Function[] = [];
  private readonly _replacer: Replacer = new Replacer();
  private readonly _transporter: Transporter = new AxiosTransporter();

  constructor(endpoints?: object, parameters?: object, middlewares?: Function[], transporter?: Transporter) {
    super();
    if (endpoints !== undefined) this._endpoints = endpoints;
    if (parameters !== undefined) this._parameters = parameters;
    if (middlewares !== undefined) this._middlewares = middlewares;
    if (transporter !== undefined) this._transporter = transporter;
  }

  get endpoints(): object {
    return this._endpoints;
  }

  get parameters(): object {
    return this._parameters;
  }

  get middlewares(): Function[] {
    return this._middlewares;
  }

  get replacer(): Replacer {
    return this._replacer;
  }

  get transporter(): Transporter {
    return this._transporter;
  }

  /**
   * Executes a request
   * @param name
   * @param middleware
   * @param parameters
   */
  public call(name: string, middleware?: Function, parameters?: object): Promise<object> {
    if (this.endpoints[name] === undefined) {
      throw new Error(`${name} could not be found`);
    }
    const endpoint: Endpoint = this.endpoints[name];
    const request: Request = new Request(endpoint.url, endpoint.method);

    this.middlewares.forEach(f => f(request));
    if (typeof middleware === 'function') middleware(request);

    let url: string = request.toString();
    url = this.replacer.replace(url, this.parameters);
    if (typeof parameters === 'object' && parameters !== null) url = this.replacer.replace(url, parameters);

    switch (endpoint.method) {
      case Method.GET:
        return this.transporter.get(url, request.headers);
      case Method.POST:
        return this.transporter.post(url, request.body, request.headers);
      case Method.PUT:
        return this.transporter.put(url, request.body, request.headers);
      case Method.PATCH:
        return this.transporter.patch(url, request.body, request.headers);
      case Method.DELETE:
        return this.transporter.delete(url, request.headers);
      default:
        throw new Error(`${name} is using unsupported method`);
    }
  }
}

export interface Endpoint {
  url: string;
  method: Method
}

export enum Method {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
  OPTIONS,
  HEAD
}