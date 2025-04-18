export default {
    toggleComplete(context, id) {
        this.commit("updateComplete", { id });
    },
    createItem(context, title) {
        const favorite = {
            title,
            complete: false,
            id: new Date().getTime()
        };

        this.commit("addItem", { favorite });
    },
    deleteItem(context, id) {
        this.commit("removeItem", { id });
    }
};
