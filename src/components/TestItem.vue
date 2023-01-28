<script setup lang="ts">
import { getRef, setRef  } from '@/services/Utils';

</script>

<script lang="ts">
  export default {
  data() {
    return {
      message: 'Hello World!',
      name:''
    }
  },
  methods:{
    reverse(value: any){
      this.message = value.target.value.split('').reverse().join('');
    },
    submitForm(e:any){
      e.preventDefault();
      console.log(`Form is submitted! Name = ${this.name}`);
    }
  },
  computed:{
    reversedMessage(){
     	return this.message.split('').reverse().join('') 
    },
    formIsValid(){
      return this.message.includes('ok')
    }
     
  },
  mounted(){
    (this.$refs as any).inputRef.focus()
  }
}
</script>

<template>
  <div style="height:150vw;width: 100%;background-color: red;">
    
  </div>
</template>