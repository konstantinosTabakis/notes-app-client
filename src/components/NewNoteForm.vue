<template>
  <div class="form">
       
          <h2 class="title">New Note</h2>
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title">
          <label for="topic">Topic</label>
          <select id="topic" v-model="topic">
              <option value="html">Html</option>
              <option value="css">Css</option>
              <option value="javascript">Javascript</option>
              <option value="java">Java</option>
              <option value="sql">Sql</option>
              <option value="nodeJs">Node.js</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="vue">Vue.js</option>
          </select>
          <!-- <label for="impact">Impact</label>
          <select id="impact">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
          <progress value="" max="5"></progress> -->
          <label for="description">Description</label>
          <textarea  id="description" v-model="description" ></textarea>

           <div style="text-align:center;">
               <button class="btn" @click="handleSubmit">Submit</button>
            </div> 
       
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: '',
            topic: '',
            description:''
        }
    },
    methods:{

        handleSubmit(){
             
             let newNote={title: this.title, topic: this.topic, description: this.description}
             newNote.description= newNote.description.replaceAll(`'`,`"`)
             console.log(newNote);
            fetch("https://notes-api-application.herokuapp.com/new", 
            { 
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(newNote)
            }).then( 
                this.handleThen()
            ).catch(e=>{
                console.log(e);
            })
            
    },

    handleThen(){
        console.log('done')
        this.$router.push({ name: 'Home'  })
    }
            
    }
}
</script>

<style>

</style>

 