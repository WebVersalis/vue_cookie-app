<template>
  <vue-element-loading :active="pageloading" spinner="spinner"
                       text="Please wait...  if you are not automatically redirected , refresh this page"/>
  <router-view/>
  <footer>
    <article class="help">
      <span></span>
      <p>Copyright @webversalis 2022</p>
    </article>
  </footer>
</template>
<script lang='ts'>
import {computed, defineComponent, ref} from 'vue';
import {useSetupStore} from './store/modules/setup';
import VueElementLoading from "vue-element-loading";

export default defineComponent({
  name: "App",
  components: {
    VueElementLoading
  },
  setup() {
    const showModalAlert = ref(false)
    const setupStore = useSetupStore()
    const pageloading = computed(() => setupStore.getPageLoading)

    return {
      pageloading, showModalAlert
    }
  }
})
</script>

<style lang="css">
@import './assets/uptown.css';
</style>