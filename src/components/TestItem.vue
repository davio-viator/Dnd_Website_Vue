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
    this.$refs.inputRef.focus()
  }
}
</script>

<template>
  <div>
    <input ref="inputRef" type="text" placeholder="name" v-model="name"/>
    <div>
      <button 
      @click="submitForm"
      :disabled="name.length==0" 
      type="submit">Submit</button>
    </div>
  </div>
</template>