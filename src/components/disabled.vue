<template>
  <div id="warningBannerDisable"
       class="Polaris-Banner Polaris-Banner--statusWarning Polaris-Banner--withinPage" tabindex="0"
       role="alert" aria-live="polite" aria-labelledby="Banner22Heading"
       aria-describedby="Banner22Content">
    <div class="Polaris-Banner__Ribbon">
                <span
                    class="Polaris-Icon Polaris-Icon--colorYellowDark Polaris-Icon--isColored Polaris-Icon--hasBackdrop">
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                      <circle fill="currentColor" cx="10" cy="10" r="9"></circle>
                      <path
                          d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-13a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path>
                    </svg>
                </span>
    </div>
    <div>
      <div class="Polaris-Banner__Heading" id="Banner22Heading">
        <p class="Polaris-Heading">GDPR Legal Cookie App is disabled</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "disabled"
}
</script>

<style scoped>

</style>