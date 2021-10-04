import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        for(let i = 0;localStorage.length > i; i++){
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state:{
        todoitems:storage.fetch()
    }
})