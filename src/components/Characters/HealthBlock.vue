<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      max:Number,
      current:Number,
      temp:Number
    },

    data(){
      return{
        maxHealth:this.max?this.max:36,
        currentHealth:this.current?this.current:36,
        tempHP:this.temp?this.temp:null

      }
    },

    methods:{
      heal(){
        let value = this.$refs.health_input.value;
        if(value=='') value = 0
        this.currentHealth += parseInt(value);
        if(this.currentHealth>this.maxHealth)this.currentHealth = this.maxHealth;
        this.$refs.health_input.value = null;
      },

      damage(){
        let value = this.$refs.health_input.value;
        if(value=='') value = 0

        if(this.tempHP <= 0){
          this.currentHealth -= parseInt(value);
          if(this.currentHealth<0)this.currentHealth = 0
          this.$refs.health_input.value = null
        }
        else if(this.tempHP > 0){
          let newTemp = this.tempHP-parseInt(value)
          if(newTemp > 0) this.tempHP = newTemp
          else{
            this.tempHP = null;
            let newHp = this.currentHealth - Math.abs(newTemp)
            this.currentHealth = newHp
          }
        }
        this.$refs.health_input.value = null;
      },

      healthChange(e:any){
        let value = e.target.value
        let name = e.target.name
        console.log(value,e.target.name);
        if(name == 'health')this.currentHealth = parseInt(value)
        if(name == 'temp') this.tempHP = parseInt(value)

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

    <div class="inputs">
       <button @click="heal" class="input heal">heal</button>
       <input ref="health_input" min="0" class="input" type="number">
       <button @click="damage" class="input damage">damage</button>
    </div>

    <div class="health-container">

      <div class="test">
        <span class="title">current</span>
        <input class="health-input" type="number" @change="healthChange" name="health" min="0" :max="maxHealth" :value="currentHealth">
      </div>

      <span class="title">/</span>

      <div class="test">
        <span class="title">max</span>
        <input class="health-input" type="number" readonly :value="maxHealth">
      </div>

      <div class="test">
        <span class="title">temp</span>
        <input class="health-input" type="number" placeholder="--" @change="healthChange" name="temp" min="0" :value="tempHP">
      </div>

    </div>
    <div class="footer">
      HIT POINTS
    </div> 
  </div>
</template>

<style scoped>
  .wrapper{
    padding-left: 8px;
    background-color: aqua;
    background-color: white;
    height: 100%;
    width: 80%;

    border-radius: 0.375rem;
    border: 1px solid red;

    text-align: center;

    display: flex;
  }

  .inputs{
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;

    width: 33%;
  }

  .input{
    text-align: center;
    width:80%;
    font-size: 18px;
    background-color: white;
    border-radius: 0.375rem;
    border: 1px solid gray;
  }

  .heal{
    color: green;
    border: 1px solid green;
  }

  .heal:hover{
    background-color: green;
    color:white;
  }

  .heal:focus{
    outline: 2px solid #56b856EE ;
  }

  .damage{
    color: red;
    border: 1px solid red;
  }

  .damage:hover{
    background-color: red;
    color: white;
  }

  .damage:focus{
    outline: 2px solid #ff0000EE;
  }

  .health-container{
    padding: 0px 8px;
    width: 66%;

    display:flex;
    justify-content: space-between;
  }

  .health-input{
    text-align: center;
    border: none;
    outline: none;
    border-radius: 0.375rem;
    font-size: 34px;
  }

  .test{
    display: flex;
    flex-direction: column;
    width: 80px;
  }

  .title{
    font-size: 25px;
  }

  .footer{
    padding: 0;
    position: absolute;
    bottom:0;
    left: calc(50% - 40px)
  }
</style>