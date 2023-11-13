<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <CustomInput v-model="text"/>
    <ApartmentsListVue :items="apartments" />
  </div>
</template>

<script>
import ApartmentsListVue from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import CustomInput from "./components/shared/CustomInput.vue";

export default {
  name: "App",
  components: {
    ApartmentsListVue,
    CustomInput
},
  data(){
    return{
      apartments,
      text:''
    }
  }
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
