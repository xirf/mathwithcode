<script setup lang="ts">
import { VPTeamMembers } from "vitepress/theme"
import contributor from "../../contributors";
import sponsors from '../../sponsors';
// import SponsorsGroup from "./SponsorsGroup.vue";
</script>

<template>
    <section class="vp-doc flex flex-col items-center mt-10">
        <h2 id="meet-the-team" class="font-normal pt-10 pb-2">
            Kontributor
        </h2>
        <div class="w-full p-10">
            <VPTeamMembers size="small" :members="contributor" />
        </div>
    </section>

    <section id="sponsors" class="vp-doc flex flex-col items-center mt-10">
        <h2 id="project-sponsors" class="font-normal pt-10 pb-2">Sponsor</h2>
        <div class="w-full p-10 flex flex-wrap justify-center items-center gap-1">
            <template v-for="{ url, img, name } of sponsors?.special">
                <a :href="url" target="_blank" rel="sponsored noopener" class="decoration-none! w-full md:w-fit" >
                    <div
                        class="bg-base-soft p-2 w-full md:w-82 h-36 flex items-center justify-center object-contain relative opacity-90 transform transition-transform duration-300 ease-in-out hover:opacity-100 hover:-translate-y-1">
                        <img :src="img" :alt="name" class="transition-all duration-300 h-full object-contain" />
                    </div>
                </a>
            </template>
            <a href="/sponsors" class="decoration-none! w-full md:w-fit" >
                <div
                    class="bg-base-soft p-2 w-full md:w-82 h-36 flex items-center justify-center opacity-90 transform transition-transform duration-300 ease-in-out hover:opacity-100 hover:-translate-y-1">
                    <p class="text-center text-xs">
                        Menjadi Sponsor
                    </p>
                </div>
            </a>
        </div>
    </section>

</template>