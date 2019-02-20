<template>
  <section class="foot">
    <div class="footer-block">
      <div class="company-info">
        <div  class="info-item">
          <h4>Tel</h4>
          <p>0830-3341882转7</p>
        </div>
        <div class="info-item">
          <h4 data-v-1a14c060="">Email</h4>
          <p>249604555@qq.com</p>
        </div>
        <div class="info-item">
          <h4 data-v-1a14c060="">Add</h4>
          <p >四川省泸州市江阳区瓦窑坝80号</p>
        </div>
      </div>
      <div class="QR">
        <img src="../assets/img/fwywxapp.jpg">
        <img src="../assets/img/xhkjwxapp.jpg">
      </div>
    </div>
    <div class="copyright">技术研发：四川三合道科技有限公司 全国运营：四川芯汇信息技术服务有限公司 版权所有</div>
  </section>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
    .foot {
      position: relative;
      width: 100%;
      bottom: 0;
      background-size: cover;
      background: url(../assets/img/6.jpg) no-repeat;
      overflow: hidden;
    }

    .footer-block {
      padding: 0 21vw;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .company-info {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      text-align: left;
    }

    .company-info, QR {
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin: 0 3%;
    }

    .info-item {
      padding: 10px 0;
    }

    .info-item h4 {
      font-size: 1.2rem;
      color: #a6a6a6;
      margin: 10px 0;
    }

    .info-item p {
      font-size: 1.2rem;
      color: #fff;
    }

    .info-item {
      padding: 10px 0;
    }

    .info-item h4 {
      font-size: 1.2rem;
      color: #a6a6a6;
      margin: 10px 0;
    }

    .info-item p {
      font-size: 1.2rem;
      color: #fff;
    }

    .info-item {
      padding: 10px 0;
    }

    .info-item h4 {
      font-size: 1.2rem;
      color: #a6a6a6;
      margin: 10px 0;
    }

    .info-item p {
      font-size: 1.2rem;
      color: #fff;
    }

    .QR {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-align: center;
      align-items: center;
    }

    .QR img {
      width: 120px;
      height: 120px;
      margin: 0 1rem;
    }

    .copyright {
      background-color: #414b4a;
      font-size: 1rem;
      height: 50px;
      color: #a6a6a6;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-align: center;
      align-items: center;
    }
  @media (max-width: 300px) and (min-width: 1px) {
    .footer-block{
      display: none;
    }
  }
  @media (max-width: 490px) and (min-width: 300px) {
    .copyright{
      display: none;
    }
    .QR img{
      width: 60px;
      height: 60px;
      margin: 0 1rem;
    }
  }
</style>
