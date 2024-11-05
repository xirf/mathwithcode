<script setup>
import { sponsors, SponsorData } from '../../sponsors';
</script>

<template>
  <div>
  <!-- <div
    ref="container"
    class="sponsor-container"
    :class="[tier.startsWith('plat') ? 'platinum' : tier, placement]"
  >
    <template v-if="sponsors">
      <a
        v-for="{ url, img, name } of resolveList(sponsors)"
        class="sponsor-item"
        :href="url"
        target="_blank"
        rel="sponsored noopener"
      >
        <img :src="`${img}`" :alt="name" />
      </a>
    </template>
    <a
      v-if="placement !== 'page' && tier !== 'special'"
      href="/sponsor/"
      class="sponsor-item action"
      >Become a Sponsor</a
    >
    <a
      v-if="tier === 'special' && sponsors && !sponsors[tier]?.length"
      href="mailto:sponsor@vuejs.org?subject=Vue.js%20special%20sponsor%20inquiry"
      class="sponsor-item action"
      >Inquire about Special Sponsorship</a
    > -->
  </div>
</template>