<template>
  <div class="tickets-hall">
    <BookingTicketsHall @choose-seat="addToBasket" @clear-local="clearStore" />
  </div>
</template>

<script>
import BookingTicketsHall from "../components/BookingTicketsHall";

export default {
  data() {
    return {
      totalSeats: [],
      basketShow: true,
      seat: {}
    };
  },
  name: "Hall",
  components: {
    BookingTicketsHall
  },
  methods: {
    addToBasket(seat) {
      this.totalSeats.push(seat);
      localStorage.setItem("key", JSON.stringify(this.totalSeats));
      this.saveSeats(seat);
    },
    clearStore() {},
    saveSeats() {
      const parsed = JSON.stringify(this.totalSeats);
      localStorage.setItem("key", parsed);
    }
  },

  mounted() {
    if (localStorage.getItem("key")) {
      try {
        this.seatItems = JSON.parse(localStorage.getItem("key"));
        console.log(this.seatItems);
      } catch (e) {
        localStorage.removeItem("key");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tickets-hall {
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
}
</style>
