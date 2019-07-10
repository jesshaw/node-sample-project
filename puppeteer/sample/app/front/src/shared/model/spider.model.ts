// import { IOrderItem } from '@/shared/model/order-item.model';
// import { IPromotion } from '@/shared/model/promotion.model';
// import { IStore } from '@/shared/model/store.model';
// import { IStaff } from '@/shared/model/staff.model';
// import { ICustomer } from '@/shared/model/customer.model';
//
// export const enum OrderStatus {
//   PENDING = 'PENDING',
//   CANCELLED = 'CANCELLED',
//   COMPLETED = 'COMPLETED'
// }
//
// export const enum Channel {
//   ONLINE = 'ONLINE',
//   IN_STORE = 'IN_STORE',
//   OTHER = 'OTHER'
// }

export interface IField {
    key?: string;
    value?: string;
    keyDesc?: string;
}

export class Field implements IField {
    constructor(
        key?: string,
        value?: string,
        keyDesc?: string,
    ) {
    }
}

export interface ISpider {
    url?: string;
    format?: string;
    repeat?: string;
    fields?: IField[];
}

export class Spider implements ISpider {
    constructor(
        url?: string,
        format?: string,
        repeat?: string,
        fields?: IField[],
    ) {
    }
}
