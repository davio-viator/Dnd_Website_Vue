<script setup lang="ts">
  import sphere from '@/assets/svg/sphere.svg'
</script>

<script type="module" lang="ts">

  export default {
    emits:['usedSpell'],
    props:{
      frequency:{
        type:String,
        default:'cast'
      },
      name:{
        type:String,
        default:'Mace'
      },
      class:{
        type:String,
        default:'cleric'
      },
      time:{
        type:String,
        default:'1A'
      },
      range:{
        type:Number,
        default:50
      },
      hit_dc:{
        type:String,
        default:'6'
      },
      effect:{
        type:String,
        default:'1d8+6'
      },
      notes:{
        type:String,
        default:'D: 1m, V/S'
      },
      concentration:{
        type:Boolean,
        default:false
      },
      ritual:{
        type:Boolean,
        default:false
      },
      slots:{
        type:Number,
        default:0
      },
      used:{
        type:Number,
        default:0
      },
      damage_type:String,
      level:String
    },

    data(){
      return{
        
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
        if(this.isNumber(e.target.innerText)){
          if(this.used >= this.slots){
            alert('You don\'t have any spell slots left for this tier of magic')
          }else{
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
              alert(`You did ${result} ${this.damage_type} damage! ( ${rollHistory.join('+ ')} ) ${fixDamage>0 ? '+ '+fixDamage:''} `)
            }else{
              alert(`You did ${occurance} damage!`)
            }
            this.$emit('usedSpell',1)
          }
        }
      },
      randomMinMax(min: number, max: number): number {
        let random: number = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
      },
      isNumber(value:any){
        let regex1 = /\dd\d\+6\d/;
        let regex2 = /[0-9]+/i
        return regex1.test(value) || regex2.test(value);
      }
    },

    computed:{
      notesParsed(){
        const icons = ["sphere.svg","force.svg","healing.svg"]
        let notesArray = this.notes.split(' ')
        let notes = ''
        let url = '/src/assets/svg/'
        notesArray.forEach(elem=>{
          let parsed = elem
          const src = elem.replaceAll(',','')+".svg";
          if(icons.includes(src)){
            parsed = `<img style="margin-left: 5px;height: 15px;width: 15px;" src="${url}${src}" class="attack-icon">,`
          }
          notes += parsed+' '
        })
        
        notes = notes
        
        return notes
      },
      rangeComp(){
        return this.range > 0 ? this.range+"ft" : "Touch"
      },
      effectDamage(){
        const level = parseInt(this.level as string);
        if(!Number.isNaN(level)){
          let damageForLevel 
          try {
            let bonus = this.effect.substring(this.effect.indexOf('}')+1)
            const damage = this.effect.substring(this.effect.indexOf('{'),this.effect.indexOf('}')+1)
            if(bonus == this.effect) bonus = ''
            damageForLevel = JSON.parse(damage)
            return damageForLevel[level].replace(' + MOD',bonus)
          } catch (error) {
            // console.log(error);
          }
        }
        return this.effect
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
    <div style="text-align:center;margin-right:8px">{{  frequency?.replace('EMPTY_ENUM_VALUE','') }}</div>
    <div class="attack-name">{{name}}<span class="attack-type">{{class}}</span></div>
    <div class="attack-name">{{time}}</div>
    <div class="attack-range">{{rangeComp}}</div>
    <div v-if="!hit_dc.includes('|')" 
      class="hit" 
      :class="{'clickable':!hit_dc.includes('--'),'flex':hit_dc.includes('--')}" 
      @click="rollHit">
      {{parseInt(hit_dc) >= 0 ? '+'+hit_dc : '-'+ hit_dc}}
    </div>
    <div v-else class="hit flex"><span class="mod">{{ hit_dc.split('|')[1].toUpperCase() }}</span><span style="font-size:15px;font-weight:bold">{{ hit_dc.split('|')[0] }}</span></div>
    <div class="damage" 
      :class="{'clickable':isNumber(effectDamage)}" 
      @click="rollDamage">{{effectDamage}}
      <img v-if="damage_type" 
      :src="'/src/assets/svg/'+damage_type+'.svg'" 
      class="attack-icon">
    </div>
    <div v-html="notesParsed" class="notes"></div>
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

  .attack-container{
    margin: 5px 0;
    display: grid;
    grid-template-columns: 2.5rem 14rem 4em 4rem 5rem 8rem auto;
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 5px;
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