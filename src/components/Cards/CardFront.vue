<script lang="ts">

  export default {
    
    props:{
      name:String,
      rank:String,
      imgSrc:String,
      keywords:Array<String>
    },

    data(){
      return{

      }
    },

    methods:{

    },

    computed:{
      imageUrl(){
        return this.imgSrc?this.imgSrc:"https://cdn.discordapp.com/attachments/321941760911736833/1024787851688288316/telecharge_4.gif"
      }
    },

    mounted(){
      // console.log(this.keywords)
    }


  }

</script>

<template>
  <div class="container">
    <div class="header">
      <span class="card-text">{{name || "Card's name"}}</span>
      <span class="card-text">{{rank || "Card's rank"}}</span>
    </div>
    <!--<div class="content">-->
      <img class="card-image" :src=imageUrl alt="card's image">
    <!--</div>-->
    <div class="footer">
      <ul class="footer-ul">
        <li class="card-text footer-text" v-if="keywords?.length>0" v-for="keyword in keywords">{{keyword}}</li>
        <li v-else class="card-text">Card's attribute</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .container{
    min-width: 15rem;
    max-width: 25rem;
    display: flex;
    flex-direction: column !important;
  }
  .header{
    min-width: 15rem;
    max-width: 25rem;
    height: 2.5rem;
    border-radius: 5px 5px 0 0;
    background-color: black;
    display: flex;
    justify-content:space-between;
    padding: 4px;
    font-size: 28px;
  }
  .card-text{
    color:white;
    margin-top: auto;
    margin-bottom: auto;
  }

  .content{
    min-width: 15rem;
    max-width: 25rem;
  }
  .card-image{
    object-fit: fill;
    width: 25rem;
    height:32rem;
  }
  .footer{
    min-width: 15rem;
    max-width: 25rem;
    height: 3rem;
    border-radius: 0 0 5px 5px;
    background-color: black;
    display: flex;
    justify-content:space-evenly;
    padding: 5px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }
  .footer-ul{
    list-style: none;
    padding-inline-start: 0px;
  }
  .footer-text{
    display: inline-block;
    font-size: 25px;
    margin: 5px;
  }
  .footer::-webkit-scrollbar {
  width: 3px;
  }
  .footer::-webkit-scrollbar-track{
    background-color: maroon;
    background-color: black;
  }
  .footer::-webkit-scrollbar-thumb {
  background-color: white;    /* color of the scroll thumb */
  border-radius: 0.375rem;       /* roundness of the scroll thumb */
  border: 3px solid rgba(223, 174, 85, 0.425);  /* creates padding around scroll thumb */
}
</style>