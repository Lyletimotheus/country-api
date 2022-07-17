<template>
  <main>
    <img alt="globe icon" src="../assets/globe.png" class="w-25 h-auto" >
    <div class="container">
      <div class="row text-center text-white pb-2">
        <div class="col-lg-9 mx-auto">
          <h1 class="display-4">List of countries API</h1>
          <p class="lead mb-0">Using Vue, Bootstrap to create a PWA</p>
        </div>
      </div>
 
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <span class="text-secondary mb-3 lead fw-bolder">Select your country of residence</span>

          <select v-model="selected" @change="store.changeCountry($event)">
            <option v-for="content in contents" v-bind:value="{ image: content.flag }" :key="content.name">
              <span>{{ content.name }}</span>
            </option>
          </select>

          <h2>{{ store.selectedCountry }}</h2>
          <img  :src="selected.image" alt="" width="100" class="mr-2 d-inline-block" >

        </div>
      </div>
</div> 

  </main>
</template>

<script>

import axios from 'axios'
import {store} from '../store'

export default {
  name: 'HomePage',
  data () {
    return {
      contents: null,
      selected: '',
      image: '',
      store: store,
    }
  },
  mounted() {
    axios
        .get('https://restcountries.com/v2/all')
        .then(response => {
          // console.log(store.allCountries)
          store.allCountries = response.data;
          // console.log(store.allCountries)
          return this.contents = response.data; 
          })
  }

}
</script>

<style scoped>
.dropdown-menu { max-height: 280px; overflow-y: auto; min-width: 100% !important; background-attachment: local, local, scroll, scroll; }

.dropdown-item { white-space: normal; }
</style>
