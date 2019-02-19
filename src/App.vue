<template>
<div id="app">
    <Header @change="change" :index='index' />
    <router-view></router-view>
</div>
</template>

<script>
import Header from "./components/Header";
import Index from "./components/Index";
import Law from "./components/Law";
import Download from "./components/Download";
import About from "./components/About";
export default {
  name: "App",
  data() {
    return {
      index: 1
    };
  },
  methods: {
    //子组件$emit触发事件
    change(index) {
      this.index = index;
    }
  },
  components: {
    Index,
    Law,
    Download,
    About,
    Header,
  }
};
</script>

<style>
#app {
  text-align: center;
}

* {
  padding: 0;
  margin: 0;
}

* {
  padding: 0;
  margin: 0;
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-weight: normal;
}

@media (max-width: 400px) {
  html {
    font-size: 10px;
  }
}

@media (min-width: 401px) and (max-width: 800px) {
  html {
    font-size: 12px;
  }
}

@media (min-width: 801px) and (max-width: 1200px) {
  html {
    font-size: 14px;
  }
}
@media (min-width: 1201px) {
  html {
    font-size: 16px;
  }
}
</style>