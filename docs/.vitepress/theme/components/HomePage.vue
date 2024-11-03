<script setup lang="ts">
import { useData } from "vitepress"
import { VPTeamMembers } from "vitepress/theme"
import contributor from "../../contributors";

const { lang } = useData()

const i18n = {
  'id-ID': {
    title: 'Kontributor'
  },
  'en-US': {
    title: 'Contributors'
  }
}

const translation = i18n[lang.value as keyof typeof i18n] || i18n['id-ID'] // fallback to id-ID
</script>

<template>
    <div class="content">
        <div class="content-container">
            <main class="main">
                <div class="vp-doc flex flex-col items-center mt-10">
                    <h2 id="meet-the-team" class="font-normal pt-10 pb-2">
                        {{ translation.title }}
                    </h2>
                    <div class="w-full p-10">
                        <VPTeamMembers size="small" :members="contributor" />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
