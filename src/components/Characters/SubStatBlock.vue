<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      speed:Boolean,
      title:String,
      content:{
        type:String,
        default:''
      },
      footer:String
    },

    data(){
      return{
        parsedContent:this.content
      }
    },

    methods:{
      
    },

    computed:{

    },

    created(){

    },

    mounted(){
      if(typeof(parseInt(this.parsedContent)) === "number" && !this.content?.includes("ft"))this.parsedContent = '+'+this.parsedContent
    }


  }

</script>

<template>
  <div class="wrapper outer-border">
    <div class="title" :class="{'speed':speed}"><h3>{{title}}</h3></div>
    <div class="bonus"><h2>{{parsedContent}}</h2></div>
    <div class="footer"><h3>{{footer}}</h3></div>
  </div>
</template>

<style scoped>

  .outer-border{
    height: 100%;
    background-image: url('@/assets/svg/sub-stat-border.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    background-position: -0px -2px;
  }

  .wrapper{
    /* background-color: white; */
    width: 48%;
    height:100%;
    border-radius: 0.375rem;
    /* border: 1px solid red; */
  }

  .title{
    font-size: 12px;
    padding-top: 5px;
    text-align: center;
    text-transform: uppercase;
  }

  .bonus{
    text-align: center;
    font-weight: bold;
    font-size: 25px;

    padding-top: 5px;
  }

  .footer{
    padding-top: 0px;
    text-align: center;
    text-transform: uppercase;
  }

  .speed{
    color: gray;
  }


</style>