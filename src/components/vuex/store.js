import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    todos: [],
    defaultTodos: [],
  },
  mutations: {
    SET_TODOS_TO_STATE:(state, todos) => {
        state.todos = todos;
    },
    SET_DEFAULTTODOS_TO_STATE:(state, defaultTodos) => {
        state.defaultTodos = defaultTodos;
    }
  },
  actions: {
    GET_TODOS_FROM_API({commit}){
        return axios
        .get('http://localhost:3000/todos')
        .then((todos) => {
            commit('SET_TODOS_TO_STATE', todos.data);
            return todos;
        })
        .catch(error => {console.log("error", error)})
    },
    GET_DEFAULTTODOS_FROM_API({commit}){
        return axios
        .get('http://localhost:3000/defaultTodos')
        .then((defaultTodos) => {
            commit('SET_DEFAULTTODOS_TO_STATE', defaultTodos.data);
            return defaultTodos;
        })
        .catch(error => {console.log("error", error)})
    }
  },
  getters: {
    TODOS(state){
        return state.todos;
    },
    DEFAULTTODOS(state){
        return state.defaultTodos;
    }
  }
});
