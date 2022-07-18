<template>
  <main>
    <img alt="globe icon" src="../assets/globe.png" class="w-25 h-auto" >
    <div class="container">
      <div class="row text-center text-white pb-2">
        <div class="col-lg-9 mx-auto">
          <h1 class="display-6">List of countries API</h1>
          <p class="lead mb-0">Using Vue, Bootstrap to create a PWA</p>
        </div>
      </div>
 
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <span class="text-secondary mb-3 lead fw-bolder">Select your country of residence</span>

          <select v-model="selected" @change="store.changeCountry($event)">
            <option v-for="content in contents" :key="content.name" >
              <span>{{ content.name }}</span>
            </option>
          </select>

          <h2>{{ store.selectedCountry }}</h2>

        </div>
      </div>
</div> 

  </main>
</template>

<script>
import axios from 'axios'
import { store } from '../store'

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
  },
}
</script>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

select {
  display: block;
  margin: 0.5rem auto;
  max-width: 410px;
  width: 100%;
}

@media (min-width: 768px) {
  .display-6{
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
  }
  
}
</style>
