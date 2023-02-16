<script setup lang="ts">
import { useCharacter } from '@/stores/CharacterService';


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
        type:Number,
        default:5
      },
      range_type:{
        type:String,
        default:'reach'
      },
      hit_dc:{
        type:String,
        default:'4'
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
      },
      damage_type:String
    },

    data(){
      return{
        character:useCharacter().character
      }
    },

    methods:{
      rollHit(e:any){
        let value:number = parseInt(e.target.innerText)
        let roll:number = this.randomMinMax(1,20)
        let result:number = value + roll
        if(roll == 20) alert(`You rolled a ${result} with a natural 20!!!`)
        else if(roll == 1) alert(`You rolled a ${result} with a natural 1!!!`)
        else alert(`You rolled a ${result}`)
      },
      rollDamage(e:any){
        let parse = e.target.innerText.split('d')
        let occurance = parse[0]
        if(parse[1]){
          let die = parse[1].split('+')[0]
          let fixDamage = parseInt(parse[1].split('+')[1])? parseInt(parse[1].split('+')[1]) : 0
          let roll = 0
          let rollHistory = []
          for(let i = 0; i < parseInt(occurance); i++){
            const res = this.randomMinMax(1,parseInt(die))
            rollHistory.push(res) 
            roll += res
          }
          let result = roll + fixDamage
          alert(`You did ${result} ${this.damage_type} damage! ( ${rollHistory.join(' + ')} ) ${fixDamage>0 ? '+ '+fixDamage:''} `)
        }else{
          alert(`You did ${occurance} damage!`)
        }
      },
      randomMinMax(min: number, max: number): number {
        let random: number = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
      }
    },

    computed:{
      rangeComp(){
        return this.range>0 ? `${this.range}ft` : 'Touch'
      },
      rangeType(){
        return this.range>0 ? this.range_type : ''
      },
      damageTypeComp(){
        return this.damage_type ? `/src/assets/svg/${this.damage_type}.svg` : undefined
      },
      effectDamage(){
        let bonus = this.damage.substring(this.damage.indexOf('}')+1)
        if(this.damage == bonus) return this.damage
        let damage = this.damage.substring(this.damage.indexOf('{'),this.damage.indexOf('}')+1)
        damage = JSON.parse(damage)
        return damage[(Object.keys(damage) as any)[0]].replaceAll(' + MOD',bonus)

      },
      iconComp(){
        const icon = this.icon === "weapon" || this.icon === "test" ? "basic_attack" : this.icon  
        return `/src/assets/svg/${icon}.svg`
      }
    },

    created(){

    },

    mounted(){
    }


  }

</script>

<template>
  <div class="attack-container ">
    <img class="attack-icon" :src="iconComp">
    <div class="attack-name">{{name}}<span class="attack-type">{{attack_type}}</span></div>
    <div class="attack-range">{{rangeComp}}<span class="attack-type">{{rangeType}}</span></div>
    <div v-if="!hit_dc.includes('|')" class="clickable hit" @click="rollHit">{{parseInt(hit_dc) >= 0 ? '+'+hit_dc : '-'+ hit_dc}}</div>
    <div v-else class="hit flex"><span class="mod">{{ hit_dc.split('|')[1].toUpperCase() }}</span><span style="font-size:15px;font-weight:bold">{{ hit_dc.split('|')[0] }}</span></div>
    <div class="clickable damage" @click="rollDamage">{{effectDamage}}<img :src="damageTypeComp" class="attack-icon"></div>
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