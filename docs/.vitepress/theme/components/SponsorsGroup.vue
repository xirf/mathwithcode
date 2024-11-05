<script setup>
import { sponsors, SponsorData } from '../../sponsors';
</script>

<template>
  <template v-for="{ url, img, name } of sponsors?.special">
    <a :href="url" target="_blank" rel="sponsored noopener" class="decoration-none! w-full md:w-fit">
      <div
        class="bg-base-soft p-2 w-full md:w-82 h-36 flex items-center justify-center object-contain relative opacity-90 transform transition-transform duration-300 ease-in-out hover:opacity-100 hover:-translate-y-1">
        <img :src="img" :alt="name" class="transition-all duration-300 h-full object-contain" />
      </div>
    </a>
  </template>
</template>