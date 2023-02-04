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

  import { useUser, useCounterStore } from '@/stores/UserStore'

</script>

<script type="module" lang="ts">
  export default {
    data() {
      return {
        userStore:useUser(),
        loggedIn:false,
        links:[
          {name:'Home',url:'/home',routeName:'home'},
          {name:'About',url:'/about',routeName:'about'},
          {name:'Cards',url:'/',routeName:'cards'}, 
          {name:'card creator',url:'/create-card',routeName:'card creator'},
          {name:'Characters',url:'/characters',routeName:'characters list'},
        ],
        content:{
          ecology:"",
          strength:"",
          weakness:"",
        },
        cardArray:[],
        cardTitle:'Hey i\'m the note\'s title',
        cardContent:'Hey i\'m the note\'s content',
        noteOpenned:false
      }
    }

    ,methods:{

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
          this.links.push(
            {name:'Logout',url:'/logout',routeName:'none'}
          )
        }
        else {
          this.links.push(
            {name:'Login',url:'/login',routeName:'login-view'},
            {name:'Registration',url:'/registration',routeName:'registration-view'},
          )
        }
        return this.links
      }
    }
  }

</script>

<template>  
    <div class="wrapper">     
      <TheHeaderVue 
        firstname="davio" 
        lastname="viator" 
        username="SpiritSonic" 
        iconSrc="https://cdn.discordapp.com/attachments/321941760911736833/1027320724806975589/Jack-O27_Childish_Jump.webp"
        :urls=linksArray>
      </TheHeaderVue>
      <RouterView/>
      <div ref="note" :class="{'note-container note-open-note':noteIsOpen,'note-container note-close-note':!noteIsOpen}">
        <NoteVue 
          :open="noteIsOpen" 
          :title="noteTitle" 
          @noteContent="(emitContent)=>cardContent=emitContent" 
          :content="cardContent">
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
