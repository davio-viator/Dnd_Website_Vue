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