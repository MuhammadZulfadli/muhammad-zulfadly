<script setup>
const projects = [
  {
    title: 'SRS (Student Record System)',
    description: 'A modern information system app for managing students of Universitas Terbuka, such as admissions, registrations, and academic administrative tools.',
    stack: ['Vue', 'Vuex', 'Vue Router', 'Tailwind', 'Scss', 'REST API', 'GraphQL'],
    link: 'https://srs5g.ut.ac.id/',
    bg: 'bg-accent-orange',
    text: 'text-canvas',
    img: 'srs.png'
  },
  {
    title: 'MYUT TIPS',
    description: 'A Portal for TUTORs of Universitas Terbuka built with Nuxt.js and Tailwind CSS, featuring server-side rendering and dynamic filtering.',
    stack: ['Nuxt.js', 'Tailwind', 'Pinia'],
    link: 'https://myut-tips.ut.ac.id/',
    bg: 'bg-accent-teal',
    text: 'text-canvas',
    img: 'myut-tips.png'
  },
  {
    title: 'AKSARA',
    description: 'Information System app for monitoring collaborate mitra of Universitas Terbuka.',
    stack: ['Vue 3', 'Tailwind', 'Vite', 'Chart JS'],
    link: 'https://aksara.ut.ac.id/',
    bg: 'bg-accent-purple',
    text: 'text-accent-purple-deep',
    img: 'aksara.png'
  },
  {
    title: 'SALUT UT',
    description: 'A modern information system app for managing students of Universitas Terbuka in certain areas, such as admissions and registrations.',
    stack: ['Vue', 'Tailwind', 'REST API', 'GraphQL', 'Chart JS'],
    link: 'https://salut.ut.ac.id/',
    bg: 'bg-accent-orange',
    text: 'text-canvas',
    img: 'salut.png'
  },

]

const getImageUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="projects" class="w-full py-24 border-t border-hairline bg-canvas-soft">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="mb-12">
        <span class="eyebrow text-primary font-semibold tracking-[0.125px]">Portfolio</span>
        <h2 class="heading-1 text-ink mt-2 mb-4">Featured Projects</h2>
        <p class="body-md text-ink-secondary">Selected work that demonstrates my technical capabilities and design
          sense.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index"
          class="group flex flex-col bg-canvas rounded-lg border border-hairline overflow-hidden hover:shadow-soft-sm transition-all duration-300">

          <!-- Notion Header Band with Project Background Image -->
          <div
            class="h-44 relative flex items-center justify-center overflow-hidden border-b border-hairline bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${getImageUrl(project.img)})` }">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
          </div>

          <!-- Card Body Details -->
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="heading-3 text-ink mb-2 group-hover:text-primary transition-colors leading-tight">
              <a :href="project.link" target="_blank">
                {{ project.title }}
              </a>

              <!-- <a :href="project.link" target="_blank"
                class="eyebrow text-[9px] bg-canvas-soft text-ink-muted px-2 py-1 rounded border border-hairline hover:text-ink transition-colors">
                ->
              </a> -->
            </h3>
            <p class="body-sm text-ink-secondary mb-6 flex-grow leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in project.stack" :key="tag"
                class="eyebrow text-[9px] bg-canvas-soft text-ink-muted px-2 py-1 rounded border border-hairline hover:text-ink transition-colors">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>