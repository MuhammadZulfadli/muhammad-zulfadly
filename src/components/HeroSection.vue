<script setup>
</script>

<template>
  <section class="w-full bg-paper-white pt-32 pb-24 px-6 md:px-8 flex flex-col items-center">
    <div class="max-w-[1080px] w-full flex flex-col items-center">
      <!-- Headline -->
      <h1 class="font-heading text-ink-black text-[40px] md:text-[64px] leading-[1.1] text-center max-w-3xl mb-6 tracking-tight">
        Building digital experiences with editorial precision
      </h1>

      <!-- Supporting Paragraph -->
      <p class="font-inter text-graphite text-[16px] md:text-[18px] leading-[1.6] text-center max-w-2xl mb-10">
        I'm a Frontend Engineer dedicated to crafting intuitive, performant, and accessible user interfaces. I
        transform complex problems into elegant, document-like interfaces that users love.
      </p>

      <!-- CTA Action -->
      <div class="flex items-center gap-4 mb-16">
        <a href="#contact"
          class="flex items-center gap-2 px-[16px] py-[8px] bg-transparent text-ink-black font-inter font-medium text-[16px] rounded-[8px] hover:bg-fog transition-colors">
          Get started <span class="text-lg">→</span>
        </a>
      </div>

      <!-- Product Preview Panel -->
      <div class="w-full max-w-[900px] bg-paper-white border border-hairline rounded-[8px] shadow-subtle overflow-hidden">
        <!-- Browser Chrome -->
        <div class="h-10 bg-paper-white border-b border-hairline flex items-center px-4 gap-2">
          <!-- Traffic Lights -->
          <div class="w-2.5 h-2.5 rounded-full bg-[#e3e3e3]"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-[#e3e3e3]"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-[#e3e3e3]"></div>
          <!-- Tab -->
          <div class="ml-4 h-full flex items-end">
            <div class="px-4 py-1.5 bg-fog rounded-t-md border border-b-0 border-hairline text-[12px] font-inter text-graphite">
              Portfolio
            </div>
          </div>
        </div>
        <!-- Content Area Mockup -->
        <div class="p-8 md:p-12 bg-fog min-h-[320px] flex items-center justify-center">
           <div class="w-full max-w-md bg-paper-white border border-hairline rounded-[12px] p-6 shadow-sm">
              <div class="w-10 h-10 rounded-full bg-linen mb-4 flex items-center justify-center text-[18px]">⚡</div>
              <div class="w-3/4 h-4 bg-linen rounded-sm mb-2"></div>
              <div class="w-1/2 h-4 bg-linen rounded-sm mb-6"></div>
              
              <div class="flex items-center justify-between border-t border-hairline pt-4 mt-2">
                 <div class="w-20 h-4 bg-linen rounded-sm"></div>
                 <div class="px-3 py-1 rounded-[9999px] border border-sage flex items-center justify-center text-sage text-[13px] font-medium font-inter">Approved</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>