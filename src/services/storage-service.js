import Vue from 'vue'

const session = sessionStorage;
const local = localStorage;
const storage = {
    getSession(key) {
        return JSON.parse(session.getItem(key));
    },

    setSession(key, value) {
        return session.setItem(key, JSON.stringify(value));
    },

    deleteSession(key) {
        return session.removeItem(key);
    },

    deleteAllSession() {
        return session.clear();
    },

    getLocal(key) {
        return JSON.parse(local.getItem(key));
    },

    setLocal(key, value) {
        return local.setItem(key, JSON.stringify(value));
    },

    deleteLocal(key) {
        return local.removeItem(key);
    },

    deleteAllLocal() {
        return local.clear();
    },
}

Vue.mixin({
    beforeCreate() {
        const options = this.$options;
        if (options.http)
            this.$storage = options.storage;
        else if (options.parent && options.parent.$storage)
            this.$storage = options.parent.$storage;
    }
});

export default storage;
