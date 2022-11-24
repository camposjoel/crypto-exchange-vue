<template>
  <div>
    <SpinnerLoader v-if="isLoading" :size="60"/>
    <px-assets-table v-else :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from "../api"
import PxAssetsTable from "../components/PxAssetsTable.vue"
import SpinnerLoader from '../components/SpinnerLoader.vue'

export default {
  name: "Home",

  components: { PxAssetsTable, SpinnerLoader },

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