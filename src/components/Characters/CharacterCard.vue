<script setup lang="ts">
  
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:{
        type:Array,
        default:''
      },
      firstname:{
        type:String,
        default:'thalok'
      },
      lastname:{
        type:String,
        default:"wyvern heart"
      },
      level:{
        type:Number,
        default:0
      },
      race:{
        type:String,
        default:"Human"
      },
      class:{
        type:String,
        default:"fighter"
      },
      school:{
        type:String,
        default:""
      },
    },

    data(){
      return{
        iconUrl:"https://www.dndbeyond.com/avatars/9221/748/637202353208535995.jpeg?width=60&height=60&fit=bounds&quality=95&auto=webp",
        backgroundUrl:"https://www.dndbeyond.com/avatars/61/487/636453131400749482.jpeg",
      }
    },

    methods:{
      
    },

    computed:{

    },

    mounted(){
    }


  }

</script>

<template>
  <div class="wrapper">
    <div class="header">
      <img class="header-img" :src="backgroundUrl" alt="header background image">
      <img class="character-icon" :src="iconUrl" alt="character's icon">
    </div>
    <div class="content">
      <div>
        <span class="character-firstname">{{firstname}}</span>
        <span v-if="lastname" class="character-lastname">{{lastname }}</span>
      </div>
      <div class="character-info">
        <span class="info">Level:{{level}}</span>
        <span class="info">|</span>
        <span class="info">{{race}}</span>
        <span class="info">|</span>
        <span class="info">{{class}}</span>
        <span class="info" v-if="school">/{{school}}</span>
      </div>
    </div>
    <div class="footer">
      <button class="character-card-icon">View</button>
      <button class="character-card-icon">Edit</button>
      <button class="character-card-icon">Copy</button>
      <button class="character-card-icon danger">Delete</button>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    border: 1px solid #0000002d; 
    border-radius: 0.375rem;
    /* background-color: yellow; */
    width: 25rem;
    height: 15rem;
    justify-self: center;
    margin-top: 3rem;
  }
  
  .header{
    position: relative;
  }

  .header-img{
    height: 8rem;
    width: 100%;
    border-radius: 0.375rem 0.375rem 0 0;
    background-color: blue;
    background-image: url('https://www.dndbeyond.com/avatars/61/487/636453131400749482.jpeg');
    object-fit: cover;
  }

  .character-icon{
    position: absolute;
    left: 1.2rem;
    top:1.2rem;
    height: 90px;
  }

  .character-firstname{
    text-transform: capitalize;
    padding-left: 1.2rem;
    padding-top: 1rem;
    font-weight: bold;
    font-size: 20px;
  }

  .character-lastname{
    text-transform: uppercase;
    padding-left: 0.6rem;
    padding-top: 1rem;
    font-weight: bold;
    font-size: 18px;
  }

  .character-info{
    padding-left: 1.2rem;
    display: flex;
    justify-content: baseline;
  }

  .info{
    text-transform: capitalize;
    padding-right: 3px;
    font-size: 16px;
  }

  .footer{
    margin-top: 0.8rem;
    padding: 0 2.5rem;
    display: flex;
    justify-content: space-around;
  }

  .character-card-icon{
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 18px;
  }

  .danger{
    color: red;
    font-weight: bold;
  }
</style>