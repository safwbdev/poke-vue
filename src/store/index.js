import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import Favorite from "./Favorite/index";

export default createStore({
    state,
    actions,
    mutations,
    getters,
    modules: {
        Favorite
    }
});
