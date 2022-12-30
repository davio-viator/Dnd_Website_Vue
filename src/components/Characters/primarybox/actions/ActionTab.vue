<script setup lang="ts">
  import AttackTab from './AttackTab.vue';
  import Action from './Action.vue';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      focused:Boolean,
      test:String
    },

    data(){
      return{
        actions : [
        {
            title:'Breath Weapon (Blue)',
            text:'As an action once per short rest, exhale in a 5 by 30 ft. line (DEX DC 13, half damage on success) for 2d6 Lightning Damage [6th] 3d6, [11th] 4d6, [16th] 5d6',
            times:1,
            frequency:'Short Rest',
            used:0
        },
        {
            title:'Channel Divinity: Preserve Life',
            text:'As an action, you can restore <strong>25</strong> HP. Choose any creatures within 30 ft. of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct.',
            times:0,
            frequency:'',
            used:0
        },
        {
            title:'Channel Divinity: Turn Undead',
            text:'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a WIS saving throw (DC <strong>14</strong>). If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.',
            times:0,
            frequency:'',
            used:0
        },
        {
            title:'Unarmed Strike',
            text:'ou can punch, kick, head-butt, or use a similar forceful blow and deal bludgeoning damage equal to 1 + STR modifier',
            times:0,
            frequency:'',
            used:0
        }
    ]
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
  <div class="container">

    <AttackTab v-if="focused"/>
    <div class="action-wrapper">
      <h3 class="title">Actions in Combat</h3>
      <div class="border-left-thick">
        Attack, Cast a Spell, Dash, Disengage, Dodge, Grapple, Help, Hide, Improvise, Ready, Search, Shove, Use an Object
      </div>
      <Action 
      v-for="(action,i) in actions" 
      :title="action.title" 
      :text="action.text"
      :amount="action.times"
      :frequency="action.frequency"
      :used="action.used"
      @used="(emitUsed) => actions[i].used = emitUsed"
      />
    </div>

  </div>
</template>

<style scoped>
  .container{
    overflow: auto;
    overflow-x: hidden;
    height: calc(20rem +12rem + 15px - 15px)
  }

  .action-wrapper{
    padding: 0 12px;
  }

  .border-left-thick{
    margin-top: 8px;
    margin-left: 12px;
    border-left: 5px solid lightgray;
    padding-left: 5px;
    line-height: 1.5;
  }

  .title{
    margin-bottom: 5px;
    font-weight: bold;
  }
</style>