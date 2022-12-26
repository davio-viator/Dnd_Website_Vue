<script setup lang="ts">
import type { placeholder } from '@babel/types';


</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      order:Boolean,
      icon:Boolean,
      placeholder:String,
      options:Array
    },
    emits:['orderSort'],

    data(){
      return{
        sortOrder:''
      }
    },

    methods:{
      
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
      console.log(this.placeholder);
      console.log("order: ",this.order,"icon :",this.icon,"placeholder: ",this.placeholder);

    }


  }

</script>

<template>
  <div>SearchBard works</div>
  <div class="wrapper">
    <div style="position: relative;">
      <div v-if="icon" class="search-icon"></div>
      <div class="input-container">
        <input class="searchbar" type="text" name="searchbar" id="searchbar" :placeholder="placeholderCalc">
        <select 
          v-if="order" class="selector" 
          v-model="sortOrder" 
          @change="$emit('orderSort',sortOrder)" 
          name="test" 
          id="test">
          <option  v-for="option in options" :value="option.value">{{option.text}}</option>
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
</style>