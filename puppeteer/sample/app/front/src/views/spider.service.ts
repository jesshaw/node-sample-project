import axios from 'axios';

import { ISpider } from '@/shared/model/spider.model';

const baseApiUrl = 'api/spiders';

export default class SpiderService {
  // public find(id): Promise<IOrder> {
  //   return new Promise<IOrder>(resolve => {
  //     axios.get(`${baseApiUrl}/${id}`).then(function(res) {
  //       resolve(res.data);
  //     });
  //   });
  // }
  //
  // public retrieve(paginationQuery?: any): Promise<any> {
  //   return new Promise<any>(resolve => {
  //     axios.get(baseApiUrl).then(function(res) {
  //       resolve(res);
  //     });
  //   });
  // }
  //
  // public delete(id): Promise<any> {
  //   return new Promise<any>(resolve => {
  //     axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
  //       resolve(res);
  //     });
  //   });
  // }
  //
  // public create(entity): Promise<IOrder> {
  //   return new Promise<IOrder>(resolve => {
  //     axios.post(`${baseApiUrl}`, entity).then(function(res) {
  //       resolve(res.data);
  //     });
  //   });
  // }
  //
  // public update(entity): Promise<IOrder> {
  //   return new Promise<IOrder>(resolve => {
  //     axios.put(`${baseApiUrl}`, entity).then(function(res) {
  //       resolve(res.data);
  //     });
  //   });
  // }
}
