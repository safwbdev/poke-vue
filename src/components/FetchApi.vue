<script >
import axios from 'axios';
import PokemonComponent from './PokemonComponent.vue'
import Appbar from './Appbar.vue'

// The OGs 
const API_URL =`https://pokeapi.co/api/v2/pokemon?limit=151`;
// All of them 
// const API_URL =`https://pokeapi.co/api/v2/pokemon?limit=1320`;

export default {
  components:{
    Appbar,
    PokemonComponent},
  data() {
    return {
      pokemonData: [],
      isLoading:true
    };
  },
  mounted() {
    this.fetchPokemon();
  },
  methods: {
    fetchPokemon() {
      axios.get(API_URL)
        .then((response) => {
          this.pokemonData = response.data.results;
          this.isLoading = false
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    },
  },
};
</script>

<template>
    <div v-if="isLoading">Loading..</div>
    <div v-else>
      <div class="grid lg:grid-cols-3 gap-4 p-4">
        <PokemonComponent 
          v-for="(item, index) in pokemonData" 
          :key="index"
          :pokemon="item" 
          :id="index" />
      </div>
    </div>
  </template>

<style >
</style>
