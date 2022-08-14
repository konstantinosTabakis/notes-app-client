<template>
  <div class="card"> 
      <h1 class="title">{{post.title}}</h1>
      <div class="date">{{date}}</div>
      <p class="desc" v-html="desc">  </p>
      <div class="img-border">
        
        <img :src="getImgUrl(post.topic)" alt="">
      </div>
  </div>
</template>



<script>
export default {
  props:['post'],
  data(){
    return{
        desc:'',
        date:''
    }
  },
  mounted(){
      this.desc= this.post.description
      this.date=this.post.created_at.split("T")[0]
  },
  methods:{
    getImgUrl(topic){
      const img=topic.toLowerCase()
      // console.log(`../assets/img/${img}.png`);
      try{
        return require(`../assets/img/${img}.png`)

      }catch(e){
        console.log(e);
        return false
      }
    }
  }

}
</script>

<style>

</style>