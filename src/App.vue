<template>
  <div id="app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
      :location="apartment.location.city"
      :owner="apartment.owner.name"
    />
  </div>
</template>

<script>
import ApartmentsItem from "./components/apartment/ApartmenstItem.vue";

export default {
  name: "App",
  components: { ApartmentsItem },
  data() {
    return {
      apartment: {
        id: "1",
        title: "Hata",
        descr: "Great Hata",
        price: 2023,
        rating: 4,
        location: {
          city: "New Tork",
        },
        owner: {
          name: "Vitek",
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
