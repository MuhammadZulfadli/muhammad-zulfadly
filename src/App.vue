<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-paper-white text-ink-black flex flex-col font-inter">
    <!-- Top Nav: Sticky white bar with hairline edge, logo left, centered nav -->
    <header class="w-full h-16 bg-paper-white border-b border-hairline sticky top-0 z-50">
      <nav class="flex justify-between items-center h-full max-w-[1080px] mx-auto px-6">
        <!-- Brand / Logomark -->
        <RouterLink to="/" class="flex items-center gap-2 group">
          <div
            class="w-6 h-6 bg-ink-black rounded-[4px] flex items-center justify-center text-paper-white text-xs font-bold font-mono tracking-tighter">
            Z
          </div>
          <span class="text-[16px] font-medium text-ink-black">Muhammad Zulfadly</span>
        </RouterLink>

        <!-- Centered Nav Links -->
        <div class="hidden md:flex items-center gap-[16px] text-[14px] font-normal text-ink-black">
          <RouterLink to="/" class="hover:text-graphite transition-colors">Home</RouterLink>
          <a href="#skills" class="hover:text-graphite transition-colors">Skills</a>
          <a href="#experience" class="hover:text-graphite transition-colors">Experience</a>
          <a href="#projects" class="hover:text-graphite transition-colors">Projects</a>
        </div>
      </nav>
    </header>

    <!-- Main Content Canvas -->
    <main class="flex-grow w-full bg-paper-white">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-paper-white border-t border-hairline py-16 px-6 md:px-8">
      <div class="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4 class="text-ink-black mb-4 font-normal text-[14px]">Product</h4>
          <ul class="space-y-3 text-[14px] text-graphite">
            <li>
              <RouterLink to="/" class="hover:text-ink-black transition-colors">Home</RouterLink>
            </li>
            <li><a href="#skills" class="hover:text-ink-black transition-colors">Skills</a></li>
            <li><a href="#experience" class="hover:text-ink-black transition-colors">Experience</a></li>
            <li><a href="#projects" class="hover:text-ink-black transition-colors">Projects</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-ink-black mb-4 font-normal text-[14px]">Socials</h4>
          <ul class="space-y-3 text-[14px] text-graphite">
            <li><a href="https://github.com/MuhammadZulfadli" target="_blank" rel="noopener noreferrer"
                class="hover:text-ink-black transition-colors">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/muhammad-zulfadli/" target="_blank" rel="noopener noreferrer"
                class="hover:text-ink-black transition-colors">LinkedIn</a></li>
            <li><a href="https://twitter.com/ipay_48" target="_blank" rel="noopener noreferrer"
                class="hover:text-ink-black transition-colors">X</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-ink-black mb-4 font-normal text-[14px]">Details</h4>
          <ul class="space-y-3 text-[14px] text-graphite">
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