<script setup lang="ts">
  import SearchBar from '@/components/SearchBar.vue';
  import { useCharacter } from '@/stores/CharacterService';
  import copperSrc from '@/assets/svg/copper.svg'
  import silverSrc from '@/assets/svg/silver.svg'
  import electrumSrc from '@/assets/svg/electrum.svg'
  import goldSrc from '@/assets/svg/gold.svg'
  import platinumSrc from '@/assets/svg/platinum.svg'
  import NavBar from '@/components/navbar/NavBar.vue';
</script>

<script type="module" lang="ts">

  export default {
    props: {
        base: String
    },
    data() {
        return {
            character: useCharacter().character,
            copper: useCharacter().character.inventory.copper,
            silver: useCharacter().character.inventory.silver,
            electrum: useCharacter().character.inventory.electrum,
            gold: useCharacter().character.inventory.gold,
            platinum: useCharacter().character.inventory.platinum,
            tabs:['All','equipment']
        };
    },
    methods: {},
    computed: {},
    created() {
      if(this.character.inventory.hasBackpack)this.tabs.push('backpack')
      if(this.character.inventory.hasAlmsBox)this.tabs.push('alms box')
      this.tabs.push('attunement')
      this.tabs.push('other possessions')
    },
    mounted() {
      // if(this.character.inventory.hasBackpack)this.tabs.push('backpack')
      // if(this.character.inventory.hasAlmsBox)this.tabs.push('alms box')
      // this.tabs.push('attunement')
      // this.tabs.push('other possessions')
    },
}

</script>

<template>
  <div class="wrap">
    <div class="money-container">
      <div class="money-wrapper" title="platinum pieces" v-if="platinum>0">{{ platinum }} <img class="money-icon" :src="platinumSrc" alt="platinum icon"></div>
      <div class="money-wrapper" title="gold pieces" v-if="gold>0">{{ gold }} <img class="money-icon" :src="goldSrc" alt="gold icon"></div>
      <div class="money-wrapper" title="electrum pieces" v-if="electrum>0">{{ electrum }} <img class="money-icon" :src="electrumSrc" alt="electrum icon"></div>
      <div class="money-wrapper" title="silver pieces" v-if="silver>0">{{ silver }} <img class="money-icon" :src="silverSrc" alt="silver icon"></div>
      <div class="money-wrapper" title="copper pieces" v-if="copper>0">{{ copper }} <img class="money-icon" :src="copperSrc" alt="copper icon"></div>
    </div>
    <div class="searchbar-container">
      <SearchBar icon small/>
    </div>
    <NavBar sub :tabs="tabs"/>
    <div class="content">
        <div>qestgh</div>
    </div>
  </div>
</template>

<style scoped>
  .wrap{
    padding: 0 12px;
  }

  .money-container{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .money-wrapper{
    display: flex;
    line-height: 1.5;
    font-weight: bold;
    padding: 0 3px
  }

  .money-icon{
    height: 20px;
    width: 20px;
  }

  .searchbar-container{
    margin: auto;
    width: 80%;
  }

  .content{
    height: 520px;
    overflow-y: auto;
  }
</style>