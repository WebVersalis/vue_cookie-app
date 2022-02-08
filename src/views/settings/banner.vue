<template>
  <section style="margin-bottom: 2rem;margin-top: 2rem;">
    <router-link to="/">
      <button class="secondary icon-arrow-left"></button>
    </router-link>

    <router-link to="/" style="margin-left: 1rem;" @click="save">
      <button>Save</button>
    </router-link>
  </section>
  <!-- mandatory -->
  <section>
    <aside>
      <h2>Mandatory</h2>
      <p>Visibility of the cookie banner in your shop</p>
    </aside>
    <article>
      <div class="card">
        <div class="row">
          <label><input type="radio" name="mandatory" v-model="setup.mandatory" :value="false">Disable</label>
          <label><input type="radio" name="mandatory" v-model="setup.mandatory" :value="true">Enable</label>
        </div>
        <p>It may take up to 3 minutes for the change to take effect.</p>
      </div>
    </article>
  </section>

  <!-- traduction des messages -->
  <section>
    <aside>
      <h2>Message translation</h2>
      <p>Up to more than 10 languages</p>
    </aside>
    <article>
      <div class="card">
        <div class="row">
          <label><input type="radio" name="customMessage" v-model="setup.customMessage"
                        :value="false">Disable</label>
          <label><input type="radio" name="customMessage" v-model="setup.customMessage" :value="true">Enable</label>
        </div>
        <p>Possibility to choose if it is the default texts that will be displayed to users according to their
          language</p>
        <div class="row">
          <select v-model="selectedLocale" @change="changeContent">
            <option v-for="locale in locales" v-bind:value="locale">
              {{ locale.value }}
            </option>
          </select>
        </div>
        <div class="row">
          <textarea v-model="setup.content"></textarea>
        </div>
      </div>
    </article>
  </section>

  <!-- table -->
  <section>
    <div class="column one-half">
      <div class="card">
        <div class="row">
          <label>Logo url</label>
          <input type="text" v-model="setup.logo" placeholder="https://">
        </div>
      </div>

      <div class="card">
        <div class="row">
          <label>Policy Consent url</label>
          <input type="text" v-model="setup.policyUrl" placeholder="https://">
        </div>
      </div>
    </div>
    <div class="column one-half">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>Color</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>button text color</td>
          <td>
            <input type="color" v-model="setup.btnColor">
          </td>
        </tr>
        <tr>
          <td>button background color</td>
          <td>
            <input type="color" v-model="setup.btnBg">
          </td>
        </tr>
        <tr>
          <td>button hover color</td>
          <td>
            <input type="color" v-model="setup.btnHoverColor">
          </td>
        </tr>
        <tr>
          <td>button hover background</td>
          <td>
            <input type="color" v-model="setup.btnHoverColor">
          </td>
        </tr>
        <tr>
          <td>Text color</td>
          <td>
            <input type="color" v-model="setup.color">
          </td>
        </tr>
        <tr>
          <td>Background color</td>
          <td>
            <input type="color" v-model="setup.bgColor">
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {setup, messageTranslation, locale} from "../../model";
import SetupService from "../../Service/SetupService";
import {useSetupStore} from "../../store/modules/setup";

export default defineComponent({
  setup: function () {
    const selectedLocale = ref<locale>({
      id: 'fr',
      value: 'French'
    });
    const languages = ref<messageTranslation[]>([])
    const locales = ref<locale[]>([])
    const setup = ref<setup>({} as setup);
    const setupStore = useSetupStore();

    const save = () => {
      setupStore.setPageLoading(true);
      const translateTemp: messageTranslation = {
        [selectedLocale.value.id]: {
          title: "hello",
          content: setup.value.content,
          locale: selectedLocale.value.id
        }
      }
      const mergeTranlsate = Object.assign(setup.value.translations, translateTemp);
      /* spread operator */
      setup.value.translations = {
        ...mergeTranlsate
      };
      SetupService.save(setup.value, "testcookieweb", selectedLocale.value.id).then(value => {
      }).catch(reason => {
        console.log(reason)
      }).finally(() => {
        setupStore.setPageLoading(false);
      });
    }

    const changeContent = () => {
      if (setup.value.translations[selectedLocale.value.id] !== undefined) {
        setup.value.content = setup.value.translations[selectedLocale.value.id].content;
      } else {
        setup.value.content = "";
      }
    }

    onMounted(() => {
      locales.value = [
        {
          id: 'fr',
          value: 'French'
        },
        {
          id: 'en',
          value: 'English'
        },
        {
          id: 'es',
          value: 'Spanish'
        },
        {
          id: 'ru',
          value: 'Russia'
        },
        {
          id: 'pt',
          value: 'Portuguese'
        },
        {
          id: 'de',
          value: 'German'
        }
      ];

      SetupService.getInfo("testcookieweb").then(value => {
        setup.value = value.data;
      });
    })

    return {
      languages, setup, save, locales, selectedLocale, changeContent
    }
  }
})
</script>

<style scoped>
input[type=color] {
  border: none;
}
</style>