<script setup>
const experiences = [
    {
        role: "Frontend Developer",
        company: "Universitas Terbuka",
        duration: "2020 - Present",
        description:
            "As a Frontend Developer, I focus on building responsive and user-friendly web applications by translating Figma designs into production-ready interfaces, integrating backend services through REST API and GraphQL, and collaborating closely with UI/UX and back-end teams.",
        highlights: [
            "Translating Figma designs from UI/UX teams into responsive web interfaces",
            "Building reusable frontend components with Vue, Nuxt.js, and Tailwind CSS",
            "Collaborating with back-end developers to integrate backend services using REST API and GraphQL",
            "Implementing mobile-friendly responsive layouts across desktop, tablet, and mobile devices",
            "Maintaining and improving web application interfaces for better usability, consistency, and performance",
        ],
        technologies: [
            "Javascript",
            "TypeScript",
            "Vue",
            "Nuxt.js",
            "Tailwind CSS",
            "REST API",
            "GraphQL",
        ],
    },

    {
        role: "Frontend Developer Bootcamp",
        company: "Praxis Academy",
        duration: "August 2020 - November 2020",
        description:
            "The full time Front End bootcamp at Praxis Academy is designed to transform myself from coding novice to programming advanced in twelve weeks of intensive technical and career readiness training. Bootcamp with a solid foundation of coding Front End experiences using Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), Javascript, Vue Js, Node Js",
        highlights: [
            "Complete mini projects",
            "Learned with mentor and colleagues team",
            "Implemented best practice of Frontend Development",
        ],
        technologies: ["Vue", "JavaScript", "Node JS", "CSS"],
    },
    {
        role: "Software Engineer Bootcamp",
        company: "Refactory",
        duration: "February 2020 - April 2020",
        description:
            "A fullstack developer bootcamp focused on learning basic programming fundamentals, backend development with JavaScript, Node.js, Express.js, and SQL databases, as well as frontend development using Vue.js. The program included hands-on practice and mini projects to strengthen technical understanding and real-world implementation skills.",
        highlights: [
            "Learned basic programming fundamentals and problem-solving concepts",
            "Built backend services using JavaScript, Node.js, Express.js, and SQL databases",
            "Developed frontend interfaces using Vue.js",
            "Created mini projects as practical exercises throughout the bootcamp",
            "Used Git for code publishing, version control, and team collaboration",
        ],
        technologies: [
            "JavaScript",
            "Node.js",
            "Express JS",
            "SQL Database",
            "Vue",
            "Git",
        ],
    },
];
</script>

<template>
    <section id="experience" class="border-b border-hairline bg-canvas py-[60px] sm:py-[100px]">
        <div class="mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)]">
            <div class="mb-8 max-w-[660px] sm:mb-12">
                <span class="mb-3 block font-mono text-xs font-bold uppercase tracking-[.04em] text-coral">Career history</span>
                <h2 class="mb-4 font-display text-[clamp(29px,3vw,32px)] font-bold leading-[1.2] text-ink">Professional experience</h2>
                <p class="m-0 text-base leading-normal text-ink-muted">
                    My journey as a software developer and continuous learning
                    path.
                </p>
            </div>
            <div class="max-w-[1000px]">
                <div
                    v-for="(exp, index) in experiences"
                    :key="index"
                    class="grid grid-cols-1 gap-3 border-t border-hairline py-6 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8 sm:py-8 last:border-b"
                >
                    <time class="font-mono text-[13px] leading-normal text-body">{{ exp.duration }}</time>
                    <div>
                        <h3 class="font-display text-xl font-semibold leading-tight text-ink sm:text-2xl">{{ exp.role }}</h3>
                        <p class="my-1.5 mb-4 text-[15px] font-bold text-coral">{{ exp.company }}</p>
                        <p class="mb-5 text-base leading-[1.6] text-ink-muted">
                            {{ exp.description }}
                        </p>
                        <ul v-if="exp.highlights" class="mb-6 grid gap-2.5 p-0 text-sm leading-normal text-ink-muted">
                            <li v-for="(item, i) in exp.highlights" :key="i" class="grid grid-cols-[12px_1fr] gap-2 before:font-bold before:text-coral before:content-['—']">
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div v-if="exp.technologies" class="flex flex-wrap gap-2">
                            <span
                                v-for="(tech, i) in exp.technologies"
                                :key="i"
                                class="rounded-md border border-hairline px-2.5 py-1.5 font-mono text-xs text-slate"
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
