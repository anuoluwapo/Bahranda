<template>
  <div id="app">
    <!-- <router-view></router-view> -->
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
      <router-view />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import NavigationMobile from "./components/NavigationMobile.vue";
// import Content from "./components/Content.vue";
// import Footer from "./components/Footer.vue";

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
    
    // Footer
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
  overflow-x: hidden;
}

#app {
  position: relative;
  width: calc(100% - 20px);
  height: 100vh;
  // height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
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
// #footer{
//   position: absolute;
//   width: 100%;
//   bottom: 0;
//   top: 0;
// }
.open {
  transform: translateX(300px);
}
.company-logo{
    margin-top: -35px;
    margin-left: 120px;
    img{
      width: 150px;
      height: 30px;
      margin-top: 5px;
    }
}

</style>
