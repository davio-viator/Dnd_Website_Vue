<script lang="ts">

  export default {
    
    props:{
      name:String,
      rank:String,
      imgSrc:String,
      keywords:{
        type:Array<String>,
        default:[]
      }
    },

    data(){
      return{

      }
    },

    methods:{

    },

    computed:{
      imageUrl(){
        return this.imgSrc?this.imgSrc:"https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg"
        // return this.imgSrc?this.imgSrc:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimage.net%2Fwp-content%2Fuploads%2F2018%2F06%2Fno-image-png-2.png&f=1&nofb=1&ipt=5efc1082b4d3b4624e2c64d5849209f3449af89891f9e87ac32e95e55c6b4243&ipo=images"
        return this.imgSrc?this.imgSrc:"https://cdn.discordapp.com/attachments/321941760911736833/1024787851688288316/telecharge_4.gif"
      },
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
    <div class="bubble">
      <div>toughness: <span></span></div>
    </div>
    <div class="footer">
      <ul class="footer-ul">
        <li class="card-text footer-text" v-if="(keywords.length>=1 && keywords[0]!=='')" v-for="keyword in keywords">{{keyword}}</li>
        <li v-else class="card-text footer-text">Card's attribute</li>
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
    text-transform: capitalize;
    min-width: 15rem;
    max-width: 25rem;
    height: 3.5rem;
    border-radius: 5px 5px 0 0;
    background-color: black;
    display: flex;
    justify-content:space-between;
    padding: 4px 15px;
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
    height:29.5rem;
    border-style: solid;
    border-width: 0px 5px;
    border-color: black;
  }

  .bubble{
    display: none;
  }
  .footer{
    min-width: 15rem;
    max-width: 25rem;
    height: 4.5rem;
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
    /* text-transform: capitalize; */
    display: inline-block;
    font-size: 25px;
    margin: 5px 8px;
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