<script setup>
const { moveList } = defineProps(['moveList'])
</script>

<template>
    <div class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
        <h3 class="font-bold uppercase">Move list</h3>
        <div v-for="move in moveList" class="capitalize">{{ move.move.name.replace('-',' ') }}</div>
    </div>

</template>

<style scoped></style>