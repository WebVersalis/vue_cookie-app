<template>
  <div style="--top-bar-background:#00848e; --top-bar-color:#f9fafb; --top-bar-background-lighter:#1d9ba4;">
    <div class="Polaris-Page">
      <div class="Polaris-Page-Header Polaris-Page-Header--hasNavigation Polaris-Page-Header--hasActionMenu">
        <div class="app-wrapper">
          <div class="app-content">
            <main role="main">
              <div class="Polaris-Layout__AnnotatedSection">
                <div class="Polaris-Stack Polaris-Stack--distributionTrailing" style="margin-bottom: 10px">
                  <div class="Polaris-Stack__Item">
                    <button @click="save" class="Polaris-Button Polaris-Button--primary" type="button"><span
                        class="Polaris-Button__Content"><span
                        class="Polaris-Button__Text">Save</span></span></button>
                  </div>
                </div>
                <enabled v-if="setup.enabled"></enabled>
                <!-- state enabled -->
                <br>
                <disabled v-if="!setup.enabled"></disabled>
                <!-- state disabled -->
                <div class="Polaris-Page__Content" style="margin-bottom: -4rem;" v-if="setup">
                  <div class="Polaris-Layout">
                    <div class="Polaris-Layout__AnnotatedSection">
                      <div class="Polaris-Layout__AnnotationWrapper">
                        <div class="Polaris-Layout__Annotation">
                          <div class="Polaris-TextContainer">
                            <h2 class="Polaris-Heading">Activate</h2>
                            <p>Visibility of the cookie banner in your shop</p>
                          </div>
                        </div>
                        <div class="Polaris-Layout__AnnotationContent">
                          <div class="Polaris-Card">
                            <div class="Polaris-Card__Section">
                              <div class="Polaris-SettingAction">

                                <div class="Polaris-SettingAction__Action" style="width: 100%; display: flex">
                                  <div style="width: 33%;">
                                    <form id="activate_deactivate__banner" style="width: 100%;">
                                      <input type="hidden" name="_token"
                                             value="rw57UgTg8H2eOTjpAXPE0CJQVLGoLjo2xzTycqD8">
                                      <input id="form_metafield_id" name="metafield[0][id]" type="text"
                                             placeholder="Metafield ID" hidden="">
                                      <input id="form_metafield_value" name="metafield[0][value]" type="text"
                                             placeholder="value" hidden="">
                                      <input id="form_metafield_type" name="metafield[0][type]" type="text"
                                             placeholder="type" hidden="">
                                    </form>
                                    <div id="enabel_desable__banner">
                                      <label for="disableBanner">off</label>
                                      <input id="disableBanner" type="radio" :value="false"
                                             v-model="setup.enabled">

                                      <label for="enableBanner">on</label>
                                      <input id="enableBanner" type="radio" :value="true"
                                             v-model="setup.enabled">
                                    </div>

                                  </div>
                                  <div>
                                    <span>It may take up to 3 minutes for the change to take effect.</span>
                                  </div>
                                  <div id="saveEnableDisable_banner" style="display: none">
                                    <button id="saveHolder" type="submit" class="Polaris-Button"
                                            style="margin-left: auto;margin-right: 0; width: 80px;">
                                                    <span class="Polaris-Button__Content">
                                                        <span class="Polaris-Button__Text">Save</span>
                                                    </span>
                                    </button>
                                    <button id="save" class="Polaris-Button Polaris-Button--primary hidden"
                                            style="margin-left: auto;margin-right: 0; width: 80px;">
                                                    <span class="Polaris-Button__Content">
                                                        <span class="Polaris-Button__Text">Save</span>
                                                    </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="Polaris-Page__Content">
                  <div class="Polaris-Layout">
                    <div class="Polaris-Layout__AnnotatedSection"
                         style="margin-top: 2rem;border-top: .1rem solid var(--p-divider-subdued-on-surface,#dfe3e8);padding-top: 2rem;">
                      <div class="Polaris-Layout__AnnotationWrapper">
                        <div class="Polaris-Layout__Annotation">
                          <div class="Polaris-TextContainer">
                            <h2 class="Polaris-Heading">Customizer</h2>
                            <p>Customize the style and content of your banner.</p>
                          </div>
                        </div>
                        <div class="Polaris-Layout__AnnotationContent">
                          <div class="Polaris-Card">
                            <div class="Polaris-Card__Section">
                              <div class="Polaris-SettingAction" style="padding-bottom: 2rem">
                                <div class="Polaris-SettingAction__Action"
                                     style="width: 100%;margin-left: auto;margin-right: 0;display: flex;position: relative;">
                                  <div style="height: auto;display: flex;margin-left: auto;margin-right: 0;">
                                    <router-link to="/settings/banner">
                                      <button type="button" class="Polaris-Button Polaris-Button--primary"><span
                                          class="Polaris-Button__Content"><span>Customizer</span></span>
                                      </button>
                                    </router-link>
                                  </div>
                                </div>

                                <div class="Polaris-SettingAction__Setting" style="flex-direction: column;">
                                  <h2 class="Polaris-Heading" style="flex-direction: column;">Editor</h2>
                                  Customize color, logo and content for your cookie banner
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="Polaris-Layout__AnnotatedSection"
                         style="margin-top: 2rem;border-top: .1rem solid var(--p-divider-subdued-on-surface,#dfe3e8);padding-top: 2rem;">
                      <div class="Polaris-Layout__AnnotationWrapper">
                        <div class="Polaris-Layout__Annotation">
                          <div class="Polaris-TextContainer">
                            <h2 class="Polaris-Heading">Reset settings</h2>
                          </div>
                        </div>
                        <div class="Polaris-Layout__AnnotationContent">
                          <div class="Polaris-Card">
                            <div class="Polaris-Card__Section">
                              <div class="Polaris-SettingAction">
                                <div class="Polaris-SettingAction__Setting">
                                  <p>
                                    To remove all data , you can reset to factory settings.
                                  </p>
                                </div>
                                <div class="Polaris-SettingAction__Action">
                                  <button type="button" class="Polaris-Button Polaris-Button--destructive"><span
                                      class="Polaris-Button__Content"><span>Reset settings</span></span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, computed, ref} from 'vue'
import {setup} from "../model";
import SetupService from "../Service/SetupService";
import disabled from "@/components/disabled.vue";
import enabled from "@/components/enabled.vue";
import {useSetupStore} from "../store/modules/setup";

export default defineComponent({
  components: {
    disabled,
    enabled
  },
  setup() {
    const setup = ref<setup>({} as setup);
    const setupStore = useSetupStore();

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
      await SetupService.getInfo("testcookieweb").then(value => {
        setupStore.setPageLoading(false);
        setup.value = value.data;
      }).catch(reason => {
        setupStore.setPageLoading(false);
      });
    });

    return {
      setup, save
    }
  }
})
</script>

<style scoped>

</style>