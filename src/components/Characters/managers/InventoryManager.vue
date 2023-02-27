<script setup lang="ts">
  import SearchBar from '@/components/SearchBar.vue';
  import { useCharacter } from '@/stores/CharacterService';
  import upArrow from '@/assets/svg/up-arrow.svg'
  import downArrow from '@/assets/svg/down-arrow.svg'

  import Item from '@/components/Characters/primarybox/inventory/InventoryItem.vue'
</script>

<script type="module" lang="ts">

  export default {
    props: {
        base: String
    },
    data() {
        return {
            characterStore: useCharacter(),
            inventory:useCharacter().character.inventory,
            optionArray:['armor','potion','ring','rod','scroll','staff','wand','weapon','wondrous','other'],
            addItemOpen:true,
            equipmentOpen:true,
            backpackOpen:false,
            almsBoxOpen:false,
        };
    },
    methods: {
      focusButtons(event:any){
        const hasFocus = (elem:any) => {
          return elem === document.activeElement
        }
        if(![...event.target.classList].includes('focus')){
          event.target.classList.add('focus')
        }else{
          event.target.classList.remove('focus')
        }
      },
      click(e:any,item:any){
        console.log(this.inventory.equipment);
        item.active = item.active === 1 ? 0 : 1;
        console.log(this.inventory.equipment);

      },
      openDetails(event:any,item:any){
        event.target.innerText == '^' ? event.target.innerText = 'v' : event.target.innerText = '^';

      }
    },
    computed: {
      isActive(){
      }
    },
    created() {
    },
    mounted() {
    },
    components: { SearchBar }
}

</script>

<template>
  <div class="wrap">
    <div class="title">Inventory Manager</div>
    <div class="section">
      <div style="margin-bottom: 12px;" class="total">
        <span> Add Item </span>
        <span v-if="addItemOpen" class="coin-icon-small" @click="addItemOpen = !addItemOpen"><img :src="upArrow" alt="up arrow"></span>
        <span v-else class="coin-icon-small" @click="addItemOpen = !addItemOpen"><img :src="downArrow" alt="down arrow"></span> 
      </div>
      <div v-if="addItemOpen">
        <span class="upper title">Filter</span>
        <SearchBar  @search-term="" icon small/>
        <div class="search-options">
          <button 
            v-for="option in optionArray"
            @click="focusButtons"
            class="button-option">
            {{option}}
          </button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="total">
        <span>Equipment (<span>{{ inventory.equipment.length }}</span>) </span>
        <span v-if="equipmentOpen" class="coin-icon-small" @click="equipmentOpen = !equipmentOpen"><img :src="upArrow" alt="up arrow"></span>
        <span v-else class="coin-icon-small" @click="equipmentOpen = !equipmentOpen"><img :src="downArrow" alt="down arrow"></span> 
      </div>
      <div v-if="equipmentOpen">
        <div v-for="item in inventory.equipment">
          <Item :name="item.name"
          :subname="item.subname"
          :active="item.active"
          :weight="item.weight"
          :quantity="item.quantity"
          :cost="item.cost"
          :desc="item.description"
          :rarity="item.rarity"
          location="equipment"/>

        </div>
      </div>
    </div>

    <div v-if="inventory.hasBackpack" class="section">
      <div class="total">
        <span>Backpack (<span>{{ inventory.backpack.length }}</span>)</span>
        <span v-if="backpackOpen" class="coin-icon-small" @click="backpackOpen = !backpackOpen"><img :src="upArrow" alt="up arrow"></span>
        <span v-else class="coin-icon-small" @click="backpackOpen = !backpackOpen"><img :src="downArrow" alt="down arrow"></span> 
      </div>
      <div v-if="backpackOpen">
        <div v-for="item in inventory.backpack">
          <Item :name="item.name"
          :subname="item.subname"
          :active="item.active"
          :weight="item.weight"
          :quantity="item.quantity"
          :cost="item.cost"
          :desc="item.description"
          :rarity="item.rarity"
          location="backpack"/>
        </div>
      </div>
    </div>

    <div v-if="inventory.hasAlmsBoxk" class="section">
      <div class="total">
        <span>Alms Box (<span>{{ inventory.almsBox.length }}</span>)</span>
        <span v-if="almsBoxOpen" class="coin-icon-small" @click="almsBoxOpen = !almsBoxOpen"><img :src="upArrow" alt="up arrow"></span>
        <span v-else class="coin-icon-small" @click="almsBoxOpen = !almsBoxOpen"><img :src="downArrow" alt="down arrow"></span> 
      </div>
      <div v-if="almsBoxOpen">
        <div v-for="item in inventory.almsBox">
          <Item :name="item.name"
          :subname="item.subname"
          :active="item.active"
          :weight="item.weight"
          :quantity="item.quantity"
          :cost="item.cost"
          :desc="item.description"
          :rarity="item.rarity"
          location="almsBox"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    background-color: white;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .title{
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 1rem;
  }
  .upper{
    padding-top: 12px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .section{
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    padding: 8px 0;
  }

  .total{
    border-left: 3px solid red;
    background-color: #F1F1F1;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    line-height: -1.2;
  }

  .coin-icon-small{
    height:20px;
    width:20px;
  }

  .coin-icon-big{
    height:40px;
    width:40px;
  }

  .search-options{
    margin: 12px auto;
    margin-bottom: 0;
    width: 97%;
    display: grid;
    grid-template-columns: repeat(5,calc(25rem / 5 - 12px));
    grid-gap:5px 5px;
  }
  .button-option{
    all:unset;
    border: 1px solid #c53131;
    background-color: white;
    text-align:center;
    cursor:pointer;
    font-size: 12px;
    padding: 2px 0;
  }

  .button-option.focus{
    color: white;
    background-color: #c53131;
  }

  .checkbox{
    height: 20px;
    margin: 2px;
    margin-right: 3px;
    min-width: 20px;
    width: 20px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    box-shadow: inset 0 0 4px 0 #d8d8d8;
  }
  .used:before{
    content: "";
    display: block;
    height: 10px;
    margin-top: 4px;
    width: 10px;
    background: red;
    margin: 4px auto 0;
  }

  .item-container{
    display: grid;
    grid-template-columns: 50px 14.5rem 3.5rem auto;
    grid-gap: 5px;
    height: 1.5rem;
  }

  .move-button{
    padding: 0 5px;
    padding-top: 3px;
    height: min-content;
    border:1px solid #c53131;
    border-radius: 0.200rem;
    color: #c53131;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    text-align: center;

    cursor: pointer;
  }

  .details{
    border: 1px solid gray;
    text-align: center;
    border-radius: .200rem;
    padding-top: 2px;
    height: 19px;
    cursor: pointer;
  }

</style>