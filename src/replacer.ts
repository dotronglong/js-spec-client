export default class Replacer {
  private _markerStart: string = '{{';
  private _markerStop: string = '}}';

  constructor(markerStart?: string, markerStop?: string) {
    if (markerStart !== undefined) this._markerStart = markerStart;
    if (markerStop !== undefined) this._markerStop = markerStop;
  }

  set markerStart(value: string) {
    this._markerStart = value;
  }

  set markerStop(value: string) {
    this._markerStop = value;
  }

  /**
   * Replace source with parameters
   * @param source a string as source
   * @param parameters an object contains replacement
   * @return a string
   */
  public replace(source: string, parameters: object): string {
    let result: string = source;
    Object.keys(parameters).forEach(key => {
      result = result.replace(`${this._markerStart}${key}${this._markerStop}`, parameters[key]);
    });
    return result;
  }
}