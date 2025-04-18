<script >
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      todoStatus: "all",
      inputItem: "",
    };
  },
  computed: {
    ...mapGetters({ allFavorites: "getFavorites", note: "Note/getPokemon" }),
    favorites() {
      let result;
      switch (this.todoStatus) {
        case "all":
          result = this.allFavorites;
          break;
        case "complete":
          result = this.allFavorites.filter((favorite) => favorite.complete);
          break;
        case "incomplete":
          result = this.allFavorites.filter((favorite) => !favorite.complete);
          break;
      }
      return result;
    },
  },
  methods: {
    createItem() {
      this.$store.dispatch("createItem", this.inputItem);
      this.inputItem = "";
    },
  },
};
</script>

<template>
<h1>Favorites</h1>
<div
        v-for="favorite in favorites"
        :key="favorite.id"
      >{{ favorite.title }}</div>

</template>

<style scoped>
</style>
