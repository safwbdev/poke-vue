<script setup>
import { RouterLink } from 'vue-router';

  const { pokemon, id } = defineProps(['pokemon','id'])
  const index = id+ 1;
  const name = pokemon.name;
  const url = '/pokemon/'+ index;
  const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ index +'.png'
</script>

<template>
  <RouterLink :to="url">
    <div class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal flex content-center">
      <div class="image">
        <img :src="img"/>
      </div>
      <div class="details content-center">
        <h1 class="font-sans text-lg font-bold capitalize">{{ index }} | {{name}}</h1>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>