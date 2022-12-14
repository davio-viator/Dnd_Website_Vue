<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'

import TheHeaderVue from '@/components/TheHeader.vue';
import TheFooterVue from '@/components/TheFooter.vue';
import CardVue from './components/Cards/Card.vue';
import NoteVue from './components/Notes/Note.vue';

import { faker } from '@faker-js/faker';
</script>

<script type="module" lang="ts">
  export default {
    data() {
      return {
        links:[{name:'link a',url:'linkA'},{name:'link b',url:'linkB'}, {name:'link c',url:'linkC'}],
        content:{
          ecology:"",
          strength:"",
          weakness:"",
        },
        cardArray:[]
      }
    }

    ,methods:{
      init(){
        let iteration:Number = parseInt(faker.random.numeric());
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
      }
    }

    ,created(){
      this.init()
    }
  }

</script>

<template>  
  <RouterView />
  <TheHeaderVue 
    firstname="davio" 
    lastname="viator" 
    username="SpiritSonic" 
    iconSrc="https://cdn.discordapp.com/attachments/321941760911736833/1027320724806975589/Jack-O27_Childish_Jump.webp"
    :urls=links>
  </TheHeaderVue>
  <div class="card-container">
    <CardVue v-for="card in cardArray" :name="card['name']" :rank="card['rank']" :keywords="card['keywords']" :content="card['content']" :src="card['url']" :edition="!Boolean" ></CardVue>
  </div>
  <NoteVue></NoteVue>
  <TheFooterVue/>
</template>

<style scoped>

.card-container{
  display: grid;
  grid-template-columns: auto auto auto;
}


header {
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
}
</style>
