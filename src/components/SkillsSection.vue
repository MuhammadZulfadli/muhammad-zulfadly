<script setup>
const skills = [
  { name: 'Javascript', category: 'Language', icon: 'js' },
  { name: 'Typescript', category: 'Language', icon: 'typescript' },
  { name: 'Vue', category: 'Framework', icon: 'vue' },
  { name: 'Nuxt.js', category: 'Framework', icon: 'nuxt' },
  { name: 'Tailwind CSS', category: 'Styling', icon: 'tailwind' },
  { name: 'Git', category: 'Tools', icon: 'git' },
  { name: 'Linux', category: 'Environment', icon: 'linux' }
]

const getImageUrl = (name) => {
  return new URL(`../assets/icons/${name}.png`, import.meta.url).href
}
</script>

<template>
  <section id="skills" class="w-full py-24 bg-paper-white">
    <div class="max-w-[1080px] mx-auto px-6 md:px-8">
      <div class="mb-16 flex flex-col items-center">
        <h2 class="font-heading text-[32px] text-ink-black font-light mb-4">Core Competencies</h2>
        <p class="font-inter text-[16px] text-graphite text-center max-w-2xl">
          My primary toolkit for building modern web applications.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="skill in skills" :key="skill.name"
          class="bg-paper-white rounded-[12px] p-[24px] shadow-subtle flex flex-col items-center justify-center text-center transition-shadow hover:shadow-sm">
          
          <div
            class="w-12 h-12 mb-4 flex items-center justify-center grayscale opacity-80">
            <img :src="getImageUrl(skill.icon)" :alt="skill.name" class="w-full h-full object-contain p-2" />
          </div>
          <h3 class="font-heading text-[26px] font-light text-ink-black mb-1">{{ skill.name }}</h3>
          <span class="font-inter text-[12px] text-graphite tracking-wider uppercase">{{ skill.category }}</span>
        </div>
      </div>
    </div>
  </section>
</template>