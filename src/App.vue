<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isMenuOpen = ref(false);

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<template>
    <div class="flex min-h-screen flex-col overflow-hidden">
        <header
            class="sticky top-0 z-50 border-b border-border-soft/70 bg-white/70 backdrop-blur-md"
        >
            <nav
                class="relative mx-auto flex min-h-[68px] w-[calc(100%-32px)] max-w-[1320px] items-center justify-between gap-6 sm:w-[calc(100%-48px)]"
                aria-label="Primary navigation"
            >
                <RouterLink
                    to="/"
                    class="inline-flex shrink-0 items-center gap-3 font-display text-sm font-bold sm:text-base"
                    aria-label="Muhammad Zulfadly home"
                    @click="closeMenu"
                >
                    <img
                        class="size-8"
                        src="/src/assets/icons/nav-logo.png"
                        alt="nav-logo"
                    />
                    <span>Muhammad Zulfadly</span>
                </RouterLink>
                <button
                    class="flex size-10 flex-col items-center justify-center gap-[5px] border border-border-soft bg-canvas text-ink md:hidden"
                    type="button"
                    :aria-expanded="isMenuOpen"
                    aria-controls="primary-navigation"
                    aria-label="Toggle navigation menu"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <span
                        class="block h-px w-[17px] bg-current"
                        aria-hidden="true"
                    ></span>
                    <span
                        class="block h-px w-[17px] bg-current"
                        aria-hidden="true"
                    ></span>
                    <span
                        class="block h-px w-[17px] bg-current"
                        aria-hidden="true"
                    ></span>
                </button>
                <div
                    id="primary-navigation"
                    class="absolute left-0 right-0 top-[calc(100%+8px)] grid gap-1 border border-border-soft bg-canvas p-2 text-sm text-slate shadow-elevation transition-all duration-200 md:static md:flex md:items-center md:gap-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
                    :class="
                        isMenuOpen
                            ? 'pointer-events-auto translate-y-0 opacity-100'
                            : 'pointer-events-none -translate-y-2 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100'
                    "
                >
                    <RouterLink
                        class="p-3 transition-colors hover:bg-ink hover:text-white md:px-3 md:py-2 [&.router-link-active]:bg-ink [&.router-link-active]:text-white"
                        to="/"
                        @click="closeMenu"
                        >Home</RouterLink
                    >
                    <a
                        class="p-3 transition-colors hover:bg-ink hover:text-white md:px-3 md:py-2"
                        href="#skills"
                        @click="closeMenu"
                        >Skills</a
                    >
                    <a
                        class="p-3 transition-colors hover:bg-ink hover:text-white md:px-3 md:py-2"
                        href="#experience"
                        @click="closeMenu"
                        >Experience</a
                    >
                    <a
                        class="p-3 transition-colors hover:bg-ink hover:text-white md:px-3 md:py-2"
                        href="#projects"
                        @click="closeMenu"
                        >Projects</a
                    >
                    <a
                        class="p-3 transition-colors hover:bg-ink hover:text-white md:px-3 md:py-2"
                        href="#contact"
                        @click="closeMenu"
                        >Contact</a
                    >
                </div>
            </nav>
        </header>

        <main class="flex-1"><RouterView /></main>

        <footer class="bg-canvas py-12 pb-8">
            <div
                class="mx-auto flex w-[calc(100%-32px)] max-w-[1320px] flex-col items-start justify-between gap-6 sm:w-[calc(100%-48px)] md:flex-row md:items-end"
            >
                <div>
                    <RouterLink
                        to="/"
                        class="inline-flex items-center gap-3 font-display text-sm font-bold sm:text-base"
                    >
                        <span
                            class="grid size-[30px] place-items-center bg-primary font-mono text-sm text-white"
                            >Z</span
                        >
                        <span>Muhammad Zulfadly</span>
                    </RouterLink>
                    <p class="mt-3 text-sm text-body">
                        Frontend Developer · Building thoughtful web
                        experiences.
                    </p>
                </div>
                <div class="flex flex-wrap gap-4 text-sm text-ink-muted">
                    <a
                        href="https://github.com/MuhammadZulfadli"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="transition-colors hover:text-coral"
                        >GitHub</a
                    >
                    <a
                        href="https://www.linkedin.com/in/muhammad-zulfadli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="transition-colors hover:text-coral"
                        >LinkedIn</a
                    >
                    <a
                        class="transition-colors hover:text-coral"
                        href="mailto:zulfadlisimatupang48@gmail.com"
                        >Email</a
                    >
                </div>
            </div>
        </footer>
    </div>
</template>
