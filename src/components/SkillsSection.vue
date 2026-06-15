<script setup>
const skills = [
  { name: 'Javascript', category: 'Language', icon: 'js', bg: 'bg-accent-orange/10', text: 'text-accent-orange-deep' },
  { name: 'Typescript', category: 'Language', icon: 'typescript', bg: 'bg-accent-orange/10', text: 'text-accent-orange-deep' },
  { name: 'Vue', category: 'Framework', icon: 'vue', bg: 'bg-accent-green/10', text: 'text-accent-green' },
  { name: 'Nuxt.js', category: 'Framework', icon: 'nuxt', bg: 'bg-accent-teal/10', text: 'text-accent-teal' },
  { name: 'Tailwind CSS', category: 'Styling', icon: 'tailwind', bg: 'bg-accent-sky/10', text: 'text-accent-sky' },
  { name: 'Git', category: 'Tools', icon: 'git', bg: 'bg-accent-purple/20', text: 'text-accent-purple-deep' },
  { name: 'Linux', category: 'Environment', icon: 'linux', bg: 'bg-accent-brown/10', text: 'text-accent-brown' }
]

const getImageUrl = (name) => {
  return new URL(`../assets/icons/${name}.png`, import.meta.url).href
}
</script>

<template>
  <section id="skills" class="w-full py-24 border-t border-hairline bg-canvas-soft">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="mb-12">
        <span class="eyebrow text-primary font-semibold tracking-[0.125px]">Capabilities</span>
        <h2 class="heading-1 text-ink mt-2 mb-4">Core Competencies</h2>
        <p class="body-md text-ink-secondary">My primary toolkit for building modern web applications.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div v-for="skill in skills" :key="skill.name"
          class="group p-6 bg-canvas rounded-lg border border-hairline hover:shadow-soft-sm transition-all duration-300 text-center">
          <!-- Sticker graphic icon style -->
          <div
            class="w-12 h-12 mx-auto mb-4 rounded-md flex items-center justify-center font-bold tracking-tight text-sm group-hover:scale-105 transition-transform duration-200 overflow-hidden"
            :class="[skill.bg, skill.text]">
            <img :src="getImageUrl(skill.icon)" :alt="skill.name" class="w-full h-full object-contain p-2" />
          </div>
          <h3 class="text-ink font-semibold text-base mb-1">{{ skill.name }}</h3>
          <span class="eyebrow text-[10px] text-ink-muted tracking-wider uppercase">{{ skill.category }}</span>
        </div>
      </div>
    </div>
  </section>
</template>