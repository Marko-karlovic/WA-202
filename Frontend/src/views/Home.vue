<template>
  <div id="app">
    <form @submit.prevent="izracun">
    Prvi broj
    <input type="number" v-model="brojA">
    Drugi broj
    <input type="number" v-model="brojB">
      <button type="submit">Submit</button>
    </form>
    Izracuni: 
  {{rezultat}}
</div>
</template>

<script>
import store from '@/store.js'

export default {
  data () {
    return store;
  },
  methods: {
    izracun(){
      fetch(`http://localhost:3000/calculator/?a=${this.brojA}&b=${this.brojB}`)  
    .then(response => {
      return response.json()
      })
    .then(data => {
      console.log("Podaci s backenda", data)
      this.rezultat = data;
    })
    }
  }
}
</script>
