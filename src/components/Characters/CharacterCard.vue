<script setup lang="ts">
  
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
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
      classes:{
        type:Array<String>,
        default:["fighter"]
      },
      school:{
        type:Array<String>,
        default:[""]
      },
      id:Number,
      classLevel:{
        type:Array<Number>,
        default:[0]
      },
      characterIcon:String
    },

    data(){
      return{
        iconUrl:"https://www.dndbeyond.com/avatars/9221/748/637202353208535995.jpeg?width=60&height=60&fit=bounds&quality=95&auto=webp",
        // backgroundUrl:"https://www.dndbeyond.com/avatars/61/487/636453131400749482.jpeg",
        // backgroundUrl:"https://i.pinimg.com/originals/9a/82/8d/9a828d0fc00a2540d35339e3aba5bfcc.jpg"
        backgroundUrl:"https://kartinkin.net/uploads/posts/2021-03/1616981624_15-p-taverna-oboi-16.jpg"
      }
    },

    methods:{
      viewCharacter(){
        let url:String = `/character/${this.id}`
        this.$router.push({name:'character-view',params:{id:this.id}})
      }
    },

    computed:{
      classesC(){
        let res = ''
        this.classes.forEach((elem,i)=> {
          const school = this.school[i] !== undefined ? "("+this.school[i]+")" : ""
          if(i+1 < this.classes.length) res += `${elem}: ${this.classLevel[i]} ${school} , `
          else res += `${elem}: ${this.classLevel[i]} ${school}`
        })
        return res
      }
    },

    mounted(){
    }


  }

</script>

<template>
  <div class="wrapper">
    <div class="header">
      <img class="header-img" :src="backgroundUrl" alt="header background image">
      <img class="character-icon" :src="characterIcon" alt="character's icon">
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
        <span v-if="classes.length > 1" class="info"> {{ classesC }} </span>
        <span v-else class="info">{{classes[0]}}</span>
        <span  v-for="sc in school" class="school-info" v-if="school.length>0 && classes.length < 1">/{{sc}}</span>
      </div>
    </div>
    <div class="footer">
      <button  @click="viewCharacter" class="character-card-icon">View</button>
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
    min-height: 1rem;
    max-height: 3rem;
  }

  .info{
    text-transform: capitalize;
    padding-right: 3px;
    font-size: 16px;
  }

  .school-info{
    text-transform: capitalize;
    padding-right: 3px;
    font-size: 16px;
    line-height: 1.5;
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