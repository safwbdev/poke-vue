<script>
import axios from 'axios';
export default{
    data(){
        return{
            id:this.$route.params.id,
            pokemonData:{},
            images:{},
            abilities:{},
            types:[],
            stats:[],
            moveList:[],
            name:'NA',
            isLoading:true
        }
    },
    mounted(){
        this.fetchPokemon()
    },
    methods: {
    fetchPokemon() {
      axios.get('https://pokeapi.co/api/v2/pokemon/'+this.id)
        .then((response) => {
          this.pokemonData = response.data;
          this.images = response.data.sprites.other;//
          this.name = response.data.name;//
          this.abilities = response.data.abilities;//
          this.stats = response.data.stats;//
          this.types = response.data.types;//
          this.moveList = response.data.moves;
          this.isLoading = false
        console.log(response.data);
          
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    },
  },
}
</script>
<template>
    <div v-if="isLoading">
        <h1>
            Loading...
        </h1>
    </div>
    <div v-else>
        <h1>
            {{id}} - {{name}}
        </h1>
        <div v-for="image in images"><img :src="image.front_default"/></div>
        <hr />
        <h3>Type</h3>
        <div v-for="type in types">{{ type.type.name }}</div>
        <hr />
        <h3>Abilities</h3>
        <div v-for="ability in abilities">{{ ability.ability.name }}</div>
        <hr />
        <h3>Stats</h3>
        <div v-for="stat in stats">{{ stat.stat.name }}: {{ stat.base_stat }}</div>
        <hr />
        <h3>Move list</h3>
        <div v-for="move in moveList">{{ move.move.name }}</div>

    </div>
    </template>
<style></style>