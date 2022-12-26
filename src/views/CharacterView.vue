<script setup lang="ts">
  import StatBlock from '../components/Characters/CharacterStatBlock.vue'
  import SavingThrows from '../components/Characters/SavingThrowBlock.vue'
  import Sense from '../components/Characters/SensesBlock.vue'
  import Proficiency from '@/components/Characters/ProficiencyBlock.vue';
  import Skill from '@/components/Characters/SkillsBlock.vue'
</script>

<script type="module" lang="ts">

  export default {
    
    props:{

    },

    data(){
      return{
        id:this.$route.params.id,
        blocks:[
          {
            name:'strength',
            modifier:this.randomMinMax(-5,5),
            score:this.randomMinMax(0,20)
          },
          {
            name:'dexterity',
            modifier:this.randomMinMax(-5,5),
            score:this.randomMinMax(0,20)
          },
          {
            name:'constitution',
            modifier:this.randomMinMax(-5,5),
            score:this.randomMinMax(0,20)
          },
          {
            name:'intelligence',
            modifier:this.randomMinMax(-5,5),
            score:this.randomMinMax(0,20)
          },
          {
            name:'wisdom',
            modifier:this.randomMinMax(-5,5),
            score:this.randomMinMax(0,20)
          },
          {
            name:'charisma',
            modifier:this.randomMinMax(-5,5),
            score:this.randomMinMax(0,20)
          },
        ]
      }
    },

    methods:{
      randomMinMax(min: number, max: number) {
        let random: number = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
      }
    },

    computed:{

    },

    created(){

    },

    mounted(){
    }


  }

</script>

<template>
  <div class="container">
    <div class="statblock-container a">
      <StatBlock 
        v-for="i in blocks"
        :name="i.name"
        :modifier="i.modifier"
        :score="i.score"
      />
    </div>
    <div class="passives b">
      <SavingThrows/>
      <Sense/>
      <Proficiency/>
    </div>
    <div class="skill c">
      <Skill/>
    </div>
  </div>
</template>

<style scoped>
  .container{
    margin-top: 2rem;
    min-width: 90vw;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-columns: repeat(4, 24rem);
    grid-template-rows: 150px 15rem 15rem 20rem;
    grid-gap:15px;
    grid-auto-rows: 100px;
    grid-template-areas:
      "a a d d f g"
      "b c e e h h"
      "b c i i i i"
      "b c i i i i";
    align-items: start;
  }

  .statblock-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .passives{
    height: fit-content;
    /* min-width: 100%; */
  }

  .skill{
    height: 100%;
    /* min-width: 100%; */
  }

  .a{grid-area: a;}
  .b{grid-area: b;}
  .c{grid-area: c;}
  .d{grid-area: d;}
  .e{grid-area: e;}
  .f{grid-area: f;}
  .g{grid-area: g;}
  .h{grid-area: h;}
  .i{grid-area: i;}
  


 
</style>