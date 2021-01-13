import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { SET_TODOS, SET_DEFAULT_TODOS, SET_NEW_TODO } from '../../constants';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		todos: [],
		defaultTodos: [],
		archiveTodos: []
	},
	mutations: {
		[SET_TODOS](state, todos) {
			state.todos = todos;
			console.log(todos);
		},
		[SET_DEFAULT_TODOS](state, defaultTodos) {
			state.defaultTodos = defaultTodos;
		},
		[SET_NEW_TODO](state, todos) {
			state.todos.push(todos);
			console.log(state.todos);
		}
	},
	actions: {
		GET_TODOS_FROM_API({ commit }) {
			return axios
				.get('http://localhost:3000/todos')
				.then((todos) => {
					commit('SET_TODOS', todos.data);
					return todos;
				})
				.catch((error) => {
					console.log('error', error);
				});
		},
		GET_DEFAULTTODOS_FROM_API({ commit }) {
			return axios
				.get('http://localhost:3000/defaultTodos')
				.then((defaultTodos) => {
					commit('SET_DEFAULT_TODOS', defaultTodos.data);
					return defaultTodos;
				})
				.catch((error) => {
					console.log('error', error);
				});
		},
		SET_TODO_TO_API({ commit }) {
			return axios
				.post('http://localhost:3000/todos')
				.then((todos) => {
					commit('SET_NEW_TODO', todos.data);
					return todos;
				})
				.catch((error) => {
					console.log('error', error);
				});
		}
	},
	getters: {
		TODOS(state) {
			return state.todos;
		},
		DEFAULTTODOS(state) {
			return state.defaultTodos;
		}
	}
});
