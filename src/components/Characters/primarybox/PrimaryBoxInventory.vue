<script setup lang="ts">
  import SearchBar from '@/components/SearchBar.vue';
  import { useCharacter } from '@/stores/CharacterService';
  import copperSrc from '@/assets/svg/copper.svg'
  import silverSrc from '@/assets/svg/silver.svg'
  import electrumSrc from '@/assets/svg/electrum.svg'
  import goldSrc from '@/assets/svg/gold.svg'
  import platinumSrc from '@/assets/svg/platinum.svg'
  
  import NavBar from '@/components/navbar/NavBar.vue';
  import Item from '@/components/Characters/primarybox/inventory/Item.vue'
</script>

<script type="module" lang="ts">

  export default {
    props: {
        base: String
    },
    data() {
        return {
            character: useCharacter().character,
            characterStore:useCharacter(),
            copper: useCharacter().character.inventory.copper,
            silver: useCharacter().character.inventory.silver,
            electrum: useCharacter().character.inventory.electrum,
            gold: useCharacter().character.inventory.gold,
            platinum: useCharacter().character.inventory.platinum,
            tabs:['All','equipment'],
            tabSelected:'',
            displayEquipment:true,
            displayAlmsBox:true,
            displayBackpack:true
        };
    },
    methods: {
      openManager(event:any){
        this.characterStore.setManagerCaller('money');
        this.characterStore.displayManager()
      },
      
    },
    computed: {},
    created() {
      if(this.character.inventory.hasAlmsBox)this.tabs.push('alms box')
      if(this.character.inventory.hasBackpack)this.tabs.push('backpack')
      // this.tabs.push('attunement')
      // this.tabs.push('other possessions')
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
    <div class="money-container" data-manager-item="true" @click="openManager">
      <div class="money-wrapper" title="platinum pieces" v-if="platinum>0">{{ platinum }} <img class="money-icon" :src="platinumSrc" alt="platinum icon"></div>
      <div class="money-wrapper" title="gold pieces" v-if="gold>0">{{ gold }} <img class="money-icon" :src="goldSrc" alt="gold icon"></div>
      <div class="money-wrapper" title="electrum pieces" v-if="electrum>0">{{ electrum }} <img class="money-icon" :src="electrumSrc" alt="electrum icon"></div>
      <div class="money-wrapper" title="silver pieces" v-if="silver>0">{{ silver }} <img class="money-icon" :src="silverSrc" alt="silver icon"></div>
      <div class="money-wrapper" title="copper pieces" v-if="copper>0">{{ copper }} <img class="money-icon" :src="copperSrc" alt="copper icon"></div>
    </div>
    <div class="searchbar-container">
      <SearchBar @search-term="" icon small/>
    </div>
    <NavBar @selected="(emitSelected)=>tabSelected = emitSelected" sub :tabs="tabs"/>
      <div class="header">
        <span class="title">active</span>
        <span class="title">name</span>
        <span class="title">weight</span>
        <span class="title">qty</span>
        <span class="title">cost(gp)</span>
        <span class="title">notes</span>
      </div>
    <div class="content">
        <div  style="margin-bottom:2rem" v-if="tabSelected == 'All' || tabSelected == 'equipment'">
          <div class="inventory-info">
            <span class="title">EQUIPMENT<span> ({{ characterStore.getEquipementInventory().length }}) </span></span>  
            <span class="title">{{ characterStore.getItemInventoryWeight('equipment') }} <span style="text-transform:lowercase;color:#A8A8A8">lb</span></span>
          </div>
          <div v-if="displayEquipment">
            <Item v-for="item in characterStore.getEquipementInventory()"
              :name="item.name"
              :subname="item.subname"
              :active="item.active"
              :weight="item.weight"
              :quantity="item.quantity"
              :cost="item.cost"
              :notes="item.notes"
              :location="'equipment'"
            />
          </div>
          <div class="footer">
            <span style="cursor:pointer">+ Add Equipment</span>
            <span v-if="displayEquipment" @click="displayEquipment = !displayEquipment" style="cursor:pointer">Hide Content</span>
            <span v-else @click="displayEquipment = !displayEquipment" style="cursor:pointer">Show Content</span>
          </div>
        </div>

        <div style="margin-bottom:2rem" v-if="tabSelected == 'All' || tabSelected == 'alms box' ">
          <div class="inventory-info">
            <span class="title">ALMS BOX<span> ({{ characterStore.getEquipementAlmsBox().length }}) </span></span>  
            <span class="title">{{ characterStore.getItemInventoryWeight('almsBox') }} <span style="text-transform:lowercase;color:#A8A8A8">lb</span></span>
          </div>
          <div v-if="displayAlmsBox">
            <Item v-for="item in characterStore.getEquipementAlmsBox()"
              :name="item.name"
              :subname="item.subname"
              :active="item.active"
              :weight="item.weight"
              :quantity="item.quantity"
              :cost="item.cost"
              :notes="item.notes"
              :location="'almsBox'"
            />
          </div>
          <div class="footer">
            <span style="cursor:pointer">+ Add Equipment</span>
            <span v-if="displayAlmsBox" @click="displayAlmsBox = !displayAlmsBox" style="cursor:pointer">Hide Content</span>
            <span v-else @click="displayAlmsBox = !displayAlmsBox" style="cursor:pointer">Show Content</span>
          </div>
        </div>

        <div style="margin-bottom:2rem"  v-if="tabSelected == 'All' || tabSelected == 'backpack'">
          <div class="inventory-info">
            <span class="title">BACKPACK<span> ({{ characterStore.getEquipementBackpack().length }}) </span></span>  
            <span class="title">{{ characterStore.getItemInventoryWeight('backpack') }} <span style="text-transform:lowercase;color:#A8A8A8">lb</span></span>
          </div>
          <div v-if="displayBackpack">
            <Item v-for="item in characterStore.getEquipementBackpack()"
              :name="item.name"
              :subname="item.subname"
              :active="item.active"
              :weight="item.weight"
              :quantity="item.quantity"
              :cost="item.cost"
              :notes="item.notes"
              :location="'backpack'"
            />
          </div>
          <div class="footer">
            <span style="cursor:pointer">+ Add Equipment</span>
            <span v-if="displayBackpack" @click="displayBackpack = !displayBackpack" style="cursor:pointer">Hide Content</span>
            <span v-else @click="displayBackpack = !displayBackpack" style="cursor:pointer">Show Content</span>
          </div>
        </div>
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

  .header{
    display: grid;
    grid-template-columns: 4rem 14rem 6rem 4rem 5.5rem auto;
  }

  .title{
    text-transform: uppercase;
    font-weight: bold;
  }

  .content{
    height: 500px;
    overflow-y: auto;
  }

  .inventory-info{
    margin: 0.5rem auto;
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .footer{
    display:flex;
    justify-content:space-between;
    margin-top:1.2rem;
    padding-right: 0.5rem;
  }
  
</style>