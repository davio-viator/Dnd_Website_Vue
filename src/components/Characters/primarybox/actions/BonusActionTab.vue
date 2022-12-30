<script setup lang="ts">
  import Attack from './Attack.vue';
  import Action from './Action.vue';

</script>

<script type="module" lang="ts">

  export default {
    props: {
        base: String
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
    created() {
    },
    mounted() {
    },
}

</script>

<template>
  <div class="container">
    <div class="title"><span class="title-text">bonus actions</span></div>
    <div class="attack-header"><span> </span><span>attack</span><span>range</span><span>hit / dc</span><span>damage</span><span>notes</span></div>
    <Attack v-for="i in ['a']" 
        icon="O"
        name="spiritual weapon"
        attack_type="melee weapon"
        range="60ft"
        range_type="reach"
        hit_dc="+6"
        damage="1d8+3"
        damage_icon="/"
        notes="D: 1m, V/S"
      />

      <Action
        bold
        title="Actions in Combat"
        text="Two-Weapon Fighting"        
      />

      <Action v-for="elem in [{title:'Spells',text:['Spiritual Weapon (2nd)']}]"
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