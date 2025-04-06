<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Home',
            icon: 'i-lucide-home',
            to: '/'
        },
        {
            label: 'About Me',
            icon: 'i-lucide-user',
            to: '/about'
        },
        {
            label: 'Projects',
            icon: 'i-lucide-briefcase',
            to: '/projects'
        }
    ]
])
</script>

<template>
    <UNavigationMenu color="primary" :items="items" class="w-full flex justify-center" />
</template>
