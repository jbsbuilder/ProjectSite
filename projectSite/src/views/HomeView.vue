<script setup lang="ts">
</script>

<template>
  <UContainer class="py-16">
    <UCard>
      <template #header>
        <h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>
      </template>

      <div class="py-8">
        <p class="text-lg mb-6">
          Hello! I'm a passionate developer focused on creating beautiful and functional web applications.
        </p>

        <p class="text-lg mb-6">
          This portfolio showcases my projects and skills in web development, with a focus on Vue.js, Nuxt UI,
          and modern frontend technologies.
        </p>

        <UDivider class="my-6" />

        <h2 class="text-2xl font-semibold mb-4">What I Do</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <UCard>
            <template #header>
              <div class="flex justify-center py-2">
                <UIcon name="i-lucide-code" class="text-4xl text-primary" />
              </div>
            </template>
            <div class="text-center">
              <h3 class="text-xl font-medium">Web Development</h3>
              <p class="mt-2">Creating responsive and interactive web applications</p>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex justify-center py-2">
                <UIcon name="i-lucide-layout" class="text-4xl text-primary" />
              </div>
            </template>
            <div class="text-center">
              <h3 class="text-xl font-medium">UI/UX Design</h3>
              <p class="mt-2">Designing intuitive and engaging user interfaces</p>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex justify-center py-2">
                <UIcon name="i-lucide-rocket" class="text-4xl text-primary" />
              </div>
            </template>
            <div class="text-center">
              <h3 class="text-xl font-medium">Performance Optimization</h3>
              <p class="mt-2">Building fast and efficient applications</p>
            </div>
          </UCard>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-center gap-4">
          <UButton to="/about" color="primary">About Me</UButton>
          <UButton to="/projects" color="secondary">My Projects</UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
