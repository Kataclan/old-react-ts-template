import * as $ from 'jquery';

export class ApiCalls {
    private _rootUrl: string;

    public set RootUrl(value: string) {
        this._rootUrl = value;
    }

    //#region [ Constructor ]
    constructor() {
        this._rootUrl = `YOUR API URL`;
    }
    //#endregion

    //#region [ Public Methods ]
    public getJSON(
        url: string,
        data: any,
        success: (data: any, textStatus: string, jqXHR: JQueryXHR) => void,
        error: (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) => void) {

        return $.ajax({
            url: this._rootUrl + url,
            type: "GET",
            data: data,
            dataType: 'json',
            success: success,
            error: error
        });
    }
    public postJSON(
        url: string,
        data: any,
        success: (data: any, textStatus: string, jqXHR: JQueryXHR) => void,
        error: (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) => void) {

        return $.ajax({
            url: this._rootUrl + url,
            type: "POST",
            data: data,
            dataType: 'json',
            success: success,
            error: error
        });
    }
    //#endregion
};