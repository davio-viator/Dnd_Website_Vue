<script setup lang="ts">
  import CardFrontVue from './CardFront.vue';
  import CardBackVue from './CardBack.vue';
  import CardEditorVue from '../Editor/CardEditor.vue'

  import { useDisplayNote } from '@/stores/counter';

  import { getAllUsers, createUser } from '@/services/UserService'
</script>

<script type="module" lang="ts">

  export default {
    
    emits:['noteDisplayed','noteTitle'],

    props:{
      keywords:Array<string>,
      name:String,
      rank:String,
      src:String,
      content:{
        type:Object,
        default:{ecology:'',strength:'',weakness:''}
      },
      edition:Boolean,
      ecology:String,
      strength:String,
      weakness:String,
      id:Number
    },

    data(){
      return{
        flipped:false,
        noteDisplayed:useDisplayNote(),
        users:[]
      }
    },

    methods:{
      displayNotes(){
        this.noteDisplayed.displayNote()
        this.noteDisplayed.setTitle(this.name)
        this.$emit('noteDisplayed',this.noteDisplayed.noteDisplayed)
        this.$emit('noteTitle',this.name)
      },
      getUsers(){
        getAllUsers().then((res: any[]) => {
        res.map((item: any)=>this.users.push((item as never)))
      })
      },
      getNote(){

      }
    },

    computed:{

    },

    mounted(){ 

    },
    created(){
      // this.getUsers()
    }


  }

</script>

<template>
  <div class="parent-container">
    <div>
      <CardFrontVue v-if="!flipped" :name=name :rank=rank :imgSrc=src :keywords=keywords></CardFrontVue>
      <CardBackVue v-else :content=content :ecology=ecology :strength=strength :weakness=weakness></CardBackVue>
      <div class="button-container">
        <input @click="flipped = !flipped" class="button" type="button" value="Flip">
        <input v-if="!edition" @click="displayNotes" class="button" type="button" value="Notes">
      </div>
    </div>
    <div v-if="edition" class="editor-container">
      <CardEditorVue
        @imgSrc="(url:any)=>(src as string) = url" 
        @name="(emitName:any)=> (name as string) = emitName"
        @rank="(emitRank:any)=> (rank as string) = emitRank"
        @keywords="(emitKeywords:any)=> (keywords as string[]) = emitKeywords.split(',')"
        @ecology="(emitEcology:any)=>(ecology as any) = emitEcology"
        @strength="(emitStrength:any)=>(strength as string) = emitStrength"
        @weakness="(emitWeakness:any)=>(weakness as string) = emitWeakness"
      ></CardEditorVue>
    </div>
  </div>
</template>

<style scoped>
  .parent-container{
    margin-top:50px;
    display: flex;
    flex-direction: row !important;
    justify-content: space-evenly !important;
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

</style>