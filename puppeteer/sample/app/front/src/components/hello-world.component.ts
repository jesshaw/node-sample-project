import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg: string; // TypeScript会报告 x从未被初始化过
}
