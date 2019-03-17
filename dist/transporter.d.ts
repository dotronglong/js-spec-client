export default interface Transporter {
    /**
     * Executes GET request
     * @param url
     * @param headers
     */
    get(url: string, headers?: object): Promise<object>;
    /**
     * Executes POST request
     * @param url
     * @param body
     * @param headers
     */
    post(url: string, body?: object, headers?: object): Promise<object>;
    /**
     * Executes PUT request
     * @param url
     * @param body
     * @param headers
     */
    put(url: string, body?: object, headers?: object): Promise<object>;
    /**
     * Executes PATCH request
     * @param url
     * @param body
     * @param headers
     */
    patch(url: string, body?: object, headers?: object): Promise<object>;
    /**
     * Executes POST request
     * @param url
     * @param headers
     */
    delete(url: string, headers?: object): Promise<object>;
}
