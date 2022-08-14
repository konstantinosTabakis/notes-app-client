<template>
    <div class="container">

    <div class="home-wrapper">
      <div class="flex-home">
          <div class="hero-text">
            <div class="text">Note down something new that you learn each day</div> 
            <div class="btns">
                 <router-link   to='/new' > <button class="btn btn1">New note</button> </router-link>  
                 <router-link to='/notes'> <button class="btn btn2"   >See notes</button> </router-link>
            </div>
            <!-- <div class="icons">
              <div class="itm"><img src="../assets/img/html.png" alt=""></div>
              <div class="itm"><img src="../assets/img/css.png" alt=""></div>
              <div class="itm"><img src="../assets/img/javascript.png" alt=""></div>
              <div class="itm"><img src="../assets/img/react.png" alt=""></div>
              <div class="itm"><img src="../assets/img/vue.png" alt=""></div>
              <div class="itm"><img src="../assets/img/nodejs.png" alt=""></div>
              <div class="itm"><img src="../assets/img/sql.png" alt=""></div>
              <div class="itm"><img src="../assets/img/python.png" alt=""></div>
              <div class="itm"><img src="../assets/img/java.png" alt=""></div>
            </div> -->

          </div>
          <div class="hero-img-wrapper">
              <img class="hero-img" src="../assets/img/programmer.png" alt="">
          </div>
      </div>
  </div>
    

  </div>
</template>

<script>


// import Home from './components/Home.vue'
// import NewNoteForm from './components/NewNoteForm.vue'
export default {
    components:{
     
  },
  data(){
    return{
      home:true,
      New: false,
      all: false
    }
  },
  mounted(){
    
  },
  methods:{
      
  },
  
}
</script>

<style>

</style>