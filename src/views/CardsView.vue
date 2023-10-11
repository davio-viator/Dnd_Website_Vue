<script setup lang="ts">
  import CardVue from '../components/Cards/Card.vue';
  import loadingAnime from '../assets/loadingdndbeyond.svg'

  import { faker } from '@faker-js/faker';

  import { getAllCards, createCard } from '@/services/CardService' 
import { debounce, type MonoTypeOperatorFunction, type ObservableInput } from 'rxjs';
</script>

<script type="module" lang="ts">
  type Card = {
    id?:number,
    name:string,
    rank:string,
    keywords:string[],
    content:Object,
    url:string
  }

  export default{
    emits:['currentCardId'],

    data() {
      return {
        cardArray:([] as Card[]),
        numberOfCard:0,
        cardTitle:'Hey i\'m the note\'s title',
        cardContent:'Hey i\'m the note\'s content',
        noteOpenned:false,
        pending:true,
        skip:9,
        take:6,
        currentCardId:0
      }
    }
    ,methods:{
      addCardServer(){
        let iteration:Number = parseInt(faker.random.numeric(2));
        iteration = 1;
        let name:string = faker.name.fullName();
        let rank:string = faker.helpers.arrayElement(["∅","F","E-","E","E+","D-","D","D+","C-","C","C+","B-","B","B+","A-","A","A+","A++","S","S+"])
        let keywords:string[] = faker.random.words(5).split(' ')
        let content:Object = {ecology:faker.lorem.text(),strength:faker.random.words(8).replaceAll(' ',','),weakness:faker.random.words(8).replaceAll(' ',',')}
        let url:string = faker.helpers.arrayElement(
          [
            "https://cdn.discordapp.com/attachments/321941760911736833/1027320724806975589/Jack-O27_Childish_Jump.webp",
            "https://cdn.discordapp.com/attachments/321941760911736833/1024787851688288316/telecharge_4.gif",
            "https://cdn.mos.cms.futurecdn.net/XmsMoNkgpTcnP4DjQzKMhJ.jpg",
            "https://i.pinimg.com/originals/ba/a2/7a/baa27a58a45aae675b89c5b8b59b056c.png",
            "https://pbs.twimg.com/media/FeCLslBUYAEdkRV?format=jpg&name=4096x4096",
            "https://pbs.twimg.com/media/FeEhntpVIAAAs7t?format=jpg&name=medium"
          ]
        )
        let card:Card = {
          name:name,
          rank:rank,
          keywords:keywords,
          content:content,
          url:url
        }
        createCard(card)
        this.initDb()
      },
      initDb(){
        let x = getAllCards(0,9)
        .subscribe({next:(cardArrayForAminCuzHesAnAnnoyingBastardThatPissesMeOff)=>{
            this.cardArray = this.parseCardDb(cardArrayForAminCuzHesAnAnnoyingBastardThatPissesMeOff.data as any[])
            this.pending = false
          },error:(err)=>{
            
          }})
      },
      fillDb(){
        for (let i = 0; i < 25; i++) {
          this.addCardServer()          
        }
      },
      parseCardDb(dbCard:any[]){
        dbCard.forEach(element => {
          element.keywords = (element.keywords as any).split(',')
          element.url = (element as any).card_image
          element.id = element.card_id
          delete (element as any).card_image
          delete (element as any).card_id
        });
        return dbCard;
      },
      handleScroll(event: any){
        let winHeight = window.innerHeight;
        let scroll = event.target.documentElement.scrollTop
        let height = event.target.documentElement.scrollHeight;
        if(Math.ceil(winHeight+scroll) >= height && scroll > 100 ){
          getAllCards(this.skip,this.take)
          .subscribe({next:(cardArrayForAminCuzHesAnAnnoyingBastardThatPissesMeOff)=>{
            const size = (cardArrayForAminCuzHesAnAnnoyingBastardThatPissesMeOff.data.length);
            if(size > 0){
              const newCards:Card[] = this.parseCardDb(cardArrayForAminCuzHesAnAnnoyingBastardThatPissesMeOff.data as any[])
              this.cardArray = [].concat((this.cardArray as never[]),newCards as never[])
              this.pending = false
              this.skip += this.take
            }
          },error:(err)=>{
            console.log(err);
          }})
        }
      },
      emitCardIdFn(id:number){
        this.$emit("currentCardId",id)
      }
    }
    ,created(){

    },
    mounted(){
      this.initDb();
      window.addEventListener('scroll',this.handleScroll);
    },
    beforeUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
    }
    ,computed:{
      numberOfCards(){
        return this.numberOfCard
      }
    }
  }
</script>

<template>
  <button v-if="false" @click="fillDb">Add (+25) cards to the database ? currently {{cardArray.length}} cards</button>
  <div v-if="!pending">
    <div :class="{'card-container note-open-card':noteOpenned,'card-container note-close-card':!noteOpenned}">
      <CardVue 
        v-for="card in cardArray" current
        @noteDisplayed="(emitNoteDisplayed)=>noteOpenned = emitNoteDisplayed" 
        @noteTitle="(emitNoteTitle)=>cardTitle = emitNoteTitle"  
        @cardId="(emitCardId)=>emitCardIdFn(emitCardId)"
        :id="card['id']"
        :name="card['name']" 
        :rank="card['rank']" 
        :keywords="card['keywords']" 
        :content="card['content']" 
        :src="card['url']" 
        :edition="!Boolean" >
      </CardVue>
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