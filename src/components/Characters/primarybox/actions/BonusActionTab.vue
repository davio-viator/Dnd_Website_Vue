<script setup lang="ts">
  import Attack from './Attack.vue';
  import Action from './Action.vue';

  import { useCharacter } from '@/stores/CharacterService';
</script>

<script type="module" lang="ts">

  export default {
    props: {
        base: String
    },
    data() {
        return {
          attacks:useCharacter().character.actions.attacks,
          actions:useCharacter().character.actions.action,
          spells:useCharacter().character.spells,
          bonus_actions:[],
          hasAttacks:false,
          hasActions:false,
          isSpellcaster:useCharacter().character.spellcaster,
          spelltextArray:[]
        };
    },
    methods: {},
    computed: {},
    created() {
    },
    mounted() {
      this.attacks.forEach((element: { bonus: any; }) => {
        console.log({name:element['name']},{bonus:element.bonus});
        if (element.bonus){
          this.bonus_actions.push(element as never)
          this.hasAttacks = true
        }
      });
      this.actions.forEach((element: { bonus: any; }) => {
        if (element.bonus) {
          this.bonus_actions.push(element as never)
          this.hasActions = true
        }
      });
      Object.keys(this.spells).forEach((element,index) => {
        this.spells[element].spells.forEach((elem: { bonus: boolean; name: string; }) => {
          if(elem.bonus){
            this.spelltextArray.push((`${elem.name} (${element.split(' ')[0]})` as never))
          }
        })
      });
    },
}

</script>

<template>
  <div class="container">
    <div class="title"><span class="title-text">bonus actions</span></div>
    <div v-if="hasAttacks">
      <div class="attack-header"><span> </span><span>attack</span><span>range</span><span>hit / dc</span><span>damage</span><span>notes</span></div>
      <Attack v-for="attack in bonus_actions" 
        :icon="attack['icon']"
        :name="attack['name']"
        :attack_type="attack['attack_type']"
        :range="attack['range']"
        :range_type="attack['range_type']"
        :hit_dc="attack['hit_dc']+''"
        :damage="attack['damage']"
        :damage_icon="attack['damage_icon']"
        :notes="attack['notes']"
        :damage_type="attack['damage_type']"
        />
    </div>

      <Action
        bold
        title="Actions in Combat"
        text="Two-Weapon Fighting"        
      />

      <Action v-if="isSpellcaster" v-for="elem in [{title:'Spells',text:spelltextArray}]"
        bold
        :title="elem.title"
        :text="elem.text.join(', ')"
      />
  </div>
</template>

<style scoped>

  .title{
    border-bottom: 1px solid #eaeaea;
  }

  .title-text{
    text-transform: uppercase;
    color:red;
    font-weight: bold;
  }

  .container{
    padding: 0 12px;
  }

  .attack-header{
    font-family:'Roboto, sans-serif';
    margin-top: 1rem;
    padding: 0 25px;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 16px 14rem 6.75rem 6.375rem 10rem 17.5rem;
  }

  .border-left-thick{
    border-left: 5px solid lightgray;
    padding-left: 5px;
  }

  .title{
    margin-bottom: 5px;
    font-weight: bold;
  }
</style>