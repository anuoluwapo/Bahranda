<template>
  <div id="content">  
    <div id="brg-content">
      <div>
        <h2>THE WORLD’S BEST CROWD FUNDING PLATFORM</h2>
        <p>We connect investors to sustainable farm products with higher results</p>
      </div>
    </div>
    <div id="who-are-we">
      <div class="intro">
        <header>
          <h1>Who are we</h1>
        </header>
        <p class="intro-txt">Bharanda is an agricultural commodity trading platform, that allows for participants and investors interested in Agribusiness but who do not have the time, expertise and full complement of resources, the opportunity to profit through the trading of Agricultural commodities in the local and International markets, and to be stakeholders in Agricultural commodity trading through a collaborative sponsorship effort.</p>
        <p class="intro-txt">With Bharanda, you can work and earn big from agricultural commodities from the comfort of your home or technological device, without having to get your hands dirty.</p>
      </div>
      <div class="workers-img">
        <div class="img-1">
          <img src="../assets/image-20160706-12743-19qcicm.png" alt="workers image">
        </div>
        <div class="img-2">
          <img src="../assets/263aeebdf5741489081171cf8cd20e6d (1).png" alt="workes image">
        </div>
      </div>
    </div>

      <div id="be-a-bahranda">
      <div class="intro">
        <header>
          <h1>Be a Bahranda</h1>
        </header>
        <article>
          <h3>How it works:</h3>
          <p>Investor Creates an account and choose commodities to invest in.</p>
        </article>
        <article>
          <h3>Who do the works:</h3>
          <p>Our team of experts handle the purchasing, processing and trading in the local and International markets.</p>
        </article>
        <article>
          <h3>Get regular updates:</h3>
          <p>During the tenure of investment, the commodity investor receives a contract and Warehouse receipt as well as gets a periodic update In form of text, emails, pictures and videos. The updates will also be available on the profile of the investor on the platform.</p>
        </article>
        <article>
          <h3>Earn your returns:</h3>
          <p>At the completion of the trade cycle, your capital and returns on investment specific to the contracted trade is remitted to the electronic wallet on the platform and can be transferred to a bank account provided by investors or to sponsor another trade for a new trading season.</p>
        </article>
         <div class="read-more-btn">
        <button>Read More About Us</button>
      </div>
      </div>
     
      <div class="workers-img">
        <div class="img-1">
          <img src="../assets/image-20160706-12743-19qcicm.png" alt="workers image">
        </div>
        <div class="img-2">
          <img src="../assets/263aeebdf5741489081171cf8cd20e6d (1).png" alt="workes image">
        </div>
      </div>
    </div>
    <div id="our-statistics">
      <div class="container">
        <h2>Our Statistics</h2>
        <div class="cards">
          <div class="card">
          <i class="fas fa-users"></i>
          <h1>16,000<span>+</span></h1>
          <p>Investors</p>
        </div>
        <div class="card">
          <i class="fas fa-glass-whiskey"></i>
          <h1>800<span>+</span></h1>
          <p>Products</p>
        </div>
        <div class="card">
          <i class="fas fa-money-bill-wave"></i>
          <h1>2,00,0000<span>+</span></h1>
          <p>Investeds</p>
        </div>
        </div>
        </div>  
    </div>
    <div id="available-product">
         <div class="container">
        <h2>Available Products</h2>
        <div class="cards">
          <div class="card">
          <img src="../assets/Rectangle.png" alt="">
           <div class="rate"><span>15%</span><i class="far fa-star"></i> <br>Return P.A</div>
           <h3>Tomatoes</h3>
           <p>A plant to invest in due to the base complia…..</p>
          <div class="wrap">
            <div class="location"><i class="fas fa-map-marker-alt"></i><span>Osun</span></div>
          <div class="in-stock"><i class="far fa-calendar-check"></i><span>In-Stock</span></div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/Rectangle.png" alt="">
          <div class="rate"><span>15%</span><i class="far fa-star"></i> <br>Return P.A</div>
          <h3>Tomatoes</h3>
          <p>A plant to invest in due to the base complia…..</p>
          <div class="wrap">
            <div class="location"><i class="fas fa-map-marker-alt"></i><span>Osun</span></div>
          <div class="in-stock"><i class="far fa-calendar-check"></i><span>In-Stock</span></div>
          </div>
        </div>
        <div class="card">
         <img src="../assets/Rectangle.png" alt="">
         <div class="rate"><span>15%</span><i class="far fa-star"></i> <br>Return P.A</div>
          <h3>Tomatoes</h3>
          <p>A plant to invest in due to the base complia…..</p>
          <div class="wrap">
            <div class="location"><i class="fas fa-map-marker-alt"></i><span>Osun</span></div>
          <div class="in-stock"><i class="far fa-calendar-check"></i><span>In-Stock</span></div>
          </div>
        </div>
        <div class="card">
         <img src="../assets/Rectangle.png" alt="">
          <div class="rate"><span>15%</span><i class="far fa-star"></i> <br>Return P.A</div>
          <h3>Tomatoes</h3>
          <p>A plant to invest in due to the base complia…..</p>
          <div class="wrap">
            <div class="location"><i class="fas fa-map-marker-alt"></i><span>Osun</span></div>
          <div class="in-stock"><i class="far fa-calendar-check"></i><span>In-Stock</span></div>
          </div>
          
        </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
// import Footer from "components/Footer.vue";
export default {
  // components:{
  //   Footer
  // }
}

</script>

