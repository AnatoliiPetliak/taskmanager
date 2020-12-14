import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  mutations: {
    // INCREMENT: state => state.count++,
    // DECREMENT: state => state.count--,
    // SET_CART: (state, seat) => {
    //     state.cart.push(seat)
    // },
    // SET_MOVIES_TO_STATE:(state, movies) => {
    //     state.movies = movies;
    // },
    // SET_MOVIESESSION_TO_STATE:(state, movieSession) => {
    //     state.movieSession = movieSession;
    // },
    // SET_HALLSEATS_TO_STATE:(state, hallSeats) => {
    //     state.hallSeats = hallSeats;
    // }
  },
  actions: {
    // GET_MOVIES_FROM_API({commit}){
    //     return axios
    //     .get('http://localhost:3000/movies')
    //     .then((movies) => {
    //         commit('SET_MOVIES_TO_STATE', movies.data);
    //         return movies;
    //     })
    //     .catch(error => {console.log("error", error)})
    // },
    // GET_MOVIESESSION_FROM_API({commit}){
    //     return axios
    //     .get('http://localhost:3000/movieSessions')
    //     .then((movieSession) => {
    //         commit('SET_MOVIESESSION_TO_STATE', movieSession.data);
    //         return movieSession;
    //     })
    //     .catch(error => {console.log("error", error)})
    // },
    // GET_HALLSEATS_FROM_API({commit}){
    //     return axios
    //     .get('http://localhost:3000/hallSeats')
    //     .then((hallSeats) => {
    //         commit('SET_HALLSEATS_TO_STATE', hallSeats.data);
    //         return hallSeats;
    //     })
    //     .catch(error => {console.log("error", error)})
    // }
    // ,
    // ADD_TO_CART({commit}, seat){
    //     commit('SET_CART', seat)
    // }
  },
  getters: {
    // MOVIES(state){
    //     return state.movies;
    // },
    // MOVIESESSION(state){
    //     return state.movieSession;
    // },
    // HALLSEATS(state){
    //     return state.hallSeats
    // }
    // ,
    // CART(state){
    //     return state.cart
    // }
  },
});
