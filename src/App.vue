<template>
  <div id="app">
    <h1>{{ amountOfClicks }}</h1>
    <Button >Click me</Button>
  </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: "App",
  components: {
    Button
  },
  data(){
    return{
      amountOfClicks:0
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
