<script setup lang="ts">
const skills = [
    { name: 'Vue.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 }
]
</script>

<template>
    <UContainer class="py-16">
        <UCard>
            <template #header>
                <h1 class="text-4xl font-bold">About Me</h1>
            </template>

            <div class="py-8">
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3 flex justify-center">
                        <UAvatar size="2xl" src="https://via.placeholder.com/300" alt="Profile Photo"
                            class="h-64 w-64 rounded-full" />
                    </div>

                    <div class="md:w-2/3">
                        <h2 class="text-3xl font-semibold mb-4">Hi, I'm [Your Name]</h2>
                        <p class="text-lg mb-4">
                            I'm a passionate web developer with 5+ years of experience creating modern, responsive web
                            applications.
                            I specialize in Vue.js and the broader JavaScript ecosystem.
                        </p>

                        <p class="text-lg mb-6">
                            My goal is to build applications that are not only functional but also provide an
                            exceptional user
                            experience.
                            I love learning new technologies and finding elegant solutions to complex problems.
                        </p>

                        <div class="flex flex-wrap gap-2 mb-6">
                            <UBadge
                                v-for="tech in ['Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Git']"
                                :key="tech" color="primary" variant="soft" class="text-sm">{{ tech }}</UBadge>
                        </div>
                    </div>
                </div>

                <UDivider class="my-8" />

                <h2 class="text-2xl font-semibold mb-6">My Skills</h2>
                <div class="space-y-4 mb-8">
                    <div v-for="skill in skills" :key="skill.name" class="mb-2">
                        <div class="flex justify-between mb-1">
                            <span class="font-medium">{{ skill.name }}</span>
                            <span>{{ skill.level }}%</span>
                        </div>
                        <UProgress :value="skill.level" color="primary" class="h-2" />
                    </div>
                </div>

                <UDivider class="my-8" />

                <h2 class="text-2xl font-semibold mb-6">Experience</h2>
                <UTimeline>
                    <UTimelineItem>
                        <template #title>Senior Frontend Developer</template>
                        <template #description>Acme Inc. | 2020 - Present</template>
                        <p class="mt-2">
                            Lead developer for multiple client projects, focusing on Vue.js and modern frontend
                            technologies.
                        </p>
                    </UTimelineItem>

                    <UTimelineItem>
                        <template #title>Web Developer</template>
                        <template #description>Tech Solutions | 2018 - 2020</template>
                        <p class="mt-2">
                            Worked on various web applications using JavaScript frameworks and responsive design
                            principles.
                        </p>
                    </UTimelineItem>

                    <UTimelineItem>
                        <template #title>Junior Developer</template>
                        <template #description>StartUp Co. | 2016 - 2018</template>
                        <p class="mt-2">
                            Started my career developing websites and learning modern web development practices.
                        </p>
                    </UTimelineItem>
                </UTimeline>
            </div>

            <template #footer>
                <UButton to="/projects" color="primary">View My Projects</UButton>
            </template>
        </UCard>
    </UContainer>
</template>
