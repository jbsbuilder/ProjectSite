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
    <div class="fixed top-0 w-full z-50 shadow-sm">
        <UNavigationMenu color="primary" :items="items" class="w-full flex justify-center" />
    </div>
    <div class="h-16"></div> <!-- Spacer to prevent content from hiding behind the navbar -->
</template>
