<template>
  <HomePage />
    <!-- <Offline @detected-condition="handleConnectivityChange"></Offline> -->
</template>

<script>

import HomePage from './components/HomePage.vue'
// import Offline  from 'v-offline';

export default {
  name: 'App',
  components: {
    HomePage,
    // Offline 
  },
    methods: {
    // handleConnectivityChange(status) {
    //   console.log(status);
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*
*/
body {
    background: #e8cbc0;
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #c0e8db, #636fa499);
    min-height: 100vh;
}

.bootstrap-select .bs-ok-default::after {
    width: 0.3em;
    height: 0.6em;
    border-width: 0 0.1em 0.1em 0;
    transform: rotate(45deg) translateY(0.5rem);
}

.btn.dropdown-toggle:focus {
    outline: none !important;
}
</style>
