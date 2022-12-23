<script setup lang="ts">
  import CardVue from '../components/Cards/Card.vue';
  import loadingAnime from '../assets/loadingdndbeyond.svg'

  import { faker } from '@faker-js/faker';

  import { getAllCards, createCard } from '../services/CardService.js' 
  import { computed } from '@vue/reactivity';
</script>

<script module lang="ts">
  export default{
    data() {
      return {
        cardArray:[],
        numberOfCard:0,
        cardTitle:'Hey i\'m the note\'s title',
        cardContent:'Hey i\'m the note\'s content',
        noteOpenned:false,
        pending:true
      }
    }
    ,methods:{
      init(){
        let iteration:Number = parseInt(faker.random.numeric(2));
        iteration = 3;
        for (let i = 0; i < iteration; i++) {
          let name:String = faker.name.fullName();
          let rank:String = faker.helpers.arrayElement(["∅","F","E-","E","E+","D-","D","D+","C-","C","C+","B-","B","B+","A-","A","A+","A++","S","S+"])
          let keywords:String[] = faker.random.words(5).split(' ')
          let content:Object = {ecology:faker.lorem.text(),strength:faker.random.words(8).replaceAll(' ',','),weakness:faker.random.words(8).replaceAll(' ',',')}
          let url:String = faker.helpers.arrayElement(
            [
              "https://cdn.discordapp.com/attachments/321941760911736833/1027320724806975589/Jack-O27_Childish_Jump.webp",
              "https://cdn.discordapp.com/attachments/321941760911736833/1024787851688288316/telecharge_4.gif",
              "https://cdn.mos.cms.futurecdn.net/XmsMoNkgpTcnP4DjQzKMhJ.jpg",
              "https://i.pinimg.com/originals/ba/a2/7a/baa27a58a45aae675b89c5b8b59b056c.png",
              "https://pbs.twimg.com/media/FeCLslBUYAEdkRV?format=jpg&name=4096x4096",
              "https://pbs.twimg.com/media/FeEhntpVIAAAs7t?format=jpg&name=medium"
            ]
          )
        let Card:Array = []
          Card['name'] = name
          Card['rank'] = rank
          Card['keywords'] = keywords
          Card['content'] = content
          Card['url'] = url
          this.cardArray.push(Card)
        }
      },
      addCardServer(){
        let iteration:Number = parseInt(faker.random.numeric(2));
        iteration = 1;
        let name:String = faker.name.fullName();
        let rank:String = faker.helpers.arrayElement(["∅","F","E-","E","E+","D-","D","D+","C-","C","C+","B-","B","B+","A-","A","A+","A++","S","S+"])
        let keywords:String[] = faker.random.words(5).split(' ')
        let content:Object = {ecology:faker.lorem.text(),strength:faker.random.words(8).replaceAll(' ',','),weakness:faker.random.words(8).replaceAll(' ',',')}
        let url:String = faker.helpers.arrayElement(
          [
            "https://cdn.discordapp.com/attachments/321941760911736833/1027320724806975589/Jack-O27_Childish_Jump.webp",
            "https://cdn.discordapp.com/attachments/321941760911736833/1024787851688288316/telecharge_4.gif",
            "https://cdn.mos.cms.futurecdn.net/XmsMoNkgpTcnP4DjQzKMhJ.jpg",
            "https://i.pinimg.com/originals/ba/a2/7a/baa27a58a45aae675b89c5b8b59b056c.png",
            "https://pbs.twimg.com/media/FeCLslBUYAEdkRV?format=jpg&name=4096x4096",
            "https://pbs.twimg.com/media/FeEhntpVIAAAs7t?format=jpg&name=medium"
          ]
        )
        let card = {
          name:name,
          rank:rank,
          keywords:keywords,
          content:content,
          url:url
        }
        createCard(card)
        this.initDb()
        console.log(this.cardArray);
      },
      initDb(){
        getAllCards()
        .then(res => {
          this.cardArray = res
          this.pending = false
        })
      },
      fillDb(){
        for (let i = 0; i < 25; i++) {
          this.addCardServer()          
        }
      }
    }

    ,created(){
      this.initDb()
    }
    ,computed:{
      numberOfCards(){
        return this.numberOfCard
      }
    }
  }
</script>

<template>
  <button @click="fillDb">Add card to the database ? currently {{cardArray.length}} cards</button>
  <div v-if="!pending">
    <div :class="{'card-container note-open-card':noteOpenned,'card-container note-close-card':!noteOpenned}">
      <CardVue @noteDisplayed="(emitNoteDisplayed)=>noteOpenned = emitNoteDisplayed" @noteTitle="(emitNoteTitle)=>cardTitle = emitNoteTitle" v-for="card in cardArray" :name="card['name']" :rank="card['rank']" :keywords="card['keywords']" :content="card['content']" :src="card['url']" :edition="!Boolean" ></CardVue>
    </div>
  </div>
  <div v-else class="loading">
    <img class="loading-image" :src="loadingAnime" alt="loading animation">
    <p >Loading ...</p>
  </div>
</template>

<style>
  .card-container{
    display: grid;
    grid-template-columns: auto auto auto;
    transition: all ease-in-out 0.5s;
    margin-right: 20rem;
  }

  .note-close-card{
    margin-right: 0;
  }

  .loading{
    text-align: center;
    font-size: 42px;
    margin: auto;
    margin-top: 20vh;
    width: 20vw;
  }

</style>