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
    <section id="skills" class="border-b border-hairline bg-surface py-[60px] sm:py-[100px]">
        <div class="mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)]">
            <div class="mb-8 max-w-[660px] sm:mb-12">
                <span class="mb-3 block font-mono text-xs font-bold uppercase tracking-[.04em] text-coral">Capabilities</span>
                <h2 class="mb-4 font-display text-[clamp(29px,3vw,32px)] font-bold leading-[1.2] text-ink">Core competencies</h2>
                <p class="m-0 text-base leading-normal text-ink-muted">
                    My primary toolkit for building modern web applications.
                </p>
            </div>
            <div class="grid grid-cols-2 border-l border-t border-hairline sm:grid-cols-3 lg:grid-cols-4">
                <div
                    v-for="skill in skills"
                    :key="skill.name"
                    class="min-h-[168px] border-b border-r border-hairline bg-canvas p-5 transition-colors duration-200 hover:bg-surface-raised sm:min-h-[196px] sm:p-6"
                >
                    <div class="mb-6 grid size-11 place-items-center rounded-full bg-hairline font-mono text-[13px] font-bold text-ink sm:mb-8">
                        <img
                            v-if="skill.icon"
                            :src="getImageUrl(skill.icon)"
                            :alt="skill.name"
                            class="size-[26px] object-contain"
                        />
                        <span v-else>{{ skill.iconText }}</span>
                    </div>
                    <h3 class="mb-1 font-display text-lg font-semibold text-ink">{{ skill.name }}</h3>
                    <span class="text-[13px] text-body">{{
                        skill.category
                    }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
