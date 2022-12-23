<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import HelloWorld from './components/HelloWorld.vue'

  import TheHeaderVue from '@/components/TheHeader.vue';
  import TheFooterVue from '@/components/TheFooter.vue';
  import CardVue from './components/Cards/Card.vue';
  import NoteVue from './components/Notes/Note.vue';

  import { faker } from '@faker-js/faker';
  import { useDisplayNote } from '@/stores/counter';

</script>

<script type="module" lang="ts">
  export default {
    data() {
      return {
        links:[{name:'Home',url:'home'},{name:'About',url:'about'},{name:'Cards',url:'/'}, {name:'card creator',url:'create-card'},{name:'Characters',url:'characters'}],
        content:{
          ecology:"",
          strength:"",
          weakness:"",
        },
        cardArray:[],
        cardTitle:'Hey i\'m the note\'s title',
        cardContent:'Hey i\'m the note\'s content',
        noteOpenned:false,
      }
    }

    ,methods:{

    }

    ,created(){

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
        :urls=links>
      </TheHeaderVue>
      <RouterView />
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

  /* .card-container{
    display: grid;
    grid-template-columns: auto auto auto;
  }
  
  .note-open-card{
    margin-right: 20rem;

    animation-name:note-open;
    animation-duration:0.5s;
    animation-timing-function: ease-in-out;
  }

  .note-close-card{
    animation-name:note-close;
    animation-duration:0.5s;
    animation-timing-function: ease-in-out;
  }

  @keyframes note-open {
    0%   {
      margin-right: 0;
    }
    100% {
      margin-right: 20rem;
    }
  }

  @keyframes note-close {
    0%   {
      margin-right: 20rem;
    }
    100% {
      margin-right: 0;
    }
  } 
  */


  /* header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  } */
</style>
