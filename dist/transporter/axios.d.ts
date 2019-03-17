import Transporter from '../transporter';
export default class AxiosTransporter implements Transporter {
    delete(url: string, headers?: object): Promise<object>;
    get(url: string, headers?: object): Promise<object>;
    patch(url: string, body?: object, headers?: object): Promise<object>;
    post(url: string, body?: object, headers?: object): Promise<object>;
    put(url: string, body?: object, headers?: object): Promise<object>;
}
