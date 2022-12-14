<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      title:String,
      content:String
    },

    data(){
      return{
        defaultNotes:"Ranni the Witch is an NPC in Elden Ring. Ranni the Witch is a mysterious figure who first introduces herself as Renna. Upon meeting her again at Three Sisters, she reveals her true name and eventually will recruit you into her servitude, sending you off in search of a hidden treasure. This page covers vital information for Ranni's questline for Elden Ring.\n\n \" I am the witch Ranni. I stole Death long ago, and search now for the dark path.\"\n\nRanni is the daughter of Radagon and Rennala. After Radagon departed and became the consort to Marika, Ranni and her siblings were raised to demigod status, as they were now the children of the consort of a goddess. She appears to have some involvement in The Night of Black Knives, where Black Knife Assassins stole a shard of the Rune of Death and murdered Godwyn, the Golden. At the same time, Ranni seems to have lost her original body and now resides as spirit inhabiting an artificial doll body, seeking to restore her Empyrean status with the aid of blacksmith Iji, preceptor Seluvis, wolf warrior Blaidd, and the Tarnished."
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
  <div class="container">
    <div class="title">
      <h2>{{title || "Notes: Ranni the Witch"}}</h2>
    </div>
    <div class="content-container">
      <textarea class="content" name="content">{{content || defaultNotes.trim()}}</textarea>
    </div>
  </div>
</template>

<style scoped>
  .container{
    z-index: 10;
    background-color: yellow;
    height: 45rem;
    width: 20rem;
    border-radius: 0.375rem 0 0 0.375rem ;
    padding: 12px;
    position: absolute;
    top: 8rem;
    right: 0;
  }
  
  .title{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin: 0.5rem 0;
    min-height: min-content;
    max-height: 5rem;
    background-color: blue;
    overflow-y: hidden;
    text-overflow: ellipsis;
  }

  .content-container{
    background-color: red;
    min-height: calc(100% - 5rem - 12px);
    max-height: calc(100% - 2.5rem - 12px);
  }

  .content{
    /* size: auto; */
    /* resize: none; */

    padding: 5px;

    border:none;

    height: 100%;
    min-height: 100%;
    max-height: 100%;

    min-width: 100%;
    max-width: 100%;
    width: 100%;

    font-family: inherit;
    font-size: 17px;
  }

  .content::-webkit-scrollbar{
    width: 5px;
  }

  .content::-webkit-scrollbar-track{
    background-color: #fdf5e0;
    /* border: 3px solid rgba(223, 174, 85, 0.425);  creates padding around scroll thumb */
  }
  .content::-webkit-scrollbar-thumb {
    background-color: black;    /* color of the scroll thumb */
    border-radius: 0.375rem;       /* roundness of the scroll thumb */
    border: 3px solid black;  /* creates padding around scroll thumb */
  }

</style>