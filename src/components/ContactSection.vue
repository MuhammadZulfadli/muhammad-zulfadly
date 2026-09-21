<script setup></script>

<template>
    <section id="contact" class="border-b border-hairline bg-canvas py-[60px] sm:py-[100px]">
        <div class="mx-auto w-[calc(100%-32px)] max-w-[1320px] sm:w-[calc(100%-48px)]">
            <div class="grid grid-cols-1 items-center gap-7 rounded-card bg-surface-raised p-8 shadow-elevation sm:p-12 lg:grid-cols-[1fr_auto] lg:gap-12">
                <div>
                    <span class="mb-3 block font-mono text-xs font-bold uppercase tracking-[.04em] text-coral">Contact</span>
                    <h2 class="mb-3 font-display text-[clamp(29px,3vw,32px)] font-bold leading-[1.2] text-ink">Have a project in mind?</h2>
                    <p class="max-w-[640px] text-base leading-normal text-ink-muted">
                        I'm open to discussing new projects, creative ideas, or
                        opportunities to build something useful together.
                    </p>
                    <div class="mt-6 flex flex-wrap gap-4">
                        <a
                            href="https://github.com/MuhammadZulfadli"
                            target="_blank"
                            rel="noopener noreferrer"
                        class="text-sm text-slate underline decoration-dashed decoration-transparent underline-offset-4 transition-colors hover:text-coral hover:decoration-current">GitHub</a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-zulfadli/"
                            target="_blank"
                            rel="noopener noreferrer"
                        class="text-sm text-slate underline decoration-dashed decoration-transparent underline-offset-4 transition-colors hover:text-coral hover:decoration-current">LinkedIn</a>
                    </div>
                </div>
                <a href="mailto:zulfadlisimatupang48@gmail.com" class="inline-flex min-h-12 items-center justify-center bg-primary px-6 py-3 text-base text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate">
                    Say hello <span aria-hidden="true">&nbsp;↗</span>
                </a>
            </div>
        </div>
    </section>
</template>
