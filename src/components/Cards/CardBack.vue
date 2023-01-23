<script lang="ts">

  export default {
    
    props:{
      content:{
        type:Object,
        default:{ecology:'',strength:'',weakness:''}
      },
      ecology:String,
      strength:{
        type:String,
        default:''
      },
      weakness:{
        type:String,
        default:''
      }
    },

    data(){
      return{

      }
    },

    methods:{

    },

    computed:{
      strengthParsed(){
        let returnValue:String = ""
        let strengthArray:Array<string> = this.strength.split(',')
        console.log(strengthArray && strengthArray[0] !== '');
        if(strengthArray.length >= 1 && strengthArray[0]){
          strengthArray.forEach(element=>{
            let current:String =''
            if(element?.startsWith(' ')) element = element?.replace(' ','')
            current = element
            returnValue += `• ${current}\n`
          })
          return returnValue
        }
        return "• Physical attack immunity\n• Fire resistances\n"
      },
      weaknessParsed(){
        let returnValue:String = ""
        let weaknessArray:Array<string> = this.weakness?.split(',')
        if(weaknessArray.length >= 1 && weaknessArray[0]){
          weaknessArray.forEach(element=>{
            let current:String =''
            if(element.startsWith(' ')) element = element.replace(' ','')
            current = element
            returnValue += `• ${current}\n`
          })
          return returnValue
        }
        return "• Radiant damage\n• Necrotic damage\n"
      },
      ecologyy(){
        return this.content.ecology
      }
    },

    mounted(){
     
    },

    created(){
      
    }


  }

</script>

<template>
  <div class="container">
    <div class="ecology">
      <h2 class="card-text">ECOLOGY</h2>
      <textarea rows="6" readonly class="text-area" >{{content.ecology|| ecology || "Here goes the monster's environement, lore and history." }} </textarea>
    </div>
    <div class="strength">
      <h2 class="card-text">STRENGTH</h2>
      <textarea rows="6" readonly class="text-area" >{{strengthParsed}} </textarea>
    </div>
    <div class="weakness">
      <h2 class="card-text">WEAKNESS</h2>
      <textarea rows="6" readonly class="text-area bottom" >{{weaknessParsed}} </textarea>
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
    padding-right:8px;

    font-family: revert;
    font-size: 15px;
  }
  .text-area:focus{
    outline: 0;
  }
  .card-text{
    color:white;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 8px;
    text-transform: capitalize;

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
  .text-area::-webkit-scrollbar {
    width: 5px;
  }
  .text-area::-webkit-scrollbar-track{
    background-color: maroon;
    background-color: #fdf5e0;
    /* border: 3px solid rgba(223, 174, 85, 0.425);  creates padding around scroll thumb */
  }
  .text-area::-webkit-scrollbar-thumb {
    background-color: black;    /* color of the scroll thumb */
    border-radius: 0.375rem;       /* roundness of the scroll thumb */
    border: 3px solid rgba(223, 174, 85, 0.425);  /* creates padding around scroll thumb */
  }
</style>