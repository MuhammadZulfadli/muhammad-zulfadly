<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-canvas-soft text-ink-secondary flex flex-col">
    <!-- Top Nav: Sticky white bar with hairline edge, logo left, centered nav, pill CTA right -->
    <header class="w-full h-16 bg-canvas border-b border-hairline sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <nav class="flex justify-between items-center h-full max-w-7xl mx-auto px-6">
        <!-- Brand / Logomark -->
        <RouterLink to="/" class="flex items-center gap-2 group">
          <!-- Notion-like black book/canvas block -->
          <div
            class="w-6 h-6 bg-ink rounded-xs flex items-center justify-center text-canvas text-xs font-bold font-mono tracking-tighter">
            Z
          </div>
          <span class="text-base font-bold tracking-tight text-ink">Muhammad Zulfadly</span>
        </RouterLink>

        <!-- Centered Nav Links -->
        <div class="hidden md:flex items-center gap-6 text-[15px] font-medium text-ink-muted">
          <RouterLink to="/" class="hover:text-ink transition-colors">Home</RouterLink>
          <a href="#skills" class="hover:text-ink transition-colors">Skills</a>
          <a href="#experience" class="hover:text-ink transition-colors">Experience</a>
          <a href="#projects" class="hover:text-ink transition-colors">Projects</a>
        </div>
      </nav>
    </header>

    <!-- Main Content Canvas -->
    <main class="flex-grow w-full">
      <RouterView />
    </main>

    <!-- Footer: Warm canvas-soft background with link directories -->
    <footer class="bg-canvas-soft border-t border-hairline py-16 px-6 md:px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 bg-ink rounded-xs flex items-center justify-center text-canvas text-xs font-bold font-mono">
              N
            </div>
            <span class="text-base font-bold tracking-tight text-ink">Portofolio</span>
          </div>
          <p class="caption text-ink-muted">
            Clean documents, well-organized blocks. Inspired by Notion's marketing UI.
          </p>
        </div> -->
        <div>
          <h4 class="eyebrow text-ink mb-4 font-semibold tracking-wider text-[11px]">Product</h4>
          <ul class="space-y-3 text-sm text-ink-muted">
            <li>
              <RouterLink to="/" class="hover:text-ink transition-colors">Home</RouterLink>
            </li>
            <li><a href="#skills" class="hover:text-ink transition-colors">Skills</a></li>
            <li><a href="#experience" class="hover:text-ink transition-colors">Experience</a></li>
            <li><a href="#projects" class="hover:text-ink transition-colors">Projects</a></li>
          </ul>
        </div>
        <div>
          <h4 class="eyebrow text-ink mb-4 font-semibold tracking-wider text-[11px]">Socials</h4>
          <ul class="space-y-3 text-sm text-ink-muted">
            <li><a href="https://github.com/MuhammadZulfadli" target="_blank" rel="noopener noreferrer"
                class="hover:text-ink transition-colors">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/muhammad-zulfadli/" target="_blank" rel="noopener noreferrer"
                class="hover:text-ink transition-colors">LinkedIn</a></li>
            <li><a href="https://twitter.com/ipay_48" target="_blank" rel="noopener noreferrer"
                class="hover:text-ink transition-colors">X</a></li>
          </ul>
        </div>
        <div>
          <h4 class="eyebrow text-ink mb-4 font-semibold tracking-wider text-[11px]">Details</h4>
          <ul class="space-y-3 text-xs text-ink-faint">
            <li>© Muhammad Zulfadly Simatupang.</li>
            <li>All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>