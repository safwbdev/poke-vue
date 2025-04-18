<script setup>
const { types,name,id } = defineProps(['types','name','id'])
</script>

<template>
    <div class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
        <h1 class="font-bold uppercase">{{id+' | '+name}}</h1>
        <div class="flex content-center">
            <div 
                v-for="type in types" 
                class="bg-blue-100 text-blue-800  font-medium me-2 px-2.5 py-1 rounded-sm dark:bg-blue-900 dark:text-blue-300 capitalize">
                {{ type.type.name }}
            </div>

        </div>
    </div>
</template>

<style scoped></style>