<script setup lang="ts">
  import CardFrontVue from './CardFront.vue';
  import CardBackVue from './CardBack.vue';
  import CardEditorVue from '../Editor/CardEditor.vue'

  import { useDisplayNote } from '@/stores/counter';
</script>

<script type="module" lang="ts">

  export default {
    
    emits:['noteDisplayed','noteTitle'],

    props:{
      keywords:Array,
      name:String,
      rank:String,
      src:String,
      content:Object,
      edition:Boolean,
    },

    data(){
      return{
        flipped:false,
        noteDisplayed:useDisplayNote()
        /* 
          content:{
          type:Object,
          default:{ecology:'',strength:'',weakness:''}
      }
        */
        // keywords: "" /* ["witch","doll","emperyan","cold magic","party animal"]*/,
        // name:"" /* "Party ranni" */,
        // rank:"" /* "A+" */,
        // src:"" /* "https://cdn.mos.cms.futurecdn.net/XmsMoNkgpTcnP4DjQzKMhJ.jpg" */,
        // content:{
        //   ecology:"" /* "Hakuna matata mais quel phrase mamgnifique hakune matata quel chant fantastique ces mot signifie que tu vivra ta vie sans aucun souciz philosophie" */,
        //   strength:"" /*  "erthy,qetyhq,etyhqertyh,qszrtjhzs,rthjzsr,tyhszrt,hy" */,
        //   weakness:"" /* "qsethyq,serthyqs,retyhqertyh,qertyhq,retq,etyuhqet,huyqetyhu,sfgyhs" */
        // }
      }
    },

    methods:{
      displayNotes(){
        this.noteDisplayed.displayNote()
        this.$emit('noteDisplayed',this.noteDisplayed.noteDisplayed)
        this.$emit('noteTitle',this.name)
      }
    },

    computed:{
      test(){
        console.log(this.content);
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
      <CardFrontVue v-if="!flipped" :name=name :rank=rank :imgSrc=src :keywords=keywords></CardFrontVue>
      <CardBackVue v-else :content=content></CardBackVue>
      <div class="button-container">
        <input @click="flipped = !flipped" class="button" type="button" value="Flip">
        <input @click="displayNotes" class="button" type="button" value="Notes">
      </div>
    </div>
    <div v-if="edition" class="editor-container">
      <CardEditorVue
        @imgSrc="(url:any)=>src = url" 
        @name="(emitName:any)=> name = emitName"
        @rank="(emitRank:any)=> rank = emitRank"
        @keywords="(emitKeywords:any)=> keywords = emitKeywords.split(',')"
        @ecology="(emitEcology:any)=>content.ecology = emitEcology"
        @strength="(emitStrength:any)=>content.strength = emitStrength"
        @weakness="(emitWeakness:any)=>content.weakness = emitWeakness"
      ></CardEditorVue>
    </div>
  </div>
</template>

<style scoped>
  .parent-container{
    margin-top:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .button{
    padding: 12px;
    margin-top: 20px;
    height: 3em;
    width: 5em;
    font-size: 15px;
    font-weight:bold;
    color:white;
    background-color: #0d6efd;
    border-color: #0d6efd;
    cursor: pointer;
    border-radius: 0.375rem;
  }
  .button:hover{
    background-color: #0b4cad;
    border-color: #0b4cad;
  }

  .button:focus{
    outline-color: #0b4cad;
  }
  
  .button-container{
    display: flex;
    flex-direction: row !important;
    justify-content:space-between;
  }

  .card-container{
  }
</style>