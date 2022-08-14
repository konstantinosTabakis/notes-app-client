<template>
<div>
  <Header/>
  <router-view/>

</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {Header},
  created(){
    fetch('https://notes-api-application.herokuapp.com/notes').then(res=>res.json())
    .then(data=>{
        this.$store.commit('fetchNotes', data.data)
        console.log("fetched");
    })
  }
  
}
</script>

<style>
 
</style>
