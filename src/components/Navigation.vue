<template>
  <div id="navigation">
    <div class="logo">
        <a href=""><img src="../assets/logo.png" alt=""></a>
    </div>
    <div class="search">
      <input type="text" placeholder="Search..." />
      <i class="fas fa-search"></i>
    </div>
    <ul>
      <li><router-link to='/' >Home</router-link></li>
      <li> <router-link to='!#' >About Us</router-link></li>
       <li><router-link to='!#' >Store</router-link> </li>
      <li> <router-link to='/login' >Login</router-link></li>
      <li class="sign-up-btn"> <router-link to='/login' ><button>Sign up</button></router-link> </li>
  
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navigation {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 2;
  border-bottom: 1px solid #00000022;
  ul {
    display: flex;
    list-style: none;
    margin-right: 30px;
    margin-top: 10px;
    li {
      padding: 2px 10px;
      a:-webkit-any-link {
        color: #333;
        font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    &:hover{
      color: #7ca971;
    }
      }

    }
    
    .sign-up-btn{
        button{
            padding: 5px 17px;
            font-size: 18px;
            background-color: #7ca971;
            border: 1px solid #7ca971;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
            outline: none;

            &:hover{
                box-shadow: 0 3px 4px rgba(0,0,0,0.5);
            }
        }
    }
  }
   .logo{
       img{
           height: 40px;
           width: 120px;
           margin-top: 10px;
       }
   }
  .search {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 5.5px auto;
    input {
      border: none;
      outline: none;
      width: calc(100% - 80px);
      padding: 15px 60px 15px 20px;
      margin: 0;
      border-radius: 30px;
      background-color: #efefef;
      font-family: "Segoe UI", Tahoma;
      font-size: 1rem;

      &:hover{
          box-shadow: 0 1px 3px 0 rgba(32,33,36,0.28);
      }
    }

    i {
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 1.2rem;
      color: #aaa;
      cursor: pointer;
    }
  }
}
</style>
