<template>
  <div class="container">
      
      <div class="cards" v-if="filteredNotes">
          <!-- <h1 style="text-align:center">Your Notes</h1> -->
          <div  v-for="post in filteredNotes" :key="post.id">
              <!-- <div class="card">
                  <div class="card-wrapper">
                      
                  </div>
              </div>
              <h1>{{post.title}}</h1> -->
            <Card :post="post"/>
          </div>
      </div>
      <div v-else>
          <h2 style="text-align:center;">No items found</h2>
      </div>
  </div>
</template>

<script>

import Card from '../components/Card.vue'
export default {
    components:{
        Card
    },
    data(){
        return{
             
        }
    },
    mounted(){
       
    },
    computed:{
        filteredNotes(){
            if(this.$store.state.notes.length>0){

                return this.$store.state.notes
            }
            return null
        }
    }
}
</script>

<style>

</style>