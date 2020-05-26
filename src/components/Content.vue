<template>
  <div id="content">  
    <div id="brg-content">
      <div>
        <h2>THE WORLD’S BEST CROWD FUNDING PLATFORM</h2>
        <p>We connect investors to sustainable farm products with higher results</p>
      </div>
        
     
      
    </div>
  </div>
</template>

<script>
export default {}

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
 
}
 
</style>
