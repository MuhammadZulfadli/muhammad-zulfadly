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
        bg: "bg-accent-orange",
        text: "text-canvas",
        img: "srs.png",
    },
    {
        title: "BIMON",
        description:
            "An interactive web platform that streamlines the administrative, mentoring, and examination scheduling processes for master's and doctoral students. Built with a focus on a clean User Experience (UX), it transforms complex multi-level approval workflows and document management into a simple, user-friendly interface for both students and academic staff.",
        type: "Academic System",
        stack: ["Vue.js", "Tailwind", "Nest JS", "REST API", "GraphQL"],
        link: "https://bimon.ut.ac.id/",
        bg: "bg-accent-orange",
        text: "text-canvas",
        img: "bimon.png",
    },
    {
        title: "SALUT UT",
        description:
            "A modern information system app for managing students of Universitas Terbuka in certain areas, such as admissions and registrations.",
        type: "Information System",
        stack: ["Vue.js", "Tailwind", "REST API", "GraphQL", "Chart JS"],
        link: "https://salut.ut.ac.id/",
        bg: "bg-accent-orange",
        text: "text-canvas",
        img: "salut.png",
    },
    {
        title: "MYUT TIPS",
        description:
            "A Portal for TUTORs of Universitas Terbuka built with Nuxt.js and Tailwind CSS, featuring server-side rendering and dynamic filtering.",
        type: "Tutor Portal",
        stack: ["Nuxt.js", "Tailwind", "Pinia"],
        link: "https://myut-tips.ut.ac.id/",
        bg: "bg-accent-teal",
        text: "text-canvas",
        img: "myut-tips.png",
    },
    {
        title: "AKSARA",
        description:
            "Information System app for monitoring collaborate mitra of Universitas Terbuka.",
        type: "Monitoring System",
        stack: ["Vue.js", "Tailwind", "Vite", "Chart JS"],
        link: "https://aksara.ut.ac.id/",
        bg: "bg-accent-purple",
        text: "text-accent-purple-deep",
        img: "aksara.png",
    },

    {
        title: "LuxSpace",
        description:
            "A Furniture Landing page for home living product like IKEA, Informa, and Dekoruma",
        type: "Landing Page",
        stack: ["Vue.js", "Tailwind"],
        link: "https://furnites.netlify.app",
        bg: "bg-accent-orange",
        text: "text-canvas",
        img: "luxspace.png",
    },
];

const getImageUrl = (name) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href;
};
</script>

<template>
    <section
        id="projects"
        class="w-full py-24 border-t border-hairline bg-canvas-soft"
    >
        <div class="max-w-7xl mx-auto px-6 md:px-8">
            <div class="mb-12">
                <span
                    class="eyebrow text-primary font-semibold tracking-[0.125px]"
                    >Portfolio</span
                >
                <h2 class="heading-1 text-ink mt-2 mb-4">Featured Projects</h2>
                <p class="body-md text-ink-secondary">
                    Selected work that demonstrates my technical capabilities
                    and design sense.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    class="group flex flex-col bg-canvas rounded-lg border border-hairline overflow-hidden shadow-soft-sm hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300"
                >
                    <div
                        class="h-56 relative overflow-hidden border-b border-hairline bg-canvas-soft"
                    >
                        <img
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            :src="getImageUrl(project.img)"
                            :alt="`${project.title} preview`"
                        />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300"
                        ></div>
                        <span
                            class="absolute left-4 top-4 eyebrow text-[10px] text-canvas bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-canvas/20"
                        >
                            {{ project.type }}
                        </span>
                    </div>

                    <!-- Card Body Details -->
                    <div class="p-6 flex flex-col flex-grow">
                        <h3
                            class="heading-3 text-ink mb-2 group-hover:text-primary transition-colors leading-tight"
                        >
                            <a
                                :href="project.link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ project.title }}
                            </a>
                        </h3>
                        <p
                            class="body-sm text-ink-secondary mb-6 flex-grow leading-relaxed"
                        >
                            {{ project.description }}
                        </p>

                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span
                                v-for="tag in project.stack"
                                :key="tag"
                                class="eyebrow text-[9px] bg-canvas-soft text-ink-muted px-2 py-1 rounded border border-hairline hover:text-ink transition-colors"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <a
                            :href="project.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-2"
                        >
                            View project
                            <span
                                class="transition-transform duration-200 group-hover:translate-x-1"
                                >→</span
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
