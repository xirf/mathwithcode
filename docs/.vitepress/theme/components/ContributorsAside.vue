<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter, lang } = useData();

const i18n = {
  'id-ID': {
    title: 'Kontributor'
  },
  'en-US': {
    title: 'Contributors'
  }
}

// fix reactivity on language changes
const translation = computed(() =>
  i18n[lang.value as keyof typeof i18n] || i18n['id-ID']
)
</script>

<template>
    <div class="mb-8 mt-8 w-full" v-if="frontmatter.contributors">
        <h4 class="text-md font-black mb-2" id="kontributor">
            {{ translation.title }}
        </h4>
        <div class="w-full flex gap-2 flex-col w-full">
            <div v-for="contributor in frontmatter.contributors" :key="contributor.username" class="w-full">
                <a :href="`https://github.com/${contributor.username}`" target="_blank" rel="noopener noreferrer" class="w-full">
                    <div class="flex items-center gap-4 bg-gray/10 dark:bg-gray/5 hover:(bg-gray/25 dark:bg-gray/10) px-4 py-2 rounded-md duration-500 ease-in-out w-full">
                        <img :src="`https://avatars.githubusercontent.com/${contributor.username}`" alt="Avatar" class="rounded-full w-8 h-8">
                        <span class="font-bold max-w-36 truncate">{{ contributor.name }}</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
