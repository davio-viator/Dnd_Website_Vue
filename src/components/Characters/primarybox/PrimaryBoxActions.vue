<script setup lang="ts">
  import NavBar from '../../navbar/NavBar.vue';
  import AttackTab from './actions/AttackTab.vue';
  import ActionTab from './actions/ActionTab.vue';
  import BonusActionTab from './actions/BonusActionTab.vue';
  import ReactionTab from './actions/ReactionTab.vue';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String,
    },

    data(){
      return{
        tabs:['all','attack','action','bonus action','reaction','other','limited use'],
        selected:''
      }
    },

    methods:{
      
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
  <div class="wrap">
    <NavBar @selected="(emitSelected) => selected= emitSelected" :tabs="tabs" sub/>
      <div class="content">
        <AttackTab :focused="selected == 'attack'" v-if="selected == 'attack' || selected == 'all'"/>
        <ActionTab v-if="selected == 'action' || selected == 'all'" :focused="selected == 'action'"/>
        <BonusActionTab v-if="selected == 'bonus action' || selected == 'all'"/>
        <ReactionTab v-if="selected == 'reaction' || selected == 'all'"/>
      </div>
  </div>
</template>

<style scoped>
  .content{
    margin-top: 12px;
    height: 575px;
    overflow: auto;
    overflow-x: hidden;
  }
</style>