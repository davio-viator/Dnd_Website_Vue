<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      icon:{
        type:String,
        default:'X'
      },
      name:{
        type:String,
        default:'Mace'
      },
      attack_type:{
        type:String,
        default:'Melee Weapon'
      },
      range:{
        type:String,
        default:'5ft'
      },
      range_type:{
        type:String,
        default:'reach'
      },
      hit_dc:{
        type:String,
        default:4
      },
      damage:{
        type:String,
        default:'1d6+1'
      },
      damage_icon:{
        type:String,
        default:'X'
      },
      notes:{
        type:String,
        default:'Simple'
      }
    },

    data(){
      return{
        
      }
    },

    methods:{
      
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
  <div class="attack-container ">
    <img class="attack-icon" :src="icon">
    <div class="attack-name">{{name}}<span class="attack-type">{{attack_type}}</span></div>
    <div class="attack-range">{{range}}<span class="attack-type">{{range_type}}</span></div>
    <div v-if="!hit_dc.includes('|')" class="clickable hit">{{hit_dc}}</div>
    <div v-else class="hit flex"><span class="mod">{{ hit_dc.split('|')[1].toUpperCase() }}</span><span style="font-size:15px;font-weight:bold">{{ hit_dc.split('|')[0] }}</span></div>
    <div class="clickable damage">{{damage}}<img :src="damage_icon" class="attack-icon"></div>
    <div class="notes">{{notes}}</div>
  </div>
</template>

<style scoped>
  .title{
    border-bottom: 1px solid #eaeaea;
  }

  .flex{
    display:flex;
    flex-direction: column;
    text-align: center;
    padding-right: 2.5rem;
  }

  .mod{
    color:gray;
    font-size: 15px;
  }

  .title-text{
    text-transform: uppercase;
    color:red;
    font-weight: bold;
  }

  .attack-header{
    font-family:'Roboto, sans-serif';
    margin-top: 1rem;
    padding: 0 25px;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 16px 14rem 6.75rem 6.375rem 10rem 17.5rem;
  }

  .attack-container{
    margin: 18px 0;
    display: grid;
    grid-template-columns: 40px 14rem 6.75rem 6.375rem 10rem 17.5rem;
  }

  .attack-icon{
    margin-left: 5px;
    height: 15px;
    width: 15px;
  }

  .attack-name{
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }

  .attack-range{
    display: flex;
    flex-direction: column;
    text-transform: capitalize;

  }

  .attack-type{
    color:#838383;
    font-size:12px;
  }

  .clickable{
    border: 1px solid gray;
    border-radius: 0.375rem;
    cursor: pointer;
    text-align: center;
  }

  .clickable:hover{
    background-color: #ced9e0;
  }

  .clickable.hit{
    padding: 8px;
    width: 3.9rem;
    font-size: 20px;
    font-weight: bold;
  }

  .clickable.damage{
    padding: 8px;
    min-width: 4.2rem;
    max-width: max-content;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
  }

  .notes{
    margin: auto 0;
    color:#838383;
  }
</style>