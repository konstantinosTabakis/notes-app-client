<template>
  <header>
      <div class="header">
            <div class="logo">
              <router-link to='/'>
              <!-- <img src="../assets/img/notes.png" alt=""> -->
              </router-link>
            </div>
            <ul class="nav">
                
                <li> <router-link to='/'> Home</router-link></li>
                <li> <router-link to='/new'> New Note</router-link></li>
                <li> <router-link to='/notes'> Notes</router-link></li>
                <!-- <li> <router-link to='/locations'> Locations</router-link></li> -->  
                 
                 
            </ul>

        </div>

  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>