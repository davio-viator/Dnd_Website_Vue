<script setup lang="ts">
  import CharacterCardVue from '@/components/Characters/CharacterCard.vue';
  import { faker } from '@faker-js/faker';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        characters:[]
      }
    },

    methods:{
      initCharacters(){
        let iteration:Number = parseInt(faker.random.numeric(2));
        iteration = 15;
        for (let i = 0; i < iteration; i++) {
          let firstname:String = faker.name.firstName();
          let lastname:String = faker.name.lastName();
          let level:Number = this.randomMinMax(1,20);
          let race:String = faker.helpers.arrayElement(['Aarakocra ','Dragonborn ','Hill Dwarf ','Mountain Dwarf ','High Elf ','Wood Elf ','Eladrin Elf (Variant) ',
          'Air Genasi ','Earth Genasi ','Fire Genasi ','Water Genasi ','Rock Gnome ','Deep Gnome','Goliath','Half-Elf','Half-Orc','Lightfoot Halfling','Stout Halfling',
          'Human','Variant Human','Tiefling','Vairiant Aasimar' ])
          let cclass:String = "cleric"
          let school:String = faker.helpers.arrayElement(['Death Domain','nature Domain','knowledge Domain','light Domain','war Domain','trickery Domain',
          'life Domain','forge Domain','tempest Domain','grave Domain','arcana Domain','peace Domain','order Domain','twilight Domain',''])
          let character = {
            firstname:firstname,
            lastname:lastname,
            level:level,
            race:race,
            class:cclass,
            school:school
          }
          this.characters.push(character)
        }
      },
      randomMinMax(min:number,max:number){
        let random:number = min + Math.random() * (max + 1 - min);
        return Math.floor(random)
      }
    },

    computed:{

    },

    created(){
      this.initCharacters()
    },
    
    mounted(){
    
    }


  }

</script>

<template>
  <div class="container">
    <div class="header">
      <span>
        <h1 style="font-weight: bold;font-size: 38px;margin-top: 2rem;">My characters</h1>
        <h2 style="margin-top: 0.6rem;">Slots: <span style="color:blue">{{characters.length}}</span></h2>
      </span>
      <span><button>Create a new character</button></span>
    </div>
    <div class="character-container">
        <CharacterCardVue 
          v-for="char in characters"
          :firstname="char.firstname"  
          :lastname="char.lastname"
          :level="char.level"
          :race="char.race"
          :class="char.class"
          :school="char.school"
          >
        </CharacterCardVue>
      </div>
  </div>
</template>

<style scoped>
  .container{
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }

  .character-container{
    display: grid;
    grid-template-columns: auto auto auto;
    margin-bottom: 1rem;
  }

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button{
    height: 3rem;
    margin-top: auto;
    background-color: blue;
    border-color: darkblue;
    color: white;
    cursor: pointer;
    font-size: 28px;
    border-radius: 0.375rem;
    margin-top:2.6rem
  }
</style>