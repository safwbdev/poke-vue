<script setup>
  const { pokemon, id } = defineProps(['pokemon','id'])
  const pokeIndex = id+ 1;;
  const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokeIndex +'.png'
</script>

<template>
  <div class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal flex content-center">
    <div class="image">
      <img :src="img"/>
    </div>
    <div class="details content-center">
      <h1 class="font-sans text-lg font-bold capitalize">{{ pokeIndex }} | {{pokemon.name}}</h1>
    </div>
  </div>
</template>

<style scoped></style>