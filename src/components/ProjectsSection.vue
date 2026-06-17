<script setup>
const projects = [
  {
    title: 'SRS (Student Record System)',
    description: 'A modern information system app for managing students of Universitas Terbuka, such as admissions, registrations, and academic administrative tools.',
    stack: ['Vue', 'Vuex', 'Vue Router', 'Tailwind', 'Scss', 'REST API', 'GraphQL'],
    link: 'https://srs5g.ut.ac.id/',
    img: 'srs.png'
  },
  {
    title: 'MYUT TIPS',
    description: 'A Portal for TUTORs of Universitas Terbuka built with Nuxt.js and Tailwind CSS, featuring server-side rendering and dynamic filtering.',
    stack: ['Nuxt.js', 'Tailwind', 'Pinia'],
    link: 'https://myut-tips.ut.ac.id/',
    img: 'myut-tips.png'
  },
  {
    title: 'AKSARA',
    description: 'Information System app for monitoring collaborate mitra of Universitas Terbuka.',
    stack: ['Vue 3', 'Tailwind', 'Vite', 'Chart JS'],
    link: 'https://aksara.ut.ac.id/',
    img: 'aksara.png'
  },
  {
    title: 'SALUT UT',
    description: 'A modern information system app for managing students of Universitas Terbuka in certain areas, such as admissions and registrations.',
    stack: ['Vue', 'Tailwind', 'REST API', 'GraphQL', 'Chart JS'],
    link: 'https://salut.ut.ac.id/',
    img: 'salut.png'
  },
]

const getImageUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="projects" class="w-full py-24 bg-paper-white">
    <div class="max-w-[1080px] mx-auto px-6 md:px-8">
      <div class="mb-16 flex flex-col items-center text-center">
        <h2 class="font-heading text-[32px] text-ink-black font-light mb-4">Featured Projects</h2>
        <p class="font-inter text-[16px] text-graphite max-w-2xl">
          Selected work that demonstrates my technical capabilities and design sense.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[80px]">
        <div v-for="(project, index) in projects" :key="index"
          class="group flex flex-col bg-paper-white rounded-[12px] shadow-subtle hover:shadow-sm transition-shadow duration-300">

          <!-- Preview Panel mock image -->
          <div
            class="h-[280px] relative flex items-center justify-center overflow-hidden border border-hairline rounded-t-[12px] bg-cover bg-center bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-500"
            :style="{ backgroundImage: `url(${getImageUrl(project.img)})` }">
          </div>

          <!-- Card Body Details -->
          <div class="p-[24px] flex flex-col flex-grow">
            <h3 class="font-heading text-[26px] font-light text-ink-black mb-3 leading-[1]">
              <a :href="project.link" target="_blank" class="hover:text-graphite transition-colors">
                {{ project.title }}
              </a>
            </h3>
            <p class="font-inter text-[15px] text-graphite mb-6 flex-grow leading-[1.6]">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in project.stack" :key="tag"
                class="font-inter text-[12px] bg-fog text-graphite px-[8px] py-[4px] rounded-[4px]">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>