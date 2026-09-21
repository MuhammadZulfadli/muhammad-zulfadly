<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isMenuOpen = ref(false);

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<template>
    <div class="app-shell">
        <header class="site-header">
            <nav class="site-nav" aria-label="Primary navigation">
                <RouterLink
                    to="/"
                    class="brand"
                    aria-label="Muhammad Zulfadly home"
                    @click="closeMenu"
                >
                    <span class="brand__mark">Z</span>
                    <span>Muhammad Zulfadly</span>
                </RouterLink>
                <button
                    class="menu-toggle"
                    type="button"
                    :aria-expanded="isMenuOpen"
                    aria-controls="primary-navigation"
                    aria-label="Toggle navigation menu"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
                <div
                    id="primary-navigation"
                    class="nav-links"
                    :class="{ 'nav-links--open': isMenuOpen }"
                >
                    <RouterLink to="/" @click="closeMenu">Home</RouterLink>
                    <a href="#skills" @click="closeMenu">Skills</a>
                    <a href="#experience" @click="closeMenu">Experience</a>
                    <a href="#projects" @click="closeMenu">Projects</a>
                    <a href="#contact" @click="closeMenu">Contact</a>
                </div>
            </nav>
        </header>

        <main class="site-main"><RouterView /></main>

        <footer class="site-footer">
            <div class="site-footer__inner">
                <div>
                    <RouterLink to="/" class="brand">
                        <span class="brand__mark">Z</span>
                        <span>Muhammad Zulfadly</span>
                    </RouterLink>
                    <p class="footer-copy">
                        Frontend Developer · Building thoughtful web
                        experiences.
                    </p>
                </div>
                <div class="footer-links">
                    <a
                        href="https://github.com/MuhammadZulfadli"
                        target="_blank"
                        rel="noopener noreferrer"
                        >GitHub</a
                    >
                    <a
                        href="https://www.linkedin.com/in/muhammad-zulfadli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >LinkedIn</a
                    >
                    <a href="mailto:zulfadlisimatupang48@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    </div>
</template>
