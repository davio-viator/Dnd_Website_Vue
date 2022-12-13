<script lang="ts">

  export default {
    
    props:{
      content:Object
    },

    data(){
      return{

      }
    },

    methods:{

    },

    computed:{
      strength(){
        let returnValue:String = ""
        let strengthArray:Array<String> = this.content.strength.split(',')
        strengthArray.forEach(element=>{
          returnValue += `• ${element}\n`
        })
        return returnValue
      },
      weakness(){
        let returnValue:String = ""
        let strengthArray:Array<String> = this.content.weakness.split(',')
        strengthArray.forEach(element=>{
          returnValue += `• ${element}\n`
        })
        return returnValue
      }
    },

    mounted(){
      // console.log(this.keywords)
    }


  }

</script>

<template>
  <div class="container">
    <div class="ecology">
      <h2 class="card-text">ECOLOGY</h2>
      <textarea rows="6" readonly class="text-area" >{{content.ecology}} </textarea>
    </div>
    <div class="strength">
      <h2 class="card-text">STRENGTH</h2>
      <textarea rows="6" readonly class="text-area" >{{strength}} </textarea>
    </div>
    <div class="weakness">
      <h2 class="card-text">WEAKNESS</h2>
      <textarea rows="6" readonly class="text-area bottom" >{{weakness}} </textarea>
      <ul class="footer-ul">
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .container{
    min-width: 15rem;
    max-width: 25rem;
    width: 25rem;
    display: flex;
    flex-direction: column !important;
    justify-content: center !important;
  }
  .text-area{
    background-color: #fdf5e0;
    font-weight: bold;
    height: 9.75rem;
    resize: none;
    padding-left: 8px;
    padding-right:8px
  }
  .text-area:focus{
    outline: 0;
  }
  .card-text{
    color:white;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 8px;

  }
  .ecology{
    min-width: 15rem;
    max-width: 25rem;
    height: 12.5rem;
    border-radius: 5px 5px 0 0;
    background-color: black;
    display: flex;
    flex-direction: column;
    /* padding: 8px; */
    font-size: 25px;
  }
  .strength{
    min-width: 15rem;
    max-width: 25rem;
    height: 12.5rem;
    background-color: black;
    display: flex;
    flex-direction: column;
    font-size: 25px;
  }
  .weakness{
    min-width: 15rem;
    max-width: 25rem;
    height: 12.5rem;
    background-color: black;
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: column;
    font-size: 25px;
  }
  .bottom{
    border-radius: 0 0 5px 5px;
  }
  .content{
    min-width: 15rem;
    max-width: 25rem;
  }
  .card-image{
    object-fit: fill;
    max-width: 25rem;
    height:35rem;
  }
  .footer{
    min-width: 15rem;
    max-width: 25rem;
    height: 3rem;
    border-radius: 0 0 5px 5px;
    background-color: black;
    display: flex;
    justify-content:space-evenly;
    padding: 5px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }
  .footer-ul{
    list-style: none;
    padding-inline-start: 0px;
  }
  .footer-text{
    display: inline-block;
    font-size: 25px;
    margin: 5px;
  }
  .footer::-webkit-scrollbar {
  width: 0px;
  }
</style>