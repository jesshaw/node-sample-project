// import { mixins } from 'vue-class-component';
import {Component, Inject, Vue} from 'vue-property-decorator';
import {ISpider} from '@/shared/model/spider.model';

import SpiderService from './spider.service';

@Component
export default class Spider extends Vue {
    // @Inject('orderService')
    // private orderService: () => OrderService;
    // private removeId: string = null;
    public spiderDatas: any;
    public entity: ISpider = {
        url: '',
        format: '',
        repeat: '',
        fields: [{key: '', value: ''}],
    };
    //
    @Inject('spiderService')
    private spiderService: () => SpiderService;
    //
    // public dismissCountDown: number = this.$store.getters.dismissCountDown;
    // public dismissSecs: number = this.$store.getters.dismissSecs;
    // public alertType: string = this.$store.getters.alertType;
    // public alertMessage: any = this.$store.getters.alertMessage;
    //
    // public getAlertFromStore() {
    //   this.dismissCountDown = this.$store.getters.dismissCountDown;
    //   this.dismissSecs = this.$store.getters.dismissSecs;
    //   this.alertType = this.$store.getters.alertType;
    //   this.alertMessage = this.$store.getters.alertMessage;
    // }
    //
    // public countDownChanged(dismissCountDown: number) {
    //   this.alertService().countDownChanged(dismissCountDown);
    //   this.getAlertFromStore();
    // }
    //
    // public mounted(): void {
    //   this.retrieveAllOrders();
    // }
    //
    // public clear(): void {
    //   this.retrieveAllOrders();
    // }
    //
    // public retrieveAllOrders(): void {
    //   this.orderService()
    //     .retrieve()
    //     .then(res => {
    //       this.orders = res.data;
    //     });
    // }
    //
    // public prepareRemove(instance): void {
    //   this.removeId = instance.id;
    // }

    public createSpider(): void {
        this.spiderService()
            .create(this.entity)
            .then((res) => {
                this.spiderDatas = res.data;
            });
    }

    // public removeOrder(): void {
    //   this.orderService()
    //     .delete(this.removeId)
    //     .then(() => {
    //       const message = this.$t('retailApp.order.deleted', { param: this.removeId });
    //       this.alertService().showAlert(message, 'danger');
    //       this.getAlertFromStore();
    //
    //       this.removeId = null;
    //       this.retrieveAllOrders();
    //       this.closeDialog();
    //     });
    // }
    //
    // public closeDialog(): void {
    //   (<any>this.$refs.removeEntity).hide();
    // }
}