<style lang="scss" scoped>
#content{
  background-image: url('../assets/farming.png');
  background-size: cover;
  background-position: center;
  height: 80vh;
  margin: 0 25px 0 -15px;

  #brg-content{
    height: 80vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(0,0,0,0.5);
      color: #17D65E;
      opacity: 1;
      width: 380px;
      height: 40vh;
      text-align: center;
      padding: 20px 0 20px 0;
      h2{
        font-size: 1.3rem;
        line-height: 2rem;
        letter-spacing: 1px;
      }
      p{
        text-align: justify;
        padding:20px;
        font-size: 1.25rem;
        color: rgba(211, 221, 211,1);
      }
    }
    
  }

  #who-are-we, #be-a-bahranda{
    background-color: #ffffff;
    display: flex;
    flex-shrink: 1;
    margin-top: 10px;
    margin-left: -4.8px;
    margin-right: -4.5px;
    .intro{
      margin-left: 30px;
      width: 50%;
      header{
      text-align: center;
      h1{
        font-size: 2rem;
        color: #17D65E;
        }
      }
      p.intro-txt{
        padding: 2px 20px;
        font-size: 1.2rem;
        text-align: justify;
        line-height: 1.5rem;
      }
    }
    .workers-img{
       width: 40%;
       margin: 30px auto 0 auto;
      div{
        width: 20%;
        height: 150px;
        margin-left: 60px;
      }
      img{
        max-width: 100%;
      }
      .img-1{
        position: absolute;
        z-index: 1;
      }
      .img-2{
        position: absolute;
        bottom: -290px;
        left: 850px;
      }
    }
  }
  #be-a-bahranda{
    margin-top: 0;
    padding-top: 5rem;
    .img-2{
        position: absolute;
        top: 1220px;
      }
      article{
         padding: 0 20px;
        h3{
          font-weight: 905;
        }
        p{
          font-size: 1.2rem;
          text-align: justify;
          line-height: 1.5rem;
        }
      }
      .read-more-btn{
        margin: 10px auto;
        max-width: 300px;
        button {
          color: #ffffff;
            font-size: 1rem;
          background-color: #17D65E;
          border: none;
          border-radius: 2px;
          outline: none;
          min-height: 40px;
          &:hover, :focus{
            cursor: pointer;
          
          }
        };
        
       
      }
  }
  #our-statistics, #available-product{
    margin-top: -13px;
    margin-left: -4.8px;
    margin-right: -4.5px;
    padding: 30px;
    background-color: #ffffff;
    .container{
      // margin-top: -5px;
      background-color: #F7F7F7;
       box-shadow: 0px 2px 8px #00000022;
       h2{
         text-align: center;
         font-size: 2rem;
         font-weight: 500;
         letter-spacing: 1px;
         span{
           background-color: red;
           width: 20px;
           height: 10px;
         }
       }
       padding: 30px 50px;
       .cards{
          display: grid;
       grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
       grid-gap: 15px;
       }
       .card{
         -webkit-box-shadow: 0 10px 6px -6px #777;
       -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;
         background-color: #ffffff;
         text-align: center;
        i{
          padding-top: 10px;
          font-size: 2rem;
          color: #17D65E;
        }
        h1{
          color: #17D65E;
          font-size: 1.8rem;
          font-weight: 500;
          span{
            color: #000000;
            font-size: 1.5rem;
          }
         
        }
         p{
           padding-top: 0;
            color: red;
          }
       }
    }
  }
  #available-product{
    img{
      max-width: 100%;
    }
    .rate{
      margin: -12px 0 0 20px;
      border-radius: 4px;
      background-color: #17D65E;
      color: #ffffff;
      max-width: 80px;
    }
    span{
      font-size: 1rem;
    }
    i{
        color: #ffffff !important;
        font-size: 1rem !important;
      }
      .card{
        h3, p{
          text-align: start;
          padding-left: 20px;
          line-height: 6px;
        }
        p{
          line-height: 1rem;
        }
      }
      .wrap{
        div{
          display: inline-block;
          padding: 5px 30px 0 20px;
        }
        .location{
          background-color: #EDEDED;
          padding: 0 30px 0px 10px;
          border-bottom-left-radius: 10px;
          i{
            color: #000000 !important;
            font-size: 1.5rem !important;
          }
          span{
            padding-left: 32px;
          }
        }
        .in-stock{
          background-color: #17D65E;
           padding: 0 30px 0px 10px;
           border-bottom-right-radius: 10px;
           i{
             font-size: 1.5rem !important;
           }
          span{
            color: #ffffff;
            padding-left: 10px;
          }
        }
      }
  }
 
}

@media(max-width:1170px){
    #content{
      #who-are-we, #be-a-bahranda{
        
         .intro{
            width: 80%;
         }
         .workers-img{
            width: 50%;
            margin-top: 50px;
            div{
              width: 50%;
          }
           .img-1, .img-2{
        position: relative;
      }
           .img-2{
        top: 50px;
        left: 0;
      }
        }
      }
    }
 }
 @media(max-width:800px){
    #content{
      #who-are-we, #be-a-bahranda{
        flex-wrap: wrap;
         .intro{
            width: 100%;
         }
         .workers-img{
            width: 100%;
            margin-top: 0;
            div{
              width: 30%;
              display: inline-block;
          }
           .img-1{
        position: relative;
      }
           .img-2{
        position: relative;
        top: 0;
      }
        }
      }
      #be-a-bahranda{
        .workers-img{
          display: none;
        }
      }
    }
     #available-product{
       .wrap{
         div{
           display: block;
           margin-bottom: 10px;
          //  margin-top: 10px;
         }
       }
     }
 }
 
</style>
