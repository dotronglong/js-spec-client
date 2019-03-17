export default class Replacer {
    private _markerStart;
    private _markerStop;
    constructor(markerStart?: string, markerStop?: string);
    markerStart: string;
    markerStop: string;
    /**
     * Replace source with parameters
     * @param source a string as source
     * @param parameters an object contains replacement
     * @return a string
     */
    replace(source: string, parameters: object): string;
}
