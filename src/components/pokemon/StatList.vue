<script setup>
const { stats } = defineProps(['stats'])
</script>

<template>
<div class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    <h3 class="font-bold uppercase">Stats</h3>
    <div v-for="stat in stats">
        <span class="uppercase">{{ stat.stat.name.replace('-',' ') }}</span> : <span class="font-bold">{{ stat.base_stat }}</span>
    </div>
    </div>

</template>

<style scoped></style>