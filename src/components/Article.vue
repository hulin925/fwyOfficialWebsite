<template>
<div class="container">
  <div class="article-title">{{ articleData.title }}</div>
  <div class="article-content">
    <div class="article-detail">
      <div class="detail-head">
        <ul>
          <li>发布日期 : {{ articleData.releasetime }}</li>
          <li>生效日期 : {{ articleData.starttime }}</li>
          <li>发文字号 : {{ articleData.issuednumber }}  </li>
          <!-- <li>效力等级 :  {{ articleData.sort }}</li> -->
          <li>时 效 性 : 现行有效   </li>
          <li>类    别  :  {{ articleData.sort }}</li>
          <li>发布机关 :  {{ articleData.section }}</li>
        </ul>
      </div>
      <!-- <div class="detail-tit"><h3>{{ articleData.title }}</h3><h4>{{ articleData.issuednumber }}</h4></div> -->
      <div class="detail-con" v-html='articleData.content'></div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "articles",
  data() {
    return {
      articleData: {}
    };
  },
  mounted() {
    this.$emit("HideHeader");
    this.getLawArticle(this.lawid);
  },
  computed: {
    lawid() {
      return this.$route.params.lawid;
    }
  },
  methods: {
    getLawArticle(lawid) {
      axios({
        method: "post",
        url: "https://fwy1.sanhedao.com.cn/Uapi?do=Content.showLawByid",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          lawid
        })
      })
        .then(response => {
          console.log(response);
          if (response && response.data.code == 11901) {
            this.articleData = response.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  line-height: 2rem;
}
.article-title {
  height: 50vh;
  width: 100%;
  background: url(../assets/img/banner.jpg) no-repeat;
  background-position: top;
  background-size: cover;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  /* white-space: nowrap; */
}
.article-content {
  padding: 0 20vw;
  background: #e8e8e8;
}
.article-detail {
  width: 100%;
  background: #fff;
  padding: 5px 10px;
}
.detail-head {
  margin: 10px 0;
  font-size: 1.2rem;
}
.detail-head ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.detail-head ul li {
  list-style: none;
  flex-basis: 50%;
  text-align: justify;
  flex-grow: 1;
  padding: 15px 0;
  box-sizing: border-box;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/* .detail-tit h3,
h4 {
  margin: 10px 0;
}
.detail-tit h3 {
  font-size: 1.5rem;
}
.detail-tit h4 {
  font-size: 1.2rem;
  color: #999;
} */
@media (max-width: 480px) {
  .article-content {
    margin-top: 60px;
    padding: 0 10px;
    background: none;
  }
  .article-detail {
    padding: 0;
  }
  .article-title {
    display: none;
  }
}

@media (min-width: 481px) and (max-width: 800px) {
  .article-content {
    margin-top: 60px;
    padding: 0 10px;
    background: none;
  }
  .article-detail {
    padding: 0;
  }
  .article-title {
    display: none;
  }
}

@media (min-width: 801px) and (max-width: 1200px) {
}
@media (min-width: 1201px) {
}
</style>