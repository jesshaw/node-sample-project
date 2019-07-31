<template>
  <div class="weui-article">
    <div class="weui-article__h1">大标题</div>
    <div class="weui-article__section">
      <div class="weui-article__title">章标题</div>
      <div class="weui-article__section">
        <div class="weui-article__h3">1.1 节标题</div>
        <div class="weui-article__p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="weui-article__p">
          <button class="weui-btn" :type="type" :disabled="disabled" :plain="plain">{{btnMsg}}</button>
        </div>
        <div class="weui-article__p">
          <image class="weui-article__img" src="../../../static/images/pic_article.png" mode="aspectFit" style="height: 180px" />
          <image class="weui-article__img" src="../../../static/images/pic_article.png" mode="aspectFit" style="height: 180px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mpvue-button',
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      btnMsg: {
        type: String,
        default: '页面主操作 Normal'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
