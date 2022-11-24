<template>
  <div>
    <h1 v-if="isLoading">Loading...</h1>
    <px-assets-table v-else :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from "../api"
import PxAssetsTable from "../components/PxAssetsTable.vue"

export default {
  name: "Home",

  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>