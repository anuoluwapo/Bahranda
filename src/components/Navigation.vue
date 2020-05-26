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
      <li>Home</li>
      <li>About Us</li>
      <li>Store</li>
      <li>Login</li>
      <li class="sign-up-btn"><button>Sign Up</button></li>
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
  margin-bottom: 50px;

  ul {
    display: flex;
    list-style: none;
    margin-right: 30px;
    margin-top: 10px;
    li {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      padding: 2px 10px;
      cursor: pointer;

      &:hover {
        color: #7ca971;
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
       }
   }
  .search {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
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
