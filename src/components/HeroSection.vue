<script setup>
</script>

<template>
  <section class="w-full bg-secondary text-canvas py-24 px-6 md:px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Column: Content -->
      <div class="lg:col-span-7 flex flex-col items-start text-left">
        <!-- Badge Pill eyebrow -->
        <!-- <div class="inline-block px-3 py-1 bg-canvas text-primary eyebrow font-semibold rounded-full mb-6">
          Meet the night shift
        </div> -->

        <h1 class="display-1 text-canvas mb-6 max-w-xl">
          Building digital experiences with <span class="text-accent-sky">precision</span> and joy.
        </h1>

        <p class="body-md text-canvas/80 mb-8 max-w-xl leading-relaxed">
          I'm a Frontend Engineer dedicated to crafting intuitive, performant, and accessible user interfaces. I
          transform complex problems into elegant, document-like interfaces that users love.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#contact"
            class="px-6 py-3 bg-transparent hover:bg-canvas/10 text-canvas border border-canvas/20 font-medium rounded-full text-base transition-all duration-200">
            Let's Connect
          </a>
        </div>
      </div>

      <!-- Right Column: Sticker Constellations (Notion Visual Identity) -->
      <div class="lg:col-span-5 flex justify-center items-center relative h-[380px] w-full">
        <!-- Floating Stickers container -->
        <div class="relative w-full h-full flex items-center justify-center">
          <!-- Main Sticker (App Icon Mockup) -->
          <div
            class="w-48 h-48 bg-canvas border border-hairline rounded-lg shadow-soft-lg flex flex-col p-4 relative z-10 animate-float">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-3 h-3 rounded-full bg-accent-pink"></div>
              <div class="w-12 h-2 bg-canvas-soft rounded"></div>
            </div>
            <div class="flex-grow flex flex-col gap-2 justify-center">
              <div class="w-full h-3 bg-canvas-soft rounded"></div>
              <div class="w-5/6 h-3 bg-canvas-soft rounded"></div>
              <div class="w-4/6 h-3 bg-canvas-soft rounded"></div>
            </div>
            <div class="flex justify-between items-center mt-3 pt-3 border-t border-hairline">
              <div class="w-6 h-6 rounded-full bg-accent-teal"></div>
              <div class="w-12 h-4 bg-primary/10 rounded-full"></div>
            </div>
          </div>

          <!-- Decorative Satellite Stickers -->
          <div
            class="absolute top-10 left-10 w-12 h-12 bg-accent-purple rounded-full flex items-center justify-center text-accent-purple-deep font-bold text-xl shadow-soft-sm animate-bounce-slow">
            ✦
          </div>
          <div
            class="absolute bottom-12 right-8 w-14 h-14 bg-accent-orange/20 border border-accent-orange/30 rounded-lg flex items-center justify-center text-accent-orange-deep font-semibold text-lg animate-float-delayed">
            🚀
          </div>
          <div
            class="absolute top-1/2 right-12 w-10 h-10 bg-accent-sky rounded-full flex items-center justify-center text-canvas text-base shadow-soft-sm animate-bounce-fast">
            ✔
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite alternate;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite alternate;
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite alternate;
}

.animate-bounce-fast {
  animation: bounce-fast 3s ease-in-out infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  100% {
    transform: translateY(-20px) rotate(2deg);
  }
}

@keyframes float-delayed {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  100% {
    transform: translateY(15px) rotate(-4deg);
  }
}

@keyframes bounce-slow {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes bounce-fast {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-15px);
  }
}
</style>