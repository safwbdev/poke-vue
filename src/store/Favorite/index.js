export default {
    namespaced: true,
    state: {
        pokemon: "Dummy text"
    },
    actions: {
        createFavorite(context, pokemon) {
            context.commit("setFavorite", pokemon);
        }
    },
    mutations: {
        setFavorite(state, pokemon) {
            state.pokemon = pokemon;
        }
    },
    getters: {
        getFavorite(state) {
            return state.pokemon;
        }
    }
};
