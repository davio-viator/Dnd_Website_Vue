<script setup lang="ts">
  import CardFrontVue from './CardFront.vue';
  import CardBackVue from './CardBack.vue';
  import CardEditorVue from '../Editor/CardEditor.vue'

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        flipped:false,
        keywords:["witch","doll","emperyan","cold magic","party animal"],
        name:"Party ranni",
        rank:"A+",
        src:"https://cdn.mos.cms.futurecdn.net/XmsMoNkgpTcnP4DjQzKMhJ.jpg",
        content:{
          ecology:"Hakuna matata mais quel phrase mamgnifique hakune matata quel chant fantastique ces mot signifie que tu vivra ta vie sans aucun souciz philosophie",
          strength:"erthy,qetyhq,etyhqertyh,qszrtjhzs,rthjzsr,tyhszrt,hy",
          weakness:"qsethyq,serthyqs,retyhqertyh,qertyhq,retq,etyuhqet,huyqetyhu,sfgyhs"
        }
      }
    },

    methods:{
      
    },

    computed:{
      test(){
        console.log(this.src);
        return 1
      }
    },

    mounted(){
    }


  }

</script>

<template>
  <div class="parent-container">
    <div class="card-container">
      <CardFrontVue v-if="flipped" :name=name :rank=rank :imgSrc=src :keywords=keywords></CardFrontVue>
      <CardBackVue v-else :content=content></CardBackVue>
      <input @click="flipped = !flipped" class="flip-button" type="button" value="Flip">
    </div>
    <div class="editor-container">
      <CardEditorVue @response="(url:any)=>src = url"></CardEditorVue>
    </div>
  </div>
</template>

<style scoped>
  .parent-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .flip-button{
    margin-top: 20px;
    height: 2em;
    width: 5em;
    background-color: #0d6efd;;
  }
  .card-container{
  }
</style>