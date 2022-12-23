<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        title:'Hey i\'m the note\'s title',
        content:'Hey i\'m the note\'s content',
        noteOpenned:false,
      }
    },

    methods:{
      
    },

    computed:{

    },

    mounted(){
    }


  }

</script>

<template>
  <div :class="{'note-container':noteOpenned,'note-container note-open-note':!noteOpenned}">
    <NoteVue :open="noteOpenned" :title="title" @noteContent="(emitContent:string)=>content=emitContent" :content="content"></NoteVue>
  </div>
</template>

<style scoped>
  .note-container{
    /* z-index: -1; */
    overflow-x: hidden;
    position: absolute;
    right: 0;
    top: 8rem;
    width: 20rem;
    height: 45rem;
  }

  .note-open-note{
    display: none;
  }

</style>