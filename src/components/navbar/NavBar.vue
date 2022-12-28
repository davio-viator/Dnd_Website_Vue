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
        
        console.log(this.$refs[e.target.id][0].classList);
      }
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
  <div class="wrapper">
    navbar works !!!
    <div class="tab-container">
      
      <div :ref="'item'+i" v-for="(tab,i) in tabs" :id="'item'+i" @click="test" class="tab sub" :class="{'tab-active':i==0}">
        {{ tab }}
      </div>

    </div>
  </div>
</template>

<style scoped>

  .wrapper{
    padding: 0 12px;
  }
  
  .tab-container{
    display: flex;
    justify-content: space-between;
  }
  
  .tab{
    cursor: pointer;
    padding: 8px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    background-color: transparent;
  }

  .tab-active{
    border: 1px solid red;
    border-width: 0 0 5px 0;
    /* border-bottom-color:red; */
  }
  
  .sub{
    background-color: white;
    border-radius: 0.375rem;
  }

  .sub.tab-active {
    background-color: red;
    color: white;
    border: none;
  }



</style>