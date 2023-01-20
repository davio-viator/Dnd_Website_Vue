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
import sphere from '../assets/svg/sphere.svg'
import radiant from '../assets/svg/radiant.svg'
import healing from '../assets/svg/healing.svg'

const xpForLevel:any = {
  2:300,
  3:900,
  4:2700,
  5:6500,
  6:14000,
  7:23000,
  8:34000,
  9:48000,
  10:64000,
  11:85000,
  12:100000,
  13:120000,
  14:140000,
  15:165000,
  16:195000,
  17:225000,
  18:265000,
  19:305000,
  20:355000  
}

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  
  return { count, doubleCount, increment }
})

export async function createUser(data:any) {
  const response = await fetch(`/api/user`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: data})
    })
  return await response.json();
}

export const useCharacter = defineStore('character',() => {
  let name:string = 'Odof'
  const character:any = ref(
    {
      name:"Odof",
      sex:"male",
      race:"Dragonborn",
      class:"cleric",
      portraitSrc:'https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg',
      level:getLevel(),
      totalXp:6500,
      currentXp:2567,
      xpToNextLevel:xpForLevel[getNextLevel()],
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
          name:'charisma',
          score: 11,
          bonus: calculateBonus(11)
        }
      ],
      proficiency:3,
      speed:'30ft',
      inspiration:false,
      spellcaster:true,
      health:{
        current:30,
        max:42,
        temp:0
      },
      initiative:2,
      armor:17,
      defences:['Lightning'],
      conditions:[],
      savingthrows:{
        strength:{
          name:"str",
          proficient:true,
          mod:3
        },
        intelligence: {
          name:"int",
          proficient:false,
          mod:1
        },
        dexterity:{
          name:"dex",
          proficient:true,
          mod:4
        },
        wisdom:{
          name:"wis",
          proficient:false,
          mod:-2
        },
        constitution:{
          name:"con",
          proficient:false,
          mod:2
        },
        charisma:{
          name:"cha",
          proficient:false,
          mod:0
        }
      },
      senses:{
        passive_perception:18,
        passive_investigation:15,
        passive_insight:13
      },
      proficiencyies:{
        armors:['heavy armor','light armor','medium armor','shield'],
        weapons:['simple weapons'],
        tools:[],
        languages:['Celestial','Common','Draconic','Elvish']
      },
      skills:[
        {
          skill:'acrobatics',
          proficient:false,
          modifier:'dex',
          bonus:4
        },
        {
          skill:'Animal handling',
          proficient:false,
          modifier:'wis',
          bonus:-2
        },
        {
          skill:'arcana',
          proficient:true,
          modifier:'int',
          bonus:+1
        },
        {
          skill:'Athletics',
          proficient:false,
          modifier:'str',
          bonus:+3
        },
        {
          skill:'deception',
          proficient:false,
          modifier:'cha',
          bonus:0
        },
        {
          skill:'history',
          proficient:true,
          modifier:'int',
          bonus:1
        },
        {
          skill:'insight',
          proficient:false,
          modifier:'wis',
          bonus:-2
        },
        {
          skill:'intimidation',
          proficient:false,
          modifier:'cha',
          bonus:0
        },
        {
          skill:'investigation',
          proficient:false,
          modifier:'int',
          bonus:1
        },
        {
          skill:'medecine',
          proficient:true,
          modifier:'wis',
          bonus:-2
        },
        {
          skill:'nature',
          proficient:false,
          modifier:'int',
          bonus:1
        },
        {
          skill:'perception',
          proficient:false,
          modifier:'wis',
          bonus:-2
        },
        {
          skill:'performance',
          proficient:false,
          modifier:'cha',
          bonus:0
        },
        {
          skill:'persuasion',
          proficient:false,
          modifier:'cha',
          bonus:0
        },
        {
          skill:'religion',
          proficient:true,
          modifier:'int',
          bonus:1
        },
        {
          skill:'sleight of hand',
          proficient:false,
          modifier:'dex',
          bonus:4
        },
        {
          skill:'stealth',
          proficient:false,
          modifier:'dex',
          bonus:4
        },
        {
          skill:'survival',
          proficient:false,
          modifier:'wis',
          bonus:-2
        }      
      ],
      actions:{
        attacks:[
          // {
          //   basic_attack:'',
          //   evocation:'',
          //   necromancy:'',
          //   unarmed:'',
          //   lightning:'',
          //   force:'',
          //   bludgeoning:'',
          //   necrotic:'',
          //   sphere:''
          // },
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
            used:0,
            bonus:false
          },
          {
            title:'Channel Divinity: Preserve Life',
            text:'As an action, you can restore <strong>25</strong> HP. Choose any creatures within 30 ft. of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct.',
            times:0,
            frequency:'',
            used:0,
            bonus:false
          },
          {
            title:'Channel Divinity: Turn Undead',
            text:'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a WIS saving throw (DC <strong>14</strong>). If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.',
            times:0,
            frequency:'',
            used:0,
            bonus:false
          },
          {
            title:'Unarmed Strike',
            text:'ou can punch, kick, head-butt, or use a similar forceful blow and deal bludgeoning damage equal to 1 + STR modifier',
            times:0,
            frequency:'',
            used:0,
            bonus:false
          }
        ]
      },
      spells:{
        "cantrip":{
          slots:-1,
          spells:[
            {
              name:'Light', 
              frequency:'at will',
              class:'cleric',
              time:'1A',
              range:'touch',
              hit_dc:'dex|14',
              effect:'creation',
              notes:'D: 1h, 20ft '+sphere+', V/S'
            },
            {
              name:'Mending', 
              frequency:'at will',
              class:'cleric',
              time:'1m',
              range:'touch',
              hit_dc:'--',
              effect:'utility',
              notes:'V/S/M'
            },
            {
              name:'Sacred Flame', 
              frequency:'at will',
              class:'cleric',
              time:'1A',
              range:'touch',
              hit_dc:'dex|14',
              effect:'2d9 '+radiant,
              notes:'V/S'
            },
            {
              name:'Spare the dying', 
              frequency:'at will',
              class:'cleric',
              time:'1A',
              range:'touch',
              hit_dc:'--',
              effect:'Healing',
              notes:'V/S'
            }
          ]
        },
        "1st level":{
          slots:4,
          used:0,
          spells:[
            {
              name:'Bless', 
              frequency:'cast',
              concentration:true,
              class:'cleric',
              time:'1A',
              range:'30ft',
              hit_dc:'--',
              effect:'buff',
              notes:'D: 1m, V/S/M'
            },
            {
              name:'Cure Wounds', 
              frequency:'cast',
              class:'cleric',
              time:'1A',
              range:'touch',
              hit_dc:'--',
              effect:'1d8+6 '+healing,
              notes:'V/S'
            },
            
          ]
        },
        "2nd level":{
          slots:3,
          used:0,
          spells:[
            {
              name:'Spiritual Weapons', 
              frequency:'cast',
              class:'cleric',
              time:'1A',
              range:'60ft',
              hit_dc:'6',
              effect:'1d8+6 '+force,
              notes:'D: 1m, V/S',
              bonus:true
            }
          ]
        },
        "3rd level":{
          slots:2,
          used:0,
          spells:[
            {
              name:"Spirit Guardians",
              frequency:'cast',
              class:'cleric',
              time:'1A',
              range:'self',
              hit_dc:'wis|14',
              effect:'3d8 '+radiant,
              notes:'D: 10m, '+sphere+' ; V/S/M',
              bonus:true
            }
          ]
        }
      },
      inventory:{
        copper:1,
        silver:2,
        electrum:3,
        gold:10,
        platinum:4,
        hasBackpack:true,
        hasAlmsBox:true,
        equipment:[
          {
            name:'mace',
            subname:'mace',
            active:1,
            weight:4,
            quantity:-1,
            cost:5, // in gp
            notes:'Simple'
          },
          {
            name:'Leather',
            subname:'Light Armor • Leather',
            active:1,
            weight:10,
            quantity:-1,
            cost:10,
            notes:'AC 11'
          },
          {
            name:'Shield',
            subname:'Shield • Shield',
            active:1,
            weight:6,
            quantity:-1,
            cost:10,
            notes:'+2 AC'
          },
          {
            name:'Crossbow, light',
            subname:'crossbow, light',
            active:0,
            weight:5,
            quantity:-1,
            cost:25,
            notes:'Simple, Ammunition, Loading, Range, Two-Handed, Range (80/320)'
          },
          {
            name:'Crossbow Bolts',
            subname:'gear • ammunition',
            active:0,
            weight:1.5,
            quantity:20,
            cost:1,
            notes:'Damage, Combat'
          },
          {
            name:'Amulet',
            subname:'gear • holy Symbole',
            active:-1,
            weight:1,
            quantity:1,
            cost:5,
            notes:'Utility'
          },
        ],
        backpack:[
          {
            name:'Small Knife',
            subname:'gear • Adventuring Gear',
            active:-1,
            weight:0,
            quantity:1,
            cost:0,
            notes:'Utility'
          },
        ],
        almsBox:[
          {
            name:'Block of Incense',
            subname:'gear • Adventuring Gear',
            active:-1,
            weight:0,
            quantity:2,
            cost:0,
            notes:'Social, Utility'
          },
        ]
      }
    }
  )

  const managerOpen = ref(false);
  const managerCaller = ref('');

  function getLevel(){
    return 5;
  }

  function getNextLevel(){
    return getLevel()+1;
  }

  function randomMinMax(min: number, max: number): number {
    let random: number = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  }

  function rollD20(){
    return randomMinMax(1,20);
  }
  function rollD12(){
    return randomMinMax(1,12);
  }
  function rollD10(){
    return randomMinMax(1,10);
  }
  function rollD8(){
    return randomMinMax(1,8);
  }
  function rollD6(){
    return randomMinMax(1,6);
  }
  function rollD4(){
    return randomMinMax(1,4);
  }

  function calculateBonus(value:any ){
    return Math.floor((value-10)/2)
  }

  function setInspiration(){
    character.value.inspiration = !character.value.inspiration
  }


  function getCoinValue(name:string){
    console.log(character.value.inventory[name]);
    return character.value.inventory[name]
  }

  function changeCoinValue(name:string,value:number){
    character.value.inventory[name] = value
    if(character.value.inventory[name]<0) character.value.inventory[name] = 0
    console.log(character.value.inventory[name]);
  }

  function displayManager(){
    managerOpen.value = true
  }

  function hideManager(){
    managerOpen.value = false
    managerCaller.value = ''
  }
  
  
  function setManagerCaller(caller:string){
    managerCaller.value = caller
  }

  function getEquipementInventory(){
    return character.value.inventory.equipment
  }

  function getEquipementBackpack(){
    return character.value.inventory.backpack
  }

  function getEquipementAlmsBox(){
    return character.value.inventory.almsBox
  }

  function updateActiveEquipment(name:string,location:string){
    character.value.inventory[location].forEach((element: { name: string; active: number }) => {
      if(element.name === name){
        if(element.active >= 0){
          element.active = element.active == 1 ? 0 : 1
        }
      }
    });
  }

  function getItemInventory(name:string,location:string){
    let result:any = null
    character.value.inventory[location].forEach((element: { name: string }) => {
      if(element.name === name){
        result = element
      }
    });
    return result;
  }

  function getItemInventoryWeight(location:string){
    let sum:number = 0;
    character.value.inventory[location].forEach((element: { weight: number }) => {
      sum+=element.weight
    });
    return sum
  }

  function changeCharacterAC(ac:number){
    character.value.armor = ac
  }

  function updateCurrentHP(hpValue:number){
    character.value.health.current = hpValue
  }

  function updateMaxHP(hpValue:number){
    character.value.health.max = hpValue
  }

  function updateTempHP(hpValue:number){
    if(hpValue!= null) character.value.health.temp = hpValue
  }

  function shortRest(){
    Object.keys(character.value.actions).forEach(element => {
      const currentElem = character.value.actions[element]
      Object.keys(currentElem).forEach(elem =>{
        const current = currentElem[elem]
        let notesText = ''
        if(current?.notes){
          notesText = current.notes
        }
        if(notesText.includes('/SR') || current?.frequency == 'Short Rest' || current?.frequency?.frequency == 'Short Rest'){
          if(current?.used) current.used = 0;
          if(current?.frequency?.used) current.frequency.used = 0 
        }
      })
    })
  }

  function longRest(){
    shortRest();
    character.value.health.current = character.value.health.max
    Object.keys(character.value.spells).forEach(element => {
      if(character.value.spells[element]?.used) character.value.spells[element].used = 0 
    });
  }

  function updateSkillProficiency(name:any){
    character.value.skills.forEach((element:any,index:number) => {
      if(element.skill === name){
        character.value.skills[index].proficient = !character.value.skills[index].proficient
        return
      }
    });
  }
  
  
  return {character,managerOpen,managerCaller,setInspiration
    ,changeCoinValue,getCoinValue,displayManager,setManagerCaller
    ,hideManager,getEquipementInventory,getEquipementBackpack
    ,getEquipementAlmsBox,updateActiveEquipment,getItemInventory
    ,getItemInventoryWeight,changeCharacterAC,updateCurrentHP
    ,updateMaxHP,updateTempHP,rollD20,rollD12,rollD10,rollD8
    ,rollD6,rollD4,longRest,shortRest,updateSkillProficiency
  }
})