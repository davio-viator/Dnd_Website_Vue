<script setup lang="ts">
  import CardFrontVue from './CardFront.vue';
  import CardBackVue from './CardBack.vue';
  import CardEditorVue from '../Editor/CardEditor.vue'

  import { useDisplayNote } from '@/stores/counter';

  import { getAllUsers, createUser } from '@/services/UserService'
  import { createCard, getUserCardNotes } from '@/services/CardService'
  import { createNote, getNote } from '@/services/NoteService'
</script>

<script type="module" lang="ts">

  export default {
    
    emits:['noteDisplayed','noteTitle','cardId'],

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
      async displayNotes(){
        this.noteDisplayed.displayNote()
        await this.getNote()
        this.noteDisplayed.setTitle(this.name)
        this.$emit('noteDisplayed',this.noteDisplayed.noteDisplayed);
        this.$emit('noteTitle',this.name);
        this.noteDisplayed.setCardId(this.id as number);

      },
      getUsers(){
        getAllUsers().then((res: any[]) => {
        res.map((item: any)=>this.users.push((item as never)))
      })
      },
      async getNote(){
        const currentUserId = localStorage.getItem("user_id") as string
        const currentUser = this.users.filter(item => item["user_id"] == currentUserId)[0]
        const test = await getUserCardNotes(currentUser["user_id"], this.id as number);
        if(typeof test?.message !== typeof undefined){
          const content = 'Hey i\'m the note\'s title'
          const res = await createNote({
            userId:parseInt(currentUserId),
            cardId:(this.id as number),
            title:this.name as string,
            content: content
          })

          this.noteDisplayed.setContent(content);
          this.noteDisplayed.setTitle(this.name);
        }else{
          const note = await getNote(currentUser['user_id'],this.id as number)
          
          this.noteDisplayed.setContent(note.content);
          this.noteDisplayed.setTitle(note.title);
        }
      },
      createCardFn(){
        return createCard({
          name:this.name ?? "no name",
          rank: this.rank ?? "∅",
          keywords: this.keywords as string[],
          content: this.content,
          url:this.src ?? "https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg"
        }).then(() => {
          alert("card created")
          window.location.reload();
        })
        .catch((err) => {
          alert("an error occured while creating the card, please try again")
        })
      }
    },

    computed:{

    },

    mounted(){ 

    },
    created(){
      this.getUsers()
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
      <input @click="createCardFn" class="button" type="button" value="Save">
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