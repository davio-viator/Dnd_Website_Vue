<script lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        pageIsSmall:false
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
  <footer :class="{'small-page':pageIsSmall}">
    <div >Hey i'm a footer</div>
  </footer>
</template>

<style scoped>
  footer{
    /* position: absolute; */
    /* bottom:auto; */
    margin-top: 2rem;
    text-align: center;
    color: black;
    background-color: #eeeef0;
    line-height: 1.5;
    height: 2rem;
    width: 100%;
  }
  
  .small-page{
    bottom: 0;
  }
</style>