<script setup lang="ts">
import { inBrowser, useData } from 'vitepress'
import { watchEffect, ref } from 'vue'
import '../style.css'

const { lang } = useData()
watchEffect(() => {
    if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
    }
})

const open = ref(false)

if (inBrowser) {
    const consent = localStorage.getItem('consent')
    if (!consent) {
        setTimeout(() => {
            open.value = true
        }, 1000)
    }
}

const closeConsent = () => {
    open.value = false
    localStorage.setItem('consent', 'true')
}
</script>

<template>
    <transition name="fade-slide">
        <div v-if="open"
            class="p-4 fixed inset-x-4 bottom-10 border border-gray-500/50 border-solid bg-gray-500/20 backdrop-blur-md rounded-lg z-1000 flex flex-col justify-flex-end sm:max-w-md sm:left-auto sm:right-10"
            id="consent">
            <div>
                Situs ini sedang dalam pengembangan. Materi mungkin belum lengkap dan membutuhkan peninjauan lebih
                lanjut.
            </div>
            <button class="mt-4 font-bold w-fit px20px line-height-38px bg-blue-500 text-white rounded-full"
                @click="closeConsent">
                Okei
            </button>
        </div>
    </transition>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
