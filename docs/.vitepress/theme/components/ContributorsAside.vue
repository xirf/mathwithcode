<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
    <div class="mb-8 mt-8 w-full" v-if="frontmatter.contributors">
        <h2 class="text-md font-black mb-2" id="kontributor">
            Kontributor
        </h2>
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