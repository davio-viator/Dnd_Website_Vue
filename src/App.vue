<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheHeaderVue from '@/components/TheHeader.vue';
import TheFooterVue from '@/components/TheFooter.vue';
import CardVue from './components/Cards/Card.vue';
</script>

<script type="module" lang="ts">
  export default {
    data() {
      return {
        links:[{name:'link a',url:'linkA'},{name:'link b',url:'linkB'}, {name:'link c',url:'linkC'}]
      }
    }
  }

</script>

<template>  
  <RouterView />
  <TheHeaderVue 
    firstname="davio" 
    lastname="viator" 
    username="SpiritSonic" 
    iconSrc="https://cdn.discordapp.com/attachments/321941760911736833/1027320724806975589/Jack-O27_Childish_Jump.webp"
    :urls=links>
  </TheHeaderVue>
  <CardVue/>
  <TheFooterVue/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
