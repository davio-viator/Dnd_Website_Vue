<script setup lang="ts">
  import CharacterCardVue from '@/components/Characters/CharacterCard.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import { faker } from '@faker-js/faker';
  import { useUser } from '@/stores/UserStore';
</script>

<script type="module" lang="ts">

interface Character {
  id:number,
  firstname: string,
  lastname: string,
  level: number,
  race: string,
  classes: string[],
  classLevel?:number[] ,
  school?: string[],
  characterIcon?:string
}

  export default {
    data() {
        return {
            characters: ([] as Character[]),
            options:[
              {
                value:"A",
                text:"Created: Newest"
              },
              {
                value:"B",
                text:"Created: Oldest",
                default:true
              },
              {
                value:"C",
                text:"name: A to Z"
              },
              {
                value:"D",
                text:"name: Z to A"
              },
              {
                value:"E",
                text:"Level: Low to High"
              },
              {
                value:"F",
                text:"Level: High to Low"
              },
              {
                value:"G",
                text:"Modifed: Latest"
              },
              {
                value:"H",
                text:"Modified: Oldest"
              },

            ],
            userStore:useUser()
        };
    },
    methods: {
        initCharacters() {
            let iteration: Number = parseInt(faker.random.numeric(2));
            iteration = 15;
            for (let i = 0; i < iteration; i++) {
                let firstname: string = faker.name.firstName();
                let lastname: string = faker.name.lastName();
                let level: number = this.randomMinMax(1, 20);
                let race: string = faker.helpers.arrayElement(["Aarakocra ", "Dragonborn ", "Hill Dwarf ", "Mountain Dwarf ", "High Elf ", "Wood Elf ", "Eladrin Elf (Variant) ", "Air Genasi ", "Earth Genasi ", "Fire Genasi ", "Water Genasi ", "Rock Gnome ", "Deep Gnome", "Goliath", "Half-Elf", "Half-Orc", "Lightfoot Halfling", "Stout Halfling", "Human", "Variant Human", "Tiefling", "Vairiant Aasimar"]);
                let cclass: string[] = ["cleric"];
                let school: string[] = [faker.helpers.arrayElement(["Death Domain", "nature Domain", "knowledge Domain", "light Domain", "war Domain", "trickery Domain", "life Domain", "forge Domain", "tempest Domain", "grave Domain", "arcana Domain", "peace Domain", "order Domain", "twilight Domain", ""])];
                let character:Character = {
                    id:i,
                    firstname: firstname,
                    lastname: lastname,
                    level: level,
                    race: race,
                    classes: cclass,
                    school: school
                };
                this.characters.push(character);
            }
        },
        async initCharactersDb(){
          const response = await this.userStore.getCharacters()
          try {
            const characters = response.data.characters
            this.characters = characters
          } catch (error) {
            
          }
        },
        randomMinMax(min: number, max: number) {
            let random: number = min + Math.random() * (max + 1 - min);
            return Math.floor(random);
        }
    },
    computed: {},
    created() {
        // this.initCharacters();
        this.initCharactersDb();
    },
    mounted() {
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
    <SearchBar order :options="options"></SearchBar>
    <div class="character-container">
        <CharacterCardVue 
          v-for="(char,index) in characters"
          :key="index"
          :firstname="char['firstname']"  
          :lastname="char['lastname']"
          :level="char['level']"
          :race="char['race']"
          :classes="char['classes']"
          :school="char['school'] "
          :id="char['id']"
          :classLevel="char['classLevel']"
          :characterIcon="char['characterIcon']"
          >
        </CharacterCardVue>
      </div>
  </div>
</template>

<style scoped>
  .container{
    max-width: 90vw;
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