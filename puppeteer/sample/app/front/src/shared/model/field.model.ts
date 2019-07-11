/* tslint:disable:no-empty */


export interface IField {
    key?: string;
    value?: string;
    keyDesc?: string;
}

export class Field implements IField {
    constructor(key?: string,
                value?: string,
                keyDesc?: string) {}
}
