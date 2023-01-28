<script setup lang="ts">
  import { getRef, setRef } from '@/services/Utils';
</script>

<script type="module" lang="ts">

  export default {
    emits:['selected'],
    props:{
      tabs:Array<any>,
      sub:Boolean
    },

    data(){
      return{
        
      }
    },

    methods:{
      checkInput(e:any){
        this.tabs?.forEach((elem,index)=>{
          getRef('item'+index,'classList',this.$refs).remove('tab-active')
        })
        getRef(e.target.id,'classList',this.$refs).add('tab-active')
        this.$emit('selected',getRef(e.target.id,'dataset',this.$refs).name);
      }
    },

    computed:{

    },

    created(){
      
    },

    mounted(){
      this.$emit('selected',(this as any)['tabs'][0])
    }


  }

</script>

<template>
  <div class="nav-bar-wrapper">
    <div class="tab-container" :class="{'sub':sub}">
      
      <div 
        :ref="'item'+i" 
        v-for="(tab,i) in tabs" :id="'item'+i" 
        @click="checkInput" 
        class="tab idle" 
        :class="{'tab-active':i==0,'sub':sub}"
        :data-name="tab">
          {{ tab }}
      </div>

    </div>
  </div>
</template>

<style scoped>

  .nav-bar-wrapper{
    margin-top: 15px;
    padding: 0 12px;
  }
  
  .tab-container{
    display: flex;
    justify-content: start;
  }

  .sub.tab-container{
    display: flex;
    justify-content: start;
  }
  
  .tab{
    cursor: pointer;
    padding: 8px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    background-color: transparent;
    margin: 0 8px;
    text-align: center;
    /* width: 8rem; */
    font-size: 14px;
    border: 1px solid transparent;
    border-width: 0 0 5px 0;
  }

  .tab-active{
    border: 1px solid red;
    border-width: 0 0 5px 0;
    /* border-bottom-color:red; */

  }
  
  .sub{
    /* background-color: white; */
    border-radius: 0.175rem;
    font-size: 14px;
    padding-bottom: 3px;
    width: fit-content;
  }

  .sub.idle{
    background-color: #F2F2F2;
    color: #838383;
    margin: 0 3px;
  }

  .sub.tab-active {
    background-color: red;
    color: white;
    border: none;
  }



</style>