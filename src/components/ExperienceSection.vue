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
    <section id="experience" class="section section--canvas">
        <div class="section-inner">
            <div class="section-heading">
                <span class="section-kicker">Career history</span>
                <h2 class="section-title">Professional experience</h2>
                <p class="section-copy">
                    My journey as a software developer and continuous learning
                    path.
                </p>
            </div>
            <div class="experience-list">
                <div
                    v-for="(exp, index) in experiences"
                    :key="index"
                    class="experience-item"
                >
                    <time class="experience-period">{{ exp.duration }}</time>
                    <div>
                        <h3 class="experience-role">{{ exp.role }}</h3>
                        <p class="experience-company">{{ exp.company }}</p>
                        <p class="experience-description">
                            {{ exp.description }}
                        </p>
                        <ul v-if="exp.highlights" class="experience-highlights">
                            <li v-for="(item, i) in exp.highlights" :key="i">
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div v-if="exp.technologies" class="tag-list">
                            <span
                                v-for="(tech, i) in exp.technologies"
                                :key="i"
                                class="tag"
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
