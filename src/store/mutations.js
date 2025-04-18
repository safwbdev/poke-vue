export default {
    updateComplete(state, payload) {
        const target = state.favorites.find((favorite) => favorite.id === payload.id);
        target.complete = !target.complete;
    },
    addItem(state, payload) {
        state.favorites.push(payload.favorite);
    },
    removeItem(state, payload) {
        const targetidx = state.favorites.findIndex((favorite) => favorite.id === payload.id);
        state.favorites.splice(targetidx, 1);
    }
};
