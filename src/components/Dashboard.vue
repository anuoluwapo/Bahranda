<template>
  <div id="dashboard">
    <input type="checkbox" id="check">
    <!--header area start-->
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="logo">
          <img src="logo.png" alt="">
      </div>
      <div class="right_area">
          <a href="#" class="logout-btn"><i class="fas fa-power-off"></i></a>
          <a href="#" class="notification-btn"><i class="fas fa-bell"></i></a>
      </div>
    </header>
    <!--header area end-->
    <!--sidebar start-->
    <div class="sidebar">
        <div class="user">
          <img src="icons8-user-100.png" class="profile_image" alt="">
          <h4>Anuoulwapo</h4>
        </div>
        <a href="#" class="active"><i class="fas fa-home"></i><span>Dashboard</span></a>
        <a href="#"><i class="fas fa-circle"></i><span>All Products</span></a>
        <a href="#"><i class="fas fa-money-bill-wave"></i><span>Investments</span></a>
        <a href="#"><i class="fas fa-address-book"></i><span>Profile</span></a>
        <a href="#"><i class="fas fa-wallet"></i><span>Wallet</span></a>
        <a href="#"><i class="fas fa-calendar-check"></i><span>Accounts Details</span></a>
      </div>
      <!--sidebar end-->
  
      <div class="content">
          <div class="row" id="dashboard-cards"> 
            <div class="container">
              <div class="cards">
                <div class="card">
                  <div id="signal" class="circle"><i class="fas fa-signal"></i></div>
                  <p>299.9k <br> <span>Total Investments</span></p>
                  <div>
                    <svg viewBox="0 0 500 100" class="chart">
                      <polyline
                         fill="none"
                         stroke="#0074d9"
                         stroke-width="2"
                         points="
                           00,120
                           20,60
                           40,80
                           60,20
                           80,80
                           100,80
                           120,60
                           140,100
                           160,90
                           180,80
                           200, 110
                           220, 10
                           240, 70
                           260, 100
                           280, 100
                           300, 40
                           320, 0
                           340, 100
                           360, 100
                           380, 120
                           400, 60
                           420, 70
                           440, 80
                         "
                       />
                    </svg>
                  </div>
              </div>
              <div class="card">
                <div id="shopping-cart" class="circle">
                  <i class="fas fa-shopping-cart"></i>
                </div>
                <p>150,000 <br> <span>Active Investments</span></p>
                <div>
                  <svg viewBox="0 0 500 100" class="chart">
                    <polyline
                       fill="none"
                       stroke="#0074d9"
                       stroke-width="2"
                       points="
                         00,120
                         20,60
                         40,80
                         60,20
                         80,80
                         100,80
                         120,60
                         140,100
                         160,90
                         180,80
                         200, 110
                         220, 10
                         240, 70
                         260, 100
                         280, 100
                         300, 40
                         320, 0
                         340, 100
                         360, 100
                         380, 120
                         400, 60
                         420, 70
                         440, 80
                       "
                     />
                  </svg>
                </div>
              </div>
              <div class="card">
                <div id="dollar-sign" class="circle">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <p>100,000 <br> <span>Wallet Balance</span></p>
                <div>
                  <svg viewBox="0 0 500 100" class="chart">
                    <polyline
                       fill="none"
                       stroke="#0074d9"
                       stroke-width="2"
                       points="
                         00,120
                         20,60
                         40,80
                         60,20
                         80,80
                         100,80
                         120,60
                         140,100
                         160,90
                         180,80
                         200, 110
                         220, 10
                         240, 70
                         260, 100
                         280, 100
                         300, 40
                         320, 0
                         340, 100
                         360, 100
                         380, 120
                         400, 60
                         420, 70
                         440, 80
                       "
                     />
                  </svg>
                </div>
              </div>
              </div>
            </div> 
              <div class="container" id="timeline">
                <div class="card">
                  <h3>Activity Timeline</h3>
                  <div class="activities">
                    <div id="plus" class="circle">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div class="info">
                      <p>Invested 10,000 to product</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</span>
                    </div>
                  </div>
                  <div class="activities">
                    <div class="circle" id="info-circle">
                      <i class="fas fa-info-circle"></i>
                    </div>
                    <div class="info">
                      <p>Withdrawal 1000 from wallet</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</span>
                    </div>
                  </div>
                  <div class="activities">
                    <div class="circle" id="check-red">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="info">
                      <p>Changed password</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</span>
                    </div>
                  </div>
                  <div class="activities">
                    <div class="circle" id="check-green">
                      <i class="fas fa-check"></i>
                    </div>
                    <div class="info">
                      <p>Logged in from unknown device</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</span>
                    </div>
                  </div>
                  <div class="activities">
                    <div class="circle" id="plus">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div class="info">
                      <p>Logged in from unknown device</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</span>
                    </div>
                  </div>
                  <div class="activities">
                    <div class="circle" id="plus-orange">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div class="info">
                      <p>Logged in from unknown device</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="cards">
                  <div class="card">
                    <img src="Rectangle.png" alt="">
                   
                    <div>
                    </div>
                </div>
                <div class="card">
                  <div id="shopping-cart" class="circle">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                  <p>150,000 <br> <span>Active Investments</span></p>
                  <div>
                  </div>
                </div>
                <div class="card">
                  <div id="dollar-sign" class="circle">
                    <i class="fas fa-dollar-sign"></i>
                  </div>
                  <p>100,000 <br> <span>Wallet Balance</span></p>
                  <div>
                  </div>
                </div>
                </div>
              </div> 
          </div>
      </div>
