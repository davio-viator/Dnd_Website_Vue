<script setup lang="ts">
  import CardVue from '../components/Cards/Card.vue';

  import { faker } from '@faker-js/faker';
</script>

<script module lang="ts">
  export default{
    data() {
      return {
      }
    }
    ,methods:{
      
    }
    ,created(){
    }
  }
</script>

<template>
  <CardVue 
 :edition="Boolean"></CardVue>

</template>

<style>

</style>