<script setup lang="ts">
import { VPTeamMembers } from "vitepress/theme"
import contributor from "../../contributors";
</script>

<template>
    <div class="content">
        <div class="content-container">
            <main class="main">
                <div class="vp-doc flex flex-col items-center mt-10">
                    <h2 id="meet-the-team" class="font-normal pt-10 pb-2">
                        Kontributor
                    </h2>
                    <div class="w-full p-10">
                        <VPTeamMembers size="small" :members="contributor" />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>