</div>
</template>

 <script>
    export default {
        name: 'Dasboard', 
        mounted(){
              let menuBtn = document.getElementById('sidebar_btn')
        let dashboardCards = document.getElementById('dashboard-cards');
        menuBtn.addEventListener('click', () => {
          dashboardCards.classList.toggle('dashboard-cards')
          // alert('hello')
        })
        }
    }
 </script>

 <style lang="scss" scoped>
body{
    margin: 0;
    padding: 0;
  }
  
  header{
    position: fixed;
    background: #ffffff;
    border-bottom: 1px solid #00000022;
    padding: 20px;
    width: 100%;
    height: 30px;
    z-index: 1;
  }
  .logo img{
    width: 120px;
    height: 40px;
  }
  .user{
      text-align: center;
  }
  .user img{
    border-radius: 50%;
    background-color: #17D65EB5;
  }
  .user h4{
    color: #2C2C2C !important;
  }
  .logout-btn, .notification-btn{
    padding: 5px;
    text-decoration: none;
    float: right;
    margin-top: -35px;
    margin-right: 40px;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 600;
    color: #606060;
    transition: 0.5s;
  }
  .notification-btn{
      margin-right: 80px;
  }
  .logout-btn:hover, .notification-btn:hover{
      color: #17D65EB5;
  }
  
  .sidebar {
    background: #ffffff;
    border: 1px solid #00000022;
    margin-top: 70px;
    padding-top: 30px;
    position: fixed;
    left: 0;
    width: 250px;
    height: 100%;
    transition: 0.5s;
    transition-property: left;
  }
  
  .sidebar .profile_image{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-bottom: 10px;
  }
  
  .sidebar h4{
    color: #ccc;
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  .sidebar a{
    color: #2C2C2C;
    display: block;
    width: 100%;
    line-height: 60px;
    text-decoration: none;
    padding-left: 40px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;
  }
  
  .sidebar a:hover{
    background: #17D65EB5;
    color: #ffffff;
  }
  
  .sidebar i{
    padding-right: 10px;
  }
  
  label #sidebar_btn{
    z-index: 1;
    position: fixed;
    cursor: pointer;
    left: 230px;
    font-size: 20px;
    margin: 5px 0;
    transition: 0.5s;
  }
  
  label #sidebar_btn:hover{
    color: #17D65EB5;
    
  }
  
  #check:checked ~ .sidebar{
    left: -190px;
  }
  
  #check:checked ~ .sidebar a span{
    display: none;
  }
  
  #check:checked ~ .sidebar a{
    font-size: 20px;
    margin-left: 170px;
    width: 80px;
  }
  
  .content{
    margin-top: 0;
    transition: 0.5s;
  }
 
  
  #check:checked ~ .content{
    margin-left: 60px;
  }
  
  #check{
    display: none;
  }
  .active{
      background-color: #17D65EB5;
  }
  .cards{
    display: grid;
 grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
 grid-gap: 15px;
 }
 .card{
  box-shadow: 0px 3px 1px #ddd, 0 10px 10px #ddd;
  /* box-shadow: 0 10px 10px -5px #777; */
  margin: 10px 0;
    padding: 20px;
 }
 .circle{
  border-radius: 50%;
   width: 40px;
   height: 40px;
 }
 #signal{
  background-color: #E6E6FA;
 }
 #shopping-cart{
   background-color: #e3fbe3;
 }
 #dollar-sign{
   background-color: #ffcccb;
 }
 #dollar-sign i{
  padding: 13px 2px 0 15px;
 }
 .card i{
   font-size: 1rem;
   padding: 13px 2px 0 10px;
 }
 .card p{
   font-weight: bold;
   font-size: 1.2rem;
 }
 .card p span{
   font-weight: lighter;
   font-size: 0.8rem;
 }
 .row{
  position: absolute;
  left: 255px;
  top: 75px;
  right: 0;
  padding: 10px;
}
#plus{
  background-color: blue;
}
#info-circle, #plus-orange{
  background-color: orange;
}
#check-red{
  background-color: red;
}
#check-green{
  background-color: green;
}
   .dashboard-cards{
     left: 55px;
   }
   /* .chart {
    background: white;
    width: 500px;
    height: 100px;
    border-left: 1px dotted #555;
    border-bottom: 1px dotted #555;
    padding: 20px 20px 20px 0;
  } */
.activities{
  display: flex;
  padding: 10px;
}

.activities .circle i{
  padding: 13px 2px 0 12px;
  color: #fff;
  font: 1rem;
}
.info{
  display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: -15px;
    margin-left: 25px;   
}
.info p{
 margin-bottom: 3px;
}
#timeline{
  margin: 20px;
}

 

 
  @media(max-width:650px){
    .activities{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .info{
      text-align: center;
    }
  }


 </style>
 