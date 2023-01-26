<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        fileName:''
      }
    },

    methods:{
      uploadImage(e:any){
        if(e.target.value.includes('http')) this.$emit('imgSrc',e.target.value)
        else if(e.target.files){
          this.fileName = e.target.files[0].name
          let reader = new FileReader();
          reader.onload = (event:any)=>{
            this.$emit('imgSrc',event.target.result)
          }
          reader.readAsDataURL(e.target.files[0]) 
        }
      },
    },

    computed:{
      teste(){

      }
    },

    created(){

    },

    mounted(){
    }


  }

</script>

<template>
  <div class="container">
    <div contenteditable>
      registrzation works
    </div>
    <div class="form-container">
      
        <label class="element" for="username">
          username
          <input class="element-input" type="text" placeholder="Enter your username here" name="username" id="">
        </label>
        <label class="element" for="email">
          email address
          <input class="element-input" type="email" name="email" id="">
        </label>
      
      
        <label class="element" for="password">
          password
          <input class="element-input" type="password" name="password" id="">
        </label>
        <label class="element" for="password-verification">
          re-type password
          <input class="element-input" type="password" name="password-verification" id="">
        </label>
      
        <label @change="uploadImage"  for="file">
          <span class="button">Upload image</span>
          <span class="upload-text">{{fileName || "No file chosen"}}</span>
          <input type="file" accept=".png,;apng,.jpeg,.jpg,.webp,.gif" multiple=false class="file-upload element-ingput" name="file" id="file">
        </label>
      
        <label class="element" for="image-link">
          Link to the image
          <input class="element-input" type="text" name="image-link" id="">
        </label>
      
        <label class="element" for="status">
          user staus
          <select class="element-input" name="status" id="">
            <option value="DM">DM</option>
            <option value="Player">Player</option>
          </select>
        </label>

        <button class="validation-button">Sign up</button>
      </div>
    </div>
</template>

<style scoped>
  .container{
    width: 60vw;
    margin: auto;
    margin-top: 8rem;
  }

  .form-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: brown;
    padding: 25px;
    border-radius: 0.375rem;
  }

  .element{
    font-size: 22px;
    text-transform: capitalize;
    display: grid;
    grid-template-columns: auto auto;
    display: flex;
    justify-content: space-between;
    padding: 8px 0px;

  }
  .element-input{
    margin-left: 20px;
    height: 2.5rem;
    border-radius: 0.375rem;
    width: 40%;
    margin-right: 0;
  }

  .file-upload{
    display: none;
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

  .validation-button{
    display: block;
    margin-top: 3rem;
    margin-left: 80%;
    width: 8rem;
    height: 3rem;
    font-size: 28px;
    border-radius: 0.375rem;
    cursor: pointer;
  }

  .validation-button:hover{
    background-color: lightgray;
  }


</style>