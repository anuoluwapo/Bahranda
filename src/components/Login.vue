<template>
    <div id="container">
      <div class="form-box">
          <div class="button-box">
              <div id="btn"></div>
              <!-- <button class="toggle-btn" @click="login()">Login</button> -->
              <button class="toggle-btn" id="login-toggle-btn">Login</button>
              <button class="toggle-btn" id="sign-up-toggle-btn">Sign Up</button>
              <!-- <button class="toggle-btn" @click="signUp()">Sign Up</button> -->
          </div>
          <div class="social-icons">
            <img src="../assets/fb.png" alt="">
            <img src="../assets/tw.png" alt="">
            <img src="../assets/gp.png" alt="">
        </div>
        <form action="" class="input-group" id="login">
            <input type="text" class="input-field" placeholder="User name" required>
            <input type="password" class="input-field" placeholder="Password" required>
            <input type="checkbox" name="" id="" class="check-box"><span class="check" id="remember">Remember Password</span>
            <button type="submit" class="submit-btn">Login</button>
        </form>

        <form action="" class="input-group" id="sign-up">
            <input type="text" class="input-field" placeholder="User name" required>
            <input type="email" class="input-field" placeholder="Email address" required>
            <input type="password" class="input-field" placeholder="Password" required>
            <input type="checkbox" name="" id="bahranda-terms" class="check-box"><span class="check">By clicking ‘Continue’, you agree to BAHRANDA Terms of Use, <span class="terms">Sponsorship</span> and <span class="terms">Privacy Policy</span></span>
            <button type="submit" class="submit-btn">Continue</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    mounted() {
        const loginToggleBtn = document.getElementById('login-toggle-btn');
        const signUpToggleBtn = document.getElementById('sign-up-toggle-btn');
        const loginForm = document.getElementById('login');           
        const signUpForm  = document. getElementById('sign-up');
        const toggleBtn = document.getElementById('btn')

        loginToggleBtn.addEventListener('click', () => {
            loginForm.style.left = '50px';
            signUpForm.style.left = '450px';
            toggleBtn.style.left = '0px';
        });
        signUpToggleBtn.addEventListener('click', () => {
            loginForm.style.left = '-400px';
            signUpForm.style.left = '50px';
            toggleBtn.style.left = '110px';
        })
    }
}
// export default {
//     name: 'Login',
//     mounted() {
     
//         this.signUp();
//         this.login();
       
//     },
//     data(){
//         return(
//             {
//                  loginForm : document.getElementById('login'),
//                  signUpForm  : document.getElementById('sign-up'),
//                  toggleBtn : document.getElementById('btn')
//             }
//         )
//     },
//     methods : {
//           signUp(){
//             //   alert("test")
//             this.loginForm.style.left = '-400px';
//             this.signUpForm.style.left = '50px';
//             this.toggleBtn.style.left = '110px';
//         },

//          login(){
//             //   alert("another")
//             this.loginForm.style.left = '50px';
//             this.signUpForm.style.left = '450px';
//             this.toggleBtn.style.left = '0px';
//         }
//     }
// }
</script>

<style lang="scss" scoped>
    #container{
            // height: 100vh;
            width: 100%;
            background: #dddd;
            background-position: center;
            background-size: cover;
            position: absolute;
            left: 0;
        }
        .form-box{
            width: 380px;
            height: 480px;
            position: relative;
            margin: 6% auto;
            background: #fff;
            padding: 5px;
            overflow: hidden;
        }
        .button-box{
            width: 220px;
            margin: 35px auto;
            position: relative;
            box-shadow: 0 0 20px 9px #ff61241f;
            border-radius: 30px;
        }
        .toggle-btn{
            padding: 10px 30px;
            cursor: pointer;
            background: transparent;
            border: none;
            outline: none;
            position: relative;
        }
        #btn{
            top: 0;
            left: 0;
            position: absolute;
            width: 110px;
            height: 100%;
            background: linear-gradient(to right,  #17D65E, rgba(25,25,0, 0.6));
            border-radius: 30px;
            transition: 0.5s;
        }
        .social-icons{
            margin: 30px auto;
            text-align: center;
        }
        .social-icons img{
           width: 30px;
           margin: 0 12px;
           box-shadow: 0 0 20px 0 #7f7f7f3d;
           cursor: pointer;
           border-radius: 50%;
        }
        .input-group{
            position: absolute;
            top: 180px;
            width: 280px;
            transition: 0.5s;
        }
        .input-field{
            width: 100%;
            padding: 10px 0;
            margin: 5px 0;
            border: none;
            border-bottom: 1px solid #999;
            outline: none;
            background: transparent;
        }
        .submit-btn{
            width: 85%;
            padding: 10px 30px;
            cursor: pointer;
            display: block;
            margin: auto;
            background-image: linear-gradient(315deg, #f2cf07 0%, #55d284 74%);
            border: none;
            outline: none;
            border-radius: 30px;
        }
        .check-box{
            margin: 30px 10px 30px 0;
        }
        .check{
            color: #777;
            font-size: 12px;
            position: absolute;
            bottom: 65px;
        }
        #bahranda-terms{
            margin-top: 18px !important;
        }
        span.check{
                margin-bottom: -2.6px !important;
            }
        span#remember{
            margin-bottom: 1px !important;
        }
        #login{
            left: 50px;
        }
        #sign-up{
            left: 450px;
        }
        .terms{
            font-size: 12px;
            color: #17D65E;
        }
        span.check{
            color: red;
            // margin-top: 5px !important;
        }
      
</style>