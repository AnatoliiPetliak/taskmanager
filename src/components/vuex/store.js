import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { SET_TODOS, SET_DEFAULT_TODOS, SET_NEW_TODO, DELETE_TODO } from '../../constants';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		todos: [],
		todo: [],
		defaultTodos: [],
		archiveTodos: []
	},

	mutations: {
		[SET_TODOS](state, todos) {
			state.todos = todos;
		},

		[SET_DEFAULT_TODOS](state, defaultTodos) {
			state.defaultTodos = defaultTodos;
		},

		[SET_NEW_TODO](state, todo) {
			state.todo = todo;
		},

		[DELETE_TODO](state, todo) {
			state.todo = todo; //Put here all todo by the exeption of chosen one
		}
	},
	actions: {
		GET_TODOS_FROM_API({ commit }) {
			return axios
				.get('http://localhost:3030/todos')
				.then((todos) => {
					commit('SET_TODOS', todos);
					return todos;
				})
				.catch((error) => {
					console.log('error', error);
				});
		},
		GET_DEFAULTTODOS_FROM_API({ commit }) {
			return axios
				.get('http://localhost:3030/defaultTodos')
				.then((defaultTodos) => {
					commit('SET_DEFAULT_TODOS', defaultTodos.data);
					return defaultTodos;
				})
				.catch((error) => {
					console.log('error', error);
				});
		},
		SET_TODO_TO_API({ commit }, payload) {
			return axios
				.post('http://localhost:3030/todos', payload)
				.then((response) => {
					commit('SET_NEW_TODO', response.data);
				})
				.catch((error) => {
					console.log('error', error);
				});
		},

		DELETE_TODO_TO_API({ commit }, payload) {
			return axios
				.post('http://localhost:3030/todos', payload)
				.then((response) => {
					commit('DELETE_TODO', response.data);
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
