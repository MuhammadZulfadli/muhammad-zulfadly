<script setup>
const skills = [
    {
        name: "Javascript",
        category: "Language",
        icon: "js",
        bg: "bg-accent-orange/10",
        text: "text-accent-orange-deep",
    },
    {
        name: "Typescript",
        category: "Language",
        icon: "typescript",
        bg: "bg-accent-orange/10",
        text: "text-accent-orange-deep",
    },
    {
        name: "Vue",
        category: "Framework",
        icon: "vue",
        bg: "bg-accent-green/10",
        text: "text-accent-green",
    },
    {
        name: "Nuxt.js",
        category: "Framework",
        icon: "nuxt",
        bg: "bg-accent-teal/10",
        text: "text-accent-teal",
    },
    {
        name: "Tailwind CSS",
        category: "Styling",
        icon: "tailwind",
        bg: "bg-accent-sky/10",
        text: "text-accent-sky",
    },
    {
        name: "GraphQL",
        category: "API Integration",
        iconText: "GQL",
        bg: "bg-accent-pink/10",
        text: "text-accent-pink",
    },
    {
        name: "REST API",
        category: "API Integration",
        iconText: "API",
        bg: "bg-accent-sky/10",
        text: "text-accent-sky",
    },
    {
        name: "Git",
        category: "Tools",
        icon: "git",
        bg: "bg-accent-purple/20",
        text: "text-accent-purple-deep",
    },
    {
        name: "Linux",
        category: "Environment",
        icon: "linux",
        bg: "bg-accent-brown/10",
        text: "text-accent-brown",
    },
];

const getImageUrl = (name) => {
    return new URL(`../assets/icons/${name}.png`, import.meta.url).href;
};
</script>

<template>
    <section id="skills" class="section section--warm">
        <div class="section-inner">
            <div class="section-heading">
                <span class="section-kicker">Capabilities</span>
                <h2 class="section-title">Core competencies</h2>
                <p class="section-copy">
                    My primary toolkit for building modern web applications.
                </p>
            </div>
            <div class="skills-grid">
                <div
                    v-for="skill in skills"
                    :key="skill.name"
                    class="skill-card"
                >
                    <div class="skill-card__icon">
                        <img
                            v-if="skill.icon"
                            :src="getImageUrl(skill.icon)"
                            :alt="skill.name"
                        />
                        <span v-else>{{ skill.iconText }}</span>
                    </div>
                    <h3 class="skill-card__name">{{ skill.name }}</h3>
                    <span class="skill-card__category">{{
                        skill.category
                    }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
