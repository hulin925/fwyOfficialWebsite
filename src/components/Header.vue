<template>
<div class="head">
    <nav class="nav">
        <router-link :to="item.route" :class="[itemClass,item.active?activeClass:'']"
        v-for="item in header"
        :index="item.index"
        @click.native="onItemClick(item.index)"
        :key="item.index">{{item.name}}</router-link>
    </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      header: [
        {
          index: 1,
          name: "首页",
          active: false,
          route: "/"
        },
        {
          index: 2,
          name: "法条",
          active: false,
          route: "/law"
        },
        {
          index: 3,
          name: "快速咨询",
          active: false,
          route: "/download"
        },
        {
          index: 4,
          name: "关于我们",
          active: false,
          route: "/about"
        }
      ],
      itemClass: "nav-item",
      activeClass: "active"
    };
  },
  props: ["index"],
  mounted: function() {
    let path = this.$route.path;
    for (let i of this.header) {
      i.active = false;
      if (path === i.route) {
        i.active = true;
      }
    }
  },
  methods: {
    //触发事件通知父组件
    onItemClick: function(index) {
      this.$emit("change", index);
    }
  },
  watch: {
    index(val) {
      for (let item of this.header) {
        item.active = false;
        if (item.index == this.index) {
          item.active = true;
        }
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

li {
  list-style: none;
}

.head {
  position: absolute;
  top: 0;
  height: 60px;
  z-index: 99;
  width: 100%;
  overflow: hidden;
}

.nav {
  display: flex;
  flex-direction: row;
  margin: 0 18vw;
}

.nav-item {
  font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  white-space: nowrap;
  font-size: 1.5rem;
  color: #eee;
  padding: 1.75rem;
  margin-right: 4rem;
  cursor: pointer;
  border-top: 4px solid rgba(255, 255, 255, 0);
}

.active {
  border-top: 4px solid #00c57c;
  color: #00c57c;
}
@media (max-width: 480px) {
  /* .head {
    height: 100vh;
    width: 25%;
    background: rgba(92, 92, 92, 0.2);
    float: left;
    border-radius: 0 5px 5px 0;
  }
  .nav {
    height: 100%;
    margin: 0;
    flex-direction: column;
  }
  .nav-item {
    margin: auto;
    border-top: none;
  }
  .active {
    border-top: none;
    color: #00c57c;
  } */
  .nav {
    margin: 0 5vw;
    font-size:10rem;
  }
  .nav-item {
    margin: auto;
  }
}

@media (min-width: 481px) and (max-width: 800px) {
  .nav {
    margin: 0 5vw;
  }
  .nav-item {
    margin: auto;
  }
}

@media (min-width: 801px) and (max-width: 1200px) {
  .nav {
    margin: 0 10vw;
  }
  .nav-item {
    margin: auto;
  }
}
@media (min-width: 1201px) {
  .nav {
    margin: 0 18vw;
  }
}
</style>
