<template>
  <main>
    <px-header :links="links"></px-header>
    <router-view
      class="min-w-full px-5 sm:px-20 py-20 flex justify-center"
    ></router-view>
  </main>
</template>

<script>
import PxHeader from "./components/PxHeader.vue";

export default {
  name: "App",
  components: {
    PxHeader,
  },

  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
