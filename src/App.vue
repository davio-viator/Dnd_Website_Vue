<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import HelloWorld from './components/HelloWorld.vue'

  import TheHeaderVue from '@/components/TheHeader.vue';
  import TheFooterVue from '@/components/TheFooter.vue';
  import CardVue from './components/Cards/Card.vue';
  import NoteVue from './components/Notes/Note.vue';

  import { faker } from '@faker-js/faker';
  import { useDisplayNote } from '@/stores/counter';
  import { useCharacter } from '@/stores/CharacterService';
  import { updateNote } from '@/services/NoteService';

  import { useUser, useCounterStore } from '@/stores/UserStore'

  import DefaultUser from '@/assets/images/default-avatar.png'
</script>

<script type="module" lang="ts">
  export default {
    data() {
      return {
        userStore:useUser(),
        loggedIn:false,
        links:[
          {name:'Cards',url:'/',routeName:'cards'}, 
          {name:'card creator',url:'/create-card',routeName:'card creator'},
          {name:'action creator',url:'/create-action',routeName:'action creator'},
          {name:'Characters',url:'/characters',routeName:'characters list'},
        ],
        content:{
          ecology:"",
          strength:"",
          weakness:"",
        },
        cardArray:[],
        cardTitle:'Hey i\'m the note\'s title',
        cardContent:useDisplayNote().getContent(),
        cardId:0,
        noteOpenned:false
      }
    }

    ,methods:{
      async handleUpdate(content:string){
        const userId = parseInt(localStorage.getItem("user_id") as string)
        await updateNote({userId,cardId:this.cardId,content:content})
        this.cardContent = content
      }
    }

    ,created(){

    },
    mounted(){
     
    }
    ,computed:{
      noteIsOpen(){
        let status = useDisplayNote()
        return status.noteDisplayed
      },
      noteTitle(){
        let title = useDisplayNote().title
        this.cardTitle = title;
        return this.cardTitle
      },
      linksArray(){
        if(this.userStore.loggedIn){
          this.links.forEach((element,index) => {                     
          })
          for (let i = 0; i < this.links.length; i++) {
            if(this.links[i].name === 'Login' || this.links[i].name === 'Registration'){
              this.links.splice(i,1)
              i--
            }            
          }

          this.links.push(
            {name:'Logout',url:'/logout',routeName:'logout-view'}
          )
        }
        else {
          for (let i = 0; i < this.links.length; i++) {
            if(this.links[i].name === 'Logout'){
              this.links.splice(i,1)
              i--
            }            
          }

          this.links.push(
            {name:'Login',url:'/login',routeName:'login-view'},
            {name:'Registration',url:'/registration',routeName:'registration-view'},
          )
        }
        return this.links
      },
      currentNoteContent(){
        return useDisplayNote().getContent() ||  'Hey i\'m the note\'s content'
      }
    }
  }

</script>

<template>  
    <div class="wrapper">     
      <TheHeaderVue 
        firstname="" 
        lastname="" 
        username="" 
        :iconSrc="DefaultUser"
        :urls=linksArray>
      </TheHeaderVue>
      <RouterView @currentCardId="(currentCardId:number)=> cardId = currentCardId" />
      <div ref="note" :class="{'note-container note-open-note':noteIsOpen,'note-container note-close-note':!noteIsOpen}">
        <NoteVue 
          :open="noteIsOpen" 
          :title="noteTitle" 
          @noteContent="async (emitContent)=>handleUpdate(emitContent)" 
          :content="currentNoteContent">
        </NoteVue>
      </div>
       <!--
        <div :class="{'card-container note-open-card':noteIsOpen,'card-container note-close-card':!noteIsOpen}">
          <CardVue @noteDisplayed="(emitNoteDisplayed)=>noteOpenned = emitNoteDisplayed" @noteTitle="(emitNoteTitle)=>cardTitle = emitNoteTitle" v-for="card in cardArray" :name="card['name']" :rank="card['rank']" :keywords="card['keywords']" :content="card['content']" :src="card['url']" :edition="!Boolean" ></CardVue>
        </div>
      -->
    </div>
    <TheFooterVue/>

</template>

<style scoped>
  .wrapper{
    font-family: 'Roboto', sans-serif;
    min-height: calc(100vh - 4rem);
  }
  .note-container{
    /* z-index: -1; */
    overflow-x: hidden;
    position: fixed;
    right: 0;
    top: 8rem;
    width: 20rem;
    height: 45rem;
    transition: all ease-in-out 0.5s;
    transform: translateX(100%);
    opacity: 0;
  }

  .note-open-note{
    /* animation-name:note-opens; */
    transform: translateX(0);
    opacity: 1;
  }
</style>
