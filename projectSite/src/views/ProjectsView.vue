<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with product management, shopping cart, and payment processing.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js'],
        github: '#',
        demo: '#',
        featured: true
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing my projects and skills.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['Vue.js', 'Nuxt UI', 'Tailwind CSS'],
        github: '#',
        demo: '#',
        featured: true
    },
    {
        title: 'Task Manager App',
        description: 'A productivity application for managing tasks and projects with drag-and-drop functionality.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['Vue.js', 'Vuex', 'Firebase'],
        github: '#',
        demo: '#',
        featured: false
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather information with location search and forecast visualization.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
        github: '#',
        demo: '#',
        featured: false
    },
    {
        title: 'Recipe Finder',
        description: 'Search and save recipes from various cuisines with ingredient filtering.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['Vue.js', 'REST API', 'Tailwind CSS'],
        github: '#',
        demo: '#',
        featured: false
    },
    {
        title: 'Blogging Platform',
        description: 'Content management system with rich text editing and user authentication.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['Vue.js', 'Node.js', 'MongoDB'],
        github: '#',
        demo: '#',
        featured: false
    }
])

const featuredProjects = computed(() => projects.value.filter(project => project.featured))
const otherProjects = computed(() => projects.value.filter(project => !project.featured))
</script>

<template>
    <UContainer class="py-16">
        <h1 class="text-4xl font-bold mb-8">My Projects</h1>

        <div v-if="featuredProjects.length" class="mb-12">
            <h2 class="text-2xl font-semibold mb-6">Featured Projects</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <UCard v-for="project in featuredProjects" :key="project.title" class="overflow-hidden">
                    <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
                        <p class="mb-4">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            <UBadge v-for="tech in project.technologies" :key="tech" color="secondary" variant="soft">{{
                                tech }}</UBadge>
                        </div>
                        <div class="flex gap-4">
                            <UButton :to="project.github" color="gray" variant="outline">
                                <template #leading>
                                    <UIcon name="i-simple-icons-github" />
                                </template>
                                GitHub
                            </UButton>
                            <UButton :to="project.demo" color="primary">
                                <template #leading>
                                    <UIcon name="i-lucide-external-link" />
                                </template>
                                Live Demo
                            </UButton>
                        </div>
                    </div>
                </UCard>
            </div>
        </div>

        <div>
            <h2 class="text-2xl font-semibold mb-6">Other Projects</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <UCard v-for="project in otherProjects" :key="project.title">
                    <template #header>
                        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                    </template>
                    <div class="p-4">
                        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                        <p class="mb-4">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-1 mb-4">
                            <UBadge v-for="tech in project.technologies" :key="tech" color="secondary" variant="soft"
                                size="sm">
                                {{ tech }}</UBadge>
                        </div>
                    </div>
                    <template #footer>
                        <div class="flex gap-2">
                            <UButton :to="project.github" color="gray" variant="ghost" size="sm">
                                <UIcon name="i-simple-icons-github" />
                            </UButton>
                            <UButton :to="project.demo" color="primary" size="sm">View Project</UButton>
                        </div>
                    </template>
                </UCard>
            </div>
        </div>
    </UContainer>
</template>
