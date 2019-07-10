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

export interface ISpider {
  id?: number;
  // placedTime?: Date;
  // status?: OrderStatus;
  code?: string;
  // deliveredTime?: Date;
  // channel?: Channel;
  // amount?: number;
  // shippingCharge?: number;
  // deductionAmount?: number;
  // payAmount?: number;
  // orderItems?: IOrderItem[];
  // promotion?: IPromotion;
  // store?: IStore;
  // staff?: IStaff;
  // customer?: ICustomer;
}

export class Spider implements ISpider {
  constructor(
    public id?: number,
    // public placedTime?: Date,
    // public status?: OrderStatus,
    public code?: string,
    // public deliveredTime?: Date,
    // public channel?: Channel,
    // public amount?: number,
    // public shippingCharge?: number,
    // public deductionAmount?: number,
    // public payAmount?: number,
    // public orderItems?: IOrderItem[],
    // public promotion?: IPromotion,
    // public store?: IStore,
    // public staff?: IStaff,
    // public customer?: ICustomer
  ) {}
}
