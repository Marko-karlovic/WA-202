<template>
  <div id="app">
    <form @submit.prevent="izracun">
    Redni broj niza
    <input type="number" v-model="broj">
      <button type="submit">Submit</button>
    </form>
    Fibonacci broj: 
    {{rezultat}}
    <br>
    <br>
    Zbog rekurzivne funkcije treba puno vremena za izracun vecih brojeva u nizu!
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
      fetch(`http://localhost:3000/sequence/?n=${this.broj}`)  
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
