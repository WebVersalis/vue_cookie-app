<template>
  <div class="Polaris-Page">
    <nav role="navigation" style="position: relative">
      <button id="topNavigation" class="Polaris-Breadcrumbs__Breadcrumb" type="button" style="display: flex;">
        <span class="Polaris-Breadcrumbs__Icon">
            <span class="Polaris-Icon">
                <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                    <path
                        d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16"
                        fill-rule="evenodd"></path>
                </svg>
            </span>
        </span>
        <router-link id="top_navigation" to="/" class="Polaris-Breadcrumbs__Content">
          Back to dashboard
        </router-link>
      </button>
    </nav>
    <!--  -->
    <div class="Polaris-Page__Content">
      <!--  -->
      <div class="Polaris-Card">
        <div class="Polaris-FormLayout__Item">
          <div class="Polaris-Stack Polaris-Stack--vertical">
            <div class="Polaris-Stack__Item">
              <fieldset class="Polaris-ChoiceList" id="ChoiceList193" aria-invalid="false"
                        aria-describedby="ChoiceList193Error">
                <legend class="Polaris-ChoiceList__Title">Message</legend>
                <ul class="Polaris-ChoiceList__Choices">
                  <li>
                    <div><label class="Polaris-Choice" for="RadioButton767"><span class="Polaris-Choice__Control"><span
                        class="Polaris-RadioButton"><input id="RadioButton767" name="ChoiceList193" type="radio"
                                                           class="Polaris-RadioButton__Input"
                                                           aria-describedby="RadioButton767HelpText"
                                                           v-model="setup.customMessage"
                                                           :value="false">
                      <span
                          class="Polaris-RadioButton__Backdrop"></span><span
                          class="Polaris-RadioButton__Icon"></span></span></span><span class="Polaris-Choice__Label">This website uses cookies to ensure you get the best experience on our website.</span></label>
                      <div class="Polaris-Choice__Descriptions">
                        <div class="Polaris-Choice__HelpText" id="RadioButton767HelpText">Customers see this in their
                          own native language. Automatically translated to 10 languages.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div><label class="Polaris-Choice" for="RadioButton769"><span class="Polaris-Choice__Control"><span
                        class="Polaris-RadioButton"><input id="RadioButton769" name="ChoiceList193" type="radio"
                                                           class="Polaris-RadioButton__Input"
                                                           aria-describedby="RadioButton769HelpText"
                                                           v-model="setup.customMessage"
                                                           :value="true"><span
                        class="Polaris-RadioButton__Backdrop"></span><span
                        class="Polaris-RadioButton__Icon"></span></span></span><span class="Polaris-Choice__Label">Custom multilanguage text</span></label>
                      <div class="Polaris-Choice__Descriptions">
                        <div class="Polaris-Choice__HelpText" id="RadioButton769HelpText">Customers see this in their
                          native language. Leave blank for default.
                        </div>
                      </div>
                    </div>
                    <div class="Polaris-ChoiceList__ChoiceChildren" v-if="setup.customMessage">
                      <table class="Polaris-DataTable__Table">
                        <tbody>
                        <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable">
                          <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                              scope="row">
                            <!-- select -->
                            <div class="Polaris-Labelled__LabelWrapper">
                              <div class="Polaris-Label"><label id="PolarisSelect8Label" for="PolarisSelect8"
                                                                class="Polaris-Label__Text">Languages</label></div>
                            </div>
                            <div class="Polaris-Select">
                              <select v-model="selectedLocale" id="PolarisSelect8" class="Polaris-Select__Input"
                                      aria-invalid="false" @change="changeContent">
                                <option v-for="locale in locales" v-bind:value="locale">
                                  {{ locale.value }}
                                </option>
                              </select>
                              <div class="Polaris-Select__Content" aria-hidden="true">
                                <span class="Polaris-Select__SelectedOption">
                                    {{ selectedLocale.value }}
                                </span>
                                <span
                                    class="Polaris-Select__Icon"><span
                                    class="Polaris-Icon"><span class="Polaris-VisuallyHidden"></span><svg
                                    viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
              <path
                  d="M7.676 9h4.648c.563 0 .879-.603.53-1.014L10.531 5.24a.708.708 0 0 0-1.062 0L7.145 7.986C6.798 8.397 7.113 9 7.676 9zm4.648 2H7.676c-.563 0-.878.603-.53 1.014l2.323 2.746c.27.32.792.32 1.062 0l2.323-2.746c.349-.411.033-1.014-.53-1.014z"></path>
            </svg></span></span></div>
                              <div class="Polaris-Select__Backdrop"></div>
                            </div>
                            <!-- endselect -->
                          </th>
                          <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                            <div class="Polaris-TextField Polaris-TextField--hasValue Polaris-TextField--multiline">
                              <textarea v-model="setup.content"
                                        id="PolarisTextField4"
                                        autocomplete="off"
                                        class="Polaris-TextField__Input"
                                        aria-labelledby="PolarisTextField4Label" aria-invalid="false"
                                        aria-multiline="true" style="height: 106px;">
                                </textarea>
                              <div class="Polaris-TextField__Backdrop"></div>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ul>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <!-- setting -->
      <div class="Polaris-Card">
        <div class="">
          <div class="Polaris-DataTable__Navigation">
            <button class="Polaris-Button Polaris-Button--disabled Polaris-Button--plain Polaris-Button--iconOnly"
                    aria-label="Scroll table left one column" type="button" disabled=""><span
                class="Polaris-Button__Content"><span class="Polaris-Button__Icon"><span class="Polaris-Icon"><span
                class="Polaris-VisuallyHidden"></span><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg"
                                                           focusable="false" aria-hidden="true">
                      <path
                          d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z"></path>
                    </svg></span></span></span></button>
            <button class="Polaris-Button Polaris-Button--plain Polaris-Button--iconOnly"
                    aria-label="Scroll table right one column" type="button"><span class="Polaris-Button__Content"><span
                class="Polaris-Button__Icon"><span class="Polaris-Icon"><span class="Polaris-VisuallyHidden"></span><svg
                viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                      <path
                          d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z"></path>
                    </svg></span></span></span></button>
          </div>
          <div class="Polaris-DataTable">
            <div class="Polaris-DataTable__ScrollContainer">
              <table class="Polaris-DataTable__Table">
                <thead>
                <tr>
                  <th data-polaris-header-cell="true"
                      class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
                      scope="col" aria-sort="none">Setting
                  </th>
                  <th data-polaris-header-cell="true"
                      class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--header Polaris-DataTable__Cell--numeric Polaris-DataTable__Cell--sortable"
                      scope="col" aria-sort="none">
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable">
                  <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                      scope="row">
                    Text color
                  </th>
                  <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                    <input type="color" v-model="setup.color">
                  </td>
                </tr>
                <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable">
                  <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                      scope="row">
                    Background color
                  </th>
                  <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                    <input type="color" v-model="setup.bgColor">
                  </td>
                </tr>
                <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable">
                  <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                      scope="row">
                    Button Background color
                  </th>
                  <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                    <input type="color" v-model="setup.btnBg">
                  </td>
                </tr>
                <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable">
                  <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                      scope="row">
                    Button Text color
                  </th>
                  <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                    <input type="color" v-model="setup.btnColor">
                  </td>
                </tr>
                <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable">
                  <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                      scope="row">
                    Hover button bacgkorund color
                  </th>
                  <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                    <input type="color" v-model="setup.btnHoverBg">
                  </td>
                </tr>
                <tr class="Polaris-DataTable__TableRow Polaris-DataTable--hoverable">
                  <th class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
                      scope="row">
                    Hover button text color
                  </th>
                  <td class="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric">
                    <input type="color" v-model="setup.btnHoverColor">
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Polaris-Stack Polaris-Stack--distributionTrailing" style="margin-bottom: 10px">
      <div class="Polaris-Stack__Item">
        <button @click="save" class="Polaris-Button Polaris-Button--primary" type="button"><span
            class="Polaris-Button__Content"><span
            class="Polaris-Button__Text">Save</span></span></button>
      </div>
    </div>
  </div>
  <div id="PolarisPortalsContainer"></div>
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