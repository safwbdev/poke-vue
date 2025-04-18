<script setup>
const { abilities } = defineProps(['abilities'])
</script>

<template>
<div class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    <h3 class="font-bold uppercase">Abilities</h3>
    <div 
        v-for="ability in abilities" 
        class="capitalize">
        {{ ability.ability.name.replace('-',' ') }}
    </div>
</div>

</template>

<style scoped></style>