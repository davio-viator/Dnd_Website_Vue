import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
  const content = ref("")
  const cardId = ref(-1)
  function displayNote(){
    noteDisplayed.value = !noteDisplayed.value
  }
  function setTitle(titre:any){
    title.value = titre
  }
  function setContent(value:string){
    content.value = value
  }
  function getContent(){
    return content.value
  }
  function getTitle(){
    return title.value
  }

  function setCardId(id:number) {
    cardId.value = id;
  }

  function getCardId() {
    return cardId.value;
  }

  return {noteDisplayed,title,cardId,displayNote,setTitle,getTitle,setContent,getContent, setCardId, getCardId}
})

export const useNoteTitle = defineStore('noteTitle', () => {

  return 1
})