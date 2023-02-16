<script setup lang="ts">
  import SearchBar from '@/components/SearchBar.vue';
  import Spell from './spells/Spell.vue';

  import { useCharacter } from '@/stores/CharacterService';
</script>

<script type="module" lang="ts">

  export default {
    props: {
        base: String
    },
    data() {
        return {
            spells: useCharacter().character.spells,
            searchTerm:''
        };
    },
    methods: {
      click(e:any,level:any){
        let input:any = e.target
        if([...input.classList].includes('used')) {
          this.spells[level].used--
        }
        else {
          this.spells[level].used++
        }
      },
      obeySearch(spell:any){
        return spell.name.includes(this.searchTerm) ||
        spell.class.includes(this.searchTerm) ||
        spell.time.includes(this.searchTerm) ||
        spell.notes.includes(this.searchTerm) ||
        spell.effect.includes(this.searchTerm) ||
        spell.range.includes(this.searchTerm) ||
        spell.hit_dc.includes(this.searchTerm) 
        
      }
    },
    computed: {
      sortedSpells(){
        let sortedArray = []
        for(const item in this.spells){
          sortedArray.push([item,this.spells[item]])
        }
        
        sortedArray.sort(function(a,b) {
          if(a[0] === 'Cantrip') return -1
          return a[0] - a [1]
        })
        const sorted = {}
        sortedArray.forEach(item => {
          (sorted as any)[item[0]] = item[1]
        })
        return sorted
      }
    },
    created() {
    },
    mounted() {
    },
}

</script>

<template>
  <div class="wrap">
    <div class="header">
      <div class="casting-info"><span>+3</span> <span class="subtitle">Modifier</span></div>
      <div class="casting-info"><span>+6</span> <span class="subtitle">Spell Attack</span></div>
      <div class="casting-info"><span>14</span> <span class="subtitle">save dc</span></div>
    </div>

    <div class="searchbar-container">
      <SearchBar @search-term="(emitSearchTerm) => searchTerm = emitSearchTerm " small icon placeholder="Search Spell Names, Casting Times, Damage Types, Conditions or Tags"/>
      </div>
    <div class="content">

      <div class="spell-container" v-for="level in Object.keys(sortedSpells) ">
        <div class="title-container">
          <span class="title">{{ level }}</span> 
          <span v-if="spells[level].slots > 1">
            <div class="input-container">
              <div v-for="(elem,i) in spells[level].slots ">
                <div @click="click($event,level)" role="checkbox" :class="{'used':i+1<= spells[level].used}" aria-checked="false" aria-label="use" class="checkbox"></div>
              </div>
              <span style="text-transform:uppercase;font-weight: bold;padding-top: 3px;">slots</span>
            </div>
          </span>
        </div>

        <div class="spell-header">
          <span></span>
          <span>name</span>
          <span>time</span>
          <span>range</span>
          <span>hit/dc</span>
          <span>effect</span>
          <span>notes</span>
        </div>
        <template v-for="spell in spells[level].spells" >
          <Spell 
          @used-spell="(emitUsedSpell) => spells[level].used += emitUsedSpell"
            v-if="obeySearch(spell)"
            :frequency="spell.frequency"
            :name="spell.name"
            :class="spell.class"
            :time="spell.time"
            :range="parseInt(spell.range)"
            :hit_dc="spell.hit_dc"
            :effect="spell.damage"
            :damage_type="spell.damage_type"
            :notes="spell.notes"
            :concentration="spell.concentration"
            :ritual="spell.ritual"
            :slots="spells[level].slots"
            :used="spells[level].used"
            :level="level"
          />
        </template>
      </div>

    </div>

  </div>
</template>

<style scoped>

  .wrap{
    padding: 0 12px;
  }
  .header{
    text-align: center;
    margin-left: 35%;
    margin-right: 35%;
    display: flex;
    justify-content: space-between;
  }

  .searchbar-container{

  }

  .content{
    margin-top: 12px;
    height: 545px;
    padding-right: 12px;
    overflow-y: auto;
    /* overflow-x: hidden; */
  }

  .title-container{
    display: flex;
    justify-content: space-between;
  }

  .title{
    margin: 8px 0;
    color:red;
    text-transform: uppercase;
    font-weight: bold;
  }

  .input-container{
    margin-top: 5px;
    display: flex;
  }

  .casting-info{
    display: flex;
    flex-direction: column;
  }

  .subtitle{
    color:#A2A2A2;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }

  .searchbar-container{
    margin: auto;
    width: 85%;
  }

  .spell-header{
    text-transform: uppercase;
    margin-bottom: 12px;
    display: grid;
    grid-template-columns:2.5rem 14rem 4rem 4rem 5rem 8em 8rem;
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
</style>