<script setup lang="ts">

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
      test(e:any){
        this.tabs?.forEach((elem,index)=>{
          this.$refs['item'+index][0].classList.remove(('tab-active'))
        })
        this.$refs[e.target.id][0].classList.add('tab-active')

        this.$emit('selected',this.$refs[e.target.id][0].dataset.name)
      }
    },

    computed:{

    },

    created(){
      
    },

    mounted(){
      this.$emit('selected',this.tabs[0])
    }


  }

</script>

<template>
  <div class="nav-bar-wrapper">
    <div class="tab-container" :class="{'sub':sub}">
      
      <div 
        :ref="'item'+i" 
        v-for="(tab,i) in tabs" :id="'item'+i" 
        @click="test" 
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
    background-color: ;
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
    font-size: 16px;
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