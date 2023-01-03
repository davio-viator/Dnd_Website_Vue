<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    emits:['used'],

    props:{
      text:String,
      title:String,
      amount:{
        type:Number,
        default:0
      },
      frequency:String,
      used:{
        type:Number,
        default:0
      },
      bold:Boolean
    },

    data(){
      return{
        size:new Array(this.amount)
      }
    },

    methods:{
      click(e:any){
        let input:any = e.target
        if([...input.classList].includes('used')) {
          this.$emit('used',this.used-1)
        }
        else {
          this.$emit('used',this.used+1)
        }
      }
    },

    computed:{
      parsedText(){
        return this.text
      },
      parsedTextBold(){
        return this.text
      }
    },

    created(){

    },

    mounted(){

    }


  }

</script>

<template>
  <div class="action-text-container">
    <h3 class="title">{{ title }}</h3>

    <p v-if="!bold" v-html="parsedText" class="text"></p>
    <div v-if="bold" class="border-left-thick">{{ parsedTextBold }}</div>
    <div v-if="amount > 0" class="input-container">
      <div v-for="(elem,i) in size">
        <div @click="click" role="checkbox" :class="{'used':i+1<= used}" aria-checked="false" aria-label="use" class="checkbox"></div>
      </div>
      <span class="frequency">/ {{ frequency }}</span>
    </div>

  </div>
</template>

<style scoped>
  .action-text-container{
    margin: 12px 0;
  }

  .title{
    font-weight: bold;
    text-transform: capitalize;
  }

  .text{
    line-height: 1.5;
  }

  .border-left-thick{
    margin-top: 4px;
    border-left: 5px solid lightgray;
    padding-left: 5px;
    margin-left: 12px;
    line-height: 1.5;
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

.input-container{
  margin-top: 5px;
  display: flex;
}

.frequency{
  text-transform: capitalize;
  margin-left: 4px;
}

</style>