<template>
  <section>
    <div v-if="setup.enabled" class="alert success column twelve">
      <dl>
        <dt>GRPD COOKIE is enabled currently</dt>
        <dd>The application is activated, you can modify the configuration.</dd>
      </dl>
    </div>
    <div v-else class="alert notification column twelve">
      <dl>
        <dt>GRPD COOKIE is disabled currently</dt>
        <dd>The application is activated, you can't edit or see the preview</dd>
      </dl>
    </div>
  </section>

  <section>
    <aside>
      <h2>Activate</h2>
      <p>Visibility of the cookie banner in your shop</p>
    </aside>
    <article>
      <div class="card">
        <div class="row">
          <label><input type="radio" name="activer" v-model="setup.enabled" :value="false"
                        @click="toggleOff">Disable</label>
          <label><input type="radio" name="activer" v-model="setup.enabled" :value="true"
                        @click="toggleOn">Enabled</label>
        </div>
        <p>It may take up to 3 minutes for the change to take effect.</p>
      </div>
    </article>
  </section>

  <section>
    <aside>
      <h2>Customize</h2>
    </aside>
    <article>
      <div class="card">
        <div class="row">
          <router-link to="/settings/banner">
            <button>Customize</button>
          </router-link>
        </div>
        <p> Customize color, logo and content for your cookie banner</p>
      </div>
    </article>
  </section>

  <section>
    <aside>
      <h2>Reset settings</h2>
    </aside>
    <article>
      <div class="card">
        <div class="row">
          <button>Reset</button>
        </div>
        <p>To remove all data , you can reset to factory settings.</p>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, computed} from 'vue'
import {setup} from "@/model";
import SetupService from "../Service/SetupService";
import ScriptTagService from "@/Service/ScriptTagService";
import disabled from "@/components/disabled.vue";
import enabled from "@/components/enabled.vue";
import {useSetupStore} from "@/store/modules/setup";
import {useRoute} from 'vue-router';

export default defineComponent({
  components: {
    disabled,
    enabled
  },
  setup() {
    const setup = ref<setup>({} as setup);
    const setupStore = useSetupStore();
    const route = useRoute();
    const shop = computed(() => route.query.shop)
    const host: any = computed(() => route.query.host)

    const toggleOn = () => {
      setupStore.setPageLoading(true);
      ScriptTagService.store(shop.value).then(() => {
        setupStore.setPageLoading(false);
      }).finally(() => {
        setupStore.setPageLoading(false);
      });
    }
    const toggleOff = () => {
      setupStore.setPageLoading(true);
      ScriptTagService.delete(shop.value).then(() => {
        setupStore.setPageLoading(false);
      }).finally(() => {
        setupStore.setPageLoading(false);
      });
    }

    const save = () => {
      setupStore.setPageLoading(true);
      SetupService.save(setup.value, "testcookieweb").then(value => {
        setupStore.setPageLoading(false);
      }).catch(reason => {
        console.log(reason)
      });
    }

    onMounted(async () => {
      setupStore.setPageLoading(true);
      setupStore.setShop(shop.value);
      const env = import.meta.env.MODE
      await SetupService.getInfo("testcookieweb").then(value => {
        setupStore.setPageLoading(false);
        setup.value = value.data;
      }).catch(reason => {
        setupStore.setPageLoading(false);
      });
    });

    return {
      setup, save, toggleOn, toggleOff
    }
  }
})
</script>