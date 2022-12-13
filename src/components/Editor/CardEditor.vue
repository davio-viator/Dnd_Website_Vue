<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    emits:['response'],

    props:{
      base:String
    },

    data(){
      return{
      }
    },

    methods:{
      uploadImage(e:any){
        if(e.target.value.includes('http')) this.$emit('response',e.target.value)
        else if(e.target.files){
          this.fileName = e.target.files[0].name
          let reader = new FileReader();
          reader.onload = (event:any)=>{
            this.$emit('response',event.target.result)
          }
          reader.readAsDataURL(e.target.files[0]) 
        }
      },
      handleInputChange(e:any){
        let inputName = e.target.name;
      }
    },

    computed:{

    },

    mounted(){

    }


  }

</script>

<template>
  <div class="container">
    <label for="name">Monster's name</label>
    <input @keyup="handleInputChange" type="text" placeholder="Red dragon" name="name" id="">

    <label for="rank">Monster's rank</label>
    <input type="text" placeholder="C+" name="rank" id="">

    <label for="keyword">Monster's keywords</label>
    <input type="text" placeholder="Undead,Magic user,Humanoid" name="keyword" id="">

    <label for="ecology">Monster's history/description</label>
    <textarea type="text" placeholder="This monster resign in a abandonned tower guarded by her a dragon and her followers." name="ecology" id=""></textarea>

    <label for="strength">Monster's strength</label>
    <textarea type="text" name="strenth" id="" placeholder="Owner of the run of death, Lunar magic"></textarea>

    <label for="weakness">Monster's weakness</label>
    <textarea type="text" name="weakness" id="" placeholder="Holy magic, other stuff"></textarea>

    <label for="link">Image's link</label>
    <input @touch.passive="uploadImage" @keyup="uploadImage" type="text" name="link" id="" placeholder="http://image.com">

    
      <label>Upload your own image</label>
      <label @change="uploadImage"  for="file" class="upload-style">
        <span class="button">Upload image</span>
        <span class="upload-text">{{fileName || "No file chosen"}}</span>
        <input type="file" accept=".png,;apng,.jpeg,.jpg,.webp,.gif" multiple=false class="file-upload" name="file" id="file">
      </label>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column !important;
    width: 25rem;
  }
  label{
    font-size: 26px;
    font-weight:500;
  }
  input{
    height: 2rem;
    font-size: 26px;
  }
  .file-upload{
    display: none;
  }
  .upload-style{
    /* display: flex; */
    /* flex-direction: row !important; */
    /* justify-content: center; */
  }
  .button {
    height: 2.5rem;
    display: inline-block;
    width: 8.5rem;
    padding: 12px 18px;
    cursor: pointer;
    border: 1px solid #000;
    border-width: 1px 0 1px 1px;
    border-radius: 0.375rem 0 0 0.375rem;
    background-color: #b8b8b8;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
  .upload-text{
    height: 2.5rem;
    display: inline-block;
    padding: 12px 0;
    font-size: 16px;
    width: calc(100% - 8.6rem);
    color: black;
    border: 1px solid #000;
    border-width: 1px 1px 1px 0;
    padding-left: 5px;
    background-color: white;
    border-radius: 0 0.375rem 0.375rem 0;
  }
</style>