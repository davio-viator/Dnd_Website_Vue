import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import basic_attack from '../assets/svg/basic_attack.svg'
import evocation from '../assets/svg/evocation_icon.svg'
import necromancy from '../assets/svg/necromancy_icon.svg'
import unarmed from '../assets/svg/unarmed_strike.svg'
import lightning from '../assets/svg/lightning.svg'
import force from '../assets/svg/force.svg'
import bludgeoning from '../assets/svg/bludgeoning.svg'
import necrotic from '../assets/svg/necrotic.svg'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  
  return { count, doubleCount, increment }
})

export const useDisplayNote = defineStore('dislayNote',() => {
  const noteDisplayed = ref(false);
  const title = ref("")
  function displayNote(){
    noteDisplayed.value = !noteDisplayed.value
  }
  function setTitle(titre:any){
    title.value = titre
  }

  return {noteDisplayed,title,displayNote,setTitle}
})

export const useNoteTitle = defineStore('noteTitle', () => {

  return 1
})

export async function createUser(data) {
  const response = await fetch(`/api/user`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: data})
    })
  return await response.json();
}

export function getCharacter() {
  function calculateBonus(value ){
    return Math.floor((value-10)/2)
  }
  const character = {
    stats:[
      {
        name:'strength',
        score:17,
        bonus:calculateBonus(17),
      },
      {
        name:'dexterity',
        score: 18,
        bonus: calculateBonus(18)
      },
      {
        name:'constitution',
        score: 14,
        bonus: calculateBonus(14)
      },
      {
        name:'intelligence',
        score: 13,
        bonus: calculateBonus(13)
      },
      {
        name:'wisdom',
        score: 7,
        bonus: calculateBonus(7)
      },
      {
        name:'dexterity',
        score: 11,
        bonus: calculateBonus(11)
      }
    ],
    proficiency:3,
    speed:'30ft',
    inspiration:false,
    health:{
      current:30,
      max:42,
      temp:0
    },
    initiative:2,
    armor:16,
    defences:[],
    conditions:[],
    savingthrows:{
      strength:1,
      dexterity:2,
      constitution:2,
      intelligence:0,
      wisdom:6,
      charism:4
    },
    sense:{
      passive_perception:18,
      passive_investigation:15,
      passive_insight:13
    },
    proficiencyies:{
      armor:['heavy armor','light armor','medium armor','shield'],
      weapons:['simple weapons'],
      tools:[],
      languages:['Celestial','Common','Draconic','Elvish']
    },
    skills:[
      {
        skill:'acrobatics',
        proficient:false,
        modifier:'dex',
        bonus:2
      },
      {
        skill:'Animal handling',
        proficient:false,
        modifier:'wis',
        bonus:3
      },
      {
        skill:'arcana',
        proficient:true,
        modifier:'int',
        bonus:3
      },
      {
        skill:'Athletics',
        proficient:false,
        modifier:'str',
        bonus:1
      },
      {
        skill:'deception',
        proficient:false,
        modifier:'cha',
        bonus:2
      },
      {
        skill:'history',
        proficient:true,
        modifier:'int',
        bonus:3
      },
      {
        skill:'insight',
        proficient:false,
        modifier:'wis',
        bonus:2
      },
      {
        skill:'intimidation',
        proficient:false,
        modifier:'cha',
        bonus:1
      },
      {
        skill:'investigation',
        proficient:false,
        modifier:'int',
        bonus:0
      },
      {
        skill:'medecine',
        proficient:true,
        modifier:'wis',
        bonus:6
      },
      {
        skill:'nature',
        proficient:false,
        modifier:'int',
        bonus:0
      },
      {
        skill:'perception',
        proficient:false,
        modifier:'wis',
        bonus:3
      },
      {
        skill:'performance',
        proficient:false,
        modifier:'cha',
        bonus:1
      },
      {
        skill:'persuasion',
        proficient:false,
        modifier:'cha',
        bonus:1
      },
      {
        skill:'religion',
        proficient:true,
        modifier:'int',
        bonus:3
      },
      {
        skill:'sleight of hand',
        proficient:false,
        modifier:'dew',
        bonus:2
      },
      {
        skill:'stealth',
        proficient:false,
        modifier:'dex',
        bonus:2
      },
      {
        skill:'survival',
        proficient:false,
        modifier:'wis',
        bonus:3
      }      
    ],
    actions:{
      attacks:[
        {
          basic_attack:'',
          evocation:'',
          necromancy:'',
          unarmed:'',
          lightning:'',
          force:'',
          bludgeoning:'',
          necrotic:''
        },
        {
          icon:basic_attack,
          name:'mace',
          attack_type:'Melee weapon',
          range:'5ft',
          range_type:'reach',
          hit_dc:4,
          damage:'1d6+1',
          damage_icon:bludgeoning,
          notes:'Simple',
          bonus:false
        },
        {
          icon:necromancy,
          name:'inflict wounds',
          attack_type:'2nd Level • Cleric',
          range:'touch',
          range_type:'',
          hit_dc:6,
          damage:'3d10',
          damage_icon:necrotic,
          notes:'V/S',
          bonus:false
        },
        {
          icon:unarmed,
          name:'unarmed strike',
          attack_type:'Melee weapon',
          range:'5ft',
          range_type:'reach',
          hit_dc:4,
          damage:'2',
          damage_icon:bludgeoning,
          notes:'',
          bonus:false,
        },
        {
          icon:basic_attack,
          name:'breath weapon (blue)',
          attack_type:'',
          range:'30ft',
          range_type:'range',
          hit_dc:'13|dex',
          damage:'2d6',
          damage_icon:lightning,
          notes:'1/SR',
          bonus:false,
          frequency:{
            title:'breath weapon (blue)',
            text:'As an action once per short rest, exhale in a 5 by 30 ft. line (DEX DC 13, half damage on success) for 2d6 Lightning Damage [6th] 3d6, [11th] 4d6, [16th] 5d6',
            times:1,
            frequency:'Short Rest',
            used:0
          }
        },
        {
          icon:evocation,
          name:'spiritual weapon',
          attack_type:'2nd Level • Cleric',
          range:'60ft',
          range_type:'',
          hit_dc:6,
          damage:'1d8+3',
          damage_icon:force,
          notes:'D: 1m, V/S',
          bonus:true
        },
      ],
      action:[
        {
          title:'breath weapon (blue)',
          text:'As an action once per short rest, exhale in a 5 by 30 ft. line (DEX DC 13, half damage on success) for 2d6 Lightning Damage [6th] 3d6, [11th] 4d6, [16th] 5d6',
          times:1,
          frequency:'Short Rest',
          used:0
        },
        {
          
        }
      ]
    }
  }
}