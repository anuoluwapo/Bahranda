<template>
  <div id="app">
    <NavigationMobile />
    <div class="content" :class="{'open':showNav}">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView"
          @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
          <div class="company-logo">
            <img src="./assets/logo.png" alt="logo">
          </div>
        </div>
        <Navigation v-if="!mobileView" />
      </div>
      <Content />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import NavigationMobile from "./components/NavigationMobile.vue";
import Content from "./components/Content.vue";

export default {
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1059;
    }
  },
  components: {
    Navigation,
    NavigationMobile,
    Content
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};

</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
* {
  font-size: 1rem;
}

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #7ca971;
}

#app {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
  overflow: hidden;
}

.top-bar {
  display: flex;
  width: 100%;
}

#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;

  i {
    font-size: 1.5rem;
    margin-top: -30px;
  }
}

.content {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #fff;
}

.open {
  transform: translateX(300px);
}
.company-logo{
  // background-color: blue;
    margin-top: -35px;
    margin-left: 120px;
    img{
      width: 150px;
      height: 30px;
      margin-top: 5px;
    }
}

</style>
