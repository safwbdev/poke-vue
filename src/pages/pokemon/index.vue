<script>
import axios from 'axios';
import MoveList from '../../components/pokemon/MoveList.vue';
import MainDetails from '../../components/pokemon/MainDetails.vue';
import AbilityList from '../../components/pokemon/AbilityList.vue';
import StatList from '../../components/pokemon/StatList.vue';
import LoadingScreen from '../../components/LoadingScreen.vue';
export default{
    components:{
        AbilityList,
        LoadingScreen,
        MoveList,
        StatList,
        MainDetails,
  },
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
    <div class="m-2">
        <div v-if="isLoading">
            <LoadingScreen />
        </div>
        <div v-else>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="image in images">
                    <img class="h-auto max-w-full rounded-lg" :src="image.front_default" alt="">
                </div>
            </div>
            <MainDetails :types :id :name/>
            <div class="flex">
                <StatList :stats/>
                <div>&nbsp;</div>
                <AbilityList :abilities/>
            </div>
            <MoveList :moveList  />
            
        </div>
    </div>
    </template>
<style></style>