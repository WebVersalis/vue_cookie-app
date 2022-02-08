<template>
  <vue-element-loading :active="pageloading" spinner="spinner"
                       text="Please wait...  if you are not automatically redirected , refresh this page"/>
  <router-view/>
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