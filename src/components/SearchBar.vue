<script setup lang="ts">
import type { placeholder } from '@babel/types';
import { getRef, setRef  } from '@/services/Utils';

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      order:Boolean,
      icon:Boolean,
      placeholder:String,
      options:Array,
      small:Boolean
    },
    emits:['orderSort','searchTerm'],

    data(){
      return{
        sortOrder:'',
        used:false
      }
    },

    methods:{
      clearInput(){
        this.$emit('searchTerm','')
        setRef('input','value','',this.$refs)

        this.used = false
      },
      emitSearchTerm(event:any){
        this.$emit('searchTerm',event.target.value);
        this.used = event.target.value.length>0;
      }
    },

    computed:{
      placeholderCalc(){
        if(!this.placeholder) {
          return "Search term here"
        }
        return this.placeholder;
      }
    },

    created(){
      this.options?.forEach((item:any)=>{
        item.default? this.sortOrder = item.value:null
      })
    },
    mounted(){
    }


  }

</script>

<template>
  <div class="wrapper">
    <div style="position: relative;">
      <div v-if="icon" :class="{'small':small}" class="search-icon"></div>
      <div v-if="used" @click="clearInput" class="clear">clear x</div>
      <div :class="{'small':small}" class="input-container">
        <input ref="input" :class="{'small':small}" @keyup="emitSearchTerm" class="searchbar" type="text" name="searchbar" id="searchbar" :placeholder="placeholderCalc">
        <select 
          v-if="order" class="selector" 
          v-model="sortOrder" 
          @change="$emit('orderSort',sortOrder)" 
          name="test" 
          id="test">
          <option  v-for="option in options" :value="(option as any).value">{{(option as any).text}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .searchbar{
    height: 3rem;
    width: 100%;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: #0000002d;
    margin: 1rem 0;
    padding-left:2rem;
    font-size: 22px
  }

  .searchbar.small{
    height: 2rem ;
    font-size: 14px;
  }

  .search-icon{
    z-index: 10;
    position: absolute;
    background: transparent 50% url(https://www.dndbeyond.com/Content/Skins/Waterdeep/images/icons/search-grey.svg);
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    top: calc(0.5rem + 20px);
    margin-left: 8px;
  }

  .clear{
    z-index: 10;
    position: absolute;
    top: calc(0.5rem + 15px);
    right: 0;
    margin-right: 12px;
    color: red;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

  }

  .search-icon.small{
    top: calc(0.1rem + 20px) ;
    width: 20px ;
    height: 20px ;
  }

  .selector{
    height: 3rem;
    padding: 10px;
    border-radius: 0.375rem;
    background-color: white;
    border-color: #0000002d;
    margin: 1rem 0;
    margin-left: 1.5rem;
    font-size: 20px;
  }

  .input-container{
    display: flex;
    justify-self: start;
  }

  .input-container.small{
    height: 3rem;
  }
</style>