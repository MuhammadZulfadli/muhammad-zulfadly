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
    <section id="projects" class="section section--warm">
        <div class="section-inner">
            <div class="section-heading">
                <span class="section-kicker">Portfolio</span>
                <h2 class="section-title">Featured projects</h2>
                <p class="section-copy">Selected work that demonstrates my technical capabilities and design sense.</p>
            </div>
            <div class="project-grid">
                <div
                    v-for="(project, index) in projects"
                    :key="index"
                    class="project-card"
                >
                    <div class="project-card__image">
                        <img
                            :src="getImageUrl(project.img)"
                            :alt="`${project.title} preview`"
                        />
                        <span class="project-card__type">{{ project.type }}</span>
                    </div>
                    <div class="project-card__body">
                        <h3 class="project-card__title">
                            <a
                                :href="project.link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ project.title }}
                            </a>
                        </h3>
                        <p class="project-card__description">{{ project.description }}</p>
                        <div class="tag-list">
                            <span
                                v-for="tag in project.stack"
                                :key="tag"
                                class="tag"
                            >
                                {{ tag }}
                            </span>
                        </div>
                        <a
                            :href="project.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="project-card__link"
                        >
                            View project
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
