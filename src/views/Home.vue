<template>
  <div class="home">
    <div class="catalog-list">
      <p style="color: red">{{ count }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <navBar />
      <MovieSessionList
        :movieSessions="movieSessionsExtended"
        @select-session="selectMovieSession"
      />
    </div>
  </div>
</template>

<script>
import MovieSessionList from "../components/MovieSessionList";
import navBar from "../Bar/navBar";
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src

export default {
  name: "MovieCatalog",
  components: { MovieSessionList, navBar },
  data() {
    return {
      isInfoPopupVisible: false,
      selectedMovieSession: {}
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    ...mapActions(["GET_MOVIES_FROM_API"]),

    ...mapActions(["GET_MOVIESESSION_FROM_API"]),

    selectMovieSession(session) {
      this.selectedMovieSession = session;
    },
    getMovieName(id) {
      return this.MOVIES.find(m => m.id == id);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closePopupInfo() {
      this.isInfoPopupVisible = false;
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapGetters(["MOVIESESSION", "MOVIES"]),

    movieSessionsExtended() {
      return this.MOVIESESSION.map(m => ({
        ...m,
        movie: this.getMovieName(m.movieId)
      }));
    }
  },
  mounted() {
    this.GET_MOVIES_FROM_API().then(response => {
      if (response.data) {
        console.log("Data movies arrived");
      }
    });
    this.GET_MOVIESESSION_FROM_API().then(response => {
      if (response.data) {
        console.log("Data moviesession arrived");
      }
    });
  }
};
</script>

<style lang="scss">
.catalog-list {
  max-width: 900px;
  margin: 0 auto;
}
</style>
