<script setup>
import HeroSection from "../components/HeroSection.vue";
import SkillsSection from "../components/SkillsSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<template>
    <div class="pb-24">
        <HeroSection v-scroll-reveal />
        <SkillsSection v-scroll-reveal />
        <ExperienceSection v-scroll-reveal />
        <ProjectsSection v-scroll-reveal />
        <ContactSection v-scroll-reveal />
    </div>
</template>
