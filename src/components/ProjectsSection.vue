<script setup>
const projects = [
    {
        title: "SRS (Student Record System)",
        description:
            "A modern information system app for managing students of Universitas Terbuka, such as admissions, registrations, and academic administrative tools.",
        type: "Academic System",
        stack: [
            "Vue.js",
            "Vuex",
            "Vue Router",
            "Tailwind",
            "Scss",
            "Nest JS",
            "REST API",
            "GraphQL",
        ],
        link: "https://srs5g.ut.ac.id/",
        img: "srs.png",
    },
    {
        title: "BIMON",
        description:
            "An interactive web platform that streamlines the administrative, mentoring, and examination scheduling processes for master's and doctoral students. Built with a focus on a clean User Experience (UX), it transforms complex multi-level approval workflows and document management into a simple, user-friendly interface for both students and academic staff.",
        type: "Academic System",
        stack: ["Vue.js", "Tailwind", "Nest JS", "REST API", "GraphQL"],
        link: "https://bimon.ut.ac.id/",
        img: "bimon.png",
    },
    {
        title: "SALUT UT",
        description:
            "A modern information system app for managing students of Universitas Terbuka in certain areas, such as admissions and registrations.",
        type: "Information System",
        stack: ["Vue.js", "Tailwind", "REST API", "GraphQL", "Chart JS"],
        link: "https://salut.ut.ac.id/",
        img: "salut.png",
    },
    {
        title: "MYUT TIPS",
        description:
            "A Portal for TUTORs of Universitas Terbuka built with Nuxt.js and Tailwind CSS, featuring server-side rendering and dynamic filtering.",
        type: "Tutor Portal",
        stack: ["Nuxt.js", "Tailwind", "Pinia"],
        link: "https://myut-tips.ut.ac.id/",
        img: "myut-tips.png",
    },
    {
        title: "AKSARA",
        description:
            "Information System app for monitoring collaborate mitra of Universitas Terbuka.",
        type: "Monitoring System",
        stack: ["Vue.js", "Tailwind", "Vite", "Chart JS"],
        link: "https://aksara.ut.ac.id/",
        img: "aksara.png",
    },

    {
        title: "LuxSpace",
        description:
            "A Furniture Landing page for home living product like IKEA, Informa, and Dekoruma",
        type: "Landing Page",
        stack: ["Vue.js", "Tailwind"],
        link: "https://furnites.netlify.app",
        img: "luxspace.png",
    },
];

const getImageUrl = (name) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href;
};
</script>

<template>
    <section id="projects" class="border-b border-hairline bg-surface py-[60px] sm:py-[100px]">
        <div class="mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)]">
            <div class="mb-8 max-w-[660px] sm:mb-12">
                <span class="mb-3 block font-mono text-xs font-bold uppercase tracking-[.04em] text-coral">Portfolio</span>
                <h2 class="mb-4 font-display text-[clamp(29px,3vw,32px)] font-bold leading-[1.2] text-ink">Featured projects</h2>
                <p class="m-0 text-base leading-normal text-ink-muted">
                    Selected work that demonstrates my technical capabilities
                    and design sense.
                </p>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    class="group flex min-w-0 flex-col overflow-hidden rounded-card bg-canvas shadow-elevation transition-transform duration-200 hover:-translate-y-1"
                >
                    <div class="flex flex-1 flex-col p-6">
                        <h3 class="mb-3 font-display text-xl font-semibold leading-tight text-ink">
                            <a
                                :href="project.link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ project.title }}
                            </a>
                        </h3>
                        <p class="mb-6 line-clamp-4 text-sm leading-[1.55] text-ink-muted">
                            {{ project.description }}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tag in project.stack"
                                :key="tag"
                                class="rounded-md border border-hairline px-2.5 py-1.5 font-mono text-xs text-slate"
                            >
                                {{ tag }}
                            </span>
                        </div>
                        <a
                            :href="project.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-6 inline-flex w-fit gap-2 font-display text-sm font-semibold text-ink transition-colors hover:text-coral"
                        >
                            View project
                            <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
